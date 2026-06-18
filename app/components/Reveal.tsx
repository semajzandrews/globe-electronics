import { ReactNode, CSSProperties } from "react";

/* Dumb wrapper. Content is visible by default; .reveal-armed adds the additive rise. */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "span" | "li" | "p" | "h2" | "h3";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`reveal ${className}`} style={{ ["--d" as string]: `${delay}s`, ...style }}>
      {children}
    </Tag>
  );
}
