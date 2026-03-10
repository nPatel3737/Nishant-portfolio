import Reveal from "./Reveal";

const TAGS_MCAS = ["Mixed Methods", "SPSS", "HFACS", "Regression Analysis", "Factor Analysis", "78 Participants"];
const TAGS_SPO = ["STPA", "NASA-TLX", "SART", "Eye Tracking", "HRV", "HTA", "15 Participants", "Rolls-Royce Simulator"];
const TAGS_FUEL = ["FTA", "FMEA", "FMES", "FHA", "PSSA", "Zonal Safety Analysis", "AC 23.1309", "ARP 4761"];

function Badge({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <span
      className={`text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide ${
        accent
          ? "bg-[#3b82f615] text-[#3b82f6]"
          : "bg-[#0f172a] text-[#6b7280] border border-[#1e293b]"
      }`}
    >
      {children}
    </span>
  );
}

function Finding({ title, children }: { title: string; children: string }) {
  return (
    <div className="finding-highlight">
      <p>
        <strong className="text-[#e2e4e9]">{title}:</strong> {children}
      </p>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <Reveal>
        <p className="section-label">Selected Research</p>
        <h2 className="section-title">Projects with real findings</h2>
        <p className="body-text mt-3 max-w-[600px]">
          Each project produced concrete results that inform how aviation
          systems should be designed, trained for, and regulated.
        </p>
      </Reveal>

      {/* Project 1: MCAS Thesis */}
      <Reveal delay={0.1}>
        <div className="card mt-10">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge accent>MSc THESIS</Badge>
            <Badge>CRANFIELD UNIVERSITY</Badge>
            <Badge>2024</Badge>
          </div>

          <h3
            className="text-2xl text-[#f0f2f5] font-normal mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Human Factors in Pilots&apos; Responses to MCAS Activation
          </h3>
          <p className="body-text mb-5">
            A mixed methods study surveying 78 commercial pilots to investigate
            how cognitive, situational, and organisational factors influenced
            pilot performance during MCAS related emergencies on the Boeing 737
            MAX.
          </p>

          <h4 className="text-[13px] font-semibold text-[#3b82f6] tracking-wider uppercase mb-3">
            Key Findings
          </h4>

          <Finding title="Familiarity outweighs flight hours">
            Regression analysis showed MCAS familiarity was the strongest
            predictor of pilot confidence (β = 0.555, p &lt; .001), while total
            flight hours and system design perceptions were not statistically
            significant predictors.
          </Finding>
          <Finding title="Pilots rated MCAS poorly for usability">
            The system scored just 4.08/10 for usability and reliability. This
            was the lowest rated dimension in the study, suggesting fundamental
            interface design problems.
          </Finding>
          <Finding title="Experience shapes familiarity non-linearly">
            ANOVA revealed familiarity peaked at 11 to 20 years of experience (M
            = 8.0) then declined in the 21+ group (M = 5.07), suggesting
            experienced pilots may disengage from newer system training. (F(4,70)
            = 30.941, p &lt; .001, η² = .639)
          </Finding>
          <Finding title="Gender gap in system familiarity">
            Male pilots reported significantly higher MCAS familiarity (M = 6.78)
            than female pilots (M = 5.24, p = .004), pointing to potential
            disparities in training access or exposure.
          </Finding>

          <h4 className="text-[13px] font-semibold text-[#3b82f6] tracking-wider uppercase mt-6 mb-3">
            Recommendations
          </h4>
          <p className="body-text text-sm">
            Standardise system specific MCAS training across airlines. Redesign
            the MCAS interface for transparency and predictable behaviour.
            Implement experience based mentoring to address the familiarity
            decline in senior pilots. Mandate scenario based recurrent training
            focused on automation failures, not just procedural checklists.
          </p>

          <Tags items={TAGS_MCAS} />
        </div>
      </Reveal>

      {/* Project 2: SPO Simulator */}
      <Reveal delay={0.15}>
        <div className="card mt-6">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge accent>SIMULATOR RESEARCH</Badge>
            <Badge>ROLLS-ROYCE · CRANFIELD</Badge>
          </div>

          <h3
            className="text-2xl text-[#f0f2f5] font-normal mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Risk-Proofing Single Pilot Operations: Workload, Awareness, and HMI
            Design
          </h3>
          <p className="body-text mb-5">
            A group capstone project combining STPA system analysis, Hierarchical
            Task Analysis, and a 15 participant simulator experiment in the
            Rolls-Royce Future Systems Simulator at Cranfield. Compared Two Crew
            Operations (TCO) against Single Pilot Operations (SPO) using
            subjective and objective workload and situation awareness measures.
          </p>

          <h4 className="text-[13px] font-semibold text-[#3b82f6] tracking-wider uppercase mb-3">
            Key Findings
          </h4>

          <Finding title="Workload increased significantly under SPO">
            NASA-TLX raw total scores rose from 41.21 (TCO) to 56.90 (SPO), a
            statistically significant increase (p &lt; .001). Mental demand,
            effort, temporal demand and frustration all showed significant
            differences individually.
          </Finding>
          <Finding title="Situation awareness showed no significant subjective drop">
            SART scores decreased from 25.47 (TCO) to 22.40 (SPO) but the
            difference was not statistically significant (p = 0.105), suggesting
            pilots may not perceive their own SA degradation.
          </Finding>
          <Finding title="Eye tracking revealed changed scanning behaviour">
            Fixation duration dropped significantly from 594ms (TCO) to 458ms
            (SPO) (p = 0.012), indicating more rapid, fragmented scanning when
            pilots operated alone.
          </Finding>
          <Finding title="STPA generated 105 Unsafe Control Actions">
            System level analysis of the 3 actor model (Single Pilot, Remote Co
            Pilot, Automated Co Pilot) identified 105 UCAs across 10 control
            actions, with pilot incapacitation and excessive workload as the most
            critical hazards.
          </Finding>
          <Finding title="Recommended the 3 actor model with adaptive automation">
            Proposed that functional distribution between SP, RCP, and ACP must
            use adaptive workload monitoring, with task delegation priorities
            built into both software design and SOPs to maintain distributed
            situation awareness.
          </Finding>

          <Tags items={TAGS_SPO} />
        </div>
      </Reveal>

      {/* Project 3: Fuel System */}
      <Reveal delay={0.2}>
        <div className="card mt-6">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge accent>SAFETY ENGINEERING</Badge>
            <Badge>CRANFIELD UNIVERSITY</Badge>
          </div>

          <h3
            className="text-2xl text-[#f0f2f5] font-normal mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Safety Assessment of the Cranfield A1 Fuel System
          </h3>
          <p className="body-text mb-5">
            A structured safety assessment of a general aviation aircraft fuel
            system (Cranfield A1) conducted as a group project to AC 23.1309
            standards. Applied the full ARP 4761 assessment process from aircraft
            level hazard analysis through to component level failure analysis,
            zonal review, and maintenance recommendations.
          </p>

          <h4 className="text-[13px] font-semibold text-[#3b82f6] tracking-wider uppercase mb-3">
            Key Findings
          </h4>

          <Finding title="18 failure conditions identified via system level FHA">
            Derived safety objectives from AC 23.1309 and conducted both aircraft
            level and system level Functional Hazard Analysis, classifying
            failure conditions from Minor through Catastrophic.
          </Finding>
          <Finding title="Fuel selector valve identified as critical single point failure">
            FTA and FMEA confirmed the fuel selector valve as a central non
            redundant component. NTSB data showed virtually all tank switching
            problems in GA accidents involved this valve. FMES identified 7
            individual failure effects.
          </Finding>
          <Finding title="Common cause failures exposed in zonal analysis">
            Both wing fuel pumps shared the same zone and electrical busbar,
            creating a common mode failure path. The analysis also found fuel
            lines from all three tanks routed down one side of the aircraft,
            compromising redundancy.
          </Finding>
          <Finding title="Maintenance and design recommendations developed">
            Proposed rerouting fuel lines for system segregation, repositioning
            electrical wiring above fuel pipelines to reduce fire risk, mandatory
            pre-flight fuel drain inspections, and component level inspection
            intervals for single point failure items.
          </Finding>

          <Tags items={TAGS_FUEL} />
        </div>
      </Reveal>
    </section>
  );
}
