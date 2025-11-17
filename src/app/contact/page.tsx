 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Play
} from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
 

      <div className="container py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Play className="mr-2 h-4 w-4" />
            Free Demo Available
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Request a Demo
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            See SECURESIST in action. Get a personalized walkthrough of our cybersecurity awareness training platform and discover how it can protect your organization.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Demo Form */}
          <div className="space-y-8">
            <Card className="border-0  bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Schedule Your Demo
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="border-slate-200" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Work Email *</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" className="border-slate-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">Company Name *</Label>
                  <Input id="company" placeholder="Your Company Inc." className="border-slate-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-slate-700">Job Title *</Label>
                  <Input id="jobTitle" placeholder="IT Manager, Security Officer, etc." className="border-slate-200" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-slate-700">Company Size *</Label>
                  <Select>
                    <SelectTrigger className="border-slate-200">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-slate-700">Industry *</Label>
                  <Select>
                    <SelectTrigger className="border-slate-200">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your current security training needs, compliance requirements, or any specific concerns you'd like to address during the demo."
                    className="border-slate-200 min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="privacy" className="text-sm text-slate-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to being contacted about SECURESIST.
                    </Label>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105  ">
                  <span >Request Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* What to Expect */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Personalized Walkthrough</h4>
                    <p className="text-sm text-slate-600">See SECURESIST configured for your industry and company size</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Live Demo</h4>
                    <p className="text-sm text-slate-600">Interactive demonstration of key features and capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Q&A Session</h4>
                    <p className="text-sm text-slate-600">Get answers to your specific questions and concerns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Next Steps</h4>
                    <p className="text-sm text-slate-600">Receive a customized proposal and implementation plan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Demo Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Employee Training</h4>
                    <p className="text-sm text-slate-600">Interactive learning modules and simulations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Role-Based Content</h4>
                    <p className="text-sm text-slate-600">Personalized training for different job functions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Analytics Dashboard</h4>
                    <p className="text-sm text-slate-600">Comprehensive reporting and insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Automated Workflows</h4>
                    <p className="text-sm text-slate-600">Streamlined campaign management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-slate-50 to-slate-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">demo@securesist.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Response Time</p>
                    <p className="text-sm text-slate-600">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
