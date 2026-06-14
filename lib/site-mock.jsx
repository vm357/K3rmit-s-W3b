/* ============================================================
   Kermit Webcraft — SiteMock: a miniature, realistic landing-page
   "screenshot" rendered per client. Pure CSS, scales with the card
   via container-query units (cqw). Used in the portfolio grid in
   place of flat gradient placeholders.
   ============================================================ */

/* Per-client themes. photo = a faux hero-image gradient evoking the
   industry; light controls text-on-bg defaults. */
const SITE_THEMES = {
  "Angel’s Home Improvement": {
    short: "Angel’s", layout: "split", light: true,
    img: "assets/work/angels-home-improvement.png",
    headline: "Built to last.", sub: "Remodels, repairs, and renovations done right the first time.",
    pal: { bg: "#faf7f2", ink: "#211d18", sub: "#7c7368", accent: "#c2410c",
           photo: "linear-gradient(150deg,#e6c098,#a9703c 55%,#5f3c20)" } },
  "P&E Remodeling Solutions": {
    short: "P&E", layout: "imageHero",
    headline: "Remodels done right.", sub: "Kitchens, baths, and whole-home builds across the tri-state.",
    pal: { bg: "#10161d", ink: "#fff", sub: "rgba(255,255,255,.78)", accent: "#e0a82e",
           photo: "linear-gradient(155deg,#6a7c8c,#33454f 55%,#161f27)" } },
  "United Automotive Consultants": {
    short: "United", layout: "editorial",
    img: "assets/work/united-automotive-consultants.png",
    headline: "Drive smarter decisions.", sub: "Fleet strategy and acquisition advisory for dealer groups.",
    pal: { bg: "#0f1622", ink: "#fff", sub: "rgba(255,255,255,.74)", accent: "#3d83d6",
           photo: "linear-gradient(150deg,#43577a,#1f2d44 55%,#0c1220)" } },
  "Casa Bueno": {
    short: "Casa Bueno", layout: "centered", light: true,
    headline: "Roasted fresh daily.", sub: "Small-batch beans, shipped the morning they’re roasted.",
    pal: { bg: "#f6efe6", ink: "#2a1d12", sub: "#857461", accent: "#8a5a2b",
           photo: "linear-gradient(150deg,#cba47a,#8a5a2b 55%,#4f3018)" } },
  "Buckle Up": {
    short: "Buckle Up", layout: "split", light: true,
    headline: "Plumbing you can trust.", sub: "24/7 service from a team that shows up when it says it will.",
    pal: { bg: "#f1f6fa", ink: "#10222e", sub: "#5d7686", accent: "#1f7fb0",
           photo: "linear-gradient(150deg,#8fc9e8,#2f86b6 55%,#154f6e)" } },
  "Heron & Co.": {
    short: "Heron & Co.", layout: "imageHero",
    headline: "Home, well made.", sub: "Considered objects for everyday living.",
    pal: { bg: "#16130f", ink: "#fff", sub: "rgba(255,255,255,.8)", accent: "#b08968",
           photo: "linear-gradient(150deg,#ddd3c6,#ab9a85 55%,#6f6050)" } },
  "Cedar Clinic": {
    short: "Cedar", layout: "centered", light: true,
    headline: "Care that listens.", sub: "Family medicine with same-week appointments.",
    pal: { bg: "#eef7f4", ink: "#0f2a23", sub: "#5a8276", accent: "#2f9b86",
           photo: "linear-gradient(150deg,#a6dccf,#3f9b86 55%,#236554)" } },
  "The Green Fork": {
    short: "Green Fork", layout: "imageHero",
    headline: "Eat well, locally.", sub: "Seasonal plates from a kitchen that knows its farmers.",
    pal: { bg: "#13160d", ink: "#fff", sub: "rgba(255,255,255,.82)", accent: "#7faf3a",
           photo: "linear-gradient(150deg,#c2d488,#6f9a32 55%,#3a5a1d)" } },
  "Lily & Reed": {
    short: "Lily & Reed", layout: "editorial", light: true,
    headline: "Design with intent.", sub: "A boutique studio for brands that sweat the details.",
    pal: { bg: "#f7f1f2", ink: "#241a1d", sub: "#8a727a", accent: "#b06b7c",
           photo: "linear-gradient(150deg,#e6c9cf,#bb8392 55%,#7c5360)" } },
  "Andelina Beauty": {
    short: "Andelina", layout: "imageHero",
    img: "assets/work/andelina-beauty.png",
    headline: "Elevate your beauty.", sub: "Three NJ locations, one elegant home for products, nails, and booking.",
    pal: { bg: "#3a0f22", ink: "#fff", sub: "rgba(255,255,255,.82)", accent: "#e8408a",
           photo: "linear-gradient(150deg,#f6c1d4,#d8528d 55%,#7c1f4a)" } },
};
const FALLBACK = SITE_THEMES["Atlas Plumbing"];

