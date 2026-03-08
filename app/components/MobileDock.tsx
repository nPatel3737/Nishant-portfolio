"use client";

export default function MobileDock() {
  const items = [
    { label: "Projects", href: "#projects" },
    { label: "Articles", href: "#articles" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-neutral-950/85 px-3 py-2 backdrop-blur-xl">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}