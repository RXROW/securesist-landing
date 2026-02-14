import { notFound } from "next/navigation";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

interface BlogAuthor {
  name?: string;
  [key: string]: unknown;
}

interface BlogPostResponse {
  status: string;
  data: {
    _id: string;
    author?: string | BlogAuthor | null;
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    coverImage: string | null;
    content: string;
    category: string;
    tags: string[];
    readingTime: number;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  let post: BlogPostResponse["data"] | null = null;

  try {
    const response = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug)
    );
    if (response?.status === "success" && response?.data) {
      post = response.data;
    }
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const authorName =
    post.author && typeof post.author === "object" && "name" in post.author
      ? String((post.author as { name?: string }).name ?? "SECURESIST")
      : "SECURESIST";

  return (
    <main className="min-h-screen bg-white">
      <ArticleSchema
        title={String(post.title ?? "")}
        description={String(post.metaDescription ?? post.title ?? "")}
        slug={String(post.slug ?? slug)}
        locale={locale}
        image={post.coverImage ?? null}
        datePublished={String(post.createdAt ?? "")}
        dateModified={String(post.updatedAt ?? post.createdAt ?? "")}
        authorName={authorName}
      />
      <BlogPostHero
        coverImage={post.coverImage ?? null}
        title={String(post.title ?? "")}
        category={String(post.category ?? "Blog")}
      />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <BlogPostMeta
            createdAt={String(post.createdAt ?? "")}
            readingTime={Number(post.readingTime) || 0}
          />

          <BlogContent content={String(post.content ?? "")} />

          <BlogPostCTA />
        </div>
      </article>
    </main>
  );
}
