"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#bench", label: "The Bench" },
  { href: "#repairs", label: "Repairs" },
  { href: "#shop", label: "Shop" },
  { href: "#visit", label: "Visit" },
];

function GlobeMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" stroke="var(--ember-2)" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="4" ry="9.2" stroke="var(--bone-2)" strokeWidth="1.1" />
      <path d="M2.8 12h18.4M4 7.4h16M4 16.6h16" stroke="var(--bone-2)" strokeWidth="1.1" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(20,17,14,0.86)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[64px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <GlobeMark />
            <span className="display text-[1.32rem] leading-none">Globe</span>
            <span className="hidden sm:inline text-[0.62rem] tracking-[0.3em] uppercase text-bone-dim mt-0.5">
              Electronics
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.82rem] tracking-wide text-bone-2 hover:text-bone transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+19736770409" className="btn-ember !py-2.5 !px-4 !text-[0.8rem]">
              (973) 677-0409
            </a>
          </nav>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-1"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="space-y-[5px]">
              <span className="block w-6 h-[1.5px] bg-bone" />
              <span className="block w-6 h-[1.5px] bg-bone" />
              <span className="block w-4 h-[1.5px] bg-bone" />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-bench-2 border-t border-[color:var(--rule)] px-5 py-5">
            <div className="flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl text-bone"
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+19736770409" className="btn-ember mt-2 w-full">
                Call the shop
              </a>
            </div>
          </div>
        )}
      </header>

      {/* mobile call pill — collapses to a ~46px icon */}
      <a
        href="tel:+19736770409"
        aria-label="Call Globe Electronics"
        className="md:hidden fixed bottom-5 right-5 z-50 w-[46px] h-[46px] rounded-full flex items-center justify-center"
        style={{ background: "var(--ember)", boxShadow: "0 10px 30px -8px rgba(199,83,0,0.7)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
            fill="#fff"
          />
        </svg>
      </a>
    </>
  );
}
