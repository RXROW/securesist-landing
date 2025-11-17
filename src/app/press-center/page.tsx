import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Megaphone, Calendar, ExternalLink, Mail } from "lucide-react";

const articles = [
  {
    title: "Meta Techs Launches SECURESIST to Reduce Human Risk",
    excerpt:
      "A people-first cybersecurity awareness platform built to turn employees into active defenders.",
    date: "2025-02-10",
    type: "Press Release",
    href: "#",
  },
  {
    title: "5 Practical Ways to Build a Security Culture in 90 Days",
    excerpt:
      "From role-based training to adaptive phishing simulations, here’s how teams move the needle quickly.",
    date: "2025-01-28",
    type: "Insight",
    href: "#",
  },
  {
    title: "Compliance-Ready Reporting: What Auditors Want to See",
    excerpt:
      "Map training outcomes to frameworks and simplify evidence collection with clear dashboards.",
    date: "2025-01-12",
    type: "Blog",
    href: "#",
  },
  {
    title: "Partner Spotlight: Accelerating Outcomes with SECURESIST",
    excerpt:
      "How service partners attach awareness programs to risk assessments and vCISO offerings.",
    date: "2024-12-19",
    type: "Partner",
    href: "#",
  },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const PressCenter = () => {
  return (
    <main>
 

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-sm">
              <Megaphone className="h-4 w-4 text-blue-600" /> Press Center
            </Badge>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              News, Insights, and Announcements
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Stay updated with Meta Techs and SECURESIST—explore product updates, expert guidance, and partner stories.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white px-6">
                <Link href="/contact" className="flex items-center gap-2">
                  Media Inquiries
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6">
                <Link href="/contact" className="flex items-center gap-2">
                  Join the Newsletter
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

      {/* Featured Story */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-slate-100">
                <img src="/placeholder.svg" alt="Featured story" className="h-full w-full object-cover" />
              </div>
              <div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3 text-sm text-slate-500">
                    <Badge variant="secondary">Press Release</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {formatDate("2025-02-10")}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Meta Techs Launches SECURESIST to Reduce Human Risk</CardTitle>
                  <CardDescription>
                    An intelligent, role-based cybersecurity awareness platform to help organizations build a resilient security culture.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button asChild>
                      <a href="#" className="flex items-center gap-2">
                        Read Announcement
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/solutions">Explore Solutions</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white/60">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Latest from the Team</h2>
            <p className="mt-3 text-slate-600">Announcements, guidance, and stories from Meta Techs and our partners.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Card key={a.title} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transition hover:shadow-xl">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                    <Badge variant="secondary">{a.type}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {formatDate(a.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{a.title}</CardTitle>
                  <CardDescription>{a.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href={a.href} className="flex items-center justify-center gap-2">
                      Read more
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Newspaper className="mx-auto mb-4 h-10 w-10 text-blue-600" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Press & Media Inquiries</h2>
          <p className="mt-4 text-lg text-slate-600">
            For interviews, quotes, or brand assets, please contact our communications team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white px-6">
              <Link href="/contact" className="flex items-center gap-2">
                Contact PR Team
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6">
              <a href="#" className="flex items-center gap-2">
                Download Media Kit
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PressCenter;
