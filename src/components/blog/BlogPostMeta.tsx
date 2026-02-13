import { Calendar, Clock } from "lucide-react";

interface BlogPostMetaProps {
  createdAt: string;
  readingTime: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function BlogPostMeta({ createdAt, readingTime }: BlogPostMetaProps) {
  return (
    <div className="flex gap-6 text-sm text-slate-600 mb-8">
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4" /> {formatDate(createdAt)}
      </span>
      <span className="flex items-center gap-2">
        <Clock className="h-4 w-4" /> {readingTime} min
      </span>
    </div>
  );
}