/* ---- shared mini-pieces ---- */
function MNav({ t, p, dark }) {
  const c = dark ? "rgba(255,255,255,.92)" : p.ink;
  const lk = dark ? "rgba(255,255,255,.5)" : p.sub;
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5cqw", height: "8.5cqw", flex: "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.6cqw" }}>
        <span style={{ width: "3cqw", height: "3cqw", background: p.accent, borderRadius: "0.5cqw", flex: "none" }}></span>
        <span style={{ font: "700 2.9cqw/1 var(--font-sans)", color: c, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>{t.short}</span>
      </div>
      <div style={{ display: "flex", gap: "2.6cqw", alignItems: "center" }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ width: "5cqw", height: "1.3cqw", background: lk, borderRadius: "0.6cqw" }}></span>)}
        <span style={{ width: "9cqw", height: "4cqw", background: p.accent, borderRadius: "0.5cqw" }}></span>
      </div>
    </div>
  );
}
function MBtn({ bg, w = "23cqw" }) {
  return <span style={{ display: "inline-block", width: w, height: "5.4cqw", background: bg, borderRadius: "0.6cqw" }}></span>;
}
function MEyebrow({ color }) {
  return <span style={{ display: "block", width: "13cqw", height: "1.6cqw", background: color, borderRadius: "0.6cqw", opacity: 0.9 }}></span>;
}
function MPhoto({ p, style }) {
  return (
    <div style={{ background: p.photo, borderRadius: "1.2cqw", position: "relative", overflow: "hidden", ...style }}>
      <span style={{ position: "absolute", left: "8%", bottom: "11%", width: "44%", height: "9%", background: "rgba(255,255,255,.85)", borderRadius: "0.8cqw" }}></span>
      <span style={{ position: "absolute", left: "8%", bottom: "24%", width: "30%", height: "6%", background: "rgba(255,255,255,.5)", borderRadius: "0.8cqw" }}></span>
    </div>
  );
}

