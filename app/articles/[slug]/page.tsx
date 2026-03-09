// app/articles/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import {
  articleBySlugQuery,
  articleSlugsQuery,
} from "../../../sanity/lib/queries";

export async function generateStaticParams() {
  const slugs = await client.fetch(articleSlugsQuery);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });

  if (!article) {
    return {
      title: "Article not found | Nishant Patel",
    };
  }

  return {
    title: `${article.title} | Nishant Patel`,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Link
          href="/#articles"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to portfolio
        </Link>

        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Article
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-4 text-sm text-white/50">
          {article.publishedAt}
          {article.portfolioValue ? ` • ${article.portfolioValue}` : ""}
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-base leading-8 text-white/70">{article.summary}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
              Key Message
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">
              {article.keyMessage}
            </p>
          </div>

          {article.externalUrl ? (
            <div className="mt-8">
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
              >
                Read full article
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}