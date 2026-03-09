import Link from "next/link";
import FeaturedInsight from "./components/FeaturedInsight";
import ContactCTA from "./components/ContactCTA";
import SimulatorGallery from "./components/SimulatorGallery";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroVisual from "./components/HeroVisual";
import SectionHeading from "./components/SectionHeading";
import Reveal from "./components/Reveal";
import MobileDock from "./components/MobileDock";
import SiteFooter from "./components/SiteFooter";
import { client } from "../sanity/lib/client";
import {
  profileQuery,
  featuredProjectsQuery,
  articlesQuery,
  experienceQuery,
  skillsQuery,
  educationQuery,
  achievementsQuery,
} from "../sanity/lib/queries";

export default async function HomePage() {
  const profile = await client.fetch(profileQuery);
  const projects = await client.fetch(featuredProjectsQuery);
  const articles = await client.fetch(articlesQuery);
  const experience = await client.fetch(experienceQuery);
  const skills = await client.fetch(skillsQuery);
  const education = await client.fetch(educationQuery);
  const achievements = await client.fetch(achievementsQuery);

  const featuredProjects =
    projects?.filter((project: any) => project.featured) || [];
  const featuredArticles =
    articles?.filter((article: any) => article.featured) || [];

  const visibleProjects =
    featuredProjects.length > 0 ? featuredProjects : projects || [];
  const visibleArticles =
    featuredArticles.length > 0 ? featuredArticles : articles || [];

  const flagshipArticle = visibleArticles[0] || null;
  const remainingArticles = visibleArticles.slice(1);

  return (
    <main className="relative min-h-screen bg-neutral-950 pb-24 text-white md:pb-0">
      <AnimatedBackground />
      <MobileDock />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">
                Nishant Patel
              </p>
            </div>

            <nav className="hidden gap-6 text-sm text-white/70 md:flex">
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#articles" className="transition hover:text-white">
                Articles
              </a>
              <a href="#experience" className="transition hover:text-white">
                Experience
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
            </nav>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Human Factors • Safety • Future Aviation
                </p>

                <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
                  {profile?.fullName || "Nishant Patel"}
                </h1>

                <p className="mt-6 max-w-4xl text-xl text-white/80 md:text-2xl">
                  {profile?.headline}
                </p>

                <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
                  {profile?.heroTagline || profile?.shortBio}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
                  >
                    View Projects
                  </a>

                  <a
                    href="#articles"
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Read Articles
                  </a>

                  {profile?.linkedinUrl ? (
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                    >
                      LinkedIn
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <HeroVisual />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {achievements?.slice(0, 3).map((item: any, index: number) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                    {item.type || "Highlight"}
                  </p>
                  <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.metric}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <SimulatorGallery />
        </Reveal>

        <Reveal>
          <FeaturedInsight article={flagshipArticle} />
        </Reveal>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects that define my portfolio"
              description="These projects show how I approach aviation safety, human factors, system design, and future-facing operational challenges."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project: any, index: number) => (
              <Reveal key={index} delay={index * 0.08}>
                <Link
                  href={project.slug ? `/projects/${project.slug}` : "#"}
                  className="block rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <p className="mb-3 text-sm text-cyan-400">{project.context}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-white/75">{project.subtitle}</p>
                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {project.summary}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-white/72">
                    {project.bullets?.map(
                      (bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex} className="flex gap-3">
                          <span className="mt-1 text-cyan-400">•</span>
                          <span>{bullet}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <p className="mt-6 text-sm font-medium text-cyan-300">
                    View project →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="articles"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          <Reveal>
            <SectionHeading
              eyebrow="Thought Leadership"
              title="Articles and aviation insights"
              description="A growing body of writing on human factors, AI in aviation, urban air mobility, BVLOS operations, and future pilot training."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {remainingArticles.map((article: any, index: number) => (
              <Reveal key={index} delay={index * 0.08}>
                <Link
                  href={article.slug ? `/articles/${article.slug}` : "#"}
                  className="block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <p className="mb-3 text-sm text-cyan-400">
                    {article.publishedAt}
                  </p>
                  <h3 className="text-2xl font-semibold">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {article.summary}
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-medium text-white">Key Message</p>
                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {article.keyMessage}
                    </p>
                  </div>

                  <p className="mt-6 text-sm font-medium text-cyan-300">
                    Read article →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          <Reveal>
            <SectionHeading
              eyebrow="Professional Experience"
              title="Experience shaped by safety, operations, and engineering"
            />
          </Reveal>

          <div className="space-y-6">
            {experience?.map((item: any, index: number) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{item.role}</h3>
                      <p className="mt-2 text-cyan-400">{item.company}</p>
                    </div>
                    <div className="text-sm text-white/55">
                      {item.location}{" "}
                      {item.location && item.dates ? "•" : ""} {item.dates}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-white/72">
                    {item.bullets?.map(
                      (bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex} className="flex gap-3">
                          <span className="mt-1 text-cyan-400">•</span>
                          <span>{bullet}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          <Reveal>
            <SectionHeading
              eyebrow="Capability"
              title="Methods, tools, and specialist focus areas"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills?.map((skill: any, index: number) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {skill.items?.map((item: string, itemIndex: number) => (
                      <span
                        key={itemIndex}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Academic Foundation"
              title="Education and achievements"
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="mb-6 text-2xl font-semibold">Education</h3>
                <div className="space-y-6">
                  {education?.map((item: any, index: number) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium">{item.degree}</h4>
                      <p className="mt-1 text-cyan-400">{item.institution}</p>
                      <p className="mt-1 text-sm text-white/55">{item.dates}</p>

                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {item.details?.map(
                          (detail: string, detailIndex: number) => (
                            <li key={detailIndex} className="flex gap-3">
                              <span className="mt-1 text-cyan-400">•</span>
                              <span>{detail}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="mb-6 text-2xl font-semibold">Achievements</h3>
                <div className="space-y-6">
                  {achievements?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                        {item.type}
                      </p>
                      <h4 className="mt-3 text-lg font-medium">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.description}
                      </p>
                      <p className="mt-4 text-sm font-medium text-white">
                        {item.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <ContactCTA
            email={profile?.email}
            linkedinUrl={profile?.linkedinUrl}
          />
        </Reveal>

        <SiteFooter
          fullName={profile?.fullName}
          email={profile?.email}
          linkedinUrl={profile?.linkedinUrl}
        />
      </div>
    </main>
  );
}