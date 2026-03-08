type FeaturedInsightProps = {
  article: {
    title?: string;
    publishedAt?: string;
    summary?: string;
    keyMessage?: string;
    portfolioValue?: string;
  } | null;
};

export default function FeaturedInsight({ article }: FeaturedInsightProps) {
  if (!article) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 md:p-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Flagship Insight
        </p>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {article.title}
            </h2>

            <p className="mt-4 text-sm text-white/50">
              {article.publishedAt} {article.portfolioValue ? `• ${article.portfolioValue}` : ""}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              {article.summary}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-400">
              Key Message
            </p>
            <p className="mt-4 text-base leading-8 text-white/75">
              {article.keyMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}