/* ============================================================
   Kermit Webcraft — landing page sections + tweakable App.
   ============================================================ */
const { Button, Badge, Card, StatCallout, PillTabs } = window.NVIDIADesignSystem_73d77d;

const WRAP = { maxWidth: "var(--container-max)", margin: "0 auto" };
const PAD = "var(--space-section) clamp(20px, 5vw, 48px)";

/* ---------- HERO (3 layout variants × light/dark) ---------- */
function Hero({ dark, layout }) {
  const bg = dark ? "var(--color-surface-dark)" : "var(--color-canvas)";
  const ink = dark ? "var(--color-on-dark)" : "var(--color-ink)";
  const mute = dark ? "var(--color-on-dark-mute)" : "var(--color-body)";
  const eyebrow =
  <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)",
    textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-lg)" }}>
      Independent web studio · Design + Build
    </div>;

  const heading =
  <h1 style={{ ...{ margin: 0, color: ink, font: "700 clamp(36px, 5.2vw, 60px)/1.04 var(--font-sans)", letterSpacing: "-0.02em" }, color: "rgb(255, 255, 255)" }}>
      We Design.<br /><span style={{ color: "var(--color-primary)" }}>We Craft.</span><br /><span style={{ color: "rgb(255, 255, 255)" }}>We Care.</span>
    </h1>;

  const tagline =
  <p style={{ margin: 0, color: ink, font: "700 clamp(19px, 2.2vw, 23px)/1.3 var(--font-sans)", letterSpacing: "-0.01em" }}>
      Built for Business. <span style={{ color: "var(--color-primary)" }}>Crafted for Growth.</span>
    </p>;

  const sub =
  <p style={{ color: mute, font: "400 clamp(17px, 2vw, 21px)/1.5 var(--font-sans)", maxWidth: 540 }}>
      Crafted with purpose and built for results, our websites combine stunning design with
      powerful functionality to help businesses make lasting impressions and achieve meaningful
      growth online.
    </p>;

  const ctas =
  <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
      <Button variant="primary" size="lg" as="a" href="Contact.html">Start a project</Button>
      <Button variant={dark ? "outline-on-dark" : "outline"} size="lg" as="a" href="Work.html">See our work</Button>
    </div>;

  const miniStats =
  <div style={{ display: "flex", gap: "var(--space-section)", flexWrap: "wrap" }}>
      {[["98", "avg Lighthouse"], ["0.8s", "median load"], ["120+", "sites shipped"]].map(([v, c]) =>
    <div key={c}>
          <div style={{ color: ink, font: "700 32px/1 var(--font-sans)", letterSpacing: "-0.02em" }}>{v}</div>
          <div style={{ color: mute, font: "400 14px/1.4 var(--font-sans)", marginTop: 6 }}>{c}</div>
        </div>
    )}
    </div>;


  let body;
  if (layout === "centered") {
    body =
    <div style={{ ...WRAP, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-xl)" }}>
        <Reveal>{eyebrow}</Reveal>
        <Reveal delay={80}><div style={{ display: "flex", justifyContent: "center" }}>{heading}</div></Reveal>
        <Reveal delay={120}><div style={{ display: "flex", justifyContent: "center" }}>{tagline}</div></Reveal>
        <Reveal delay={160}><div style={{ display: "flex", justifyContent: "center" }}>{sub}</div></Reveal>
        <Reveal delay={240}><div style={{ display: "flex", justifyContent: "center" }}>{ctas}</div></Reveal>
        <Reveal delay={320} style={{ marginTop: "var(--space-xl)", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>{miniStats}</div>
        </Reveal>
      </div>;

  } else if (layout === "editorial") {
    body =
    <div style={WRAP}>
        <Reveal>{eyebrow}</Reveal>
        <Reveal delay={80}>{heading}</Reveal>
        <Reveal delay={120}><div style={{ marginTop: "var(--space-md)" }}>{tagline}</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-section)",
        alignItems: "end", marginTop: "var(--space-xl)" }} className="kw-hero-split">
          <Reveal delay={160}>{sub}<div style={{ marginTop: "var(--space-xl)" }}>{ctas}</div></Reveal>
          <Reveal delay={240}>{miniStats}</Reveal>
        </div>
      </div>;

  } else {/* split (default) */
    body =
    <div style={{ ...WRAP, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "var(--space-section)", alignItems: "center" }} className="kw-hero-split">
        <div>
          <Reveal>{eyebrow}</Reveal>
          <Reveal delay={80}>{heading}</Reveal>
          <Reveal delay={160}><div style={{ marginTop: "var(--space-lg)" }}>{sub}</div></Reveal>
          <Reveal delay={240}><div style={{ marginTop: "var(--space-xl)" }}>{ctas}</div></Reveal>
        </div>
        <div>
          <Reveal delay={200} y={24}><BrowserWireframe /></Reveal>
        </div>
      </div>;

  }

  return (
    <section style={{ position: "relative", background: bg, padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 16, height: 16, background: "var(--color-primary)", backgroundColor: "rgb(0, 0, 0)" }}></span>
      {dark && <HeroFX />}
      <div style={{ position: "relative" }}>{body}</div>
    </section>);

}

