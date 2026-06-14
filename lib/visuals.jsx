/* ============================================================
   Kermit Webcraft — shared bits: scroll reveal, count-up,
   and the abstract "browser wireframe" hero visual (pure CSS).
   ============================================================ */

/* Reveal-on-scroll wrapper. Default is VISIBLE; only below-the-fold
   elements get hidden-then-animated, so content is never stuck hidden. */
function Reveal({ children, delay = 0, y = 16, style }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(true);
  const [animate, setAnimate] = React.useState(false);
  React.useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (reduce || !el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) return; // above/at fold → stay visible
    setShown(false); setAnimate(true);
    let safety = setTimeout(() => setShown(true), 1600);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); clearTimeout(safety); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: shown ? 1 : 0,
      transform: shown ? "none" : `translateY(${y}px)`,
      transition: animate ? `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.2,.7,.2,1) ${delay}ms` : "none" }}>
      {children}
    </div>
  );
}

/* Count-up number that fires when scrolled into view. */
function CountUp({ to, suffix = "", prefix = "", decimals = 0, duration = 1400 }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setVal(to); return; }
    const el = ref.current;
    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (el && el.getBoundingClientRect().top < window.innerHeight) { run(); return () => cancelAnimationFrame(raf); }
    const safety = setTimeout(() => setVal(to), 2600);
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { clearTimeout(safety); run(); io.disconnect(); }
    }, { threshold: 0.4 });
    if (el) io.observe(el);
    return () => { io.disconnect(); clearTimeout(safety); cancelAnimationFrame(raf); };
  }, [to]);
  const shown = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US");
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

/* Hero browser visual — a live analytics dashboard trending up.
   Reads as "the sites we build perform." */
function BrowserWireframe({ compact = false }) {
  const kpis = [
    { label: "Visitors", value: "12.4k", delta: "▲ 38%" },
    { label: "Conv. rate", value: "9.8%", delta: "▲ 2.6pt" },
    { label: "Avg load", value: "0.7s", delta: "▲ fast" },
  ];
  const pts = "0,96 40,84 80,90 120,68 160,72 200,52 240,46 280,30 320,20";
  return (
    <div style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-hairline-strong)",
                  borderRadius: "var(--radius-sm)", overflow: "hidden",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.4)" }}>
      {/* title bar */}
      <div style={{ height: 36, background: "#0d0d0d", borderBottom: "1px solid var(--color-hairline-strong)",
                    display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
        <span style={{ width: 9, height: 9, borderRadius: "var(--radius-full)", background: "#3a3a3a" }}></span>
        <span style={{ width: 9, height: 9, borderRadius: "var(--radius-full)", background: "#3a3a3a" }}></span>
        <span style={{ width: 9, height: 9, borderRadius: "var(--radius-full)", background: "var(--color-primary)" }}></span>
        <span style={{ marginLeft: 12, font: "700 11px/1 var(--font-sans)", color: "var(--color-on-dark-mute)",
                       letterSpacing: ".3px" }}>kermitweb.craft / analytics</span>
      </div>
      {/* dashboard */}
      <div style={{ position: "relative", padding: compact ? 18 : 22, minHeight: compact ? 220 : 300, background: "#161616" }}>
        {/* header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <span style={{ font: "700 12px/1 var(--font-sans)", color: "var(--color-on-dark-mute)", letterSpacing: ".3px" }}>Traffic &amp; conversions</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "700 10px/1 var(--font-sans)",
                         color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: ".5px",
                         border: "1px solid color-mix(in srgb, var(--color-primary) 45%, transparent)",
                         borderRadius: "var(--radius-full)", padding: "5px 9px" }}>
            <span className="kw-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)" }}></span>
            Live
          </span>
        </div>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 18 }}>
          {kpis.map((k) => (
            <div key={k.label}>
              <div style={{ font: "700 9px/1 var(--font-sans)", color: "var(--color-mute)", textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 6 }}>{k.label}</div>
              <div style={{ font: "700 20px/1 var(--font-sans)", color: "var(--color-on-dark)", letterSpacing: "-0.02em" }}>{k.value}</div>
              <div style={{ font: "700 10px/1 var(--font-sans)", color: "var(--color-primary)", marginTop: 5 }}>{k.delta}</div>
            </div>
          ))}
        </div>
        {/* chart */}
        <svg viewBox="0 0 320 120" preserveAspectRatio="none" style={{ width: "100%", height: compact ? 86 : 108, display: "block", overflow: "visible" }}>
          <defs>
            <linearGradient id="kwArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.34"></stop>
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="var(--color-hairline-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke"></line>
          ))}
          <polygon points={`0,120 ${pts} 320,120`} fill="url(#kwArea)"></polygon>
          <polyline className="kw-chart-line" points={pts} fill="none" stroke="var(--color-primary)" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></polyline>
          <circle cx="320" cy="20" r="4.5" fill="var(--color-primary)"></circle>
          <circle className="kw-dot-ring" cx="320" cy="20" r="4.5" fill="none" stroke="var(--color-primary)" strokeWidth="2" vectorEffect="non-scaling-stroke"></circle>
        </svg>
      </div>
    </div>
  );
}

