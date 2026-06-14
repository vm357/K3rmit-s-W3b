/* ============================================================
   Kermit Webcraft — Contact page: working validated form.
   ============================================================ */
const { Button, Input, Badge } = window.NVIDIADesignSystem_73d77d;

const CT_WRAP = { maxWidth: "var(--container-max)", margin: "0 auto" };

const fieldLabel = { display: "block", color: "var(--color-ink)", font: "700 13px/1.4 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: "var(--space-sm)" };
const errStyle = { color: "var(--color-error)", font: "400 13px/1.4 var(--font-sans)", marginTop: 6 };

/* Styled controls matching the DS Input (2px radius, green focus). */
function FieldBox({ as = "input", invalid, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  const border = invalid ? "var(--color-error)" : focus ? "var(--color-primary)" : "var(--color-hairline)";
  return (
    <Tag {...rest}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ width: "100%", boxSizing: "border-box", font: "400 16px/1.5 var(--font-sans)",
               color: "var(--color-ink)", background: "var(--color-canvas)",
               border: `2px solid ${border}`, borderRadius: "var(--radius-sm)",
               padding: as === "textarea" ? "12px 14px" : "0 14px",
               height: as === "textarea" ? "auto" : 46, minHeight: as === "textarea" ? 130 : undefined,
               resize: as === "textarea" ? "vertical" : undefined, outline: "none",
               transition: "border-color .12s linear" }} />
  );
}

const PROJECT_TYPES = ["New website", "Redesign / rebuild", "E-commerce store", "Care & hosting", "Not sure yet"];

const LEADS_ENDPOINT = "https://formslist.com/f/_XN9YIQG4d7L";

