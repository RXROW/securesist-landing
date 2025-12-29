"use client";

import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "../../../i18n/routing";
import Image from "next/image";
import * as Icons from "lucide-react";
import { Shield, Target, ArrowRight, Loader2 } from "lucide-react"; // Icons used directly in component
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { apiFetch, LandingPageUrl } from "@/helpers/apiConfig";

// API Response Types
interface AboutPageData {
  _id: string;
  aboutSection_Title: string;
  aboutSection_Description: string;
  aboutSection_ImageUrl: string;
  missionValues_Title: string;
  value_Card1_Title: string;
  value_Card1_Description: string;
  value_Card1_Icon: string;
  value_Card2_Title: string;
  value_Card2_Description: string;
  value_Card2_Icon: string;
  value_Card3_Title: string;
  value_Card3_Description: string;
  value_Card3_Icon: string;
}

// Helper to convert icon name to PascalCase (e.g., "check-circle" -> "CheckCircle")
const toPascalCase = (str: string): string => {
  return str
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Helper to get icon component dynamically from lucide-react
const getIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  if (!iconName) return Shield;
  
  // Convert icon name to PascalCase (e.g., "check-circle" -> "CheckCircle", "shield" -> "Shield")
  const pascalCaseName = toPascalCase(iconName.trim());
  
  // Look up the icon in the Icons object
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[pascalCaseName];
  
  // Return the icon if found, otherwise return Shield as fallback
  return IconComponent || Shield;
};

// Color schemes for value cards
const cardColors = [
  { ring: 'hover:ring-red-600/50', bg: 'bg-red-500/10', text: 'text-red-600' },
  { ring: 'hover:ring-blue-500/50', bg: 'bg-blue-500/10', text: 'text-blue-600' },
  { ring: 'hover:ring-purple-500/50', bg: 'bg-purple-500/10', text: 'text-purple-600' },
];

interface AboutPageResponse {
  status: string;
  data: AboutPageData;
}

// Helper to check if URL is a video
const isVideoUrl = (url: string | null): boolean => {
  if (!url) return false;
  return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm') || url.toLowerCase().endsWith('.mov') || url.includes('/video/');
};

const About = () => {
  const { data: aboutData, isLoading, error } = useQuery<AboutPageData>({
    queryKey: ["aboutPage"],
    queryFn: async () => {
      const response = await apiFetch<AboutPageResponse>(LandingPageUrl.GET_KEY_ABOUT_US_PAGE);
      if (response.status === "success" && response.data) {
        return response.data;
      }
      throw new Error("Failed to load about page data");
    },
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </main>
    );
  }

  if (error || !aboutData) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-600">Failed to load page content</p>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-white">
      {/* Subtle background texture/pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Hero Section */}
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <SectionHeader
          badgeText={aboutData.aboutSection_Title}
          title={aboutData.aboutSection_Title}
          titleHighlight=""
          description=""
        />

        {/* Main Content Sections */}
        <div className="mx-auto max-w-7xl space-y-24">
          
          {/* === 1. SECURESIST Introduction (Image/Split Layout) === */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image/Video Container */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200 transition-transform duration-500 hover:scale-[1.01]">
              {aboutData.aboutSection_ImageUrl ? (
                isVideoUrl(aboutData.aboutSection_ImageUrl) ? (
                  <video
                    src={aboutData.aboutSection_ImageUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={aboutData.aboutSection_ImageUrl} 
                    alt={aboutData.aboutSection_Title}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={90}
                    className="pointer-events-none"
                  />
                )
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
              )}
              {/* Image Accent/Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-2xl font-bold tracking-tight text-slate-900">
                <Target className="h-6 w-6 text-purple-600" />
                <h2>{aboutData.aboutSection_Title}</h2>
              </div>
              <p className="text-xl leading-relaxed text-slate-700">
                {aboutData.aboutSection_Description}
              </p>
            </div>
          </section>

          {/* --- Separator --- */}
          <div className="mx-auto w-3/4 h-px bg-slate-200/80"></div>
          
          {/* === 2. Mission & Values Section === */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                {aboutData.missionValues_Title}
              </h2>
              <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            
            <div className="grid gap-8 ">
              
             

              {/* Values Cards */}
              <div className="lg:col-span-2 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: aboutData.value_Card1_Title,
                    description: aboutData.value_Card1_Description,
                    icon: aboutData.value_Card1_Icon,
                    index: 0,
                  },
                  {
                    title: aboutData.value_Card2_Title,
                    description: aboutData.value_Card2_Description,
                    icon: aboutData.value_Card2_Icon,
                    index: 1,
                  },
                  {
                    title: aboutData.value_Card3_Title,
                    description: aboutData.value_Card3_Description,
                    icon: aboutData.value_Card3_Icon,
                    index: 2,
                  },
                ].map((card) => {
                  const Icon = getIcon(card.icon);
                  const colors = cardColors[card.index] || cardColors[0];
                  
                  return (
                    <div
                      key={card.index}
                      className={`group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 ${colors.ring}`}
                    >
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900">{card.title}</h3>
                      <p className="text-slate-600 text-base">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          
          {/* === 3. Call to Action (Simple Footer) === */}
          <section className="text-center pt-8">
            <h3 className="mb-4 text-3xl font-bold text-slate-800">
                Ready to Get Started?
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8">
                Join hundreds of organizations that trust SECURESIST for their cybersecurity training needs.
            </p>
        <Button className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 hover:shadow-md text-lg font-bold text-white  transition-all duration-300 hover:scale-[1.02]">
          <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
          </section>

        </div>
      </div>
    </main>
  )
}

export default About