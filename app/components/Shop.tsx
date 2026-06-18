import Reveal from "./Reveal";

export default function Shop() {
  return (
    <section id="shop" className="relative py-24 sm:py-32 overflow-hidden grain">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* left: the sell side */}
          <div>
            <Reveal>
              <span className="kicker">Shop the counter</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display mt-6 text-[clamp(2.4rem,6.5vw,5rem)] max-w-[14ch]">
                Unlocked, ready,{" "}
                <span className="display-it" style={{ color: "var(--ember-2)" }}>
                  no contract.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[46ch] text-bone-2 text-[1.04rem] leading-relaxed">
                Walk out with a phone or tablet that works on the carrier you already have. We also
                carry speakers, accessories and the parts that keep your gear alive. Cash or card,
                priced like a neighbor, not a chain.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-9 space-y-4">
                {[
                  "Unlocked phones & tablets, tested before they leave",
                  "Bluetooth speakers, chargers, cables & cases",
                  "Trade-in and honest advice on what is worth keeping",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem] text-bone-2">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--ember)" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <a href="tel:+19736770409" className="btn-ember mt-9">
                Ask what is in stock
              </a>
            </Reveal>
          </div>

          {/* right: stacked device imagery */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="/img/screwdriver-phone.jpg"
                alt="An unlocked phone available at Globe Electronics"
                className="w-full aspect-[3/4] object-cover rounded-[3px] graded col-span-1 row-span-2 h-full"
              />
              <img
                src="/img/tablet-hold.jpg"
                alt="An unlocked tablet available at Globe Electronics"
                className="w-full aspect-[4/3] object-cover rounded-[3px] graded"
              />
              <img
                src="/img/speaker.jpg"
                alt="A Bluetooth bookshelf speaker at Globe Electronics"
                className="w-full aspect-[4/3] object-cover rounded-[3px] graded"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
