import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <Image
        src="/images/hero-simulator.jpg"
        alt="Nishant Patel working inside the Rolls-Royce Future Systems Simulator"
        width={1600}
        height={1200}
        className="h-full w-full object-cover"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Rolls-Royce Future Systems Simulator
        </p>
        <h3 className="mt-3 max-w-xl text-xl font-semibold md:text-2xl">
          Human factors research in complex future-flight environments
        </h3>
      </div>
    </div>
  );
}