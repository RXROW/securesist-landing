"use client";
import { memo } from "react";
import { useLocale } from "next-intl";
import { SecurityRadar } from "./ui/SecurityRadar";

// Lazy load WorldMap as it's heavy with DottedMap dependency
// const WorldMap = dynamic(() => import("./ui/world-map").then(mod => ({ default: mod.WorldMap })), {
//   loading: () => <div className="w-full aspect-[2/1] rounded-2xl animate-pulse" style={{ contain: "layout" }} />,
// });

interface HeroData {
  hero_Title: string;
  hero_Subtitle: string;
  hero_Description: string;
  trustIndicator1_Title: string;
  trustIndicator1_Description: string;
  trustIndicator2_Title: string;
  trustIndicator2_Description: string;
  trustIndicator3_Title: string;
  trustIndicator3_Description: string;
}

interface HeroProps {
  data: HeroData;
}

export const Hero = memo(function Hero({ data }: HeroProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const textAlign = isRtl ? "text-right" : "text-left";

  return (
    <section className="relative  py-10 md:py-16 h-[100%] my-10 md:my-0 w-full overflow-hidden">
      <div className="relative py-10 h-[100%] md:py-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className={`space-y-8 ${isRtl ? textAlign : "text-center lg:text-left"} ${isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-slate-800">
                {data.hero_Title}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                {data.hero_Subtitle}
              </span>
            </h1>
            
            {/* Description */}
            <p className={`text-base sm:text-lg text-slate-600 max-w-xl ${isRtl ? "mr-0" : "mx-auto lg:ml-0"}`}>
              {data.hero_Description}
            </p>
            
            {/* Trust indicators */}
            <div className={`flex flex-wrap items-center ${isRtl ? "justify-end" : "justify-center lg:justify-start"} gap-4 lg:gap-6 pt-4 text-sm text-slate-600 dark:text-slate-400`}>
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>{data.trustIndicator1_Title}</span>
              </div>
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span>{data.trustIndicator2_Title}</span>
              </div>
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <span>{data.trustIndicator3_Title}</span>
              </div>
            </div>
          </div>

          {/* Security Radar */}
          <div className={`flex justify-center ${isRtl ? "lg:justify-start order-2 lg:order-1" : "lg:justify-end order-2 lg:order-2"}`}>
            <SecurityRadar />
          </div>

        </div>
      </div>
    </section>
  )
});