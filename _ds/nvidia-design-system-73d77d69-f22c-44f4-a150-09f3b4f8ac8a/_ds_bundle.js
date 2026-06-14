/* @ds-bundle: {"format":3,"namespace":"NVIDIADesignSystem_73d77d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PillTabs","sourcePath":"components/navigation/PillTabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CornerSquare","sourcePath":"components/surfaces/CornerSquare.jsx"},{"name":"StatCallout","sourcePath":"components/surfaces/StatCallout.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7454d51959f5","components/core/Button.jsx":"80f90d80db20","components/forms/Input.jsx":"4a9905c11518","components/navigation/PillTabs.jsx":"2f750959564b","components/surfaces/Card.jsx":"fcaaa12ca534","components/surfaces/CornerSquare.jsx":"0209fd7bc774","components/surfaces/StatCallout.jsx":"c95209de2b59","ui_kits/marketing/app.jsx":"d84570c5f825","ui_kits/marketing/nav.jsx":"eef899cc741a","ui_kits/marketing/sections.jsx":"bbeed0cc3c43"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NVIDIADesignSystem_73d77d = window.NVIDIADesignSystem_73d77d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — document-type / category label that sits at the top of resource cards
 * ("WHITE PAPER", "WEBINAR") and small utility chips. Always 2px radius, uppercase.
 */
function Badge({
  variant = "tag",
  children,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-bold)",
    textTransform: "uppercase",
    letterSpacing: ".4px",
    borderRadius: "var(--radius-sm)",
    boxSizing: "border-box"
  };
  const variants = {
    // standard document-type tag
    tag: {
      background: "var(--color-surface-soft)",
      color: "var(--color-body)",
      fontSize: "var(--type-caption-md-size)",
      padding: "4px 10px"
    },
    // tiny green chip for "NEW" / status
    accent: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontSize: "var(--type-caption-xs-size)",
      padding: "3px 8px"
    },
    // outlined variant for use on imagery / dark
    outline: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "1px solid var(--color-hairline)",
      fontSize: "var(--type-caption-md-size)",
      padding: "3px 9px"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.tag)
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the universal NVIDIA CTA.
 * Single-accent: `primary` is green fill, `outline` is the signature green-bordered
 * clear pane, `outline-on-dark` pairs with primary on dark strips, `ghost-link` is the
 * "Learn More →" affordance. 2px radius, never a pill.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  icon = null,
  as = "button",
  ...rest
}) {
  const typeBySize = {
    lg: {
      fontSize: "var(--type-button-lg-size)",
      letterSpacing: "var(--type-button-lg-ls)",
      padding: "14px 28px",
      minHeight: "48px"
    },
    md: {
      fontSize: "var(--type-button-md-size)",
      letterSpacing: "var(--type-button-md-ls)",
      padding: "11px 24px",
      minHeight: "44px"
    },
    sm: {
      fontSize: "var(--type-button-sm-size)",
      letterSpacing: "var(--type-button-sm-ls)",
      padding: "10px 18px",
      minHeight: "40px"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-bold)",
    lineHeight: 1.25,
    borderRadius: "var(--radius-sm)",
    border: "2px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    boxSizing: "border-box",
    transition: "background-color .12s linear, color .12s linear, border-color .12s linear",
    ...typeBySize[size]
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderColor: "var(--color-primary)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-ink)",
      borderColor: "var(--color-primary)",
      padding: size === "md" ? "11px 22px" : typeBySize[size].padding
    },
    "outline-on-dark": {
      background: "transparent",
      color: "var(--color-on-dark)",
      borderColor: "var(--color-on-dark)",
      borderWidth: "1px"
    },
    "ghost-link": {
      background: "transparent",
      color: "var(--color-primary)",
      border: "none",
      borderRadius: "var(--radius-none)",
      padding: "0",
      minHeight: "auto",
      textTransform: "uppercase",
      letterSpacing: ".5px",
      fontSize: "var(--type-caption-md-size)"
    }
  };
  const disabledStyle = {
    background: "var(--color-surface-soft)",
    color: "var(--color-ash)",
    borderColor: "var(--color-surface-soft)"
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...(disabled ? disabledStyle : null)
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: as === "button" ? disabled : undefined
  }, rest), children, variant === "ghost-link" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"), icon && variant !== "ghost-link" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text and search field. The green focus border is the system's ONLY focus
 * signal: a 2px primary border replaces the hairline on focus. 2px radius, 44px height.
 */
