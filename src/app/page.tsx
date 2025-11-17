 
import { Hero } from "@/components/Hero"; 
 import {WhyChoose} from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import { KeyBenefits } from "@/components/KeyBenefits";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <Hero /> 
    {/* Key Benefits Section */}
    <KeyBenefits /> 
    {/* Why Choose SECURESIST Section */}
    <WhyChoose />
    {/* How It Works Section */}
      <HowItWorks />
    {/*  Call to Action Section */}
    <CallToAction />
  
  </div>
  );
}
