 

import React from 'react';
import { Shield, Play, ArrowRight, Lock, Zap, Users } from 'lucide-react';

export const Hero = () => {
  const stats = [
    { icon: Shield, label: "Protected Organizations", value: "500+" },
    { icon: Users, label: "Trained Users", value: "50K+" },
    { icon: Zap, label: "Threat Detection Rate", value: "99.8%" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "  />
     
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700">
              <Shield className="h-4 w-4 mr-2 text-blue-600" />
              Enterprise-Grade Security Training
            </div>
          </div>
          
          {/* Main heading */}
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 animate-gradient pb-2">
                SECURESIST
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-slate-700 mt-4 font-bold">
                Transform Your Team Into
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-2 font-bold">
                Your First Line of Defense
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed">
              Empower your workforce with cutting-edge cybersecurity awareness training. 
              <span className="text-blue-600 font-semibold"> Detect threats faster.</span>
              <span className="text-purple-600 font-semibold"> Respond smarter.</span>
              <span className="text-cyan-600 font-semibold"> Stay protected.</span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 px-8 py-4 text-lg hover:scale-105 w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 border-2 border-blue-200 text-blue-700 hover:border-blue-600 hover:bg-blue-50 focus:ring-blue-500/30 px-8 py-4 text-lg hover:scale-105 w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <Icon className="h-8 w-8 text-blue-600 mb-3 group-hover:text-blue-700 transition-colors" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500 mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
              <Lock className="h-8 w-8 text-slate-400" />
              <Shield className="h-8 w-8 text-slate-400" />
              <Zap className="h-8 w-8 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
      
  
    </section>
  );
}