function Input({
  type = "text",
  search = false,
  invalid = false,
  disabled = false,
  value,
  defaultValue,
  placeholder,
  onChange,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-sm)",
    background: disabled ? "var(--color-surface-soft)" : "var(--color-canvas)",
    border: focused ? "2px solid var(--color-primary)" : invalid ? "2px solid var(--color-error)" : "1px solid var(--color-hairline)",
    borderRadius: "var(--radius-sm)",
    height: search ? "40px" : "44px",
    padding: focused || invalid ? "0 15px" : "0 16px",
    boxSizing: "border-box",
    transition: "border-color .12s linear"
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--type-body-md-size)",
    lineHeight: 1.5,
    color: disabled ? "var(--color-stone)" : "var(--color-ink)"
  };
  const glyph = {
    color: "var(--color-mute)",
    fontSize: "16px",
    flex: "none",
    fontFamily: "var(--font-icon)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, search && /*#__PURE__*/React.createElement("span", {
    style: glyph,
    "aria-hidden": "true"
  }, "\u2315"), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: input
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PillTabs.jsx
try { (() => {
/**
 * PillTabs — the segmented filter strip ("Latest in AI Resources"). On selection the
 * tab flips fully inverted: transparent → ink background, ink text → white. 2px radius.
 */
function PillTabs({
  items = [],
  value,
  defaultValue,
  onChange
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const row = {
    display: "inline-flex",
    gap: "var(--space-xs)",
    flexWrap: "wrap"
  };
  const tabBase = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-bold)",
    fontSize: "var(--type-button-sm-size)",
    letterSpacing: "var(--type-button-sm-ls)",
    lineHeight: 1,
    padding: "12px 18px",
    minHeight: "40px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: "pointer",
    background: "transparent",
    color: "var(--color-ink)",
    transition: "background-color .12s linear, color .12s linear"
  };
  const activeStyle = {
    background: "var(--color-ink)",
    color: "var(--color-on-dark)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: row,
    role: "tablist"
  }, items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(v),
      style: {
        ...tabBase,
        ...(isActive ? activeStyle : null)
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { PillTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PillTabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CornerSquare.jsx
try { (() => {
/**
 * CornerSquare — the brand's signature ornament: a 12px solid green square anchored to
 * one corner of a card. Size + color are constant; only the corner varies.
 */
function CornerSquare({
  corner = "top-left",
  size = 12
}) {
  const pos = {
    "top-left": {
      top: 0,
      left: 0
    },
    "top-right": {
      top: 0,
      right: 0
    },
    "bottom-left": {
      bottom: 0,
      left: 0
    },
    "bottom-right": {
      bottom: 0,
      right: 0
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      background: "var(--color-primary)",
      ...pos[corner]
    }
  });
}
Object.assign(__ds_scope, { CornerSquare });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CornerSquare.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — flat rectangle with a hairline border (no shadow, ever). The base container for
 * product / feature / resource cards. Optionally carries the signature green corner square.
 */
function Card({
  cornerSquare = false,
  corner = "top-left",
  padding = "xl",
  children,
  style,
  ...rest
}) {
  const pad = {
    xl: "var(--space-xl)",
    xxl: "var(--space-xxl)",
    none: "0"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--color-canvas)",
      border: "var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      padding: pad[padding] ?? pad.xl,
      boxSizing: "border-box",
      ...style
    }
  }, rest), cornerSquare && /*#__PURE__*/React.createElement(__ds_scope.CornerSquare, {
    corner: corner
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCallout.jsx
try { (() => {
/**
 * StatCallout — a massive green number over a short caption. Used inside long-form
 * industry pages ("4× faster training"). Flat hairline card, 32px padding.
 */
function StatCallout({
  value,
  caption,
  cornerSquare = true,
  corner = "top-left"
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "xxl",
    cornerSquare: cornerSquare,
    corner: corner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-lh)",
      color: "var(--color-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: "var(--type-body-md-lh)",
      color: "var(--color-body)"
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCallout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeatureGrid, null), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(ResourceGrid, null), /*#__PURE__*/React.createElement(CtaStrip, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/nav.jsx
try { (() => {
const {
  Button,
  Input
} = window.NVIDIADesignSystem_73d77d;

/* Utility bar + primary nav — the black chrome frame at the top of every page. */
function Nav({
  onSearch
}) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const links = ["Products", "Solutions", "Industries", "Resources", "Support", "Company"];
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-dark)",
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 48px",
      gap: "var(--space-lg)",
      borderBottom: "1px solid var(--color-surface-elevated)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-on-dark-mute)",
      font: "400 12px/1.25 var(--font-sans)"
    }
  }, "English (US)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-on-dark-mute)",
      font: "400 12px/1.25 var(--font-sans)"
    }
  }, "Login"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-on-dark-mute)",
      font: "400 12px/1.25 var(--font-sans)"
    }
  }, "Account")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-dark)",
      height: 64,
      display: "flex",
      alignItems: "center",
      padding: "0 48px",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-white.svg",
    alt: "NVIDIA",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-xl)",
      marginLeft: "var(--space-xl)",
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--color-on-dark)",
      font: "700 16px/1.5 var(--font-sans)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)"
    }
  }, searchOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    search: true,
    placeholder: "Search NVIDIA.com",
    autoFocus: true,
    onChange: e => onSearch && onSearch(e.target.value)
  })) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchOpen(true),
    "aria-label": "Search",
    style: {
      background: "none",
      border: "none",
      color: "var(--color-on-dark)",
      fontSize: 18,
      cursor: "pointer",
      fontFamily: "var(--font-icon)"
    }
  }, "\u2315"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-on-dark)",
      font: "700 16px/1.5 var(--font-sans)",
      textDecoration: "none"
    }
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Get Started"))));
}

