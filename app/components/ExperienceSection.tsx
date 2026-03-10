import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <Reveal>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional background</h2>
      </Reveal>

      <div className="mt-10">
        {/* Omspace */}
        <Reveal delay={0.1}>
          <div className="flex gap-5 mb-9">
            <div className="flex flex-col items-center">
              <div className="timeline-dot" />
              <div className="timeline-line flex-1 min-h-[80px]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#3b82f6] font-semibold tracking-wide">
                AUG 2022 TO FEB 2023
              </p>
              <h3 className="text-lg text-[#f0f2f5] font-semibold mt-1.5 mb-1">
                Aerospace Engineering Intern
              </h3>
              <p className="text-sm text-[#6b7280] mb-3">
                Omspace Rocket and Exploration Pvt Ltd · Ahmedabad, India
              </p>
              <p className="body-text text-sm">
                Contributed to Space Launch Vehicle development for small
                satellite deployment. Applied structural analysis principles to
                component evaluation, participated in cross-functional design
                reviews, and developed technical documentation for launch vehicle
                systems, building the engineering foundations that later informed
                my systems safety perspective.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Welcome Break */}
        <Reveal delay={0.15}>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="timeline-dot bg-[#6b7280]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#6b7280] font-semibold tracking-wide">
                APR 2024 TO PRESENT
              </p>
              <h3 className="text-lg text-[#f0f2f5] font-semibold mt-1.5 mb-1">
                Team Member
              </h3>
              <p className="text-sm text-[#6b7280] mb-3">
                Welcome Break · Wyboston, UK
              </p>
              <p className="body-text text-sm">
                Part time role alongside ongoing professional development.
                Maintain food safety and HACCP compliance, conduct risk
                assessments for workplace hazards, and carry out internal audits
                on operational standards.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
