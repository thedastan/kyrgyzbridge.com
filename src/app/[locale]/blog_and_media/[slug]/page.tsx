// src/app/[locale]/blog/[slug]/page.tsx
import BlogMediaDetail from "@/components/pages/blog_and_media/detail/BlogMediaDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// --------------------
// Fetch статьи по slug и локали
// --------------------
async function fetchBlogBySlug(locale: string, slug: string) {
  try {
    const res = await fetch(`https://api.kyrgyz-bridge.com/${locale}/blog/`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`Failed to fetch blog data for locale "${locale}"`);
      return undefined;
    }

    const blogs: Array<{
      id: number;
      slug: string;
      title: string;
      description: string;
      image: string;
    }> = await res.json();

    return blogs.find((b) => b.slug === slug);
  } catch (error) {
    console.error(`Error fetching blog data for locale "${locale}":`, error);
    return undefined;
  }
}

// --------------------
// Props для generateMetadata
// --------------------
type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// --------------------
// Генерация метаданных
// --------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const blog = await fetchBlogBySlug(locale, slug);

  if (!blog) {
    notFound();
  }

  const siteName = "Kyrgyz Bridge";
  const title = `${blog.title} — ${siteName}`;
  const description = String(blog.description ?? "");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [blog.image],
    },
    alternates: {
      languages: {
        ru: `/ru/blog/${slug}`,
        en: `/en/blog/${slug}`,
        de: `/de/blog/${slug}`,
        ky: `/ky/blog/${slug}`,
      },
    },
  };
}

// --------------------
// Страница
// --------------------
export default function BlogPage() {
  return <BlogMediaDetail />;
}
