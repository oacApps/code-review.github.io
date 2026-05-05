# Code Review Hub

A self-contained, static HTML project for presenting annotated code reviews
with a split code/issue-tabs layout and a shared navigation shell.

---

## Project structure

```
code-review/
├── index.html                   ← home page + nav shell (open this in browser)
├── assets/
│   ├── css/
│   │   ├── base.css             ← design tokens, reset, shell layout
│   │   └── review.css           ← split-panel + tabs layout (used by every page)
│   └── js/
│       ├── pages.config.js      ← ⭐ PAGE REGISTRY — edit this to add pages
│       ├── nav.js               ← sidebar builder (auto-runs from index.html)
│       └── review.js            ← tab switching + line highlighting
├── pages/
│   └── order-service.html       ← first review page (template to copy)
└── README.md
```

---

## How to add a new review page

### Step 1 — Duplicate the template

Copy `pages/order-service.html` to a new file, e.g. `pages/user-auth.html`.

### Step 2 — Update `assets/js/pages.config.js`

Add an entry to the `PAGES` array:

```js
{
  id:         "user-auth",            // unique slug
  title:      "UserAuthService",      // sidebar + card title
  subtitle:   "Password & session issues",
  file:       "pages/user-auth.html", // path relative to index.html
  tag:        "Security",             // category label
  issueCount: 4,                      // total issues on the page
  severity:   "critical",             // worst issue: "critical"|"warning"|"info"
  date:       "May 2025",
},
```

The sidebar nav and home page cards update **automatically** — no other files need touching.

### Step 3 — Edit the new page

Inside your new `.html` file:

1. **`<meta name="page-id">`** — set to your `id` slug.
2. **Code panel** — replace the `<div class="code-block">` content with your code lines.
3. **Gutter markers** — use `m-crit` / `m-warn` / `m-info` classes on `.line-marker` spans.
4. **Tabs** — add/remove `.tab-btn` buttons; keep count in sync with issues.
5. **Issue panes** — add/remove `.issue-pane` divs; use the existing structure as a guide.
6. **`window.ISSUE_LINES`** — map tab index → array of line numbers to highlight.

---

## Running the project

Open `index.html` directly in a browser.

> **Note:** Because pages are loaded in an iframe, some browsers block local `file://`
> iframes. If the review pane stays blank, serve with any static server:
>
> ```bash
> npx serve .          # Node
> python3 -m http.server 8080   # Python
> ```
> Then open `http://localhost:8080`.

---

## Severity guide

| Symbol | Class | Meaning |
|--------|-------|---------|
| `!`    | `sev-critical` | Data loss, security flaw, financial error |
| `~`    | `sev-warning`  | Reliability, testability, best practice |
| `i`    | `sev-info`     | Observability, style, minor improvement |
