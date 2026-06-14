/* ============================================================
   Kermit Webcraft — Work page: filterable case-study grid.
   ============================================================ */
const { Button, Badge, Card, PillTabs } = window.NVIDIADesignSystem_73d77d;

const WK_WRAP = { maxWidth: "var(--container-max)", margin: "0 auto" };
const WK_PAD = "var(--space-section) clamp(20px, 5vw, 48px)";

const PROJECTS = [
{ t: "Andelina Beauty", cat: "Beauty", g: "linear-gradient(135deg,#3a0f22,#7c1f4a)", year: "2025", metric: "+63%", metricLabel: "online bookings", tag: "Rebuild", blurb: "A three-location beauty brand needed one polished site that funnels visitors straight to booking." },
{ t: "Angel’s Home Improvement", cat: "Home Services", g: "linear-gradient(135deg,#0f2a16,#2f7a3f)", year: "2025", metric: "+38%", metricLabel: "quote requests", tag: "Design + Build", blurb: "A remodeler needed a portfolio that shows the work and a quote form that doesn’t scare homeowners off." },
{ t: "P&E Remodeling Solutions", cat: "Home Services", g: "linear-gradient(135deg,#10243a,#1c6e8e)", year: "2025", metric: "0.7s", metricLabel: "median load time", tag: "Design + Build", blurb: "A hand-built site with a project gallery that loads instantly and a quote form that converts." },
{ t: "United Automotive Consultants", cat: "Professional", g: "linear-gradient(135deg,#2a230f,#7a5e1c)", year: "2024", metric: "+52%", metricLabel: "consult requests", tag: "Design + Build", blurb: "A quietly authoritative brand site with service pages that turn research into booked consultations." },
{ t: "Casa Bueno", cat: "E-commerce", g: "linear-gradient(135deg,#0e2a24,#1f7a63)", year: "2025", metric: "+2.1×", metricLabel: "bag subscriptions", tag: "Rebuild", blurb: "A roaster’s shop with subscriptions, gift options, and a checkout that converts." },
{ t: "Buckle Up", cat: "Professional", g: "linear-gradient(135deg,#241a2e,#5e3a7a)", year: "2024", metric: "+44%", metricLabel: "service calls", tag: "Design + Build", blurb: "A fast, mobile-first build that turned a 12-truck operation’s site into its busiest phone line." }];


function WorkHeader() {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)", position: "relative", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 16, height: 16, background: "var(--color-primary)" }}></span>
      <div aria-hidden="true" className="kw-pulse" style={{ position: "absolute", inset: 0, background: "radial-gradient(100% 80% at 90% 0%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 60%)" }}></div>
      <div style={{ ...WK_WRAP, position: "relative" }}>
        <div style={{ color: "var(--color-primary)", font: "700 13px/1.43 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "var(--space-lg)" }}>SELECTED WORK · 2026</div>
        <h1 style={{ margin: 0, color: "var(--color-on-dark)", font: "700 clamp(34px,5vw,56px)/1.05 var(--font-sans)", letterSpacing: "-0.02em", maxWidth: 820 }}>
          Ponds we’ve tended, and how they paid off.
        </h1>
        <p style={{ margin: "var(--space-lg) 0 0", color: "var(--color-on-dark-mute)", font: "400 clamp(16px,2vw,20px)/1.5 var(--font-sans)", maxWidth: 620 }}>
          Every project below is hand-built — designed, coded, and measured. The numbers are real
          outcomes our clients tracked after launch.
        </p>
      </div>
    </section>);

}

function WorkGrid() {
  const cats = ["All", "Home Services", "Beauty", "Healthcare", "Professional", "E-commerce", "Restaurant"];
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  return (
    <section style={{ background: "var(--color-canvas)", padding: WK_PAD }}>
      <div style={WK_WRAP}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-lg)", marginBottom: "var(--space-xl)", flexWrap: "wrap" }}>
          <PillTabs items={cats} value={filter} onChange={setFilter} />
          <span style={{ color: "var(--color-mute)", font: "700 13px/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".5px" }}>
            {shown.length} {shown.length === 1 ? "project" : "projects"}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-xl)" }} className="kw-grid-3">
          {shown.map((p) =>
          <a key={p.t} href="#" className="kw-work-card" style={{ textDecoration: "none", display: "block" }}>
              <Card cornerSquare padding="none" style={{ overflow: "hidden", height: "100%" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", containerType: "inline-size", background: "var(--color-surface-soft)", overflow: "hidden", borderBottom: "1px solid var(--color-hairline)" }}>
                  <SiteMock title={p.t} />
                  <div className="kw-work-overlay" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.5)", opacity: 0, transition: "opacity .15s linear", zIndex: 3 }}>
                    <span style={{ color: "var(--color-on-dark)", font: "700 13px/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".6px" }}>View case study →</span>
                  </div>
                </div>
                <div style={{ padding: "var(--space-xl)" }}>
                  <div style={{ marginBottom: "var(--space-md)" }}><Badge>{p.tag}</Badge></div>
                  <h3 style={{ margin: "0 0 var(--space-lg)", color: "var(--color-ink)", font: "700 19px/1.3 var(--font-sans)" }}>{p.t}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-sm)", borderTop: "1px solid var(--color-hairline)", paddingTop: "var(--space-md)" }}>
                    <span style={{ color: "var(--color-primary)", font: "700 26px/1 var(--font-sans)", letterSpacing: "-0.02em" }}>{p.metric}</span>
                    <span style={{ color: "var(--color-mute)", font: "400 13px/1.3 var(--font-sans)" }}>{p.metricLabel}</span>
                  </div>
                </div>
              </Card>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function WorkCta() {
  return (
    <section style={{ background: "var(--color-surface-soft)", padding: "clamp(48px,6vw,72px) clamp(20px,5vw,48px)" }}>
      <div style={{ ...WK_WRAP, textAlign: "center" }}>
        <h2 style={{ margin: 0, color: "var(--color-ink)", font: "700 clamp(26px,3.2vw,36px)/1.15 var(--font-sans)", letterSpacing: "-0.01em" }}>Your project could be next.</h2>
        <p style={{ margin: "var(--space-md) auto var(--space-xl)", color: "var(--color-body)", font: "400 17px/1.5 var(--font-sans)", maxWidth: 540 }}>
          We take on a handful of builds each quarter so every one gets real craft. Tell us what you’re after.
        </p>
        <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" as="a" href="Contact.html">Start a project</Button>
          <Button variant="outline" size="lg" as="a" href="Services.html">See services</Button>
        </div>
      </div>
    </section>);

}

function WorkApp() {
  return (
    <div>
      <Nav current="work" />
      <main>
        <WorkHeader />
        <WorkGrid />
        <WorkCta />
      </main>
      <Footer />
    </div>);

}
ReactDOM.createRoot(document.getElementById("app")).render(<WorkApp />);