import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import {
  projectBySlugQuery,
  projectSlugsQuery,
} from "../../../sanity/lib/queries";

export async function generateStaticParams() {
  const slugs = await client.fetch(projectSlugsQuery);
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
  const project = await client.fetch(projectBySlugQuery, { slug });

  if (!project) {
    return {
      title: "Project not found | Nishant Patel",
    };
  }

  return {
    title: `${project.title} | Nishant Patel`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug });

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Link
          href="/#projects"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to portfolio
        </Link>

        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-cyan-400">
          {project.context}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-xl text-white/75">{project.subtitle}</p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-base leading-8 text-white/70">{project.summary}</p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Key highlights</h2>
            <ul className="mt-6 space-y-4 text-white/75">
              {project.bullets?.map((bullet: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}