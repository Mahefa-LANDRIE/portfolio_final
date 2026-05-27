import { r as reactExports, T as jsxRuntimeExports } from "./server-DUcSoNYs.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `mx-auto max-w-7xl px-6 transition-all duration-500 ${scrolled ? "" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "font-display text-xl font-bold tracking-tight", children: [
                    "Landrie",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." }),
                    "Mahefa"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: l.href,
                      className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-gold",
                      children: l.label
                    },
                    l.href
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/MahefaCV.pdf",
                      target: "_blank",
                      rel: "noreferrer",
                      download: "Mahefa-Landrie-CV.pdf",
                      className: "hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)] md:inline-block",
                      children: "Mon CV"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      "aria-label": "Menu",
                      onClick: () => setOpen(!open),
                      className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-0.5 w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-0.5 w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-0.5 w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}` })
                      ]
                    }
                  )
                ]
              }
            ),
            open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-gold",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/MahefaCV.pdf",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-2 rounded-lg bg-gold px-4 py-3 text-center text-sm font-medium text-primary-foreground",
                  children: "Télécharger mon CV"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const photo = "/assets/mahefa-B5bmYVxG.png";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$v = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$v);
const __iconNode$u = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$u);
const __iconNode$t = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$t);
const __iconNode$s = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$s);
const __iconNode$r = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
];
const Brain = createLucideIcon("brain", __iconNode$r);
const __iconNode$q = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$q);
const __iconNode$p = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$p);
const __iconNode$o = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode$o);
const __iconNode$n = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$n);
const __iconNode$m = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$m);
const __iconNode$l = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$l);
const __iconNode$k = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$k);
const __iconNode$j = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$j);
const __iconNode$i = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$i);
const __iconNode$h = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$h);
const __iconNode$g = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$g);
const __iconNode$f = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$f);
const __iconNode$e = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }]
];
const Keyboard = createLucideIcon("keyboard", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      key: "q8bfy3"
    }
  ],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 6v8", key: "15ugcq" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
function ParticlesBackground({ className = "" }) {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth ?? window.innerWidth;
      h = parent?.clientHeight ?? window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
      const count = Math.min(60, Math.max(28, Math.floor(w * h / 22e3)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(229, 188, 90, 0.7)";
        ctx.fill();
      }
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(229, 188, 90, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className: `pointer-events-none absolute inset-0 ${className}`
    }
  );
}
const WHATSAPP_NUMBER = "261349174020";
const buildWhatsAppUrl = (message) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
const buildWhatsAppAppUrl = (message) => {
  const baseUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}&text=${encodeURIComponent(message)}` : baseUrl;
};
const handleWhatsAppClick = (event, message) => {
  if (typeof window === "undefined") return;
  event.preventDefault();
  const appUrl = buildWhatsAppAppUrl(message);
  const webUrl = buildWhatsAppUrl(message);
  const fallback = window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      window.location.href = webUrl;
    }
  }, 900);
  const cancelFallback = () => {
    if (document.visibilityState === "hidden") {
      window.clearTimeout(fallback);
    }
  };
  document.addEventListener("visibilitychange", cancelFallback, { once: true });
  window.location.href = appUrl;
};
function Hero() {
  reactExports.useEffect(() => {
    const l1 = document.getElementById("tw-line1");
    const l2 = document.getElementById("tw-line2");
    const l3 = document.getElementById("tw-sub");
    const c1 = document.getElementById("tw-caret-h1");
    const c2 = document.getElementById("tw-caret-sub");
    if (!l1 || !l2 || !l3 || !c1 || !c2) return;
    let cancelled = false;
    const t1 = "Hi, I'm ";
    const t2 = "Mahefa.";
    const t3 = "IA Data Expert & Web Marketer";
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const type = async (el, text, speed) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        el.textContent = text.slice(0, i);
        await sleep(speed);
      }
    };
    const erase = async (el, speed) => {
      const text = el.textContent || "";
      for (let i = text.length; i >= 0; i--) {
        if (cancelled) return;
        el.textContent = text.slice(0, i);
        await sleep(speed);
      }
    };
    const show = (el, v) => {
      el.style.visibility = v ? "visible" : "hidden";
    };
    (async function run() {
      while (!cancelled) {
        show(c1, true);
        show(c2, false);
        await type(l1, t1, 75);
        await type(l2, t2, 75);
        show(c1, false);
        show(c2, true);
        await sleep(300);
        await type(l3, t3, 55);
        await sleep(3e3);
        if (cancelled) return;
        await erase(l3, 35);
        await erase(l2, 35);
        await erase(l1, 35);
        await sleep(400);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticlesBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 md:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full gold-border bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-gold" }),
          "Disponible pour collaboration"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl min-h-[8rem] md:min-h-[10rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "tw-line1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "tw-line2", className: "text-gradient-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "tw-caret-h1", className: "tw-caret", children: "|" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl font-bold md:text-2xl text-gold min-h-[1.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "tw-sub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "tw-caret-sub", className: "tw-caret2", style: { visibility: "hidden" }, children: "|" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground", children: "Spécialiste de l'annotation de données visuelles pour l'IA et expert en acquisition digitale. J'allie rigueur analytique et performance marketing pour booster la croissance de vos projets technologiques." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/MahefaCV.pdf",
              target: "_blank",
              rel: "noreferrer",
              className: "group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.14_86/0.5)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                "Voir mon CV"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#projects",
              className: "group inline-flex items-center gap-2 rounded-full gold-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-gold/10",
              children: [
                "Voir mes projets",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: buildWhatsAppUrl("Bonjour Mahefa, j'aimerais réserver un appel."),
              target: "_blank",
              rel: "noreferrer",
              onClick: (event) => handleWhatsAppClick(event, "Bonjour Mahefa, j'aimerais réserver un appel."),
              className: "group inline-flex items-center gap-2 rounded-full bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground gold-border transition-all hover:bg-gold/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-gold" }),
                "Réserver un appel"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center gap-3", children: [
          { Icon: Github, href: "https://github.com/mahefa-landrie", label: "GitHub" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/mahefa-landrie", label: "LinkedIn" },
          { Icon: Facebook, href: "#", label: "Facebook" }
        ].map(({ Icon: Icon2, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": label,
            className: "flex h-11 w-11 items-center justify-center rounded-full gold-border text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative order-1 mx-auto w-full max-w-md md:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-10 rounded-full bg-gradient-to-br from-gold/40 to-transparent blur-3xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden rounded-[2.5rem] gold-border bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photo,
              alt: "Mahefa Landrie — IA Data Expert",
              className: "h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gold", children: "4+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Années d'expérience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass absolute -top-4 -right-4 rounded-2xl px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gold", children: "95%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Data Labeling" })
        ] })
      ] })
    ] })
  ] });
}
const logos = [
  "CVAT",
  "Google Ads",
  "Meta Business",
  "WordPress",
  "QGIS",
  "Analytics 4",
  "OpenAI",
  "Hugging Face",
  "Notion",
  "Make"
];
function ClientLogos() {
  const loop = [...logos, ...logos];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-y border-border/60 bg-surface/30 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground", children: "Outils & plateformes maîtrisés" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "group relative overflow-hidden",
        style: {
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-12 px-6 group-hover:[animation-play-state:paused]", children: loop.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "shrink-0 font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-gold md:text-3xl",
            children: name
          },
          `${name}-${i}`
        )) })
      }
    )
  ] });
}
function CountUp({
  end,
  suffix = "",
  duration = 1800,
  pause = 2500,
  loop = true,
  className = ""
}) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const visibleRef = reactExports.useRef(false);
  const cancelledRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    cancelledRef.current = false;
    const animateOnce = () => new Promise((resolve) => {
      const t0 = performance.now();
      const step = (t) => {
        if (cancelledRef.current) return resolve();
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const run = async () => {
      while (!cancelledRef.current) {
        if (!visibleRef.current) {
          await sleep(300);
          continue;
        }
        setVal(0);
        await animateOnce();
        if (!loop) return;
        await sleep(pause);
      }
    };
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visibleRef.current = e.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    visibleRef.current = true;
    run();
    return () => {
      cancelledRef.current = true;
      obs.disconnect();
    };
  }, [end, duration, pause, loop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    val,
    suffix
  ] });
}
const highlights = [
  { Icon: Brain, label: "Computer Vision", desc: "CVAT, QGIS, segmentation" },
  { Icon: Database, label: "Data Quality", desc: "Audit & assurance qualité" },
  { Icon: ChartLine, label: "Web Marketing", desc: "SEO, SEA, Analytics" },
  { Icon: CodeXml, label: "Développement", desc: "WordPress, JS, Python" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "À propos de moi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
        "Expert en ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Données IA" }),
        " & Solutions Web"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 leading-relaxed text-muted-foreground", children: [
        "Spécialiste du ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Data Labeling" }),
        " avec une expertise confirmée dans l'entraînement d'algorithmes de Computer Vision. Mon parcours en BPO, allié à une maîtrise des outils marketing (Google Analytics, Facebook Ads) et du développement WordPress, me permet de piloter des projets numériques complexes."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: [
        "Je transforme les ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "données brutes" }),
        " en actifs stratégiques tout en garantissant une présence web optimisée et performante."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: 4, suffix: "+", className: "font-display text-3xl font-bold text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Années en IA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: 20, suffix: "+", className: "font-display text-3xl font-bold text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Projets livrés" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: 3, className: "font-display text-3xl font-bold text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Certifications" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: highlights.map(({ Icon: Icon2, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative overflow-hidden rounded-2xl gold-border bg-surface/50 p-6 transition-all hover:bg-surface hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-7 w-7 text-gold", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
        ]
      },
      label
    )) })
  ] }) }) });
}
const education = [
  {
    year: "2025",
    title: "Certification GitHub Foundation & Copilot AI",
    place: "GitHub",
    desc: "Développeur certifié exploitant la puissance de l'IA pour accroître la productivité et la qualité du code."
  },
  {
    year: "2017 — 2019",
    title: "DTS en Informatique de Gestion",
    place: "CNTEMAD",
    desc: "Concepteur Développeur WordPress: PHP (Laravel) / JavaScript (React, Vue.js, Node.js) / Python."
  },
  {
    year: "2019",
    title: "Formation Graphic Design",
    place: "INISMA Ankazomanga",
    desc: "Spécialité Graphic Designer."
  }
];
const experience = [
  {
    year: "Depuis 2021",
    title: "Spécialiste Annotation de Données & QA IA",
    place: "Ingedata",
    desc: "Développement de solutions IA via le labeling avancé de données visuelles. Projets d'envergure (SAFRAN) : annotation sur CVAT/QGIS, contrôle qualité rigoureux."
  },
  {
    year: "2022 — 2025",
    title: "Contrôleur Qualité Data IA",
    place: "Telesourcia (4 ans)",
    desc: "Garant de la précision des datasets pour Amazon. Audit des annotations images/vidéos, analyse de performance, optimisation des process qualité."
  },
  {
    year: "2021 — 2022",
    title: "Chargé de Marketing Digital (SEO/SEA)",
    place: "Smartelia",
    desc: "Stratégies d'acquisition multicanales. Amélioration du positionnement organique, campagnes SEA, analyse fine des KPI."
  }
];
function Timeline({ items: items2, Icon: Icon2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: items2.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 flex h-10 w-10 items-center justify-center rounded-full gold-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4 text-gold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-gold", children: item.year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1 font-display text-lg font-semibold text-foreground", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.place }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: item.desc })
    ] }, i)) })
  ] });
}
function Journey() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "journey", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Mon parcours" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
        "Diplômes & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Expériences" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-12 md:grid-cols-2 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-display text-xl font-semibold uppercase tracking-wide text-foreground/80", children: "Diplômes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, { items: education, Icon: GraduationCap })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-display text-xl font-semibold uppercase tracking-wide text-foreground/80", children: "Expériences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, { items: experience, Icon: Briefcase })
      ] })
    ] })
  ] }) });
}
const coding = [
  { name: "Python", value: 90, note: "Scripts d'automatisation, analyse de données, API" },
  { name: "HTML & CSS", value: 90, note: "Sémantique SEO, Flexbox/Grid, Responsive" },
  { name: "JavaScript", value: 80, note: "DOM, scripts interactifs, requêtes async" },
  { name: "WordPress & CMS", value: 85, note: "Thèmes, back-office, optimisation" }
];
const pro = [
  { name: "Data Labeling & Computer Vision", value: 95, note: "Annotation, Segmentation, Classification" },
  { name: "Assurance Qualité & Audit Data", value: 90, note: "Contrôle, anomalies, feedback loop" },
  { name: "Web Marketing & SEO/SEA", value: 85, note: "Google Ads, Facebook Ads, Analytics" },
  { name: "Gestion de Données & Outils IA", value: 90, note: "CVAT, QGIS, Excel, Copilot" }
];
function Bar({ name, value, note }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm font-bold text-gold", children: [
        value,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "relative h-full rounded-full bg-gradient-to-r from-gold to-gold-soft transition-all duration-1000",
        style: { width: `${value}%` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shimmer absolute inset-0" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: note })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Mes compétences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
          "Un savoir-faire ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "complet" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-12 md:grid-cols-2 md:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gold-border bg-surface/40 p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-display text-xl font-semibold", children: "Coding Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-7", children: coding.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { ...s }, s.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gold-border bg-surface/40 p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 font-display text-xl font-semibold", children: "Compétences Professionnelles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-7", children: pro.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { ...s }, s.name)) })
        ] })
      ] })
    ] })
  ] });
}
const cendrillon = "/assets/proj-cendrillon-BskKk6tZ.jpg";
const student = "/assets/proj-student-DFw4Te21.jpg";
const teacher = "/assets/proj-teacher-DOULMCDb.jpg";
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div"
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  const Comp = Tag;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      className: `reveal ${visible ? "reveal-in" : ""} ${className}`,
      children
    }
  );
}
const projects = [
  {
    img: cendrillon,
    title: "École Cendrillon",
    tag: "Site institutionnel",
    category: "Web",
    stack: "WordPress · SEO · UX",
    desc: "Site web complet pour une école : présentation, programmes pédagogiques et inscription en ligne.",
    live: "https://ecolecendrillon.page/"
  },
  {
    img: student,
    title: "Student Card Generator",
    tag: "Outil Web",
    category: "Web",
    stack: "JavaScript · Canvas · HTML/CSS",
    desc: "Générateur de cartes étudiant personnalisées avec export image, conçu pour automatiser la production.",
    live: "https://mahefa-landrie.github.io/student-card-project/",
    github: "https://github.com/mahefa-landrie/student-card-project"
  },
  {
    img: teacher,
    title: "Teacher Certification App",
    tag: "Application Web",
    category: "Web",
    stack: "JavaScript · Web App",
    desc: "Application de certification pour enseignants : génération, vérification et personnalisation des certificats.",
    live: "https://mahefa-landrie.github.io/teacher-certification-app/",
    github: "https://github.com/mahefa-landrie/teacher-certification-app"
  }
];
const categories = ["Tous", "IA & Data", "Web", "Marketing"];
function Projects() {
  const [active, setActive] = reactExports.useState("Tous");
  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Mes projets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
          "Sélection de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "réalisations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm text-muted-foreground", children: "Du site institutionnel WordPress aux applications web JavaScript — chaque projet est en ligne et consultable." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActive(c),
        className: `rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${active === c ? "bg-gold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.82_0.14_86/0.6)]" : "gold-border text-muted-foreground hover:text-gold"}`,
        children: c
      },
      c
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
      filtered.map((p, i) => {
        const primary = p.live ?? p.github ?? "#";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: `group relative flex h-full flex-col overflow-hidden rounded-3xl gold-border bg-surface/40 transition-all duration-500 hover:-translate-y-2 hover:bg-surface hover:shadow-[0_30px_80px_-30px_oklch(0.82_0.14_86/0.4)] ${i === 0 && filtered.length > 2 ? "lg:col-span-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: primary,
                  target: "_blank",
                  rel: "noreferrer",
                  className: `relative block overflow-hidden ${i === 0 && filtered.length > 2 ? "aspect-[2/1]" : "aspect-[4/3]"}`,
                  "aria-label": `Voir ${p.title}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: p.img,
                        alt: p.title,
                        loading: "lazy",
                        width: 1024,
                        height: 768,
                        className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium text-gold", children: p.tag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground translate-y-4 transition-transform duration-500 group-hover:translate-y-0 shadow-[0_0_40px_oklch(0.82_0.14_86/0.6)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
                      "Visiter le projet"
                    ] }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold transition-colors group-hover:text-gold", children: p.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-wider text-gold/80", children: p.stack })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: primary,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Ouvrir le projet",
                      className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-border text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-45",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm text-muted-foreground", children: p.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-2", children: [
                  p.live && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: p.live,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                        "Live demo"
                      ]
                    }
                  ),
                  p.github && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: p.github,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 rounded-full gold-border px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
                        "Code source"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }, p.title);
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full rounded-3xl gold-border bg-surface/40 p-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "D'autres projets dans cette catégorie arrivent bientôt." }) })
    ] })
  ] }) });
}
const steps = [
  {
    Icon: ClipboardList,
    title: "Briefing",
    desc: "Découverte des besoins, objectifs et contraintes du projet."
  },
  {
    Icon: Search,
    title: "Analyse",
    desc: "Audit, stratégie et planification des livrables."
  },
  {
    Icon: Wrench,
    title: "Réalisation",
    desc: "Exécution avec points d'étape et qualité contrôlée."
  },
  {
    Icon: Rocket,
    title: "Livraison",
    desc: "Validation finale, mise en ligne et accompagnement."
  }
];
function ProcessSteps() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-20 max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Ma méthode" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 font-display text-2xl font-bold md:text-3xl", children: [
        "Un process clair en ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "4 étapes" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-12 grid gap-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" }),
      steps.map(({ Icon: Icon2, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl gold-border bg-background text-gold transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_oklch(0.82_0.14_86/0.5)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-6 w-6", strokeWidth: 1.6 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-primary-foreground", children: i + 1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-5 font-display text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc })
      ] }) }, title))
    ] })
  ] });
}
const services = [
  {
    Icon: Keyboard,
    title: "Data Entry",
    desc: "Saisie, structuration et nettoyage de données à grande échelle avec précision."
  },
  {
    Icon: Image,
    title: "Data Annotation Image",
    desc: "Bounding box, polygones, segmentation sémantique pour Computer Vision."
  },
  {
    Icon: Video,
    title: "Data Annotation Vidéo",
    desc: "Tracking, key-frames, classification d'actions pour modèles IA."
  },
  {
    Icon: ChartLine,
    title: "Web Marketing",
    desc: "Stratégie digitale, Google Analytics, Facebook & Google Ads."
  },
  {
    Icon: Search,
    title: "SEO / SEA",
    desc: "Optimisation du référencement naturel et campagnes payantes."
  },
  {
    Icon: Database,
    title: "Data Quality & Audit",
    desc: "Contrôle qualité, audit, feedback loop sur datasets IA."
  },
  {
    Icon: Bot,
    title: "Automatisation IA",
    desc: "Scripts Python, intégration d'outils IA et workflows automatisés."
  },
  {
    Icon: Megaphone,
    title: "Community & Content",
    desc: "Animation de communauté, création de contenu et copywriting."
  }
];
function Services() {
  const loop = [...services, ...services];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative overflow-hidden py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-1/4 top-1/3 h-[300px] w-[500px] rounded-full bg-gold/10 blur-[120px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Mes services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
        "Des solutions ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "sur-mesure" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "De l'annotation de données IA au web marketing — un accompagnement complet pour vos projets data & digital." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "group relative mt-16",
        style: {
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]", children: loop.map(({ Icon: Icon2, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "relative w-[300px] shrink-0 overflow-hidden rounded-3xl gold-border bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-surface hover:shadow-[0_25px_60px_-25px_oklch(0.82_0.14_86/0.45)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-6 w-6", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: desc })
            ]
          },
          `${title}-${i}`
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessSteps, {})
  ] });
}
const items = [
  {
    name: "Rakoto H.",
    role: "Project Manager · BPO",
    text: "Mahefa a livré un dataset annoté avec une précision irréprochable et dans les délais. Très professionnel et rigoureux.",
    initials: "RH"
  },
  {
    name: "École Cendrillon",
    role: "Directrice pédagogique",
    text: "Notre site web a transformé notre image. Communication claire, livraison rapide et résultats SEO concrets.",
    initials: "EC"
  },
  {
    name: "Sarah M.",
    role: "Fondatrice · Startup IA",
    text: "Excellente collaboration sur l'annotation vidéo. Mahefa comprend les enjeux techniques d'un modèle Computer Vision.",
    initials: "SM"
  },
  {
    name: "Jean P.",
    role: "Responsable Marketing",
    text: "Campagnes Google Ads bien structurées, ROI au rendez-vous. Je recommande sans hésiter.",
    initials: "JP"
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Témoignages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
        "Ce que disent ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "mes clients" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl gold-border bg-surface/50 p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-3 left-8 h-16 w-16 text-gold/15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-[180px]", children: items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-gold", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, k)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 font-display text-xl leading-relaxed text-foreground md:text-2xl", children: [
                "« ",
                it.text,
                " »"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold", children: it.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: it.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: it.role })
                ] })
              ] })
            ]
          },
          it.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center gap-2", children: items.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Témoignage ${idx + 1}`,
          onClick: () => setI(idx),
          className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-4 bg-border hover:bg-gold/40"}`
        },
        idx
      )) })
    ] }) })
  ] }) });
}
const socials = [
  { Icon: Github, href: "https://github.com/mahefa-landrie", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mahefa-landrie", label: "LinkedIn" }
];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/landriejames@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: String(new FormData(form).get("name") || ""),
          email: String(new FormData(form).get("email") || ""),
          message: String(new FormData(form).get("message") || ""),
          _subject: "Nouveau message depuis le portfolio",
          _template: "table",
          _captcha: "false"
        })
      });
      const json = await res.json();
      if (!res.ok || json.success === "false") {
        throw new Error(json.message || "Erreur lors de l'envoi");
      }
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5e3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur réseau, réessayez.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] gold-border bg-surface/60 p-8 md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-10 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Travaillons ensemble" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
            "Un projet en ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "tête ?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "IA Data Expert & Web Marketer — disponible pour des missions en annotation IA, contrôle qualité data, SEO/SEA et développement web." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/MahefaCV.pdf",
                target: "_blank",
                rel: "noreferrer",
                download: "Mahefa-Landrie-CV.pdf",
                className: "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                  "Mon CV"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: buildWhatsAppUrl("Bonjour Mahefa, j'aimerais discuter d'un projet."),
                target: "_blank",
                rel: "noreferrer",
                onClick: (event) => handleWhatsAppClick(event, "Bonjour Mahefa, j'aimerais discuter d'un projet."),
                className: "inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-5 py-2.5 text-sm font-semibold text-[#25D366] gold-border transition-all hover:bg-[#25D366]/25",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  "WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: socials.map(({ Icon: Icon2, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": label,
              className: "flex h-11 w-11 items-center justify-center rounded-full gold-border text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:landriejames@gmail.com",
              className: "flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "landriejames@gmail.com" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+261349174020",
              className: "flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Téléphone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "+261 34 91 740 20" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/mahefa-landrie",
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "LinkedIn" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "mahefa-landrie" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Adresse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Soavimasoandro, Antananarivo" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10 rounded-3xl gold-border bg-background/30 p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Envoyez-moi un message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Décrivez votre projet — je vous réponds sous 24h." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-5 grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              name: "name",
              placeholder: "Votre nom",
              className: "rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              type: "email",
              name: "email",
              placeholder: "Votre email",
              className: "rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              required: true,
              name: "message",
              rows: 4,
              placeholder: "Parlez-moi de votre projet…",
              className: "resize-none rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 md:col-span-2"
            }
          ),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-destructive md:col-span-2", children: error }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-[#25D366] md:col-span-2", children: "✓ Message bien reçu — je vous réponds rapidement !" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Réponse rapide · Confidentialité garantie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading || sent,
                className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)] disabled:opacity-60",
                children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
                  "Envoyé !"
                ] }) : loading ? "Envoi…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  "Envoyer"
                ] })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-12 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base font-bold text-foreground", children: [
          "Landrie",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." }),
          "Mahefa"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "IA Data Expert & Web Marketer · Antananarivo, Madagascar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-gold", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-gold", children: "À propos" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-gold", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "hover:text-gold", children: "Projets" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-gold", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-gold", children: "Contact rapide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:landriejames@gmail.com", className: "hover:text-gold", children: "landriejames@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+261349174020", className: "hover:text-gold", children: "+261 34 91 740 20" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: buildWhatsAppUrl(),
              target: "_blank",
              rel: "noreferrer",
              onClick: (event) => handleWhatsAppClick(event),
              className: "hover:text-gold",
              children: "WhatsApp direct"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mahefa Landrie — Crafted with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "♦" }),
      " care."
    ] })
  ] }) });
}
function ScrollProgress() {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? h.scrollTop / total * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "h-full bg-gradient-to-r from-gold/40 via-gold to-gold-soft transition-[width] duration-100",
      style: { width: `${progress}%`, boxShadow: "0 0 12px oklch(0.82 0.14 86 / 0.7)" }
    }
  ) });
}
function FloatingActions() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: buildWhatsAppUrl("Bonjour Mahefa, j'aimerais discuter d'un projet."),
        target: "_blank",
        rel: "noreferrer",
        onClick: (event) => handleWhatsAppClick(event, "Bonjour Mahefa, j'aimerais discuter d'un projet."),
        "aria-label": "WhatsApp",
        className: "group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition-all hover:scale-110",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", strokeWidth: 2.2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100", children: "Discuter sur WhatsApp" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Retour en haut",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: `flex h-11 w-11 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.82_0.14_86/0.5)] transition-all hover:-translate-y-1 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4", strokeWidth: 2.5 })
      }
    )
  ] });
}
function PageLoader() {
  const [done, setDone] = reactExports.useState(false);
  const [hidden, setHidden] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 900);
    const t2 = setTimeout(() => setHidden(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (hidden) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${done ? "opacity-0" : "opacity-100"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 w-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-spin rounded-full border-2 border-gold/20 border-t-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full bg-gold/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-gold", children: "M" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Loading" })
      ] })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientLogos, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Journey, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] });
}
export {
  Index as component
};
