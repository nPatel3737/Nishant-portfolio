import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 pb-24">
      <Reveal>
        <p className="section-label">Let&apos;s Connect</p>
        <h2 className="section-title max-w-[600px]">
          Open to roles in human factors, aviation safety, and safety
          engineering
        </h2>
        <p className="body-text mt-4 max-w-[580px]">
          I&apos;m looking for opportunities where I can apply human factors
          thinking and safety analysis to real world aviation challenges,
          whether in design, operations, compliance, or emerging systems. If
          you&apos;re hiring or want to talk, I&apos;d welcome the conversation.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="mailto:npatel6644@gmail.com"
    className="cta-primary text-[15px]"
  >
    ✉ npatel6644@gmail.com
  </a>

  <a
    href="/Nishant-Patel-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-secondary text-[15px]"
  >
    Download CV ↓
  </a>

  <a
    href="https://www.linkedin.com/in/nishantpatel37/"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-secondary text-[15px]"
  >
    Connect on LinkedIn →
  </a>
</div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex gap-6 flex-wrap">
          <div className="text-[13px] text-[#6b7280]">
            <span className="text-[#9ca3b4]">Location:</span> Bedford, England,
            UK
          </div>
          <div className="text-[13px] text-[#6b7280]">
            <span className="text-[#9ca3b4]">Phone:</span> +44 7733 717919
          </div>
          <div className="text-[13px] text-[#6b7280]">
            <span className="text-[#9ca3b4]">Status:</span> Available
            immediately
          </div>
        </div>
      </Reveal>
    </section>
  );
}
