import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "عن SECURESIST | منصة التوعية بالأمن السيبراني"
    : "About SECURESIST | Cybersecurity Awareness Platform";

  const description = isAr
    ? "تعرف على SECURESIST وكيف نساعد المؤسسات على تقليل المخاطر السيبرانية البشرية من خلال التدريب والمحاكاة والرؤى السلوكية."
    : "Learn more about SECURESIST and how we help organizations reduce human cyber risk through training, simulations, and behavioral insights.";

  const ogImage = `${siteUrl}/og-about.jpg`; // صورة خاصة بصفحة About

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/about`,
      languages: {
        en: `${siteUrl}/en/about`,
        ar: `${siteUrl}/ar/about`,
        "x-default": `${siteUrl}/en/about`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/${locale}/about`,
      siteName: "SECURESIST",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "عن SECURESIST - منصة التوعية بالأمن السيبراني"
            : "About SECURESIST - Cybersecurity Awareness Platform",
        },
      ],
      locale: isAr ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@securesist",
      site: "@securesist",
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}