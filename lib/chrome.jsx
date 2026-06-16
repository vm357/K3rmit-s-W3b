/* ============================================================
   Kermit Webcraft — shared chrome (Wordmark, Nav, Footer)
   Built on the NVIDIA Design System tokens + components.
   Exported to window for reuse across every page.
   ============================================================ */
const { Button } = window.NVIDIADesignSystem_73d77d;

/* --- Wordmark: green corner-square motif + bold lockup --------------- */
function Wordmark({ dark = false, size = 22 }) {
  const ink = dark ? "var(--color-on-dark)" : "var(--color-ink)";
  const mute = dark ? "var(--color-on-dark-mute)" : "var(--color-mute)";
  const glyph = Math.round(size * 1.72);
  return (
    <a href="index.html" aria-label="Kermit Webcraft — home"
       style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.5), textDecoration: "none" }}>
      <img src="assets/kermit-logo.png" alt="" aria-hidden="true"
           style={{ height: glyph, width: "auto", flex: "none", display: "block" }}></img>
      <span style={{ font: `700 ${size}px/1 var(--font-sans)`, letterSpacing: "-0.015em",
                     color: ink, whiteSpace: "nowrap" }}>
        Kermit<span style={{ color: mute, fontWeight: 500 }}>&#8202;Webcraft</span>
      </span>
    </a>
  );
}

/* --- Rotating utility-strip tagline: flips every 5s ----------------- */
function RotatingTagline() {
  const phrases = ["Built for Business. Crafted for Growth.", "Built to Perform. Crafted to Endure."];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % phrases.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ display: "inline-grid", alignItems: "center", overflow: "hidden", height: 30, lineHeight: "30px", verticalAlign: "middle", perspective: 400 }}>
      {phrases.map((p, n) => (
        <span key={n}
              style={{ gridArea: "1 / 1", display: "flex", alignItems: "center", height: "100%",
                       color: "var(--color-on-dark-mute)",
                       font: "700 10px/1.5 var(--font-sans)", textTransform: "uppercase",
                       letterSpacing: ".5px", whiteSpace: "nowrap",
                       transformOrigin: "center bottom", backfaceVisibility: "hidden",
                       transition: "transform .6s cubic-bezier(.7,0,.2,1), opacity .6s cubic-bezier(.7,0,.2,1)",
                       transform: i === n ? "rotateX(0deg)" : "rotateX(90deg)",
                       opacity: i === n ? 1 : 0 }}>
          {p}
        </span>
      ))}
    </span>
  );
}

/* --- Primary nav: the black chrome frame on every page --------------- */
function Nav({ current = "home" }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and whenever the viewport grows past the
  // mobile breakpoint (so it never lingers hidden-but-open on desktop).
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 761px)");
    const onMq = (e) => { if (e.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, []);

  const links = [
    { id: "work", label: "Work", href: "Work.html" },
    { id: "services", label: "Services", href: "Services.html" },
    { id: "why", label: "Why", href: "Why.html" },
    { id: "contact", label: "Contact", href: "Contact.html" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50,
                     boxShadow: scrolled ? "var(--shadow-sticky)" : "none",
                     transition: "box-shadow .12s linear" }}>
      {/* utility strip */}
      <div style={{ background: "var(--color-surface-elevated)", height: 30,
                    display: "flex", alignItems: "center", justifyContent: "flex-end",
                    padding: "0 clamp(20px, 5vw, 48px)", gap: "var(--space-lg)" }}>
        <RotatingTagline />
        <span aria-hidden="true" style={{ color: "var(--color-hairline-strong)" }}>·</span>
        <a href="Contact.html" style={{ color: "var(--color-primary)", font: "700 10px/1.5 var(--font-sans)",
                       textTransform: "uppercase", letterSpacing: ".5px", textDecoration: "none" }}>
          Free consult →
        </a>
      </div>
      {/* primary bar */}
      <div style={{ position: "relative", background: "var(--color-surface-dark)", height: 68, display: "flex",
                    alignItems: "center", justifyContent: "space-between", padding: "0 clamp(20px, 5vw, 48px)" }}>
        <Wordmark dark />
        <nav style={{ position: "absolute", left: "50%", transform: "translateX(-50%)",
                      display: "flex", gap: "var(--space-xl)" }}
             className="kw-nav-links">
          {links.map((l) => {
            const active = l.id === current;
            return (
              <a key={l.id} href={l.href}
                 style={{ position: "relative", color: active ? "var(--color-on-dark)" : "var(--color-on-dark-mute)",
                          font: "700 15px/1.5 var(--font-sans)", textDecoration: "none",
                          paddingBottom: 4, transition: "color .12s linear" }}
                 onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-on-dark)")}
                 onMouseLeave={(e) => (e.currentTarget.style.color = active ? "var(--color-on-dark)" : "var(--color-on-dark-mute)")}>
                {l.label}
                {active && <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0,
                                  bottom: -2, height: 2, background: "var(--color-primary)" }}></span>}
              </a>
            );
          })}
        </nav>
        {/* desktop CTA */}
        <span className="kw-nav-cta">
          <Button variant="primary" size="sm" as="a" href="Contact.html">Start a project</Button>
        </span>
        {/* mobile hamburger toggle */}
        <button type="button" className="kw-burger" aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open} aria-controls="kw-mobile-menu" onClick={() => setOpen((v) => !v)}>
          <span className={"kw-burger-box" + (open ? " is-open" : "")} aria-hidden="true">
            <span className="kw-burger-line"></span>
            <span className="kw-burger-line"></span>
            <span className="kw-burger-line"></span>
          </span>
        </button>
      </div>

      {/* mobile dropdown panel */}
      <div id="kw-mobile-menu" className={"kw-mobile-menu" + (open ? " is-open" : "")}>
        <nav className="kw-mobile-links">
          {links.map((l) => {
            const active = l.id === current;
            return (
              <a key={l.id} href={l.href} className={"kw-mobile-link" + (active ? " is-active" : "")}
                 onClick={() => setOpen(false)}>
                <span>{l.label}</span>
                <span aria-hidden="true" className="kw-mobile-arrow">→</span>
              </a>
            );
          })}
        </nav>
        <div className="kw-mobile-cta">
          <Button variant="primary" size="md" as="a" href="Contact.html">Start a project</Button>
        </div>
      </div>
      {/* tap-away scrim */}
      <div className={"kw-mobile-scrim" + (open ? " is-open" : "")} onClick={() => setOpen(false)} aria-hidden="true"></div>
    </header>
  );
}

