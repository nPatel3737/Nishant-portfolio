type SiteFooterProps = {
  fullName?: string;
  email?: string;
  linkedinUrl?: string;
};

export default function SiteFooter({
  fullName,
  email,
  linkedinUrl,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {fullName || "Nishant Patel"}</p>

        <div className="flex flex-wrap items-center gap-4">
          {email ? (
            <a href={`mailto:${email}`} className="transition hover:text-white">
              {email}
            </a>
          ) : null}

          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}