import Reveal from "./Reveal";
import StatNumber from "./StatNumber";

export default function HeroSection() {
  return (
    <section id="about" className="pt-[120px] pb-20">
      {/* Availability banner */}
      <Reveal>
        <div className="availability-banner">
          <span className="pulse-dot" />
          <span className="text-[13.5px] text-slate-400">
            Seeking roles in{" "}
            <strong className="text-[#e2e4e9]">
              aviation safety, human factors engineering, or safety/risk analysis
            </strong>
            , available immediately, UK based
          </span>
        </div>
      </Reveal>

      {/* Hero grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <Reveal>
            <p className="section-label">Human Factors · Safety · Future Aviation</p>
            <h1
              className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-normal text-[#f0f2f5] mt-4 mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Nishant Patel
            </h1>
            <p className="body-text text-[17px] max-w-[520px]">
              Aerospace engineer turned human factors researcher. I study how
              pilots interact with automated systems, and how to design those
              interactions so they fail safely.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="body-text mt-5 max-w-[520px]">
              My MSc research at Cranfield surveyed 78 commercial pilots and
              found that{" "}
              <em className="text-[#c4cad8]">
                system specific familiarity, not raw flight hours, is the
                strongest predictor of pilot confidence during automation
                failures
              </em>
              . That insight drives everything I do: making safety systems
              understandable to the humans who depend on them.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex gap-3 mt-8 flex-wrap">
              <a href="#projects" className="cta-primary">
                View Research &amp; Projects ↓
              </a>
              <a
                href="https://www.linkedin.com/in/nishantpatel37/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
              >
                LinkedIn Profile →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column: Quote card */}
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="quote-card">
              <p
                className="text-[22px] text-[#f0f2f5] leading-[1.4] italic mb-5"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;My journey from Ukraine to Cranfield reflects how my
                understanding of aerospace evolved, from building systems to
                making them safer for the people who use them.&rdquo;
              </p>
              <p className="body-text text-sm">
                During my bachelor&apos;s in aerospace engineering in Ukraine, I
                focused on aircraft manufacturing. Over time, I became drawn to a
                deeper question: even when systems are well designed, why do
                operational failures still happen? That question led me to human
                factors and safety at Cranfield, where I saw that the most
                critical safety challenges sit at the intersection of people,
                automation, and organisational decisions.
              </p>
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 border-2 border-[#3b82f633] rounded-lg" />
          </div>
        </Reveal>
      </div>

      {/* Stats bar */}
      <Reveal delay={0.3}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          <div className="stat-card">
            <span className="stat-number">
              <StatNumber value={78} />
            </span>
            <span className="stat-label">Pilots Surveyed</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              <StatNumber value={105} />
            </span>
            <span className="stat-label">Unsafe Control Actions</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              <StatNumber value={18} />
            </span>
            <span className="stat-label">Failure Conditions</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              <StatNumber value={5} />
            </span>
            <span className="stat-label">Published Articles</span>
          </div>
          <div className="stat-card">
            <span className="stat-number text-[28px]">RR Sim</span>
            <span className="stat-label">Rolls-Royce Simulator</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
