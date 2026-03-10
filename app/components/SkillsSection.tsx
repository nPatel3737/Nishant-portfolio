import Reveal from "./Reveal";

const SKILLS = [
  {
    title: "Human Factors Methods",
    items:
      "Task Analysis · Cognitive Task Analysis · Workload Assessment (NASA-TLX) · Situation Awareness Assessment (SART) · Human Error Analysis · Human-Automation Interaction Evaluation · Human-Centred Design · Eye Tracking · HRV Analysis",
  },
  {
    title: "Safety Engineering",
    items:
      "STPA · FTA · FMEA · FMES · FRAM · HFACS · Bow-Tie Analysis · MEDA · Zonal Safety Analysis · FHA · PSSA · Safety Case Thinking · Hazard Identification · ARP 4754 / 4761",
  },
  {
    title: "Regulation & Emerging Aviation",
    items:
      "EASA · FAA · CAA · ICAO Standards · DEF STAN · SORA Methodology · BVLOS Regulation · AI in Aviation Safety · Urban Air Mobility · Single Pilot Operations · DAL Allocation",
  },
  {
    title: "Technical & Research",
    items:
      "IBM SPSS · Statistical Analysis (Regression, ANOVA, Factor Analysis, Chi-Square) · Mixed Methods Research · Thematic Analysis · AutoCAD · SolidWorks · Microsoft Office Suite",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <Reveal>
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">
          Methods, tools, and specialist knowledge
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {SKILLS.map((skill, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <div className="card h-full">
              <h4 className="text-sm font-bold text-[#3b82f6] tracking-wider uppercase mb-4">
                {skill.title}
              </h4>
              <p className="body-text text-sm leading-[1.8]">{skill.items}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
