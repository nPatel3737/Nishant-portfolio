import Reveal from "./Reveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <Reveal>
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic foundation</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <Reveal delay={0.1}>
          <div className="card h-full">
            <p className="text-xs text-[#3b82f6] font-semibold">
              2023 to 2024
            </p>
            <h4 className="text-lg text-[#f0f2f5] font-semibold mt-2 mb-1">
              MSc Safety and Human Factors in Aviation
            </h4>
            <p className="text-sm text-[#6b7280] mb-4">
              Cranfield University, UK
            </p>
            <p className="body-text text-sm">
              Core modules in Safety Management Systems, Human Factors in
              Maintenance and Cockpit Design, Flight Data Monitoring, Safety
              System Assessment, and Aircraft Accident Investigation. Completed
              three major projects spanning human-automation interaction,
              simulator based evaluation, and formal safety engineering.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card h-full">
            <p className="text-xs text-[#3b82f6] font-semibold">
              2018 to 2022
            </p>
            <h4 className="text-lg text-[#f0f2f5] font-semibold mt-2 mb-1">
              Bachelor of Aerospace Engineering
            </h4>
            <p className="text-sm text-[#6b7280] mb-4">
              National Aerospace University &apos;KhAI&apos;, Kharkiv, Ukraine
            </p>
            <p className="body-text text-sm">
              Specialisation in Technologies of Aircraft Manufacturing and
              Repair. Thesis on wing rib assembly processes for the Antonov
              An-148. Developed material selection analysis, assembly process
              design, and production workflow optimisation skills.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
