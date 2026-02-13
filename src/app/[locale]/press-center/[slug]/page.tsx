import { notFound } from "next/navigation";
import { apiFetch, BlogsUrl } from "@/helpers/apiConfig";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

/* =======================
   Types
======================= */
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

/* =======================
   Page
======================= */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  let post: BlogPostResponse["data"] | null = null;

  try {
    const response = await apiFetch<BlogPostResponse>(
      BlogsUrl.GET_BLOG_BY_SLUG(slug),
      { cache: "no-store" }
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

  const safePost = {
    title: typeof post.title === "string" ? post.title : "",
    slug: typeof post.slug === "string" ? post.slug : slug,
    metaDescription: typeof post.metaDescription === "string" ? post.metaDescription : post.title ?? "",
    coverImage: post.coverImage ?? null,
    content: typeof post.content === "string" ? post.content : "",
    category: typeof post.category === "string" ? post.category : "Blog",
    createdAt: typeof post.createdAt === "string" ? post.createdAt : new Date().toISOString(),
    updatedAt: typeof post.updatedAt === "string" ? post.updatedAt : new Date().toISOString(),
    readingTime: typeof post.readingTime === "number" ? post.readingTime : 0,
  };

  return (
    <main className="min-h-screen bg-white">
      <ArticleSchema
        title={safePost.title}
        description={safePost.metaDescription || safePost.title}
        slug={safePost.slug}
        locale={locale}
        image={safePost.coverImage}
        datePublished={safePost.createdAt}
        dateModified={safePost.updatedAt}
      />
      <BlogPostHero
        coverImage={safePost.coverImage}
        title={safePost.title}
        category={safePost.category}
      />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <BlogPostMeta
            createdAt={safePost.createdAt}
            readingTime={safePost.readingTime}
          />

          <BlogContent content={safePost.content} articleTitle={safePost.title} />

          <BlogPostCTA />
        </div>
      </article>
    </main>
  );
}