/* Animated "capabilities" backdrop for the dark hero: panning grid,
   drifting aurora orbs, and a slow scan sweep. Pure CSS, GPU-friendly,
   reduced-motion aware (see site.css). */
/* A dew-laden orb web, after the reference photo: silk strands rendered as
   strings of water beads, threads sagging under gravity, hub set off to the
   right, shallow depth of field. Geometry generated deterministically. */
function SpiderWeb() {
  const cx = 812, cy = 452;                // hub: right of centre, vertically mid
  const spokeCount = 17;
  const innerR = 40, outerR = 1180;
  const baseRot = 4;
  const droop = 150;                        // how far the left of the web hangs
  const rad = (d) => (d * Math.PI) / 180;
  let seed = 9;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

  // gravity: points further left of the hub hang lower
  const sagY = (x) => Math.pow(Math.max(0, (cx - x) / cx), 1.3) * droop;
  const pt = (ang, r) => {
    const x = cx + Math.cos(rad(ang)) * r;
    const y = cy + Math.sin(rad(ang)) * r + sagY(x);
    return [x, y];
  };
  const spokeAngles = Array.from({ length: spokeCount }, (_, i) => baseRot + (i * 360) / spokeCount);

  // Lay beads along a polyline at fixed arc-length spacing.
  const beadsAlong = (points, spacing, kind) => {
    const out = [];
    let carry = spacing * rnd();
    for (let i = 1; i < points.length; i++) {
      const [x0, y0] = points[i - 1], [x1, y1] = points[i];
      const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
      let d = carry;
      while (d < len) {
        const t = d / len;
        const x = x0 + dx * t, y = y0 + dy * t;
        const depth = Math.min(1, Math.max(0, (cx - x) / 720));   // 0 hub-side → 1 far-left/front
        let r = (kind === "spoke" ? 1.0 : 1.5) + depth * 2.4;
        r *= 0.72 + rnd() * 0.7;
        const bright = rnd() > 0.8;
        out.push([x, y, +r.toFixed(2), bright]);
        d += spacing * (0.82 + rnd() * 0.45);
      }
      carry = d - len;
    }
    return out;
  };

  // Subdivide a chord into a downward-dipping catenary-ish curve.
  const sagSegment = (p0, p1, k) => {
    const pts = [];
    const dip = 0.16 * Math.abs(p1[0] - p0[0]) + 5;
    const N = 7;
    for (let s = 0; s <= N; s++) {
      const t = s / N;
      const x = p0[0] + (p1[0] - p0[0]) * t;
      const y = p0[1] + (p1[1] - p0[1]) * t + 4 * t * (1 - t) * dip * k;
      pts.push([x, y]);
    }
    return pts;
  };

  // Radial spokes — faint silk + sparse beads.
  const spokeSilk = [];
  let spokeBeads = [];
  spokeAngles.forEach((a) => {
    const hub = pt(a, innerR), out = pt(a, outerR);
    const seg = sagSegment(hub, out, 0.35);
    spokeSilk.push("M " + seg.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L "));
    spokeBeads = spokeBeads.concat(beadsAlong(seg, 30, "spoke"));
  });

  // Capture spiral — concentric, sagging between spokes, densely beaded.
  const steps = spokeCount * 7;
  const verts = [];
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const r = innerR + (outerR - innerR) * Math.pow(t, 1.55);
    verts.push(pt(baseRot + (s * 360) / spokeCount, r));
  }
  const spiralSilk = [];
  let spiralBeads = [];
  for (let i = 1; i < verts.length; i++) {
    const seg = sagSegment(verts[i - 1], verts[i], 1);
    spiralSilk.push("M " + seg.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L "));
    spiralBeads = spiralBeads.concat(beadsAlong(seg, 15, "spiral"));
  }

  // Keep only what lands on-canvas-ish (trim far overshoot for perf).
  const onCanvas = ([x, y]) => x > -120 && x < 1120 && y > -120 && y < 1120;
  spokeBeads = spokeBeads.filter(onCanvas);
  spiralBeads = spiralBeads.filter(onCanvas);
  const allBeads = spiralBeads.concat(spokeBeads);

  return (
    <svg className="kw-web" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="kw-web-pan">
        <g className="kw-silk">
          {spokeSilk.map((d, i) => <path key={`ks${i}`} d={d}></path>)}
          {spiralSilk.map((d, i) => <path key={`kp${i}`} d={d}></path>)}
        </g>
        <g className="kw-beads">
          {allBeads.map(([x, y, r, bright], i) => (
            <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r={r}
                    className={bright ? "kw-bead kw-bead-bright" : "kw-bead"}
                    style={bright ? { animationDelay: `${(i % 11) * 0.6}s` } : undefined}></circle>
          ))}
        </g>
      </g>
    </svg>
  );
}

/* Out-of-focus dewdrops floating behind the web — the bokeh field. */
function Bokeh() {
  let seed = 3;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const dots = Array.from({ length: 26 }, (_, i) => {
    const size = 12 + Math.pow(rnd(), 1.6) * 62;
    return {
      left: (8 + rnd() * 88).toFixed(1),
      top: (4 + rnd() * 80).toFixed(1),
      size: size.toFixed(0),
      op: (0.18 + rnd() * 0.4).toFixed(2),
      dur: (5 + rnd() * 7).toFixed(1),
      delay: (rnd() * 6).toFixed(1),
    };
  });
  return (
    <div className="kw-bokeh">
      {dots.map((d, i) => (
        <i key={i} style={{ left: `${d.left}%`, top: `${d.top}%`, width: `${d.size}px`, height: `${d.size}px`,
                            "--op": d.op, animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s` }}></i>
      ))}
    </div>
  );
}

function HeroFX() {
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = rootRef.current;
    if (!root) return;
    const web = root.querySelector(".kw-web-pan");
    const bok = root.querySelector(".kw-bokeh");
    let tx = 0, ty = 0, x = 0, y = 0, raf;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    };
    const tick = () => {
      x += (tx - x) * 0.06; y += (ty - y) * 0.06;
      if (web) web.style.transform = `translate(${(x * 30).toFixed(2)}px, ${(y * 20).toFixed(2)}px)`;
      if (bok) bok.style.transform = `translate(${(x * 12).toFixed(2)}px, ${(y * 9).toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="kw-fx" aria-hidden="true" ref={rootRef}>
      <div className="kw-fx-blob b1"></div>
      <div className="kw-fx-blob b2"></div>
      <Bokeh />
      <SpiderWeb />
    </div>
  );
}

Object.assign(window, { Reveal, CountUp, BrowserWireframe, HeroFX });
