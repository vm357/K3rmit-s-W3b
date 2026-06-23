/* ============================================================
   Kermit Webcraft — Why page. The sales argument for a custom
   website. Copy adapted from the studio's "Why A Website?" deck.
   ============================================================ */
const { Button, Badge, Card } = window.NVIDIADesignSystem_73d77d;

const WY_WRAP = { maxWidth: "var(--container-max)", margin: "0 auto" };
const WY_PAD = "var(--space-section) clamp(20px, 5vw, 48px)";

/* ---------- HERO (dark chapter) ---------- */
function WhyHero() {
  return (
    <section style={{ position: "relative", background: "var(--color-surface-dark)", padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 16, height: 16, background: "var(--color-primary)" }}></span>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(90% 80% at 85% 8%, rgba(118,185,0,.14), transparent 58%)" }}></div>
      <div style={{ ...WY_WRAP, position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "var(--space-section)", alignItems: "center" }} className="kw-hero-split">
        <div>
          <Reveal now>
            <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-lg)" }}>Why a website</div>
          </Reveal>
          <Reveal now delay={80}>
            <h1 style={{ margin: 0, color: "var(--color-on-dark)", font: "700 clamp(34px,5vw,58px)/1.04 var(--font-sans)", letterSpacing: "-0.02em" }}>
              If you don’t show up,<br /><span style={{ color: "var(--color-primary)" }}>you don’t exist.</span>
            </h1>
          </Reveal>
          <Reveal now delay={160}>
            <p style={{ margin: "var(--space-lg) 0 var(--space-xl)", color: "var(--color-on-dark-mute)", font: "400 clamp(17px,2vw,20px)/1.55 var(--font-sans)", maxWidth: 520 }}>
              Your future customers are searching right now — comparing tabs, weighing trust,
              deciding who to call. A website is how you get into that shortlist instead of
              watching a competitor take the job.
            </p>
          </Reveal>
          <Reveal now delay={240}>
            <Button variant="primary" size="lg" as="a" href="Contact.html" className="kw-cta-btn kw-cta-btn--primary">Start a project</Button>
          </Reveal>
        </div>
        <Reveal now delay={200} y={24}>
          <div style={{ border: "1px solid var(--color-hairline-strong)", borderRadius: "var(--radius-sm)", padding: "var(--space-xxl)", background: "var(--color-surface-elevated)", position: "relative" }}>
            <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, background: "var(--color-primary)" }}></span>
            <div style={{ color: "var(--color-on-dark)", font: "700 clamp(48px,6vw,72px)/1 var(--font-sans)", letterSpacing: "-0.03em" }}>
              <CountUp to={15000} />+
            </div>
            <p style={{ margin: "var(--space-md) 0 0", color: "var(--color-on-dark-mute)", font: "400 16px/1.5 var(--font-sans)" }}>
              new U.S. business applications are filed <strong style={{ color: "var(--color-on-dark)" }}>every single day</strong>.
              Your market gets more crowded by the hour.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- THE PROBLEM ---------- */
