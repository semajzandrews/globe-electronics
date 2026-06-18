import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden grain">
      {/* atmosphere: the bench, warm-graded and heavily scrimmed so the TYPE is the subject */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/workbench.jpg"
          alt="A hand soldering an open circuit board at the Globe Electronics repair bench"
          className="w-full h-full object-cover graded"
          style={{ filter: "saturate(0.8) contrast(1.05) brightness(0.5) sepia(0.18) hue-rotate(-10deg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 18% 88%, rgba(199,83,0,0.30), transparent 55%), linear-gradient(to top, rgba(20,17,14,0.96) 8%, rgba(20,17,14,0.55) 42%, rgba(20,17,14,0.78) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] w-full px-5 sm:px-8 pb-16 sm:pb-20 pt-28">
        <Reveal>
          <span className="kicker">Main Street, City of Orange · Since 2009</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="display mt-6 text-[clamp(2.9rem,9vw,7.4rem)] max-w-[15ch]">
            We open it up
            <br />
            and bring it{" "}
            <span style={{ color: "var(--ember-2)" }} className="display-it">
              back.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-[46ch] text-[1.05rem] leading-relaxed text-bone-2">
            Fifteen years on the same block, fixing what other places tell you to throw away.
            Cracked screens, dead batteries, a stereo that quit. We sell unlocked phones too,
            and we do the work right here at the bench.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#repairs" className="btn-ember">See what we fix</a>
            <a href="tel:+19736770409" className="btn-ghost">Call (973) 677-0409</a>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.78rem] tracking-wide text-bone-dim">
            <span>Phones &amp; tablets</span>
            <span className="text-[color:var(--copper)]">·</span>
            <span>TVs &amp; stereos</span>
            <span className="text-[color:var(--copper)]">·</span>
            <span>Bluetooth speakers</span>
            <span className="text-[color:var(--copper)]">·</span>
            <span>Blu-ray &amp; DVD</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
