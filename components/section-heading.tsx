import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
}: Props) {
  return (
    <div
      className={[
        "section-heading",
        align === "center" ? "center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}