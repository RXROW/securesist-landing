import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Star,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Sparkles
} from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto">
        <div className="relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              Get Started Today
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Security Culture?
              </span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl text-slate-600 leading-relaxed">
              Join organizations that trust SECURESIST to build resilient, security-aware teams. 
              See how Meta Techs can elevate your workforce from aware to actively secure.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mb-12">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 fill-white" />
                Request a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group border-2 border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 min-w-[200px] shadow-lg"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Contact our Team
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Ready to get started? Call us today!</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Free Demo Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
