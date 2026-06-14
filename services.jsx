/* ============================================================
   Kermit Webcraft — Services page: detailed capabilities + pricing.
   ============================================================ */
const { Button, Badge, Card } = window.NVIDIADesignSystem_73d77d;

const SV_WRAP = { maxWidth: "var(--container-max)", margin: "0 auto" };
const SV_PAD = "var(--space-section) clamp(20px, 5vw, 48px)";

const DISCIPLINES = [
  { id: "design", n: "01", t: "Design", lead: "It's not just decoration. It's direction.",
    body: "We start with your goals and shape a clear path for your visitors. Every page is designed to build trust, communicate value, and move people towards action.",
    items: ["Brand-focused visual design", "Strategic page architecture", "Design systems for consistancy", "Responsive, mobile layouts"] },
  { id: "build", n: "02", t: "Development", lead: "Hand-coded, editor-friendly.",
    body: "We approach development like a craft - combining modern tools, proven practices, and meticulous attention to detail to create websites built to last.",
    items: ["Hand-crafted front-ends", "Clean, maintainable code", "Custom functionality & integrations ", "Responsive across all devices"] },
  { id: "perf", n: "03", t: "Performance", lead: "Fast loads, smooth everywhere.",
    body: "Speed is a feature. We ship green Core Web Vitals and a build that stays quick under load — on every device, every connection.",
    items: ["Sub-second load targets", "Core Web Vitals tuning", "Cross-device testing", "Image & asset optimization"] },
];

const OFFERING = [
  { n: "01", t: "We build it", b: "A custom website, designed and hand-coded around your business — fast, responsive, and easy on the eye. Built once, built right, no page-builder shortcuts." },
  { n: "02", t: "We host & maintain it", b: "Once it’s live, we keep it that way: reliable hosting, an SSL certificate, updates, backups, and the small edits that keep it current. You never touch a server." },
];

function ServicesHeader() {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)", position: "relative", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 16, height: 16, background: "var(--color-primary)" }}></span>
      <div aria-hidden="true" className="kw-pulse" style={{ position: "absolute", inset: 0, background: "radial-gradient(100% 80% at 12% 0%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%)" }}></div>
      <div style={{ ...SV_WRAP, position: "relative" }}>
        <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-lg)" }}>What we do</div>
        <h1 style={{ margin: 0, color: "var(--color-on-dark)", font: "700 clamp(34px,5vw,56px)/1.05 var(--font-sans)", letterSpacing: "-0.02em", maxWidth: 820 }}>
          Design, build, and speed — under one lily pad.
        </h1>
        <p style={{ margin: "var(--space-lg) 0 0", color: "var(--color-on-dark-mute)", font: "400 clamp(16px,2vw,20px)/1.5 var(--font-sans)", maxWidth: 640 }}>
          Most agencies hand you off three times before launch. We don’t. The same small team that
          designs your site builds it, ships it, and tends it.
        </p>
      </div>
    </section>
  );
}

/* Thin green accent rule that draws in (scaleX) when scrolled into view.
   On-brand, functional, reduced-motion aware. */
function DrawLine({ delay = 0, width = 56, style }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(true);
  React.useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (reduce || !el) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    setShown(false);
    const safety = setTimeout(() => setShown(true), 1600);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); clearTimeout(safety); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return (
    <span ref={ref} aria-hidden="true"
          style={{ display: "block", width, height: 3, background: "var(--color-primary)", borderRadius: 2,
                   transformOrigin: "left center", transform: shown ? "scaleX(1)" : "scaleX(0)",
                   transition: `transform .55s cubic-bezier(.2,.7,.2,1) ${delay}ms`, ...style }}></span>
  );
}

