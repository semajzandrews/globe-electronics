import Reveal from "./Reveal";

export default function Proof() {
  return (
    <section className="relative py-28 sm:py-36 bg-bench-3 overflow-hidden">
      <img
        src="/img/repair-bench2.jpg"
        alt="A phone and earbuds on a warm wooden counter at Globe Electronics"
        className="absolute inset-0 w-full h-full object-cover graded"
        style={{ filter: "saturate(0.7) contrast(1.05) brightness(0.34) sepia(0.2) hue-rotate(-10deg)" }}
      />
      <div className="absolute inset-0 bg-[rgba(20,17,14,0.55)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <span className="kicker">Fifteen years on Main Street</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="display mt-8 text-[clamp(2rem,5.5vw,4.2rem)] max-w-[20ch] leading-[1.05]">
            The same counter, the same hands, since{" "}
            <span style={{ color: "var(--ember-2)" }}>2009.</span> People come back because the fix
            holds and the price is fair.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            ["2009", "On this block since"],
            ["Free", "Diagnosis, always"],
            ["Same-day", "Most phone repairs"],
            ["Cash / card", "Whatever is easy"],
          ].map(([big, small], i) => (
            <Reveal key={small} delay={Math.round(i * 6) / 100}>
              <div>
                <div className="display text-[clamp(1.8rem,4vw,2.8rem)]" style={{ color: "var(--bone)" }}>
                  {big}
                </div>
                <div className="mt-2 text-[0.78rem] tracking-[0.16em] uppercase text-bone-dim">
                  {small}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
