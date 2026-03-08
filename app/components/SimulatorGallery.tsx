import Image from "next/image";

export default function SimulatorGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Research Environment
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Inside the Rolls-Royce Future Systems Simulator
        </h2>
        <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">
          These images show the simulator environment used to explore workload,
          situation awareness, interface design, and future-flight human factors.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <Image
            src="/images/simulator-2.jpg"
            alt="Rear view of the Rolls-Royce Future Systems Simulator cockpit"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 p-3">
          <Image
            src="/images/simulator-3.jpg"
            alt="Nishant Patel inside the Rolls-Royce Future Systems Simulator"
            width={1200}
            height={1600}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}