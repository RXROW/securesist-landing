import React from 'react';
import { 
  Shield, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const WhyChoose = () => {
  const features = [
    {
      icon: Users,
      title: "Engagement Learning Modules",
      benefit: "Easy learning and keeps the employees engaged",
      color: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-cyan-50"
    },
    {
      icon: Target,
      title: "Smart, Role-Based Delivery",
      benefit: "Personalized, efficient, and relevant",
      color: "purple",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-pink-50"
    },
    {
      icon: Zap,
      title: "Automated Campaign Management",
      benefit: "Saves time and ensures continuous coverage",
      color: "green",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-emerald-50"
    },
    {
      icon: BarChart3,
      title: "Insightful Reporting",
      benefit: "Helps focus on high-risk areas quickly",
      color: "orange",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      gradient: "from-orange-500 to-amber-500",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-amber-50"
    },
    {
      icon: Shield,
      title: "Backed by Meta Tech's Expertise",
      benefit: "Trustworthy foundation in cybersecurity",
      color: "red",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      gradient: "from-red-500 to-rose-500",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-rose-50"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              SECURESIST
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the advantages that set us apart in cybersecurity training
          </p>
        </div>
        
        {/* Features List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-slate-200 overflow-hidden ${feature.hoverBg}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient}`} />
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 md:w-2/5">
                    <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} ${feature.textColor} group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-800">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-slate-300 group-hover:to-transparent transition-colors" />
                  
                  {/* Benefit */}
                  <div className="flex items-center gap-3 md:flex-1">
                    <CheckCircle2 className={`h-5 w-5 ${feature.textColor} flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                      {feature.benefit}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <ArrowRight className={`hidden md:block h-5 w-5 ${feature.textColor} opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-slate-600">Training Completion Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
            <div className="text-sm text-slate-600">Reduction in Security Incidents</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
            <div className="text-4xl font-bold text-green-600 mb-2">5 Min</div>
            <div className="text-sm text-slate-600">Average Module Duration</div>
          </div>
        </div>
      </div>
      
       
    </section>
  );
}