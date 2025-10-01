// src/seo/SEO.jsx
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "./siteMeta";

function clamp160(s) {
  if (!s) return DEFAULT_DESCRIPTION;
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > 160 ? t.slice(0, 157) + "…" : t;
}

export function SEO({
  title,
  description,
  canonical,
  noIndex,
  includeTitle = true,          // ⬅️ NEW
  includeDescription = true,     // ⬅️ NEW
}) {
  const fullTitle = title ? `${title}` : DEFAULT_TITLE;

  const inferred =
    typeof window !== "undefined"
      ? window.location.href.split("#")[0].split("?")[0]
      : `${SITE_URL}/`;

  const canon = canonical || inferred;
  const desc = clamp160(description);

  return (
    <>
      {/* Title (optional) */}
      {includeTitle && <title>{fullTitle}</title>}
      {/* Meta description (optional) */}
      {includeDescription && <meta name="description" content={desc} />}

      {/* Canonical */}
      {canon && <link rel="canonical" href={canon} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      {includeTitle && <meta property="og:title" content={fullTitle} />}
      {includeDescription && <meta property="og:description" content={desc} />}
      {canon && <meta property="og:url" content={canon} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      {includeTitle && <meta name="twitter:title" content={fullTitle} />}
      {includeDescription && <meta name="twitter:description" content={desc} />}
    </>
  );
}
