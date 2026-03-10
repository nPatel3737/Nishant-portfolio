import Image from "next/image";
import Reveal from "./Reveal";

export default function HeroVisual() {
  return (
    <Reveal delay={0.3} className="mt-12 lg:mt-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/images/hero-simulator.jpg"
          alt="Nishant Patel working inside the Rolls-Royce Future Systems Simulator"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0e17] to-transparent p-6">
          <p className="text-xs text-[#9ca3b4] tracking-wide">
            Rolls-Royce Future Systems Simulator
          </p>
        </div>
      </div>
    </Reveal>
  );
}
