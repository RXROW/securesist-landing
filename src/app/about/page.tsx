 
import Link from "next/link";
import { Shield, Target, Award, Users, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
 
    
    {/* Hero Section */}
    <div className="container py-16">
      <div className="mb-16 text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Shield className="mr-2 h-4 w-4" />
          Cybersecurity Excellence
        </div>
        <h1 className="mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
          About Us
        </h1>
        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-600">
          At Meta Techs, we believe that employees are the first line of defense in cybersecurity. 
          Technology alone cannot stop today's advanced threats. Employees need the knowledge and 
          awareness to recognize risks and respond the right way.
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl space-y-20">
        {/* SECURESIST Introduction */}
        <section className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center">
              <Target className="mr-3 h-8 w-8" />
              <h2 className="text-3xl font-bold tracking-tight">
                Our Solution: SECURESIST
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-blue-50">
              That's why we created <strong className="text-yellow-300">SECURESIST</strong>, our all-in-one cybersecurity awareness 
              training platform. SECURESIST is designed to help organizations of all sizes build a strong 
              security culture by turning employees from potential targets into active defenders.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              Our Mission
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg ring-1 ring-slate-200/50">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-xl leading-relaxed text-slate-700">
                To make cybersecurity simple, engaging, and effective for everyone, helping businesses 
                stay secure while empowering their teams with the confidence to spot and stop threats.
              </p>
            </div>
          </div>
        </section>

        {/* Why SECURESIST Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              Why SECURESIST?
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Built by Experts</h3>
              <p className="text-slate-600 leading-relaxed">
                Developed by Meta Tech's cybersecurity specialists with years of industry experience.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Employee-Friendly</h3>
              <p className="text-slate-600 leading-relaxed">
                Easy-to-follow training that speaks in plain language, not technical jargon.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Business-Focused</h3>
              <p className="text-slate-600 leading-relaxed">
                Tools that help organizations reduce risk, meet compliance requirements, and improve overall resilience.
              </p>
            </div>
          </div>
        </section>
 
      </div>
    </div>
  </main>
  )
}

export default About