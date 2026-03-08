type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}