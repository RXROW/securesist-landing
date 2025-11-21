"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Use requestAnimationFrame to avoid forced reflow
    const rafId = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    });

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
          style={{ willChange: "opacity" }}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Spinner - using CSS animation instead of motion for better performance */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 rounded-full"></div>
              <div 
                className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"
                style={{ willChange: "transform" }}
              ></div>
            </div>
            
            {/* Loading Text */}
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Loading...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