/* Multi-column dark footer — every page closes with the same structured global nav. */
function Footer() {
  const cols = [{
    h: "Products",
    items: ["GeForce", "Data Center", "Networking", "Embedded Systems", "DGX Systems"]
  }, {
    h: "Software",
    items: ["CUDA-X", "AI Enterprise", "Omniverse", "NIM Microservices", "Base Command"]
  }, {
    h: "Solutions",
    items: ["Generative AI", "Data Science", "Robotics", "Autonomous Machines", "HPC"]
  }, {
    h: "Resources",
    items: ["Documentation", "Developer Blog", "Webinars", "White Papers", "Training"]
  }, {
    h: "Company",
    items: ["About NVIDIA", "Careers", "Investors", "Newsroom", "Social Impact"]
  }, {
    h: "Support",
    items: ["Contact Sales", "Enterprise Support", "Forums", "Drivers", "Security"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "64px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "var(--space-xl)",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-on-dark)",
      font: "700 16px/1.5 var(--font-sans)",
      marginBottom: "var(--space-md)"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-on-dark-mute)",
      font: "400 15px/1.4 var(--font-sans)",
      textDecoration: "none"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      marginTop: 48,
      borderTop: "1px solid var(--color-hairline-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-xl) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, ["f", "in", "X", "▶", "◎"].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--color-hairline-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-on-dark-mute)",
      font: "700 12px/1 var(--font-sans)"
    }
  }, s))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-on-dark-mute)",
      font: "400 12px/1.25 var(--font-sans)"
    }
  }, "English (US)")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-elevated)",
      margin: "0 -48px",
      padding: "var(--space-md) 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      color: "var(--color-mute)",
      font: "700 10px/1.5 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: ".4px"
    }
  }, "\xA9 2026 NVIDIA Corporation \xB7 Privacy Policy \xB7 Legal \xB7 Accessibility \xB7 Terms of Service \xB7 Manage My Privacy")));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  StatCallout,
  PillTabs
} = window.NVIDIADesignSystem_73d77d;

/* Dark hero chapter — copy hugs the left third, imagery fills the right. */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--color-surface-dark)",
      overflow: "hidden",
      minHeight: 520,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 100% at 80% 50%, #1b3a00 0%, #0a1500 45%, #000 80%)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.6) 40%, rgba(0,0,0,0) 75%)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 16,
      height: 16,
      background: "var(--color-primary)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      width: "100%",
      margin: "0 auto",
      padding: "80px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-primary)",
      font: "700 14px/1.43 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: ".6px",
      marginBottom: "var(--space-lg)"
    }
  }, "NVIDIA AI Platform"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "var(--color-on-dark)",
      font: "700 48px/1.25 var(--font-sans)"
    }
  }, "The Engine of Modern AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-lg) 0 var(--space-xl)",
      color: "var(--color-on-dark-mute)",
      font: "400 22px/1.4 var(--font-sans)"
    }
  }, "From data center to edge, accelerate every workload on the full-stack platform built for generative AI, HPC, and robotics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get Started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    size: "lg"
  }, "Watch the Keynote")))));
}

