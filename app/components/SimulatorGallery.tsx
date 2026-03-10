import Image from "next/image";
import Reveal from "./Reveal";

export default function SimulatorGallery() {
  return (
    <section className="py-20">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Research Environment</p>
          <h2 className="section-title">
            Inside the Rolls-Royce Future Systems Simulator
          </h2>
          <p className="body-text mt-4">
            These images show the simulator environment used to explore
            workload, situation awareness, interface design, and future flight
            human factors.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <Image
              src="/images/simulator-2.jpg"
              alt="Rear view of the Rolls-Royce Future Systems Simulator cockpit"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-3">
            <Image
              src="/images/simulator-3.jpg"
              alt="Nishant Patel inside the Rolls-Royce Future Systems Simulator"
              width={1600}
              height={1200}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