function WhyProblem() {
  const cols = [
    { k: "A", t: "Lost jobs", eq: "No website = lost jobs", b: "If someone searches for your exact service today, your competitors show up — and you don’t. That’s a job that was yours to lose." },
    { k: "B", t: "Less exposure", eq: "Less visibility = less opportunity", b: "You can be the best in town and still be invisible. If you’re not where people look, you’re not in the running." },
    { k: "C", t: "More competition", eq: "More competition = less attention", b: "Thousands of new businesses launch daily. Standing still means quietly falling behind the ones who showed up online." },
  ];
  return (
    <section style={{ background: "var(--color-canvas)", padding: WY_PAD }}>
      <div style={WY_WRAP}>
        <Reveal>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>The cost of sitting out</div>
          <h2 style={{ margin: "0 0 var(--space-xl)", color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.15 var(--font-sans)", letterSpacing: "-0.01em", maxWidth: 720 }}>
            No website isn’t neutral. It’s a slow, daily leak.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-3">
          {cols.map((c, i) => (
            <Reveal key={c.k} delay={i * 90} style={{ height: "100%" }}>
              <div className="kw-lift-card" style={{ height: "100%" }}>
                <Card cornerSquare corner="top-left" padding="xxl" className="kw-card-inner" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-md)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, background: "var(--color-ink)", color: "var(--color-on-dark)", font: "700 14px/1 var(--font-sans)", borderRadius: "var(--radius-sm)" }}>{c.k}</span>
                    <h3 style={{ margin: 0, color: "var(--color-ink)", font: "700 20px/1.2 var(--font-sans)" }}>{c.t}</h3>
                  </div>
                  <div style={{ color: "var(--color-primary-dark)", font: "700 15px/1.4 var(--font-sans)", marginBottom: "var(--space-md)" }}>{c.eq}</div>
                  <p style={{ margin: 0, color: "var(--color-body)", font: "400 15px/1.6 var(--font-sans)" }}>{c.b}</p>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW PEOPLE LOOK (buyer journey) ---------- */
function WhyJourney() {
  const steps = [
    { n: "01", t: "The idea", b: "Someone starts daydreaming about a project — a new kitchen, a fresh remodel. Before they call anyone, they casually start looking online for ideas and inspiration." },
    { n: "02", t: "The search", b: "This is the moment that decides everything. They open several tabs and compare options side by side — hunting for credibility, professionalism, and reviews. They’re deciding who to trust.", hot: true },
    { n: "03", t: "The shortlist", b: "They pick a small handful to actually call and book a consultation. If you didn’t earn trust during the search, you were cut before the phone ever rang." },
  ];
  return (
    <section style={{ background: "var(--color-surface-soft)", padding: WY_PAD }}>
      <div style={WY_WRAP}>
        <Reveal>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)" }}>How people actually choose</div>
          <h2 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 clamp(28px,3.5vw,38px)/1.15 var(--font-sans)", letterSpacing: "-0.01em", maxWidth: 720 }}>
            The job is won during the research — long before the call.
          </h2>
          <p style={{ margin: "0 0 var(--space-xl)", color: "var(--color-body)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 620 }}>
            Almost every customer follows the same path. Here’s where you’re won or quietly lost.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--color-hairline)" }} className="kw-grid-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-xxl) 0",
                            borderTop: `2px solid ${s.hot ? "var(--color-primary)" : "var(--color-hairline-strong)"}`, marginTop: -1, height: "100%", boxSizing: "border-box" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-md)" }}>
                  <span style={{ color: s.hot ? "var(--color-primary)" : "var(--color-ash)", font: "700 34px/1 var(--font-sans)", letterSpacing: "-0.02em" }}>{s.n}</span>
                  {s.hot && <Badge variant="accent">Make-or-break</Badge>}
                </div>
                <h3 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 19px/1.3 var(--font-sans)" }}>{s.t}</h3>
                <p style={{ margin: 0, color: "var(--color-body)", font: "400 15px/1.6 var(--font-sans)", paddingRight: "var(--space-md)" }}>{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 24/7 STOREFRONT (dark chapter) ---------- */
function WhyStorefront() {
  const points = [
    { t: "Compete even when you’re busy", b: "Even when you’re on a job, your next one is finding you. Your site does the pre-selling while your hands are full." },
    { t: "People look when you’re away", b: "Most of your future customers research you at night or on the weekend — exactly when your phone is off and you’re finally resting." },
    { t: "A missed call isn’t a missed job", b: "You can’t always pick up. But your website can still capture that lead and hold their interest until you get back." },
  ];
  return (
    <section style={{ position: "relative", background: "var(--color-surface-dark)", padding: WY_PAD, overflow: "hidden" }}>
      <div aria-hidden="true" className="kw-storefront-glow" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(80% 70% at 12% 10%, rgba(118,185,0,.2), transparent 58%)" }}></div>
      <div style={{ ...WY_WRAP, position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-section)", alignItems: "center" }} className="kw-hero-split">
          <Reveal>
            <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-md)" }}>Your 24/7 storefront</div>
            <h2 style={{ margin: "0 0 var(--space-lg)", color: "var(--color-on-dark)", font: "700 clamp(28px,3.6vw,42px)/1.1 var(--font-sans)", letterSpacing: "-0.02em" }}>
              Your website never has a day off.
            </h2>
            <p style={{ margin: 0, color: "var(--color-on-dark-mute)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 480 }}>
              A website means your business is working even when you’re not — capturing interest,
              building trust, and turning visitors into leads around the clock. By the time someone
              reaches out, they’ve already seen your work and decided they like you. The site does the
              convincing, so you can focus on closing.
            </p>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <div className="kw-storefront-point" style={{ borderLeft: "2px solid var(--color-primary)", paddingLeft: "var(--space-lg)" }}>
                  <h3 style={{ margin: "0 0 var(--space-xs)", color: "var(--color-on-dark)", font: "700 17px/1.3 var(--font-sans)" }}>{p.t}</h3>
                  <p style={{ margin: 0, color: "var(--color-on-dark-mute)", font: "400 15px/1.55 var(--font-sans)" }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FLYWHEEL + CLOSING CTA ---------- */
function ChainFlow({ chain }) {
  const ref = React.useRef(null);
  const [play, setPlay] = React.useState(false);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (reduce || !el || !("IntersectionObserver" in window)) { setPlay(true); return; }
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) { setPlay(true); io.disconnect(); }
    }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={"kw-chain" + (play ? " kw-chain--play" : "")} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-section)" }}>
      {chain.map((c, i) => (
        <React.Fragment key={c}>
          <span className="kw-chain-chip" style={{ "--d": i * 130 + "ms", font: "700 15px/1 var(--font-sans)", padding: "12px 18px", borderRadius: "var(--radius-sm)",
                         color: i === chain.length - 1 ? "var(--color-on-primary)" : "var(--color-ink)",
                         background: i === chain.length - 1 ? "var(--color-primary)" : "var(--color-surface-soft)",
                         border: i === chain.length - 1 ? "none" : "1px solid var(--color-hairline)" }}>{c}</span>
          {i < chain.length - 1 && <span aria-hidden="true" className="kw-chain-arrow" style={{ "--d": (i * 130 + 65) + "ms", color: "var(--color-primary)", font: "700 16px/1 var(--font-sans)" }}>→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function WhyClose() {
  const chain = ["Website", "Visibility", "Trust", "Leads", "Jobs", "Revenue"];
  return (
    <section style={{ background: "var(--color-canvas)", padding: WY_PAD }}>
      <div style={{ ...WY_WRAP }}>
        <Reveal>
          <div style={{ color: "var(--color-mute)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-sm)", textAlign: "center" }}>How the math works</div>
          <h2 style={{ margin: "0 0 var(--space-xl)", color: "var(--color-ink)", font: "700 clamp(26px,3.2vw,36px)/1.15 var(--font-sans)", letterSpacing: "-0.01em", textAlign: "center" }}>
            It all compounds from one place.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <ChainFlow chain={chain} />
        </Reveal>
        <Reveal delay={120}>
          <div style={{ background: "var(--color-surface-dark)", borderRadius: "var(--radius-sm)", padding: "clamp(32px,5vw,56px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, background: "var(--color-primary)" }}></span>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(70% 90% at 50% 0%, rgba(118,185,0,.14), transparent 60%)" }}></div>
            <div style={{ position: "relative" }}>
              <h2 style={{ margin: "0 auto var(--space-md)", color: "var(--color-on-dark)", font: "700 clamp(26px,3.4vw,40px)/1.12 var(--font-sans)", letterSpacing: "-0.02em", maxWidth: 720 }}>
                Every day without a website, you’re losing jobs to someone who has one.
              </h2>
              <p style={{ margin: "0 auto var(--space-xl)", color: "var(--color-on-dark-mute)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 560 }}>
                This was never about “having a website.” It’s about getting more of the right jobs —
                consistently, while you focus on the work. Let’s build the thing that does the convincing for you.
              </p>
              <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" as="a" href="Contact.html" className="kw-cta-btn kw-cta-btn--primary">Start a project</Button>
                <Button variant="outline-on-dark" size="lg" as="a" href="Projects.html" className="kw-cta-btn kw-cta-btn--outline">See the work</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyApp() {
  return (
    <div>
      <Nav current="why" />
      <main>
        <WhyHero />
        <WhyProblem />
        <WhyJourney />
        <WhyStorefront />
        <WhyClose />
      </main>
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<WhyApp />);