function SiteMock({ title }) {
  const t = SITE_THEMES[title] || FALLBACK;
  const p = t.pal;
  const fill = { position: "absolute", inset: 0, display: "flex", flexDirection: "column", overflow: "hidden" };

  /* Real screenshot provided → show full page width, top-aligned. A
     blurred copy fills the area below so the wide shot reads as a
     framed thumbnail rather than leaving a hard gap. */
  if (t.img) {
    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: p.bg }}>
        <img src={t.img} alt="" aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(14px) saturate(1.1)", transform: "scale(1.15)", opacity: 0.55 }} />
        <img src={t.img} alt={`${title} website`}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", display: "block", boxShadow: "0 6px 18px rgba(0,0,0,.18)" }} />
      </div>
    );
  }

  if (t.layout === "imageHero") {
    return (
      <div style={{ ...fill, background: p.photo }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.6))" }}></div>
        <div style={{ position: "relative", zIndex: 1 }}><MNav t={t} p={p} dark /></div>
        <div style={{ position: "relative", zIndex: 1, marginTop: "auto", padding: "5cqw", display: "flex", flexDirection: "column", gap: "2.4cqw" }}>
          <MEyebrow color={p.accent} />
          <div style={{ font: "700 9cqw/1.0 var(--font-sans)", color: "#fff", letterSpacing: "-0.03em", maxWidth: "70cqw" }}>{t.headline}</div>
          <div style={{ font: "400 2.6cqw/1.4 var(--font-sans)", color: "rgba(255,255,255,.85)", maxWidth: "52cqw" }}>{t.sub}</div>
          <div style={{ marginTop: "1cqw" }}><MBtn bg={p.accent} /></div>
        </div>
      </div>
    );
  }

  if (t.layout === "centered") {
    return (
      <div style={{ ...fill, background: p.bg }}>
        <MNav t={t} p={p} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "2.2cqw", padding: "2cqw 6cqw" }}>
          <MEyebrow color={p.accent} />
          <div style={{ font: "700 8cqw/1.02 var(--font-sans)", color: p.ink, letterSpacing: "-0.03em" }}>{t.headline}</div>
          <div style={{ font: "400 2.5cqw/1.4 var(--font-sans)", color: p.sub, maxWidth: "56cqw" }}>{t.sub}</div>
          <div style={{ marginTop: "0.6cqw" }}><MBtn bg={p.accent} /></div>
        </div>
        <div style={{ display: "flex", gap: "2.6cqw", padding: "0 5cqw 5.5cqw" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, height: "13cqw", background: "rgba(0,0,0,.04)", border: "0.25cqw solid rgba(0,0,0,.07)", borderRadius: "1cqw", padding: "1.8cqw", display: "flex", flexDirection: "column", gap: "1.2cqw" }}>
              <span style={{ width: "4cqw", height: "4cqw", background: p.accent, borderRadius: "0.5cqw", opacity: 0.85 }}></span>
              <span style={{ width: "80%", height: "1.4cqw", background: "rgba(0,0,0,.18)", borderRadius: "0.5cqw" }}></span>
              <span style={{ width: "55%", height: "1.4cqw", background: "rgba(0,0,0,.1)", borderRadius: "0.5cqw" }}></span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (t.layout === "editorial") {
    const dark = !t.light;
    return (
      <div style={{ ...fill, background: p.bg }}>
        <MNav t={t} p={p} dark={dark} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3cqw", padding: "3cqw 5cqw 5cqw" }}>
          <div style={{ font: "700 8.2cqw/1.0 var(--font-sans)", color: p.ink, letterSpacing: "-0.03em", maxWidth: "82cqw" }}>{t.headline}</div>
          <div style={{ flex: 1, display: "flex", gap: "3cqw" }}>
            <MPhoto p={p} style={{ flex: 1.1 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.8cqw" }}>
              <div style={{ font: "400 2.5cqw/1.45 var(--font-sans)", color: p.sub }}>{t.sub}</div>
              <span style={{ width: "90%", height: "1.5cqw", background: dark ? "rgba(255,255,255,.18)" : "rgba(0,0,0,.12)", borderRadius: "0.6cqw" }}></span>
              <span style={{ width: "70%", height: "1.5cqw", background: dark ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.08)", borderRadius: "0.6cqw" }}></span>
              <div style={{ marginTop: "1.2cqw" }}><MBtn bg={p.accent} w="20cqw" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* split (default) */
  return (
    <div style={{ ...fill, background: p.bg }}>
      <MNav t={t} p={p} />
      <div style={{ flex: 1, display: "flex", gap: "4cqw", padding: "1cqw 5cqw 5cqw", alignItems: "stretch" }}>
        <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.2cqw" }}>
          <MEyebrow color={p.accent} />
          <div style={{ font: "700 8.4cqw/1.0 var(--font-sans)", color: p.ink, letterSpacing: "-0.03em" }}>{t.headline}</div>
          <div style={{ font: "400 2.5cqw/1.4 var(--font-sans)", color: p.sub }}>{t.sub}</div>
          <div style={{ marginTop: "0.8cqw" }}><MBtn bg={p.accent} /></div>
        </div>
        <MPhoto p={p} style={{ flex: 1 }} />
      </div>
    </div>
  );
}

Object.assign(window, { SiteMock });
