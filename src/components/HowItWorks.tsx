import { 
 
    Zap, 
    Settings,
    BookOpen,
    TrendingUp,
    AlertTriangle,
    Heart,
    
  } from "lucide-react";
const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    <div className="container">
      <div className="text-center mb-12">
        <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          <Zap className="mr-1 h-3 w-3" />
          Simple 5-Step Process
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          How It Works
        </h2>
        <p className="mt-3 text-base text-slate-600">
          SECURESIST makes cybersecurity awareness simple and effective in just a few steps
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 transform -translate-x-1/2 hidden lg:block"></div>
        
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="relative flex items-center">
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pr-6">
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
                      <Settings className="h-4 w-4" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs">
                      1
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Set Up Your Program
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Choose your training goals, audience, and schedule. The platform is quick to configure and ready to launch.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pl-6"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-center">
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pr-6"></div>
            
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pl-6">
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xs">
                      2
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Deliver Engaging Training
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Employees receive short, interactive lessons and phishing simulations designed to fit into their daily workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex items-center">
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pr-6">
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xs">
                      3
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Monitor Progress
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Track completion rates, quiz scores, and simulation results in easy-to-read dashboards.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pl-6"></div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-center">
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pr-6"></div>
            
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pl-6">
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xs">
                      4
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Identify Risks
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Spot which teams or individuals need extra support, and target training where it's needed most.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex items-center">
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pr-6">
              <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-xs">
                      5
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Strengthen Your Security Culture
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Over time, your workforce becomes more aware, more confident, and better equipped to stop cyber threats.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex-1 lg:flex-none lg:w-1/2 lg:pl-6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks