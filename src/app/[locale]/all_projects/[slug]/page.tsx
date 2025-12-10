// src/app/[locale]/all_projects/[slug]/page.tsx

import AllProjectDetail from "@/components/pages/all_projects/detail/AllProjectDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function fetchProjectBySlug(locale: string, slug: string) {
  const res = await fetch(`https://api.kyrgyz-bridge.com/${locale}/projects/`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch projects");

  const projects: Array<{
    id: number;
    slug: string;
    title: string;
    description: string;
    images: { id: number; image: string }[];
  }> = await res.json();

  return projects.find((p) => p.slug === slug);
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const project = await fetchProjectBySlug(locale, slug); // ✅ передаём locale

  if (!project) {
    notFound();
  }

  const siteName = "Kyrgyz Bridge";
  const title = `${project.title} — ${siteName}`;
  const description = project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    alternates: {
      languages: {
        ru: `/ru/all_projects/${slug}`,
        en: `/en/all_projects/${slug}`,
        de: `/de/all_projects/${slug}`,
        ky: `/ky/all_projects/${slug}`,
      },
    },
  };
}

export default function AllProjectPage() {
  return <AllProjectDetail />;
}
