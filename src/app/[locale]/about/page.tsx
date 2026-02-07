"use client";

import { Link } from "../../../i18n/routing";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Eye } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const textAlign = isRtl ? "text-right" : "text-left";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <SectionHeader
            badgeText={t("badge")}
            title={t("title")}
            titleHighlight={t("titleHighlight")}
            description=""
          />
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className={`mx-auto max-w-3xl space-y-12 ${textAlign}`}>
          {/* Intro - People first */}
          <div className={`flex gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                {t("pageIntro")}
              </p>
            </div>
          </div>

          {/* Platform - Train, test, understand */}
          <div className={`rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8 ${textAlign}`}>
            <div className={`mb-4 flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-slate-900">
                {t("platformHeading")}
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {t("pagePlatform")}
            </p>
          </div>

          {/* Balance - Visibility without fear */}
          <div className={`flex gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-slate-700">
                {t("pageBalance")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50/50 py-16 md:py-20">
        <div className={`container mx-auto px-4 ${textAlign}`}>
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className={`mb-8 max-w-xl text-slate-600 ${isRtl ? "mr-auto ml-0" : "mx-auto"}`}>
            {t("cta.description")}
          </p>
          <Button
            asChild
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-base font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <Link href="/contact">
              {t("cta.button")}
              <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
