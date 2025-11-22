"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Module-level cache for SVG map to persist across navigations
let cachedSvgMap: { light: string; dark: string } | null = null;

// Cache key for sessionStorage
const MAP_CACHE_KEY = 'world-map-svg-cache';
const ANIMATION_PLAYED_KEY = 'world-map-animation-played';

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasAnimatedRef = useRef(false);

  // Check if animation has already played (persist across navigations)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasPlayed = sessionStorage.getItem(ANIMATION_PLAYED_KEY) === 'true';
      if (hasPlayed) {
        hasAnimatedRef.current = true;
        setIsVisible(true);
        setShouldAnimate(false); // Don't re-animate
      }
    }
  }, []);

  // Intersection Observer to defer animations until visible
  useEffect(() => {
    if (!containerRef.current || hasAnimatedRef.current) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            setIsVisible(true);
            // Delay animation start slightly to reduce initial load
            setTimeout(() => {
              setShouldAnimate(true);
              hasAnimatedRef.current = true;
              // Mark animation as played in sessionStorage
              if (typeof window !== 'undefined') {
                sessionStorage.setItem(ANIMATION_PLAYED_KEY, 'true');
              }
            }, 100);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Memoize expensive DottedMap creation with module-level cache
  const svgMap = useMemo(() => {
    const currentTheme = (theme || 'light') as 'light' | 'dark';
    
    // Try to get from sessionStorage first
    if (typeof window !== 'undefined') {
      try {
        const cached = sessionStorage.getItem(MAP_CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed[currentTheme]) {
            return parsed[currentTheme];
          }
        }
      } catch (e) {
        // Ignore cache errors
      }
    }

    // Use module-level cache if available
    if (cachedSvgMap && cachedSvgMap[currentTheme]) {
      return cachedSvgMap[currentTheme];
    }

    // Generate new map
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: currentTheme === "dark" ? "black" : "white",
    });

    // Cache it
    if (!cachedSvgMap) {
      cachedSvgMap = { light: '', dark: '' };
    }
    cachedSvgMap[currentTheme] = svg;

    // Also cache in sessionStorage
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(MAP_CACHE_KEY, JSON.stringify(cachedSvgMap));
      } catch (e) {
        // Ignore storage errors (quota exceeded, etc.)
      }
    }

    return svg;
  }, [theme]);

  // Helper functions (not memoized as they're simple)
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Memoize projected points to avoid recalculating on every render
  // Use stable reference to prevent re-calculation on navigation
  const dotsString = JSON.stringify(dots);
  const projectedDots = useMemo(() => {
    return dots.map((dot) => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng),
    }));
  }, [dotsString]);

  return (
    <div 
      ref={containerRef}
      className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans mx-auto" 
      style={{ contain: "layout style paint" }}
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
      {isVisible && (
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          style={{ willChange: shouldAnimate ? "transform" : "auto" }}
        >
          {projectedDots.map((projected, i) => {
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(projected.start, projected.end)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: shouldAnimate && !hasAnimatedRef.current ? 0 : 1,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: shouldAnimate && !hasAnimatedRef.current ? 1 : 0,
                    delay: shouldAnimate && !hasAnimatedRef.current ? 0.5 * i : 0,
                    ease: "easeOut",
                  }}
                  key={`start-upper-${i}`}
                  style={{ 
                    willChange: shouldAnimate ? "stroke-dasharray" : "auto",
                    vectorEffect: "non-scaling-stroke"
                  }}
                ></motion.path>
              </g>
            );
          })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

          {projectedDots.map((projected, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={projected.start.x}
                  cy={projected.start.y}
                  r="2"
                  fill={lineColor}
                />
                {shouldAnimate && (
                  <circle
                    cx={projected.start.x}
                    cy={projected.start.y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={projected.end.x}
                  cy={projected.end.y}
                  r="2"
                  fill={lineColor}
                />
                {shouldAnimate && (
                  <circle
                    cx={projected.end.x}
                    cy={projected.end.y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
