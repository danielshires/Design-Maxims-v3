# Design Maxims

> Short quotes and ruminations on what design (and life) can be.

A small static site that displays a random design quote on each visit. Click "Random" to roll a new one — the background colour shifts with it.

[Live site](https://www.danielshires.com) · By [Daniel Shires](https://www.danielshires.com)

## Stack

- Plain HTML, vanilla JS (no jQuery / no framework)
- Sass (Dart Sass) compiled to a single `styles.css`
- Work Sans served from Google Fonts
- Fluid typography via CSS `clamp()`

## Project layout

```
011-Design-Maxims/
├── index.html              # Random-quote homepage
├── about.html              # About page
├── resources/
│   ├── css/
│   │   ├── normalize.css   # Reset
│   │   ├── styles.scss     # Source styles (edit this)
│   │   └── styles.css      # Compiled output (do not edit)
│   ├── js/
│   │   └── main.js         # Quote data + UI logic
│   └── png/, img/, ai/, doc/
├── images/                 # Marketing / preview images
└── Sketch/                 # Design source files
```

## Getting started

Install dev dependencies once:

```bash
npm install
```

### Build the CSS

```bash
npm run build:css   # one-off compile, compressed
npm run watch:css   # rebuild on save while you work
```

### Serve locally

```bash
npm run dev         # spins up a static server at http://localhost:3000
```

…or just open `index.html` in a browser — there is no runtime build step.

## Adding a new quote

Edit `resources/js/main.js` and append to the `quotes` array:

```js
{ quote: "Good design is honest.", author: "Dieter Rams", url: "https://en.wikipedia.org/wiki/Dieter_Rams" }
```

`url` is optional — leave it blank (`""`) for unlinked attribution.

## Deployment

This is a fully static site. After running `npm run build:css`, deploy the project root to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## License

MIT — see `LICENSE.txt`.
