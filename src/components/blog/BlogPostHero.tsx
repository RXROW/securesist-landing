import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface BlogPostHeroProps {
  coverImage: string | null;
  title: string;
  category: string;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Announcement: "bg-blue-100 text-blue-700 border-blue-200",
    "Best Practices": "bg-green-100 text-green-700 border-green-200",
    Compliance: "bg-purple-100 text-purple-700 border-purple-200",
    Partners: "bg-orange-100 text-orange-700 border-orange-200",
    Training: "bg-cyan-100 text-cyan-700 border-cyan-200",
    Analytics: "bg-pink-100 text-pink-700 border-pink-200",
  };
  return colors[category] || "bg-slate-100 text-slate-700 border-slate-200";
};

const isVideoUrl = (url: string | null) => {
  if (!url) return false;
  return (
    url.endsWith(".mp4") ||
    url.endsWith(".webm") ||
    url.endsWith(".mov") ||
    url.includes("/video/")
  );
};

export function BlogPostHero({ coverImage, title, category }: BlogPostHeroProps) {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {coverImage ? (
        isVideoUrl(coverImage) ? (
          <video
            src={coverImage}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        )
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-4 left-4 z-10">
        <Button asChild variant="secondary">
          <Link href="/press-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      <div className="absolute bottom-8 left-8 text-white max-w-3xl">
        <Badge
          variant="outline"
          className={`mb-3 ${getCategoryColor(category)}`}
        >
          {category}
        </Badge>
        <h1 className="text-4xl font-black">{title}</h1>
      </div>
    </section>
  );
}
