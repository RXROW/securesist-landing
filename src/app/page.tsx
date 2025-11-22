import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

// Lazy load below-the-fold components to reduce initial JS bundle
// Use intersection observer for better performance
// Note: Client components will automatically only render on client side
const KeyBenefits = dynamic(() => import("@/components/KeyBenefits").then(mod => ({ default: mod.KeyBenefits })), {
  loading: () => <div className="min-h-[400px]" style={{ contain: "layout" }} />,
});

const WhyChoose = dynamic(() => import("@/components/WhyChoose").then(mod => ({ default: mod.WhyChoose })), {
  loading: () => <div className="min-h-[400px]" style={{ contain: "layout" }} />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="min-h-[400px]" style={{ contain: "layout" }} />,
});

const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  loading: () => <div className="min-h-[300px]" style={{ contain: "layout" }} />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Load immediately */}
      <Hero /> 
      {/* Key Benefits Section - Lazy loaded */}
      <KeyBenefits /> 
      {/* Why Choose SECURESIST Section - Lazy loaded */}
      <WhyChoose />
      {/* How It Works Section - Lazy loaded */}
      {/* <HowItWorks /> */}
      {/* Call to Action Section - Lazy loaded */}
      <CallToAction />
    </div>
  );
}