function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", business: "", type: "New website", phone: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Tell us who we’re talking to.";
    if (!form.email.trim()) er.email = "We’ll need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email doesn’t look right.";
    if (!form.phone.trim()) er.phone = "A phone number, please — it’s how we’ll reach you.";
    if (!form.message.trim() || form.message.trim().length < 12) er.message = "A sentence or two about the project, please.";
    return er;
  };
  const submit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length !== 0) return;

    setSendError("");
    setSending(true);
    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("business", form.business);
      body.append("project_type", form.type);
      body.append("phone", form.phone);
      body.append("message", form.message);
      body.append("_subject", `New lead — ${form.name} (${form.type})`);

      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSent(true);
    } catch (err) {
      setSendError("Something went wrong sending your note. Please try again, or email us directly at kermitwebcraft@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div style={{ border: "1px solid var(--color-hairline)", borderRadius: "var(--radius-sm)", padding: "var(--space-xxl)", position: "relative", background: "var(--color-canvas)" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, background: "var(--color-primary)" }}></span>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, background: "var(--color-primary)", borderRadius: "var(--radius-sm)", marginBottom: "var(--space-lg)" }}>
          <span style={{ color: "var(--color-on-primary)", font: "700 28px/1 var(--font-sans)" }}>✓</span>
        </div>
        <h2 style={{ margin: "0 0 var(--space-sm)", color: "var(--color-ink)", font: "700 26px/1.2 var(--font-sans)" }}>Leap received, {form.name.split(" ")[0]}.</h2>
        <p style={{ margin: "0 0 var(--space-xl)", color: "var(--color-body)", font: "400 16px/1.6 var(--font-sans)", maxWidth: 460 }}>
          Thanks — your note about your <strong>{form.type.toLowerCase()}</strong> project landed safely. We reply
          to every inquiry within one business day, usually sooner.
        </p>
        <Button variant="outline" onClick={() => { setSent(false); setSendError(""); setForm({ name: "", email: "", business: "", type: "New website", phone: "", message: "" }); }}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate
      style={{ border: "1px solid var(--color-hairline)", borderRadius: "var(--radius-sm)", padding: "var(--space-xxl)", position: "relative", background: "var(--color-canvas)", display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
      <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, background: "var(--color-primary)" }}></span>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-lg)" }} className="kw-list-2">
        <div>
          <label style={fieldLabel} htmlFor="f-name">Name</label>
          <FieldBox id="f-name" value={form.name} onChange={set("name")} invalid={!!errors.name} placeholder="Jane Frogmore" />
          {errors.name && <div style={errStyle}>{errors.name}</div>}
        </div>
        <div>
          <label style={fieldLabel} htmlFor="f-email">Email</label>
          <FieldBox id="f-email" type="email" value={form.email} onChange={set("email")} invalid={!!errors.email} placeholder="jane@business.com" />
          {errors.email && <div style={errStyle}>{errors.email}</div>}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-lg)" }} className="kw-list-2">
        <div>
          <label style={fieldLabel} htmlFor="f-biz">Business <span style={{ color: "var(--color-mute)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
          <FieldBox id="f-biz" value={form.business} onChange={set("business")} placeholder="Marsh & Maple" />
        </div>
        <div>
          <label style={fieldLabel} htmlFor="f-phone">Phone number</label>
          <FieldBox id="f-phone" type="tel" value={form.phone} onChange={set("phone")} invalid={!!errors.phone} placeholder="(201) 555-0188" />
          {errors.phone && <div style={errStyle}>{errors.phone}</div>}
        </div>
      </div>
      <div>
        <label style={fieldLabel}>Project type</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
          {PROJECT_TYPES.map((t) => {
            const active = form.type === t;
            return (
              <button type="button" key={t} onClick={() => setForm((f) => ({ ...f, type: t }))}
                style={{ font: "700 14px/1 var(--font-sans)", padding: "10px 16px", cursor: "pointer",
                         borderRadius: "var(--radius-sm)", transition: "all .12s linear",
                         border: active ? "2px solid var(--color-ink)" : "2px solid var(--color-hairline)",
                         background: active ? "var(--color-ink)" : "var(--color-canvas)",
                         color: active ? "var(--color-on-dark)" : "var(--color-body)" }}>{t}</button>
            );
          })}
        </div>
      </div>
      <div>
        <label style={fieldLabel} htmlFor="f-msg">Tell us about the project</label>
        <FieldBox as="textarea" id="f-msg" value={form.message} onChange={set("message")} invalid={!!errors.message}
          placeholder="What are you building, who’s it for, and is there a deadline we should know about?" />
        {errors.message && <div style={errStyle}>{errors.message}</div>}
      </div>
      {sendError && (
        <div role="alert" style={{ border: "2px solid var(--color-error)", borderRadius: "var(--radius-sm)", padding: "12px 14px", color: "var(--color-error)", font: "400 14px/1.5 var(--font-sans)", background: "var(--color-canvas)" }}>
          {sendError}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", flexWrap: "wrap", marginTop: "var(--space-xs)" }}>
        <Button variant="primary" size="lg" disabled={sending}>{sending ? "Sending…" : "Send it our way"}</Button>
        <span style={{ color: "var(--color-mute)", font: "400 13px/1.4 var(--font-sans)" }}>We reply within one business day. No newsletters, ever.</span>
      </div>
    </form>
  );
}

function ContactAside() {
  const steps = [
    ["We read it", "A real person — not a bot — reads your note the day it lands."],
    ["We reply", "Within one business day, with first questions or a call invite."],
    ["We scope it", "A fixed quote and timeline before any work begins."],
  ];
  return (
    <div>
      <Badge variant="accent">Booking Q3 2026</Badge>
      <h1 style={{ margin: "var(--space-lg) 0 var(--space-md)", color: "var(--color-ink)", font: "700 clamp(32px,4.5vw,46px)/1.06 var(--font-sans)", letterSpacing: "-0.02em" }}>
        Start a project.
      </h1>
      <p style={{ margin: "0 0 var(--space-xl)", color: "var(--color-body)", font: "400 17px/1.6 var(--font-sans)", maxWidth: 420 }}>
        Tell us what you’re building. The more you share, the sharper our first reply — but a sentence
        is plenty to get the ball rolling.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--color-hairline)" }}>
        {steps.map(([t, b], i) => (
          <div key={t} style={{ display: "flex", gap: "var(--space-lg)", padding: "var(--space-lg) 0", borderBottom: "1px solid var(--color-hairline)" }}>
            <span style={{ color: "var(--color-primary)", font: "700 18px/1.4 var(--font-sans)", flex: "none", width: 28 }}>0{i + 1}</span>
            <div>
              <div style={{ color: "var(--color-ink)", font: "700 16px/1.3 var(--font-sans)", marginBottom: 4 }}>{t}</div>
              <div style={{ color: "var(--color-body)", font: "400 15px/1.5 var(--font-sans)" }}>{b}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "var(--space-xl)" }}>
        <div style={{ color: "var(--color-mute)", font: "700 12px/1.4 var(--font-sans)", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 4 }}>Prefer email?</div>
        <a href="mailto:kermitwebcraft@gmail.com" style={{ color: "var(--color-link-blue)", font: "400 16px/1.5 var(--font-sans)" }}>kermitwebcraft@gmail.com</a>
      </div>
    </div>
  );
}

function ContactApp() {
  return (
    <div>
      <Nav current="contact" />
      <main style={{ background: "var(--color-surface-soft)" }}>
        <section style={{ padding: "clamp(48px,6vw,80px) clamp(20px,5vw,48px)" }}>
          <div style={{ ...CT_WRAP, display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-section)", alignItems: "start" }} className="kw-hero-split">
            <ContactAside />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<ContactApp />);
