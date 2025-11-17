 import React from 'react';
import { 
  Shield, 
  Globe, 
  Rocket, 
  Award, 
  Building2, 
  Layers, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Expert-Led Platform",
      description: "Built by Meta Techs cybersecurity specialists with proven methodologies."
    },
    {
      icon: Layers,
      title: "Attach to Existing Services",
      description: "Complement risk assessments, vCISO, MSSP, and compliance offerings."
    },
    {
      icon: Rocket,
      title: "Faster Customer Outcomes",
      description: "Launch quickly with curated content, automation, and measurable insights."
    },
    {
      icon: Award,
      title: "Enablement & Certification",
      description: "Training materials, playbooks, and co-selling resources for your team."
    },
    {
      icon: Building2,
      title: "Enterprise-Ready",
      description: "Security, privacy, and reporting controls for regulated industries."
    },
    {
      icon: Users,
      title: "Dedicated Partner Support",
      description: "Access to solution engineers and partner success resources."
    }
  ];

  const stats = [
    { value: "500+", label: "Active Partners", icon: Users },
    { value: "95%", label: "Partner Satisfaction", icon: Star },
    { value: "3x", label: "Average Revenue Growth", icon: TrendingUp },
    { value: "24/7", label: "Partner Support", icon: Shield }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
              <Globe className="h-4 w-4" />
              Strategic Partnerships
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Partner with <span className="text-blue-600">SECURESIST</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8">
              Together, we help customers build resilient security cultures with role-based training, measurable outcomes, and trusted expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                Become a Partner
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-lg font-semibold hover:border-blue-600 transition-colors w-full sm:w-auto">
                Program Details
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Flexible models</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Logo Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-slate-500 mb-8">
            Trusted by teams and technology leaders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-6"
              >
                <div className="w-full h-8 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Partner with Us
            </h2>
            <p className="text-lg text-slate-600">
              Grow revenue, deliver measurable outcomes, and elevate your services portfolio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Program Highlights
            </h2>
            <p className="text-lg text-slate-600">
              Designed to drive mutual growth and long-term customer value
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Co-Marketing & Co-Selling</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Joint webinars, solution briefs, and field events to build pipeline together.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ready-to-use campaign assets</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Shared success stories and case studies</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Lead sharing and deal registration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Partner Enablement</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Equip your team to position, sell, and deliver SECURESIST with confidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Solution training and certifications</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Technical playbooks and demo environments</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Priority access to roadmap previews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Build a Safer Future Together
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Connect with Meta Techs to explore partnership opportunities and accelerate your customers' security outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto">
                Contact Partner Team
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full sm:w-auto">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;