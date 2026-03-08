type ContactCTAProps = {
  email?: string;
  linkedinUrl?: string;
};

export default function ContactCTA({ email, linkedinUrl }: ContactCTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Let’s Connect
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Open to conversations around human factors, aviation safety, and future-flight systems.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
          This portfolio brings together my projects, writing, and safety-focused thinking across
          automation, aviation systems, and emerging aerospace operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {email ? (
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-300"
            >
              Email Me
            </a>
          ) : null}

          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Connect on LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}