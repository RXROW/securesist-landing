import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play } from "lucide-react";

const Solutions = () => {
  return (
    <main>
   

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-sm">
              <Shield className="h-4 w-4 text-blue-600" /> SECURESIST Solutions
            </Badge>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build a Resilient, People-First Security Culture
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Practical, role-based cybersecurity training and tools that reduce risk, support compliance, and elevate awareness across your organization.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white px-6">
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6">
                <Link href="/contact" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What You Get</h2>
            <p className="mt-3 text-slate-600">Modular capabilities to meet your maturity and scale as you grow.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Role-Based Awareness Training</CardTitle>
                <CardDescription>
                  Tailored learning paths for executives, finance, engineering, and non-technical teams.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Adaptive Phishing Simulations</CardTitle>
                <CardDescription>
                  Realistic, ethical simulations that adapt to user behavior and measure resilience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Automated Campaign Management</CardTitle>
                <CardDescription>
                  Schedule, launch, and track training across teams with minimal admin effort.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Compliance & Reporting</CardTitle>
                <CardDescription>
                  Clear dashboards and exportable reports to support audits and reduce risk.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Policy Acknowledgements</CardTitle>
                <CardDescription>
                  Track who has read and accepted policies with automated reminders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                  <CheckCircle className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle>Risk Insights Dashboard</CardTitle>
                <CardDescription>
                  See hotspots, track progress, and focus on the teams that need support most.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white/60">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-slate-600">Simple rollout, powerful outcomes.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <Badge className="w-fit" variant="secondary">1</Badge>
                <CardTitle className="mt-2">Discover</CardTitle>
                <CardDescription>We align SECURESIST with your roles, risks, and compliance needs.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <Badge className="w-fit" variant="secondary">2</Badge>
                <CardTitle className="mt-2">Launch</CardTitle>
                <CardDescription>Start campaigns with curated content and automated delivery.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <Badge className="w-fit" variant="secondary">3</Badge>
                <CardTitle className="mt-2">Engage</CardTitle>
                <CardDescription>Employees learn in short, plain-language lessons built for busy schedules.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <Badge className="w-fit" variant="secondary">4</Badge>
                <CardTitle className="mt-2">Measure</CardTitle>
                <CardDescription>Track improvements and report outcomes with clarity and confidence.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to Reduce Human Risk?</h2>
          <p className="mt-4 text-lg text-slate-600">See SECURESIST in action and learn how Meta Techs can partner with you to strengthen security from the inside out.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white px-6">
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6">
              <Link href="/contact" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