function Disciplines() {
  return (
    <section style={{ background: "var(--color-canvas)", padding: SV_PAD }}>
      <div style={{ ...SV_WRAP, display: "flex", flexDirection: "column", gap: "var(--space-section)" }}>
        {DISCIPLINES.map((d, i) => (
          <div key={d.id} id={d.id} style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-section)", alignItems: "start", scrollMarginTop: 110 }} className="kw-hero-split">
            <Reveal y={20}>
              <div style={{ color: "var(--color-primary)", font: "700 44px/1 var(--font-sans)", letterSpacing: "-0.03em", marginBottom: "var(--space-md)" }}>{d.n}</div>
              <h2 style={{ margin: "0 0 var(--space-md)", color: "var(--color-ink)", font: "700 clamp(26px,3vw,34px)/1.12 var(--font-sans)", letterSpacing: "-0.01em" }}>{d.t}</h2>
              <DrawLine delay={160} style={{ marginBottom: "var(--space-md)" }} />
              <p style={{ margin: 0, color: "var(--color-primary-dark)", font: "700 18px/1.4 var(--font-sans)" }}>{d.lead}</p>
            </Reveal>
            <div>
              <Reveal y={20} delay={90}>
                <p style={{ margin: "0 0 var(--space-xl)", color: "var(--color-body)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 560 }}>{d.body}</p>
              </Reveal>
              <Reveal y={20} delay={170}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md) var(--space-xl)" }} className="kw-list-2">
                  {d.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: "var(--space-sm)", alignItems: "flex-start", color: "var(--color-body)", font: "400 15px/1.45 var(--font-sans)" }}>
                      <span aria-hidden="true" style={{ width: 8, height: 8, background: "var(--color-primary)", borderRadius: 2, marginTop: 6, flex: "none" }}></span>
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="working-together" style={{ background: "var(--color-surface-soft)", padding: SV_PAD }}>
      <div style={SV_WRAP}>
        <Reveal y={20}>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>How working together works</div>
          <h2 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.12 var(--font-sans)", letterSpacing: "-0.01em" }}>
            Simple by design: we build it, then we keep it running.
          </h2>
          <p style={{ margin: "0 0 var(--space-xl)", color: "var(--color-body)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 620 }}>
            No tiers, no packages to decode. Just two things done well — a website built for your
            business, and the hosting and care to keep it online.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-2">
          {OFFERING.map((o, i) => (
            <Reveal key={o.n} y={24} delay={i * 110} style={{ height: "100%" }}>
              <Card cornerSquare corner="top-left" padding="xxl" className="kw-offer-card" style={{ height: "100%" }}>
                <div style={{ color: "var(--color-primary)", font: "700 34px/1 var(--font-sans)", letterSpacing: "-0.02em", marginBottom: "var(--space-md)" }}>{o.n}</div>
                <h3 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 22px/1.2 var(--font-sans)" }}>{o.t}</h3>
                <p style={{ margin: 0, color: "var(--color-body)", font: "400 16px/1.6 var(--font-sans)" }}>{o.b}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal y={16} delay={120}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", flexWrap: "wrap", marginTop: "var(--space-xl)" }}>
            <Button variant="primary" as="a" href="Contact.html">Get a quote</Button>
            <p style={{ margin: 0, color: "var(--color-mute)", font: "400 14px/1.5 var(--font-sans)", maxWidth: 460 }}>
              Every project is quoted to fit — tell us what you need and we’ll send a straight, fixed price. No surprises.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesCta() {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "clamp(40px,5vw,56px) clamp(20px,5vw,48px)" }}>
      <div style={{ ...SV_WRAP, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-xl)", flexWrap: "wrap" }}>
        <Reveal y={16}>
          <div>
            <h2 style={{ margin: 0, color: "var(--color-on-dark)", font: "700 clamp(24px,3vw,32px)/1.2 var(--font-sans)", letterSpacing: "-0.01em" }}>Not sure which fits?</h2>
            <p style={{ margin: "var(--space-sm) 0 0", color: "var(--color-on-dark-mute)", font: "400 16px/1.5 var(--font-sans)" }}>Tell us about the project and we’ll point you to the right starting point.</p>
          </div>
        </Reveal>
        <Reveal y={16} delay={100}>
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" as="a" href="Contact.html">Start a project</Button>
            <Button variant="outline-on-dark" size="lg" as="a" href="Work.html">See the work</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesApp() {
  return (
    <div>
      <Nav current="services" />
      <main>
        <ServicesHeader />
        <Disciplines />
        <Packages />
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<ServicesApp />);
