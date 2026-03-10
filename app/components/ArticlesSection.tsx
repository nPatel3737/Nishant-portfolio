import Reveal from "./Reveal";

const ARTICLES = [
  {
    title: "The Impact of AI in Aviation Safety",
    date: "February 2025",
    insight:
      "Analyses how AI is reshaping predictive maintenance, air traffic management, and pilot decision support, arguing that integration quality matters more than capability.",
    url: "https://www.linkedin.com/pulse/impact-ai-aviation-safety-how-artificial-intelligence-nishant-qq23e/",
  },
  {
    title: "Regulating the Sky: Who Will Set the Rules for Urban Air Mobility?",
    date: "March 2025",
    insight:
      "Compares FAA, EASA, and ICAO approaches to UAM regulation, highlighting that certification alone won't enable scale without matching progress in public trust and infrastructure.",
    url: "https://www.linkedin.com/pulse/regulating-sky-who-set-rules-urban-air-mobility-nishant-patel-aqd8e/",
  },
  {
    title:
      "Beyond Visual Line of Sight: Unlocking BVLOS Drone Operations in the UK",
    date: "May 2025",
    insight:
      "Examines UK specific regulatory bottlenecks and digital infrastructure gaps preventing scalable BVLOS operations, proposing a combined policy and technology roadmap.",
    url: "https://www.linkedin.com/pulse/beyond-visual-line-sight-bvlos-unlocking-true-potential-nishant-patel-p9l7e/",
  },
  {
    title: "Enhancing Aviation Safety Through HFACS",
    date: "January 2025",
    insight:
      "Explains how the HFACS framework reveals the systemic causes behind aviation accidents, moving analysis beyond individual blame toward organisational and supervisory factors.",
    url: "https://www.linkedin.com/pulse/enhancing-aviation-safety-through-human-factors-deep-nishant-imgze/",
  },
];

export default function ArticlesSection() {
  return (
    <section id="writing" className="py-20">
      <Reveal>
        <p className="section-label">Writing</p>
        <h2 className="section-title">
          Articles on aviation safety and emerging systems
        </h2>
        <p className="body-text mt-3 max-w-[600px]">
          A growing body of analysis connecting current safety lessons to future
          challenges in automation, AI, regulation, and pilot training.
        </p>
      </Reveal>

      {/* Flagship article */}
      <Reveal delay={0.1}>
        <div className="card mt-10" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
          <span className="text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide bg-[#3b82f620] text-[#3b82f6] inline-block mb-4">
            FLAGSHIP ARTICLE
          </span>
          <h3
            className="text-[22px] text-[#f0f2f5] font-normal mb-2.5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From MCAS to AI Co-Pilots: Designing Training That Prepares Crews
            for Automation They&apos;ve Never Seen Fail
          </h3>
          <p className="body-text mb-4">
            Develops a 5 principle framework for resilient response training,
            arguing that as AI enabled cockpit systems become more adaptive and
            opaque, the aviation industry must shift from purely procedural
            training toward building cognitive resilience, designed surprise
            exposure, and system boundary awareness.
          </p>
          <p className="text-[13px] text-[#6b7280]">
            November 2025 · Published on LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/pulse/from-mcas-ai-co-pilots-designing-training-prepares-crews-patel-uvbae/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary mt-4 inline-flex"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            Read on LinkedIn →
          </a>
        </div>
      </Reveal>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {ARTICLES.map((a, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <div className="card h-full flex flex-col">
              <p className="text-xs text-[#6b7280] mb-3">{a.date}</p>
              <h4 className="text-base text-[#e2e4e9] font-semibold mb-2.5 leading-snug">
                {a.title}
              </h4>
              <p className="body-text text-[13.5px] flex-1">{a.insight}</p>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary mt-4 self-start"
                style={{ padding: "10px 20px", fontSize: 13 }}
              >
                Read on LinkedIn →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
