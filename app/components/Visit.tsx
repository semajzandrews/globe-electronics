import Reveal from "./Reveal";

const HOURS = [
  ["Monday", "9:00 AM – 7:30 PM"],
  ["Tuesday", "9:00 AM – 7:30 PM"],
  ["Wednesday", "9:00 AM – 7:30 PM"],
  ["Thursday", "9:00 AM – 7:30 PM"],
  ["Friday", "9:00 AM – 7:30 PM"],
  ["Saturday", "9:00 AM – 7:30 PM"],
  ["Sunday", "10:00 AM – 5:00 PM"],
];

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-bench-2">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <span className="kicker">Visit the shop</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display mt-6 text-[clamp(2.4rem,6.5vw,5rem)] max-w-[14ch]">
            Stop by the bench.
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
          {/* details */}
          <div>
            <Reveal delay={0.08}>
              <div className="border-t border-[color:var(--rule)] pt-6">
                <div className="text-[0.74rem] tracking-[0.2em] uppercase text-bone-dim">Address</div>
                <a
                  href="https://maps.google.com/?q=345+Main+St,+Orange,+NJ+07050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display mt-2 block text-[1.6rem] hover:text-[color:var(--ember-2)] transition-colors"
                >
                  345 Main Street
                  <br />
                  City of Orange, NJ 07050
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border-t border-[color:var(--rule)] pt-6 mt-8">
                <div className="text-[0.74rem] tracking-[0.2em] uppercase text-bone-dim">Phone</div>
                <a
                  href="tel:+19736770409"
                  className="display mt-2 block text-[1.6rem] hover:text-[color:var(--ember-2)] transition-colors"
                >
                  (973) 677-0409
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="border-t border-[color:var(--rule)] pt-6 mt-8">
                <div className="text-[0.74rem] tracking-[0.2em] uppercase text-bone-dim mb-3">Hours</div>
                <ul className="space-y-2">
                  {HOURS.map(([day, time]) => (
                    <li key={day} className="flex items-center justify-between text-[0.96rem]">
                      <span className="text-bone-2">{day}</span>
                      <span className="text-bone-dim tabular-nums">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a href="tel:+19736770409" className="btn-ember mt-9 w-full sm:w-auto">
                Call before you come
              </a>
            </Reveal>
          </div>

          {/* map */}
          <Reveal delay={0.12}>
            <div className="relative w-full h-[340px] lg:h-full min-h-[340px] rounded-[3px] overflow-hidden border border-[color:var(--rule)]">
              <iframe
                title="Globe Electronics location map"
                src="https://maps.google.com/maps?q=345%20Main%20St,%20Orange,%20NJ%2007050&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05) sepia(0.25) hue-rotate(-12deg) brightness(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
