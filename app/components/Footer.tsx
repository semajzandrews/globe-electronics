function GlobeMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" stroke="var(--ember-2)" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="4" ry="9.2" stroke="var(--bone-2)" strokeWidth="1.1" />
      <path d="M2.8 12h18.4M4 7.4h16M4 16.6h16" stroke="var(--bone-2)" strokeWidth="1.1" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-bench border-t border-[color:var(--rule)]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <GlobeMark />
              <span className="display text-[1.6rem]">Globe Electronics</span>
            </div>
            <p className="mt-5 max-w-[38ch] text-bone-dim text-[0.95rem] leading-relaxed">
              We open it up and bring it back. Phone, tablet and home-electronics repair and sales on
              Main Street in the City of Orange since 2009.
            </p>
            <a href="tel:+19736770409" className="btn-ember mt-7">
              (973) 677-0409
            </a>
          </div>

          <div>
            <div className="text-[0.72rem] tracking-[0.2em] uppercase text-bone-dim">Find us</div>
            <p className="mt-4 text-bone-2 leading-relaxed">
              345 Main Street
              <br />
              City of Orange, NJ 07050
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {[
                ["#bench", "The Bench"],
                ["#repairs", "Repairs"],
                ["#shop", "Shop"],
                ["#visit", "Visit"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-bone-dim hover:text-bone-2 transition-colors text-[0.92rem]">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[0.72rem] tracking-[0.2em] uppercase text-bone-dim">Hours</div>
            <div className="mt-4 space-y-1.5 text-[0.92rem]">
              <div className="flex justify-between gap-4">
                <span className="text-bone-2">Mon – Sat</span>
                <span className="text-bone-dim tabular-nums">9:00 AM – 7:30 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-bone-2">Sunday</span>
                <span className="text-bone-dim tabular-nums">10:00 AM – 5:00 PM</span>
              </div>
            </div>
            <p className="mt-5 text-bone-dim text-[0.85rem] leading-relaxed">
              Free diagnosis. Most phone &amp; tablet repairs same-day. Cash or card.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--rule)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-bone-dim text-[0.82rem]">
            © {new Date().getFullYear()} Globe Electronics Inc. City of Orange, New Jersey.
          </span>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone-dim text-[0.82rem] hover:text-[color:var(--ember-2)] transition-colors"
          >
            built <span className="display">bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
