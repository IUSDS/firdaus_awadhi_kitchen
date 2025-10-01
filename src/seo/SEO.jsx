// src/seo/SEO.jsx
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "./siteMeta";

/**
 * Trims and clamps a description to ~160 chars (good SERP snippet length).
 */
function clamp160(s) {
  if (!s) return DEFAULT_DESCRIPTION;
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > 160 ? t.slice(0, 157) + "…" : t;
}

/**
 * SEO component:
 * - Builds a full <title> like: `${title} | ${SITE_NAME}` or falls back to DEFAULT_TITLE
 * - Sets <meta name="description"> (clamped to 160 chars)
 * - Sets <link rel="canonical"> (uses prop or infers from window)
 * - Sets <meta name="robots"> (index/follow unless explicitly disabled)
 * - Mirrors title/description to Open Graph & Twitter for richer shares
 */
export function SEO({ title, description, canonical, noIndex }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  // Infer a canonical if not provided (client-side only)
  const inferred =
    typeof window !== "undefined"
      ? window.location.href.split("#")[0].split("?")[0]
      : `${SITE_URL}/`;

  const canon = canonical || inferred;
  const desc = clamp160(description);

  return (
    <>
      {/* HTML <title> */}
      <title>{fullTitle}</title>
      {/* Some crawlers read this too */}
      <meta name="title" content={fullTitle} />

      {/* Search snippet text */}
      <meta name="description" content={desc} />

      {/* Canonical URL to prevent duplicate-content issues */}
      {canon && <link rel="canonical" href={canon} />}

      {/* Indexing control */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph (Facebook/LinkedIn) */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {canon && <meta property="og:url" content={canon} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </>
  );
}