/* --- Footer: dark closing chapter ------------------------------------ */
function Footer() {
  return (
    <footer style={{ background: "var(--color-surface-dark)", padding: "var(--space-section) clamp(20px, 5vw, 48px) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Top band: studio identity + big email CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-section)",
                      alignItems: "start", paddingBottom: "var(--space-section)",
                      borderBottom: "1px solid var(--color-hairline-strong)" }} className="kw-footer-grid">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-xl)" }}>
            <Wordmark dark size={26} />
            {/* Location marker — green-square motif */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span aria-hidden="true" style={{ width: 12, height: 12, background: "var(--color-primary)",
                     borderRadius: "var(--radius-sm)", flex: "none" }}></span>
              <span style={{ color: "var(--color-on-dark)", font: "700 13px/1 var(--font-sans)",
                             textTransform: "uppercase", letterSpacing: ".6px" }}>Based in NJ</span>
              <span aria-hidden="true" style={{ color: "var(--color-hairline-strong)" }}>·</span>
              <span style={{ color: "var(--color-on-dark-mute)", font: "400 13px/1 var(--font-sans)" }}>Working with clients everywhere</span>
            </div>
          </div>

          <div>
            <div style={{ color: "var(--color-mute)", font: "700 12px/1.5 var(--font-sans)",
                          textTransform: "uppercase", letterSpacing: ".6px", marginBottom: "var(--space-sm)" }}>Start a conversation</div>
            <a href="mailto:kermitwebcraft@gmail.com"
               style={{ display: "inline-block", color: "var(--color-on-dark)", textDecoration: "none",
                        font: "700 clamp(20px, 2.4vw, 26px)/1.2 var(--font-sans)", letterSpacing: "-0.01em",
                        borderBottom: "2px solid var(--color-primary)", paddingBottom: 4 }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-dark)")}>
              kermitwebcraft@gmail.com
            </a>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)", marginTop: "var(--space-xl)" }}>
              {[["Home", "index.html"], ["Work", "Work.html"], ["Services", "Services.html"], ["Why", "Why.html"], ["Contact", "Contact.html"]].map(([label, href]) => (
                <a key={label} href={href} style={{ color: "var(--color-on-dark-mute)", font: "700 14px/1 var(--font-sans)", textDecoration: "none" }}
                   onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                   onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-dark-mute)")}>{label}</a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-lg)",
                      padding: "var(--space-xl) 0", flexWrap: "wrap" }}>
          <span style={{ color: "var(--color-mute)", font: "700 10px/1.5 var(--font-sans)",
                         textTransform: "uppercase", letterSpacing: ".5px" }}>
            © 2026 Kermit Webcraft. All Rights Reserved · It’s not easy being seen. We make it easier.
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-sm)", color: "var(--color-mute)", font: "400 12px/1.25 var(--font-sans)" }}>
            <a href="Privacy.html" style={{ color: "var(--color-on-dark-mute)", textDecoration: "none" }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-dark-mute)")}>Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="Terms.html" style={{ color: "var(--color-on-dark-mute)", textDecoration: "none" }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-dark-mute)")}>Terms</a>
            <span aria-hidden="true">·</span>
            <a href="Accessibility.html" style={{ color: "var(--color-on-dark-mute)", textDecoration: "none" }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-dark-mute)")}>Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, Nav, Footer });
