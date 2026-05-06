// Random design quote generator – original concept by Sophanarith Sok.
// https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

const quotes = [
  { quote: "How well we communicate is determined not by how well we say things, but how well we are understood.", author: "Andrew Grove", url: "https://en.wikipedia.org/wiki/Andrew_Grove", tag: "Product" },
  { quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry", url: "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry", tag: "Design" },
  { quote: "I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it.", author: "Bob Gill", url: "", tag: "Graphic Design" },
  { quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.", author: "Charles Eames", url: "https://en.wikipedia.org/wiki/Charles_Eames", tag: "UX Design" },
  { quote: "Get rid of everything that is not essential to making a point.", author: "Christoph Niemann", url: "https://www.christophniemann.com", tag: "Graphic Design" },
  { quote: "Graphic design will save the world right after rock and roll does.", author: "David Carson", url: "", tag: "Graphic Design" },
  { quote: "Good design is honest.", author: "Dieter Rams", url: "https://en.wikipedia.org/wiki/Dieter_Rams", tag: "Design" },
  { quote: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams", url: "https://en.wikipedia.org/wiki/Douglas_Adams" },
  { quote: "You don’t have to be ‘a creative’ to be creative.", author: "Drory Ben-Menachem", url: "", tag: "Creativity" },
  { quote: "Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether.", author: "Edward Tufte", url: "", tag: "UX Design" },
  { quote: "Perfect is the enemy of the good. Free yourself from the tyranny of perfection! Never surrender!", author: "Erik Kessels", url: "https://www.erikkessels.com" },
  { quote: "Good design is all about making other designers feel like idiots because that idea wasn’t theirs.", author: "Frank Chimero", url: "", tag: "Design" },
  { quote: "People ignore designs that ignore people.", author: "Frank Chimero", url: "https://frankchimero.com", tag: "Design" },
  { quote: "You don’t think your way to creative work. You work your way to creative thinking.", author: "George Nelson", url: "https://www.hermanmiller.com/en_au/designers/nelson/", tag: "Creativity" },
  { quote: "Fuck the midtones.", author: "Gerhard Steidl", url: "https://www.youtube.com/watch?v=8McHbjaxpbA" },
  { quote: "It’s easier to ask forgiveness than it is to get permission.", author: "Grace Hopper", url: "", tag: "Product" },
  { quote: "For every complex problem, there is an answer that is clear, simple, and wrong.", author: "H. L. Mencken", url: "https://en.wikipedia.org/wiki/H._L._Mencken", tag: "Systems" },
  { quote: "Thinking is hard. Not thinking is harder.", author: "Hans Aarsman", url: "https://hansaarsman.nl" },
  { quote: "If I had asked people what they wanted, they would have said faster horses.", author: "Henry Ford", url: "https://en.wikipedia.org/wiki/Henry_Ford", tag: "Product" },
  { quote: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.", author: "Irene Au", url: "https://ireneau.com", tag: "UX Design" },
  { quote: "There is no such thing as a boring project. There are only boring executions.", author: "Irene Etzkorn", url: "https://www.siegelvision.com/ireneetzkorn" },
  { quote: "Content precedes design. Design in the absence of content is not design, it’s decoration.", author: "Jeffrey Zeldman", url: "", tag: "Design" },
  { quote: "The work you do while you procrastinate is probably the work you should be doing for the rest of your life.", author: "Jessica Hische", url: "" },
  { quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano", url: "https://joesparano.com/about", tag: "Design" },
  { quote: "Design everything on the assumption that people are not heartless or stupid but marvelously capable.", author: "John Chris Jones", url: "https://en.wikipedia.org/wiki/John_Chris_Jones" },
  { quote: "Design is a solution to a problem. Art is a question to a problem.", author: "John Maeda", url: "https://en.wikipedia.org/wiki/John_Maeda", tag: "Design" },
  { quote: "Know thy users. And guess what? They don’t think like you do.", author: "Joshua Brewer", url: "", tag: "UX Design" },
  { quote: "I strive for two things in design: simplicity and clarity.", author: "Lindon Leader", url: "", tag: "Design" },
  { quote: "Only those who attempt the absurd will achieve the impossible.", author: "M.C. Escher", url: "" },
  { quote: "But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.", author: "Marian Bantjes", url: "", tag: "Graphic Design" },
  { quote: "Art is anything you can get away with.", author: "Marshall McLuhan", url: "https://en.wikipedia.org/wiki/Marshall_McLuhan", tag: "Creativity" },
  { quote: "Styles come and go. Good design is a language, not a style.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli", tag: "Graphic Design" },
  { quote: "The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli", tag: "Graphic Design" },
  { quote: "There is no design without discipline. There is no discipline without intelligence.", author: "Massimo Vignelli", url: "https://en.wikipedia.org/wiki/Massimo_Vignelli" },
  { quote: "If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.", author: "Michael Bierut", url: "https://www.pentagram.com/about/michael-bierut", tag: "Graphic Design" },
  { quote: "Simplicity, wit and good typography.", author: "Michael Bierut", url: "https://www.pentagram.com/about/michael-bierut" },
  { quote: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.", author: "Milton Glaser", url: "", tag: "Graphic Design" },
  { quote: "Digital design is like painting, except the paint never dries.", author: "Neville Brody", url: "https://brody-associates.com" },
  { quote: "Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.", author: "Nicholas Negroponte", url: "https://en.wikipedia.org/wiki/Nicholas_Negroponte" },
  { quote: "The faker you are, the more successful you can be.", author: "Pablo Stanley", url: "https://www.youtube.com/watch?v=bEg5ySTUGxE" },
  { quote: "Do not seek praise. Seek criticism.", author: "Paul Arden", url: "https://en.wikipedia.org/wiki/Paul_Arden", tag: "Creativity" },
  { quote: "Design can be art. Design can be simple. That’s why it’s so complicated.", author: "Paul Rand", url: "https://www.paulrand.design", tag: "Design" },
  { quote: "Simplicity is not the goal. It is the by-product of a good idea and modest expectations.", author: "Paul Rand", url: "https://www.paulrand.design" },
  { quote: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.", author: "Paul Rand", url: "https://www.paulrand.design", tag: "Graphic Design" },
  { quote: "It’s through mistakes that you actually can grow.", author: "Paula Scher", url: "https://www.pentagram.com/about/paula-scher", tag: "Creativity" },
  { quote: "Practice safe design: Use a concept.", author: "Petrula Vrontikis", url: "http://www.35k.com" },
  { quote: "Creativity is a highfalutin word for the work I have to do between now and Tuesday.", author: "Ray Kroc", url: "https://en.wikipedia.org/wiki/Ray_Kroc" },
  { quote: "Have no fear of perfection—you’ll never reach it.", author: "Salvador Dalí", url: "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD" },
  { quote: "Design is thinking made visual.", author: "Saul Bass", url: "https://en.wikipedia.org/wiki/Saul_Bass", tag: "Graphic Design" },
  { quote: "I want to make beautiful things, even if nobody cares, as opposed to ugly things. That’s my intent.", author: "Saul Bass", url: "https://en.wikipedia.org/wiki/Saul_Bass", tag: "Graphic Design" },
  { quote: "Live in the leading—the spaces in between the rules.", author: "Stefan Mumaw", url: "http://www.stefanmumaw.com" },
  { quote: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.", author: "Stefan Sagmeister", url: "", tag: "Graphic Design" },
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs", tag: "Design" },
  { quote: "Sometimes when you innovate, you make mistakes.", author: "Steve Jobs", url: "https://en.wikipedia.org/wiki/Steve_Jobs" },
  { quote: "The time it takes to make a decision increases as the number of alternatives increases.", author: "William Edmund Hick", url: "https://en.wikipedia.org/wiki/W._E._Hick" },
  { quote: "The map is not the territory.", author: "Alfred Korzybski", url: "https://en.wikipedia.org/wiki/Alfred_Korzybski", tag: "UX Design" },
  { quote: "We shape our tools and thereafter our tools shape us.", author: "Marshall McLuhan", url: "https://en.wikipedia.org/wiki/Marshall_McLuhan", tag: "Systems" },
  { quote: "What gets measured gets managed.", author: "Peter Drucker", url: "https://en.wikipedia.org/wiki/Peter_Drucker", tag: "Product" },
  { quote: "A system is perfectly designed to get the results it gets.", author: "W. Edwards Deming", url: "https://en.wikipedia.org/wiki/W._Edwards_Deming", tag: "Systems" },
  { quote: "You cannot not communicate.", author: "Paul Watzlawick", url: "https://en.wikipedia.org/wiki/Paul_Watzlawick", tag: "UX Design" },
  { quote: "All models are wrong, but some are useful.", author: "George Box", url: "https://en.wikipedia.org/wiki/George_E._P._Box", tag: "Systems" },
  { quote: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein", url: "https://en.wikipedia.org/wiki/Albert_Einstein", tag: "Design" },
  { quote: "We don’t see things as they are, we see them as we are.", author: "Anaïs Nin", url: "https://en.wikipedia.org/wiki/Ana%C3%AFs_Nin", tag: "Behaviour" },
  { quote: "Most people do not listen with the intent to understand; they listen with the intent to reply.", author: "Stephen R. Covey", url: "https://en.wikipedia.org/wiki/Stephen_Covey", tag: "Behaviour" },
  { quote: "A problem well stated is a problem half solved.", author: "Charles Kettering", url: "https://en.wikipedia.org/wiki/Charles_F._Kettering", tag: "Product" },
  { quote: "People will forget what you said, but they will never forget how you made them feel.", author: "Maya Angelou", url: "https://en.wikipedia.org/wiki/Maya_Angelou", tag: "UX Design" },
  { quote: "The beginning is the most important part of the work.", author: "Plato", url: "https://en.wikipedia.org/wiki/Plato", tag: "Product" },
  { quote: "Confusion is part of programming.", author: "Felienne Hermans", url: "https://en.wikipedia.org/wiki/Felienne_Hermans", tag: "Systems" },
  { quote: "Without deviation from the norm, progress is not possible.", author: "Frank Zappa", url: "https://en.wikipedia.org/wiki/Frank_Zappa", tag: "Creativity" },
  { quote: "The purpose of a system is what it does.", author: "Stafford Beer", url: "https://en.wikipedia.org/wiki/Stafford_Beer", tag: "Systems" },
  { quote: "If you want to understand something, try to change it.", author: "Kurt Lewin", url: "https://en.wikipedia.org/wiki/Kurt_Lewin", tag: "Behaviour" },
  { quote: "Chance favors the prepared mind.", author: "Louis Pasteur", url: "https://en.wikipedia.org/wiki/Louis_Pasteur", tag: "Creativity" },
  { quote: "The first principle is that you must not fool yourself—and you are the easiest person to fool.", author: "Richard Feynman", url: "https://en.wikipedia.org/wiki/Richard_Feynman", tag: "Behaviour" },
  { quote: "The enemy of knowledge is not ignorance, it is the illusion of knowledge.", author: "Stephen Hawking", url: "https://en.wikipedia.org/wiki/Stephen_Hawking", tag: "Behaviour" },
  { quote: "Writing is thinking. To write well is to think clearly.", author: "David McCullough", url: "https://en.wikipedia.org/wiki/David_McCullough", tag: "Design" },
  { quote: "Easy reading is damn hard writing.", author: "Nathaniel Hawthorne", url: "https://en.wikipedia.org/wiki/Nathaniel_Hawthorne", tag: "Design" },
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay", url: "https://en.wikipedia.org/wiki/Alan_Kay", tag: "Product" },
  { quote: "We simplify the world by ignoring most of it.", author: "Daniel Kahneman", url: "https://en.wikipedia.org/wiki/Daniel_Kahneman", tag: "Behaviour" },
  { quote: "People don’t choose between options, they choose between descriptions of options.", author: "Daniel Kahneman", url: "https://en.wikipedia.org/wiki/Daniel_Kahneman", tag: "UX Design" },
  { quote: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke", url: "https://en.wikipedia.org/wiki/Arthur_C._Clarke", tag: "Product" },
  { quote: "The interface is the product.", author: "Jef Raskin", url: "https://en.wikipedia.org/wiki/Jef_Raskin", tag: "UX Design" },
  { quote: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra", url: "https://en.wikipedia.org/wiki/Edsger_W._Dijkstra", tag: "Systems" },
  { quote: "The simplest explanation is usually the best one.", author: "Occam’s Razor", url: "https://en.wikipedia.org/wiki/Occam%27s_razor", tag: "Systems" },
  { quote: "A design isn’t finished until someone is using it.", author: "Brenda Laurel", url: "https://en.wikipedia.org/wiki/Brenda_Laurel", tag: "UX Design" }
];

const LONG_QUOTE_THRESHOLD = 100;
const CROSSFADE_MS = 250;

// ---------- Tag helpers ----------

function slugify(tag) {
  return tag.toLowerCase().trim().replace(/\s+/g, "-");
}

// Derive the tag list from the data so adding a new tag in `quotes` automatically
// surfaces a new chip. Order: All first, then alphabetical.
const ALL_TAG = { slug: "all", label: "All" };
const tagList = (() => {
  const seen = new Map();
  for (const q of quotes) {
    const t = (q.tag || "").trim();
    if (!t) continue;
    const slug = slugify(t);
    if (!seen.has(slug)) seen.set(slug, t);
  }
  const tags = Array.from(seen, ([slug, label]) => ({ slug, label }));
  tags.sort((a, b) => a.label.localeCompare(b.label));
  return [ALL_TAG, ...tags];
})();

function poolForTag(slug) {
  if (!slug || slug === ALL_TAG.slug) {
    return quotes.map((_, i) => i);
  }
  return quotes.reduce((acc, q, i) => {
    if (q.tag && slugify(q.tag) === slug) acc.push(i);
    return acc;
  }, []);
}

// ---------- Hash routing ----------

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return {};
  const params = new URLSearchParams(raw);
  const out = {};
  const q = params.get("q");
  const tag = params.get("tag");
  if (q !== null && /^\d+$/.test(q)) {
    const n = Number(q);
    if (n >= 0 && n < quotes.length) out.q = n;
  }
  if (tag) {
    const known = tagList.find((t) => t.slug === tag);
    if (known) out.tag = known.slug;
  }
  return out;
}

function writeHash({ q, tag } = {}) {
  const params = new URLSearchParams();
  if (typeof q === "number") params.set("q", String(q));
  if (tag && tag !== ALL_TAG.slug) params.set("tag", tag);
  const next = params.toString();
  const url = next ? `${window.location.pathname}${window.location.search}#${next}` : window.location.pathname + window.location.search;
  history.replaceState(null, "", url);
  // Keep og:url in sync so chat clients that scrape the rendered DOM get the right link.
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", window.location.href);
}

// ---------- Picking quotes ----------

function pickNextIndex(pool, lastIdx) {
  if (!pool.length) return null;
  if (pool.length === 1) return pool[0];
  let next;
  do {
    next = pool[Math.floor(Math.random() * pool.length)];
  } while (next === lastIdx);
  return next;
}

// ---------- Paper gradients + accent (mix palette families on each navigation) ----------

/**
 * Seven-stop “paper” gradients per family — stronger hue shifts and a slightly
 * deeper corner so the wash reads clearly on a full viewport.
 */
const PAPER_PALETTES = [
  {
    stops: ["#faf9f5", "#e8f2f0", "#d7e8ec", "#c7dde5", "#b7d2de", "#a8c7d7", "#98bcd0"],
    hueCenter: 202,
    hueHalfWidth: 52,
  },
  {
    stops: ["#fdf8f6", "#f3e4df", "#ead1d3", "#e1c0c7", "#d8b0bc", "#cfa1b1", "#c693a7"],
    hueCenter: 8,
    hueHalfWidth: 48,
  },
  {
    stops: ["#f5f7fc", "#e2e9f4", "#d1dbf0", "#c1ceeb", "#b2c1e6", "#a3b5e1", "#95a9dc"],
    hueCenter: 252,
    hueHalfWidth: 42,
  },
  {
    stops: ["#f9faf4", "#e9f0e2", "#dbe7d5", "#cddfc9", "#c0d6bd", "#b3cdb2", "#a7c4a7"],
    hueCenter: 118,
    hueHalfWidth: 48,
  },
  {
    stops: ["#fdfaf3", "#f2e6d4", "#e8d7c1", "#dec9af", "#d5bb9e", "#ccad8e", "#c3a080"],
    hueCenter: 38,
    hueHalfWidth: 40,
  },
];

function normalizeHueDeg(n) {
  const x = n % 360;
  return x < 0 ? x + 360 : x;
}

function pickNextPaletteIndex(previousIndex) {
  const n = PAPER_PALETTES.length;
  if (n <= 1) return 0;
  if (previousIndex == null || previousIndex < 0) return Math.floor(Math.random() * n);
  let idx = 0;
  for (let i = 0; i < 20; i++) {
    idx = Math.floor(Math.random() * n);
    if (idx !== previousIndex) break;
  }
  return idx;
}

/** Shortest distance between two hues on the 0–360° wheel. */
function hueCircDist(a, b) {
  const d = Math.abs(a - b) % 360;
  return Math.min(d, 360 - d);
}

function randomHueAround(centerDeg, halfWidth) {
  const c = normalizeHueDeg(centerDeg);
  const offset = (Math.random() * 2 - 1) * halfWidth;
  return normalizeHueDeg(Math.round(c + offset));
}

/**
 * Muted HSL accent; hue is biased toward the current paper palette unless
 * bias is null (not used here, but keeps the helper flexible).
 */
function pickRandomAccentColor(previousHue, bias) {
  const MIN_SEP = 42;
  let hue = 0;
  for (let i = 0; i < 28; i++) {
    hue = bias
      ? randomHueAround(bias.hueCenter, bias.hueHalfWidth)
      : Math.floor(Math.random() * 360);
    if (previousHue == null || hueCircDist(hue, previousHue) >= MIN_SEP) break;
  }
  const sat = 24 + Math.floor(Math.random() * 18); // 24–41%
  const light = 18 + Math.floor(Math.random() * 14); // 18–31%
  const css = `hsl(${hue}, ${sat}%, ${light}%)`;
  return { css, hue };
}

function applyTheme() {
  const pIdx = pickNextPaletteIndex(state.lastPaperPaletteIndex);
  state.lastPaperPaletteIndex = pIdx;
  const palette = PAPER_PALETTES[pIdx];
  const [pa, pb, pc, pd, pe, pf, pg] = palette.stops;
  const bias = { hueCenter: palette.hueCenter, hueHalfWidth: palette.hueHalfWidth };

  const prev = state.lastAccentHue;
  const { css, hue } = pickRandomAccentColor(prev, bias);
  state.lastAccentHue = hue;
  state.accentColor = css;

  const body = document.body;
  body.style.removeProperty("background-color");
  body.style.setProperty("--paper-a", pa);
  body.style.setProperty("--paper-b", pb);
  body.style.setProperty("--paper-c", pc);
  body.style.setProperty("--paper-d", pd);
  body.style.setProperty("--paper-e", pe);
  body.style.setProperty("--paper-f", pf);
  body.style.setProperty("--paper-g", pg);
  body.style.setProperty("--accent", css);

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute("content", css);

  document.querySelectorAll("button.mobile-button-random").forEach((btn) => {
    btn.style.color = css;
  });
}

// ---------- Rendering ----------

const quoteEl = document.getElementById("quotetext");
const sourceEl = document.getElementById("quotesource");
const mainHomeEl = document.getElementById("main");
const chipsEl = document.querySelector("[data-tag-chips]");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MIN_QUOTE_FONT_PX = 13;

const state = {
  index: null,
  tag: ALL_TAG.slug,
  accentColor: "",
  lastAccentHue: null,
  lastPaperPaletteIndex: null,
  quoteFitRaf: null,
};

function renderQuoteContent(index) {
  if (!quoteEl || !sourceEl) return;
  const item = quotes[index];

  quoteEl.textContent = item.quote;
  quoteEl.classList.toggle("long", item.quote.length > LONG_QUOTE_THRESHOLD);

  if (item.url) {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.author;
    sourceEl.replaceChildren(link);
  } else {
    sourceEl.textContent = item.author;
  }

  scheduleQuoteFit();
}

function quoteFigureEl() {
  return quoteEl?.closest("figure.quote-wrapper");
}

/** Newsreader `opsz` tracks the fitted size so the serif stays sharp. */
function applyQuoteVariationFromPx(fontSizePx) {
  if (!quoteEl) return;
  const isLong = quoteEl.classList.contains("long");
  const minO = isLong ? 40 : 54;
  const maxO = isLong ? 88 : 126;
  const refFs = isLong ? 36 : 64;
  const t = Math.min(1.35, fontSizePx / refFs);
  const opsz = Math.round(Math.min(maxO, minO + t * (maxO - minO)));
  quoteEl.style.setProperty("font-variation-settings", `"wght" 500, "opsz" ${opsz}`);
}

function quoteStackFits(wrapper) {
  return wrapper.scrollHeight <= wrapper.clientHeight + 2;
}

function scheduleQuoteFit() {
  if (!quoteEl || !document.body.classList.contains("page-home")) return;
  cancelAnimationFrame(state.quoteFitRaf);
  state.quoteFitRaf = requestAnimationFrame(() => {
    state.quoteFitRaf = requestAnimationFrame(() => {
      state.quoteFitRaf = null;
      fitQuoteToViewportHeight();
    });
  });
}

function fitQuoteToViewportHeight(retryDepth = 0) {
  if (!quoteEl || !document.body.classList.contains("page-home")) return;
  const wrapper = quoteFigureEl();
  if (!wrapper) return;
  if (wrapper.clientHeight < 32) {
    if (retryDepth < 8) {
      window.setTimeout(() => fitQuoteToViewportHeight(retryDepth + 1), 80);
    }
    return;
  }

  quoteEl.style.removeProperty("font-size");
  quoteEl.style.removeProperty("font-variation-settings");
  wrapper.offsetHeight;

  const maxPx = parseFloat(globalThis.getComputedStyle(quoteEl).fontSize);
  if (!Number.isFinite(maxPx) || maxPx < MIN_QUOTE_FONT_PX) return;

  const applyPx = (px) => {
    quoteEl.style.setProperty("font-size", `${px}px`);
    applyQuoteVariationFromPx(px);
    wrapper.offsetHeight;
  };

  applyPx(maxPx);
  if (quoteStackFits(wrapper)) return;

  let lo = MIN_QUOTE_FONT_PX;
  let hi = maxPx;
  let best = lo;

  for (let i = 0; i < 52; i++) {
    const mid = (lo + hi) / 2;
    applyPx(mid);
    if (quoteStackFits(wrapper)) {
      best = mid;
      lo = mid;
    } else {
      hi = mid;
    }
    if (hi - lo < 0.4) break;
  }

  applyPx(best);
}

function renderQuote(index) {
  state.index = index;
  if (reduceMotion) {
    renderQuoteContent(index);
    return;
  }
  // Crossfade: fade out, swap content, fade back in.
  if (!quoteEl || !sourceEl) return;
  quoteEl.classList.add("is-changing");
  sourceEl.classList.add("is-changing");
  window.setTimeout(() => {
    renderQuoteContent(index);
    quoteEl.classList.remove("is-changing");
    sourceEl.classList.remove("is-changing");
  }, CROSSFADE_MS);
}

// ---------- Tag chips ----------

function renderChips() {
  if (!chipsEl) return;
  chipsEl.replaceChildren(
    ...tagList.map((t) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tag-chip";
      btn.dataset.tag = t.slug;
      btn.textContent = t.label;
      if (t.slug === state.tag) {
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.setAttribute("aria-pressed", "false");
      }
      btn.addEventListener("click", () => applyTagFilter(t.slug));
      return btn;
    })
  );

  if (document.body.classList.contains("page-home")) {
    scheduleQuoteFit();
  }
}

function applyTagFilter(slug) {
  state.tag = slug;
  const pool = poolForTag(slug);
  if (!pool.length) return;
  const next = pool.includes(state.index) ? state.index : pickNextIndex(pool, null);
  renderQuote(next);
  applyTheme();
  renderChips();
  writeHash({ q: next, tag: slug });
}

// ---------- Random ----------

function nextRandom() {
  const pool = poolForTag(state.tag);
  const next = pickNextIndex(pool, state.index);
  if (next === null) return;
  renderQuote(next);
  applyTheme();
  writeHash({ q: next, tag: state.tag });
}

// ---------- Side menu ----------

const sideNav = document.getElementById("mySidenav");
const openMenuBtn = document.querySelector("[data-open-menu]");
const closeMenuBtn = document.querySelector("[data-close-menu]");

function openNav() {
  if (!sideNav) return;
  sideNav.style.width = "80%";
  sideNav.setAttribute("aria-hidden", "false");
  if (openMenuBtn) openMenuBtn.setAttribute("aria-expanded", "true");
}

function closeNav() {
  if (!sideNav) return;
  sideNav.style.width = "0";
  sideNav.setAttribute("aria-hidden", "true");
  if (openMenuBtn) {
    openMenuBtn.setAttribute("aria-expanded", "false");
    openMenuBtn.focus();
  }
}

// ---------- Wiring ----------

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function bootstrapFromHash() {
  const parsed = parseHash();
  state.tag = parsed.tag || ALL_TAG.slug;
  const pool = poolForTag(state.tag);
  let initial;
  if (typeof parsed.q === "number" && pool.includes(parsed.q)) {
    initial = parsed.q;
  } else {
    initial = pickNextIndex(pool, null);
  }
  // Initial render is instant, no crossfade.
  state.index = initial;
  renderQuoteContent(initial);
  applyTheme();
  renderChips();
  writeHash({ q: initial, tag: state.tag });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-random]").forEach((btn) => {
    btn.addEventListener("click", nextRandom);
  });

  if (mainHomeEl && quoteEl) {
    mainHomeEl.addEventListener("click", (e) => {
      const t = e.target;
      if (t.closest("button, a, input, textarea, select, summary, label")) return;
      if (t.closest("#quotetext, #quotesource")) return;
      const sel = window.getSelection();
      if (sel && sel.toString().trim()) return;
      nextRandom();
    });
  }

  if (openMenuBtn) openMenuBtn.addEventListener("click", openNav);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeNav);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNav();
      return;
    }
    if (isTypingTarget(e.target)) return;
    if (e.key === " " || e.code === "Space" || e.key === "ArrowRight") {
      e.preventDefault();
      nextRandom();
    }
  });

  // Hash changes from the back button or manual edits.
  window.addEventListener("popstate", () => {
    const parsed = parseHash();
    const tagChanged = Boolean(parsed.tag && parsed.tag !== state.tag);
    if (tagChanged) {
      state.tag = parsed.tag;
    }
    const qChanged = typeof parsed.q === "number" && parsed.q !== state.index;
    if (qChanged) {
      renderQuote(parsed.q);
    }
    if (tagChanged || qChanged) {
      applyTheme();
      if (tagChanged) renderChips();
    }
  });

  if (quoteEl) bootstrapFromHash();

  if (document.body.classList.contains("page-home")) {
    document.fonts.ready.then(() => scheduleQuoteFit());
    const home = document.querySelector(".home-wrapper");
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => scheduleQuoteFit());
      const wf = quoteFigureEl();
      if (wf) ro.observe(wf);
      if (home) ro.observe(home);
    }
    let resizeHold;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeHold);
      resizeHold = window.setTimeout(scheduleQuoteFit, 100);
    });
  }
});