/* Feature grid — 4-up capability cards on white canvas. */
function FeatureGrid() {
  const feats = [{
    icon: "◆",
    t: "Agentic AI",
    b: "Build and scale teams of reasoning agents on accelerated infrastructure."
  }, {
    icon: "▦",
    t: "Data Science",
    b: "End-to-end GPU acceleration for the entire data pipeline."
  }, {
    icon: "⬡",
    t: "Inference",
    b: "Serve models at the lowest cost-per-token with NIM microservices."
  }, {
    icon: "◈",
    t: "Robotics",
    b: "Simulate, train, and deploy autonomous machines with Isaac."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "64px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-mute)",
      font: "700 14px/1.43 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: ".6px",
      marginBottom: "var(--space-sm)"
    }
  }, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 var(--space-xl)",
      color: "var(--color-ink)",
      font: "700 36px/1.25 var(--font-sans)"
    }
  }, "Explore Our AI Solutions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-xl)"
    }
  }, feats.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    cornerSquare: true,
    padding: "xxl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-primary)",
      fontSize: 26,
      marginBottom: "var(--space-md)"
    },
    "aria-hidden": "true"
  }, f.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-sm)",
      color: "var(--color-ink)",
      font: "700 20px/1.25 var(--font-sans)"
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-body)",
      font: "400 16px/1.5 var(--font-sans)"
    }
  }, f.b))))));
}

/* Stat band — three editorial callouts on soft surface. */
function StatBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-soft)",
      padding: "64px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(StatCallout, {
    value: "4\xD7 faster",
    caption: "Training throughput on H200 vs. the prior generation."
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "60% lower",
    caption: "Cost per inference with optimized NIM microservices."
  }), /*#__PURE__*/React.createElement(StatCallout, {
    value: "35\xD7",
    caption: "Real-time inference speedup for trillion-parameter models."
  })));
}

/* Resource grid with an inverting filter strip. */
function ResourceGrid() {
  const all = [{
    tag: "White Paper",
    cat: "Generative AI",
    t: "Scaling Inference Economics",
    b: "Cut cost-per-token while raising throughput across mixed workloads."
  }, {
    tag: "Webinar",
    cat: "Data Science",
    t: "Accelerating the Data Pipeline",
    b: "GPU-native ETL, feature engineering, and model training in practice."
  }, {
    tag: "Blog",
    cat: "Robotics",
    t: "Sim-to-Real with Isaac",
    b: "How synthetic data closes the reality gap for autonomous machines."
  }, {
    tag: "White Paper",
    cat: "Generative AI",
    t: "Deploying Reasoning Agents",
    b: "Reference architecture for agentic systems on accelerated infra."
  }, {
    tag: "Webinar",
    cat: "Robotics",
    t: "Edge Inference at Scale",
    b: "Running multimodal models on Jetson in the field."
  }, {
    tag: "Blog",
    cat: "Data Science",
    t: "RAPIDS in Production",
    b: "Lessons from teams running GPU dataframes at petabyte scale."
  }];
  const [filter, setFilter] = React.useState("All");
  const tabs = ["All", "Generative AI", "Data Science", "Robotics"];
  const shown = filter === "All" ? all : all.filter(r => r.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)",
      padding: "64px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "var(--space-xl)",
      flexWrap: "wrap",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: "var(--color-ink)",
      font: "700 36px/1.25 var(--font-sans)"
    }
  }, "Latest in AI Resources"), /*#__PURE__*/React.createElement(PillTabs, {
    items: tabs,
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-xl)"
    }
  }, shown.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.t,
    cornerSquare: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Badge, null, r.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3 / 2",
      background: "linear-gradient(135deg, #1a1a1a, #3a3a3a)",
      borderRadius: "var(--radius-sm)",
      marginBottom: "var(--space-md)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-xs)",
      color: "var(--color-ink)",
      font: "700 17px/1.47 var(--font-sans)"
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-md)",
      color: "var(--color-body)",
      font: "400 15px/1.67 var(--font-sans)"
    }
  }, r.b), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-link",
    as: "a",
    href: "#"
  }, "Read More"))))));
}

/* Dark CTA bridge between content sections. */
function CtaStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-xl)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: "var(--color-on-dark)",
      font: "700 24px/1.25 var(--font-sans)"
    }
  }, "Ready to get started?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Contact Sales"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark"
  }, "Read the Docs"))));
}
Object.assign(window, {
  Hero,
  FeatureGrid,
  StatBand,
  ResourceGrid,
  CtaStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CornerSquare = __ds_scope.CornerSquare;

__ds_ns.StatCallout = __ds_scope.StatCallout;

})();
