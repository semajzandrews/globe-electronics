import Reveal from "./Reveal";

function Icon({ name }: { name: string }) {
  const common = { width: 30, height: 30, viewBox: "0 0 32 32", fill: "none", stroke: "var(--ember-2)", strokeWidth: 1.5 } as const;
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <rect x="9" y="3" width="14" height="26" rx="2.5" />
          <line x1="13" y1="25.5" x2="19" y2="25.5" />
          <line x1="9" y1="7" x2="23" y2="7" /><line x1="9" y1="22" x2="23" y2="22" />
        </svg>
      );
    case "tablet":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="22" height="24" rx="2.5" />
          <circle cx="16" cy="24.5" r="1" fill="var(--ember-2)" />
        </svg>
      );
    case "tv":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="26" height="16" rx="1.5" />
          <line x1="11" y1="27" x2="21" y2="27" /><line x1="16" y1="23" x2="16" y2="27" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="4" y="11" width="22" height="10" rx="1.5" /><line x1="28" y1="14" x2="28" y2="18" />
          <line x1="9" y1="16" x2="16" y2="16" stroke="var(--ember-2)" strokeWidth="2" />
        </svg>
      );
    case "speaker":
      return (
        <svg {...common}>
          <rect x="8" y="3" width="16" height="26" rx="2.5" />
          <circle cx="16" cy="20" r="4" /><circle cx="16" cy="9" r="2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="6" /><path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
        </svg>
      );
  }
}

const SERVICES = [
  { icon: "phone", title: "Phone repair", body: "Cracked screens, charge ports, batteries, water damage, speakers. Most done same day." },
  { icon: "tablet", title: "Tablet repair", body: "iPad and Android tablet glass, batteries and ports brought back to working order." },
  { icon: "tv", title: "TV & home audio", body: "Flat panels, stereo systems, Blu-ray and DVD players diagnosed and fixed on the bench." },
  { icon: "battery", title: "Battery & power", body: "A swollen or dead battery does not mean a dead device. We swap it and test it." },
  { icon: "speaker", title: "Bluetooth speakers", body: "Portable speakers that cut out, will not charge, or lost their pairing, sorted out." },
  { icon: "tool", title: "Board-level work", body: "When a part fails deep inside, we solder and reseat instead of telling you to replace it." },
];

export default function Repairs() {
  return (
    <section id="repairs" className="relative py-24 sm:py-32 bg-bench-2">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <span className="kicker">Repairs</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display mt-6 text-[clamp(2.4rem,6.5vw,5rem)] max-w-[16ch]">
            If it has a circuit, bring it in.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-[52ch] text-bone-2 text-[1.04rem] leading-relaxed">
            We are not a kiosk that only swaps screens. Globe has fixed phones, tablets and home
            electronics on this block since 2009, and the diagnosis is always free.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--rule)] border border-[color:var(--rule)]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={Math.round(i * 5) / 100}>
              <div className="bg-bench-2 p-7 sm:p-8 h-full hover:bg-bench-3 transition-colors duration-300 group">
                <Icon name={s.icon} />
                <h3 className="display mt-5 text-[1.7rem]">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-bone-dim group-hover:text-bone-2 transition-colors">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
