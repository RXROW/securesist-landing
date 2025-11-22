import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Shield, Target, Award, Users, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

// Placeholder for the image path
const IMAGE_URL = "/corporate-team-meeting-cybersecurity.jpg"; 

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Subtle background texture/pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Hero Section */}
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <SectionHeader
          badgeText="About Meta Tech"
          title="About"
          titleHighlight="Meta Tech"
          description="At Meta Techs, we recognize that the greatest defense against cyber threats is your people. We are dedicated to providing the tools and knowledge necessary to transform every employee into an active defender."
        />

        {/* Main Content Sections */}
        <div className="mx-auto max-w-7xl space-y-24">
          
          {/* === 1. SECURESIST Introduction (Image/Split Layout) === */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image Container */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={IMAGE_URL} 
                alt="A team collaborating on a security dashboard"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="pointer-events-none"
              />
              {/* Image Accent/Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-2xl font-bold tracking-tight text-slate-900">
                <Target className="h-6 w-6 text-purple-600" />
                <h2>Our Solution: <span className="text-purple-600">SECURESIST</span></h2>
              </div>
              <p className="text-xl leading-relaxed text-slate-700">
                We created **SECURESIST**, our all-in-one cybersecurity awareness platform, to bridge the gap between technical security and human behavior. 
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                SECURESIST helps organizations of all sizes build a **strong security culture** by turning employees from potential targets into **active defenders** through engaging, personalized, and effective training modules.
              </p>
              <Link href="/solution" passHref>
                <div className="inline-flex items-center text-blue-600 font-semibold group transition-colors hover:text-blue-800">
                  See how it works 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </section>

          {/* --- Separator --- */}
          <div className="mx-auto w-3/4 h-px bg-slate-200/80"></div>
          
          {/* === 2. Mission & Values Section === */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
                Our Core Mission & Values
              </h2>
              <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            
            <div className="grid gap-8 ">
              
             

              {/* Values Cards */}
              <div className="lg:col-span-2 grid gap-6 md:grid-cols-3">
                   {/* Value 1: Built by Experts */}
                   <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-red-600/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Empowering Teams</h3>
                  <p className="text-slate-600 text-base">
                  To make cybersecurity  simple, engaging, and effective  for every business, empowering teams with confidence.
                  </p>
                </div>
                {/* Value 1: Built by Experts */}
                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-500/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Expert-Led</h3>
                  <p className="text-slate-600 text-base">
                    Developed by certified cybersecurity specialists with deep industry expertise.
                  </p>
                </div>
                
                {/* Value 2: Employee-Centric */}
                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-purple-500/50">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">People-First</h3>
                  <p className="text-slate-600 text-base">
                    Easy-to-follow, gamified training that speaks plain language, driving real behavior change.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* === 3. Call to Action (Simple Footer) === */}
          <section className="text-center pt-8">
            <h3 className="mb-4 text-3xl font-bold text-slate-800">
                Ready to Meet Your Cybersecurity Goals?
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8">
                Request a free demo and see the SECURESIST difference for yourself.
            </p>
        <Button className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 hover:shadow-md text-lg font-bold text-white  transition-all duration-300 hover:scale-[1.02]">
          <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
            Request a Demo
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