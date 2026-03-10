"use client";

import { useState, useEffect } from "react";

const SECTIONS = ["about", "projects", "writing", "experience", "skills", "education", "contact"];

export default function Navigation() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "rgba(10,14,23,0.85)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-xl cursor-pointer text-[#f0f2f5]"
          style={{ fontFamily: "var(--font-serif)" }}
          onClick={() => scrollTo("about")}
        >
          NP<span className="text-[#3b82f6]">.</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-7">
          {SECTIONS.map((s) => (
            <span
              key={s}
              className={`nav-link ${active === s ? "active" : ""}`}
              onClick={() => scrollTo(s)}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:npatel6644@gmail.com"
            className="cta-primary hidden sm:inline-flex"
            style={{ padding: "8px 20px", fontSize: 13 }}
          >
            Get in Touch
          </a>
          <button
            className="md:hidden text-[#e2e4e9] text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-[#1e293b] flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <span
              key={s}
              className="nav-link text-[15px]"
              onClick={() => scrollTo(s)}
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