/* ---------- SERVICES ---------- */
function Services() {
  const items = [
  { sq: "top-left", t: "Design", b: "Crafted to make an impression. Thoughtful design, refined details, and a clear visual identity help your business stand out from the crowd." },
  { sq: "top-left", t: "Development", b: "Built to perform. Crafted to endure. A strong technical foundation ensures your website remains secure and dependable as your business grows." },
  { sq: "top-left", t: "Performance", b: "Sub-second loads and green Core Web Vitals — so your site stays snappy under traffic and never makes a visitor wait." },
  { sq: "top-left", t: "Care & Hosting", b: "Monthly tending: updates, backups, monitoring, and small changes. We keep the pond clean long after launch." }];

  return (
    <section id="services" style={{ background: "var(--color-canvas)", padding: PAD }}>
      <div style={WRAP}>
        <Reveal>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>What we do</div>
          <h2 style={{ margin: "0 0 var(--space-xl)", color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.15 var(--font-sans)", letterSpacing: "-0.01em" }}>
            Four disciplines, one studio.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-4">
          {items.map((f, i) =>
          <Reveal key={f.t} delay={i * 80}>
              <Card cornerSquare corner={f.sq} padding="xxl" style={{ height: "100%" }}>
                <div style={{ font: "700 11px/1 var(--font-sans)", color: "var(--color-mute)", letterSpacing: ".5px", marginBottom: "var(--space-md)" }}>0{i + 1}</div>
                <h3 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 20px/1.25 var(--font-sans)" }}>{f.t}</h3>
                <p style={{ margin: 0, color: "var(--color-body)", font: "400 15px/1.6 var(--font-sans)" }}>{f.b}</p>
              </Card>
            </Reveal>
          )}
        </div>
        <Reveal delay={120}>
          <div style={{ marginTop: "var(--space-xl)" }}>
            <Button variant="ghost-link" as="a" href="Services.html">Explore services in detail</Button>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
  { n: "01", t: "Discover", b: "We learn your business, audience, and the one job the site must do. Sitemap, scope, and a fixed quote — no surprises." },
  { n: "02", t: "Design", b: "Every great build starts with a plan. We sketch the framework, define the user journey, and design with clarity before a single line of code is written." },
  { n: "03", t: "Craft", b: "This is where the webcraft happens. Every website is carefully built for performance, accessibility, and reliability - creating a strong foundation." },
  { n: "04", t: "Care", b: "Launch is just the beginning. We tend the site after it's built with reliable hosting, updates, backups, and ongoing support." }];

  return (
    <section id="process" style={{ background: "var(--color-surface-soft)", padding: PAD, backgroundColor: "rgba(247, 247, 247, 0)" }}>
      <div style={WRAP}>
        <Reveal>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>How we work</div>
          <h2 style={{ margin: "0 0 var(--space-xl)", color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.15 var(--font-sans)", letterSpacing: "-0.01em" }}>
            A calm, transparent build.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--color-hairline)" }} className="kw-grid-4">
          {steps.map((s, i) =>
          <Reveal key={s.n} delay={i * 90}>
              <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-xxl) 0", borderTop: "2px solid var(--color-primary)", marginTop: -1, height: "100%", boxSizing: "border-box" }}>
                <div style={{ color: "var(--color-primary)", font: "700 34px/1 var(--font-sans)", letterSpacing: "-0.02em", marginBottom: "var(--space-md)" }}>{s.n}</div>
                <h3 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 18px/1.3 var(--font-sans)" }}>{s.t}</h3>
                <p style={{ margin: 0, font: "400 15px/1.6 var(--font-sans)", paddingRight: "var(--space-md)", color: "rgb(15, 13, 13)", height: "96px" }}>{s.b}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- STATS (animated count-up on dark) ---------- */
function Stats() {
  const stats = [
  { node: <CountUp to={75} suffix="%" />, c: "of people judge a business’s credibility on its website alone." },
  { node: <CountUp to={88} suffix="%" />, c: "of customers research online before they buy, call, or visit." },
  { node: <CountUp to={0.5} decimals={1} suffix="s" />, c: "is all it takes for someone to form a first impression of your site." },
  { node: <span>24/7</span>, c: "your site keeps building trust and capturing leads while you’re off the clock." }];

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--color-surface-dark)", padding: PAD }}>
      <div aria-hidden="true" className="kw-pulse" style={{ position: "absolute", inset: 0,
        background: "radial-gradient(90% 120% at 15% 50%, color-mix(in srgb, var(--color-primary) 15%, transparent), transparent 55%)" }}></div>
      <div style={{ ...WRAP, position: "relative" }}>
        <Reveal>
          <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-xl)" }}>Why a website pays off</div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-4">
          {stats.map((s, i) =>
          <Reveal key={i} delay={i * 80}>
              <div style={{ borderLeft: "2px solid var(--color-primary)", paddingLeft: "var(--space-lg)" }}>
                <div style={{ color: "var(--color-on-dark)", font: "700 clamp(40px,5vw,56px)/1 var(--font-sans)", letterSpacing: "-0.03em" }}>{s.node}</div>
                <p style={{ margin: "var(--space-md) 0 0", color: "var(--color-on-dark-mute)", font: "400 14px/1.5 var(--font-sans)" }}>{s.c}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- WORK PREVIEW ---------- */
const FEATURED = [
{ t: "Angel’s Home Improvement", cat: "Home Services", g: "linear-gradient(135deg,#0f2a16,#1f5e2e)", tag: "Design + Build" },
{ t: "Andelina Beauty", cat: "Beauty", g: "linear-gradient(135deg,#3a0f22,#7c1f4a)", tag: "Rebuild" },
{ t: "United Automotive Consultants", cat: "Automotive", g: "linear-gradient(135deg,#2a230f,#5e4b1c)", tag: "Design + Build" }];

function WorkPreview() {
  return (
    <section style={{ background: "var(--color-canvas)", padding: PAD }}>
      <div style={WRAP}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-lg)", marginBottom: "var(--space-xl)", flexWrap: "wrap" }}>
          <Reveal>
            <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>Selected work</div>
            <h2 style={{ margin: 0, color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.15 var(--font-sans)", letterSpacing: "-0.01em" }}>
              Recent ponds we’ve tended.
            </h2>
          </Reveal>
          <Reveal delay={80}><Button variant="ghost-link" as="a" href="Work.html">View all work</Button></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-3">
          {FEATURED.map((w, i) =>
          <Reveal key={w.t} delay={i * 90}>
              <a href="Work.html" style={{ textDecoration: "none", display: "block" }} className="kw-work-card">
                <Card cornerSquare padding="none" style={{ overflow: "hidden", height: "100%" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", containerType: "inline-size", background: "var(--color-surface-soft)", overflow: "hidden", borderBottom: "1px solid var(--color-hairline)" }}>
                    <SiteMock title={w.t} />
                    <div className="kw-work-overlay" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.45)", opacity: 0, transition: "opacity .15s linear", zIndex: 3 }}>
                      <span style={{ color: "var(--color-on-dark)", font: "700 13px/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".6px" }}>View case study →</span>
                    </div>
                  </div>
                  <div style={{ padding: "var(--space-xl)" }}>
                    <div style={{ marginBottom: "var(--space-md)" }}><Badge>{w.tag}</Badge></div>
                    <h3 style={{ margin: "0 0 var(--space-xs)", color: "var(--color-ink)", font: "700 18px/1.3 var(--font-sans)" }}>{w.t}</h3>
                    <p style={{ margin: 0, color: "var(--color-mute)", font: "400 14px/1.4 var(--font-sans)" }}>{w.cat}</p>
                  </div>
                </Card>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- CTA BRIDGE ---------- */
function CtaBridge() {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "clamp(40px,5vw,56px) clamp(20px,5vw,48px)", borderTop: "1px solid var(--color-hairline-strong)" }}>
      <div style={{ ...WRAP, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-xl)", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ margin: 0, color: "var(--color-on-dark)", font: "700 clamp(24px,3vw,32px)/1.2 var(--font-sans)", letterSpacing: "-0.01em" }}>Ready to leap?</h2>
          <p style={{ margin: "var(--space-sm) 0 0", color: "var(--color-on-dark-mute)", font: "400 16px/1.5 var(--font-sans)" }}>Tell us about your project. We reply within a day.</p>
        </div>
        <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" as="a" href="Contact.html">Start a project</Button>
          <Button variant="outline-on-dark" size="lg" as="a" href="Work.html">See the work</Button>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, Services, Process, Stats, WorkPreview, CtaBridge });