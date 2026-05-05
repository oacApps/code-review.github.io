/**
 * ─────────────────────────────────────────────
 *  PAGE REGISTRY
 *  Add a new entry here to register a new page.
 * ─────────────────────────────────────────────
 *
 * Fields:
 *  id        – unique slug (used in URL hash navigation)
 *  title     – display name in sidebar & cards
 *  subtitle  – short description
 *  file      – path relative to project root
 *  tag       – category label (e.g. "Spring", "JPA", "Security")
 *  issueCount – total issues in the review
 *  severity  – "critical" | "warning" | "info"  (worst issue on the page)
 *  date      – review date string
 */
const PAGES = [
  {
    id:         "order-service",
    title:      "OrderService",
    subtitle:   "Transaction safety, money precision & observability issues",
    file:       "pages/order-service.html",
    tag:        "Spring",
    issueCount: 6,
    severity:   "critical",
    date:       "May 2025",
  },

  // ── Add your next page below ──────────────────────────────────────────
  // {
  //   id:         "user-auth",
  //   title:      "UserAuthService",
  //   subtitle:   "Password storage & session management issues",
  //   file:       "pages/user-auth.html",
  //   tag:        "Security",
  //   issueCount: 4,
  //   severity:   "critical",
  //   date:       "May 2025",
  // },
];
