"use client";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    img: "/img/pcb-macro.jpg",
    body:
      "It goes on the bench and we find the real fault, not a guess. No charge to tell you what is wrong and whether it is worth fixing.",
  },
  {
    n: "02",
    title: "Open",
    img: "/img/circuit.jpg",
    body:
      "Screens, batteries, charge ports, boards. We take it apart with the right tools so nothing else gets broken on the way in.",
  },
  {
    n: "03",
    title: "Fix",
    img: "/img/workbench.jpg",
    body:
      "Soldered, replaced, cleaned, reseated. Done by hand at this counter, the same way for fifteen years on Main Street.",
  },
  {
    n: "04",
    title: "Revive",
    img: "/img/phone-teardown.jpg",
    body:
      "It powers back on and goes home with you. Most phone and tablet repairs are same-day. We test it in front of you before you pay.",
  },
];

export default function Bench() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 across the whole pinned scroll

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(STEPS.length - 1);
      setProgress(1);
      return;
    }
    const compute = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length + 0.0001)));
    };
    compute();
    // compute synchronously on scroll so it works even when rAF is throttled (backgrounded tabs)
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // local progress within the active step, 0..1
  const stepLocal = Math.max(0, Math.min(1, progress * STEPS.length - active));
  // revive intensity ramps in over the final step
  const revive = Math.max(0, Math.min(1, (progress - 0.74) / 0.24));

  return (
    <section id="bench" className="relative">
      {/* ── MOBILE (< md): plain stacked steps. The pinned/scroll-jacked layout
          below overflows a phone viewport and collides with the absolute kicker,
          so on small screens we render every step in normal flow instead. ── */}
      <div className="md:hidden px-5 pt-[84px] pb-16">
        <span className="kicker">The Bench · how a fix actually goes</span>
        <div className="mt-8 space-y-14">
          {STEPS.map((s, i) => (
            <div key={s.n}>
              <div
                className="relative aspect-[4/5] w-full rounded-[3px] overflow-hidden"
                style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,0.9)" }}
              >
                <img
                  src={s.img}
                  alt={`${s.title} step at the Globe Electronics repair bench`}
                  className="absolute inset-0 w-full h-full object-cover graded"
                />
                <div className="absolute left-4 bottom-4 z-10">
                  <span
                    className="display text-[2.4rem] leading-none"
                    style={{ color: i === STEPS.length - 1 ? "var(--ember-2)" : "var(--bone)" }}
                  >
                    {s.n}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline gap-4">
                <span className="display text-[color:var(--ember-2)] text-[1.4rem]">{s.n}</span>
                <h2 className="display text-[clamp(2.2rem,9vw,3.2rem)]">{s.title}</h2>
              </div>
              <div className="hair w-24 mt-4" />
              <p className="mt-4 max-w-[40ch] text-[1.06rem] leading-relaxed text-bone-2">{s.body}</p>
              <div className="mt-5 text-[0.74rem] tracking-[0.2em] uppercase text-bone-dim">
                Step {i + 1} of {STEPS.length}
                {i === STEPS.length - 1 && (
                  <span className="text-[color:var(--ember-2)]"> · Same-day on most repairs</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (md+): the pinned, scroll-driven bench (unchanged) ── */}
      <div ref={wrapRef} className="relative hidden md:block" style={{ height: "420svh" }}>
        <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
          <div className="absolute top-0 inset-x-0 z-20 pt-[84px] pb-6">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
              <span className="kicker">The Bench · how a fix actually goes</span>
            </div>
          </div>

          <div className="mx-auto max-w-[1240px] w-full px-5 sm:px-8 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* stage */}
            <div className="relative order-2 md:order-1">
              <div
                className="relative aspect-[4/5] sm:aspect-square w-full rounded-[3px] overflow-hidden"
                style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,0.9)" }}
              >
                {STEPS.map((s, i) => (
                  <img
                    key={s.n}
                    src={s.img}
                    alt={`${s.title} step at the Globe Electronics repair bench`}
                    className="absolute inset-0 w-full h-full object-cover graded transition-opacity duration-700"
                    style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : 1 }}
                  />
                ))}
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    opacity: revive,
                    background:
                      "radial-gradient(80% 70% at 50% 60%, rgba(224,114,30,0.45), transparent 60%)",
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  className="absolute inset-y-0 w-[2px] pointer-events-none"
                  style={{
                    left: `${stepLocal * 100}%`,
                    background: "linear-gradient(to bottom, transparent, var(--ember-2), transparent)",
                    boxShadow: "0 0 18px 2px rgba(224,114,30,0.6)",
                    opacity: 0.75,
                  }}
                />
                <div className="absolute left-4 bottom-4 z-10">
                  <span
                    className="display text-[2.4rem] leading-none"
                    style={{ color: active === STEPS.length - 1 ? "var(--ember-2)" : "var(--bone)" }}
                  >
                    {STEPS[active].n}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {STEPS.map((s, i) => (
                  <div key={s.n} className="flex-1 h-[3px] rounded-full overflow-hidden bg-[color:var(--rule)]">
                    <div
                      className="h-full"
                      style={{
                        width: i < active ? "100%" : i === active ? `${stepLocal * 100}%` : "0%",
                        background: "var(--ember)",
                        transition: "width .15s linear",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* copy */}
            <div className="order-1 md:order-2">
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: i === active ? "block" : "none" }}>
                  <div className="flex items-baseline gap-4">
                    <span className="display text-[color:var(--ember-2)] text-[1.4rem]">{s.n}</span>
                    <h2 className="display text-[clamp(2.6rem,7vw,4.6rem)]">{s.title}</h2>
                  </div>
                  <div className="hair w-24 mt-5" />
                  <p className="mt-6 max-w-[40ch] text-[1.06rem] leading-relaxed text-bone-2">{s.body}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-3 text-[0.74rem] tracking-[0.2em] uppercase text-bone-dim">
                    <span>Step {i + 1} of {STEPS.length}</span>
                    {i === STEPS.length - 1 && (
                      <span className="text-[color:var(--ember-2)]">· Same-day on most repairs</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
