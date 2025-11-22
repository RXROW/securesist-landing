import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Image for the visual element
import { 
  Star,
  ArrowRight,
  Mail,
  Zap,
  CheckCircle2, // New icon for trust points
} from "lucide-react";

const CallToActionSplit = () => {
  return (
    // Simple, Light Background
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      
      {/* Background decorations (Subtle blur) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        
        {/* === MAIN TWO-COLUMN GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center  ">
          
         

          {/* 2. Right Side: Content and CTA */}
          <div className="space-y-6 lg:space-y-8">
            
           
            
            {/* Headline */}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Start Protecting</span> your Team?
            </h2>
            
            {/* Subtitle */}
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
              Don't wait for the next breach. Schedule a personalized demo to see how SECURESIST delivers measurable, human-layer security intelligence across your organization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
              
              {/* Primary CTA */}
              <Button 
                className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 hover:shadow-md text-lg font-bold text-white  transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-white" />
                  Request a Free Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                variant="outline" 
                className="group inline-flex items-center justify-center rounded-md border-2 border-gray-300 bg-white hover:border-purple-500 hover:bg-purple-50 px-8 py-6 text-lg font-semibold text-gray-800 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  Contact Sales
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Takes less than 30 minutes</span>
              </div>
            </div>

          </div>




           {/* 1. Left Side: Image/Visual Element */}
           <div className="relative w-full h-80 md:h-96 lg:h-full min-h-[300px] rounded-md overflow-hidden  border border-gray-200">
            {/* Replace this placeholder with your actual image path */}
            <Image
              src="/contact_us.jpg" 
              alt="Security dashboard illustration showing threat metrics and training progress"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-[1.03]"
              priority 
            />
            {/* Optional: Add a subtle overlay for depth */}
            <div className="absolute inset-0 bg-white/10" />
            
            {/* Placeholder Badge */}
            <div className="absolute bottom-4 left-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                Live Metrics
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSplit