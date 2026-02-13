import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://securesist.com";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  return {
    title: "SECURESIST | Blog",
    description: "Read articles and news from SECURESIST.",
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteUrl}/${locale}/press-center/${slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
