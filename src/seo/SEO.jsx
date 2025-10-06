// src/seo/SEO.jsx
import { Helmet } from "react-helmet";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  SOCIAL_IMAGE, // ← added
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
  includeTitle = true,
  includeDescription = true,
}) {
  const fullTitle = title ? `${title}` : DEFAULT_TITLE;

  const inferred =
    typeof window !== "undefined"
      ? window.location.href.split("#")[0].split("?")[0]
      : `${SITE_URL}/`;

  const canon = canonical || inferred;
  const desc = clamp160(description);

  return (
    <Helmet prioritizeSeoTags>
      {includeTitle && <title>{fullTitle}</title>}
      {includeDescription && <meta name="description" content={desc} />}
      {canon && <link rel="canonical" href={canon} />}

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      {includeTitle && <meta property="og:title" content={fullTitle} />}
      {includeDescription && (
        <meta property="og:description" content={desc} />
      )}
      {canon && <meta property="og:url" content={canon} />}
      {/* One global image across the entire site */}
      <meta property="og:image" content={SOCIAL_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {includeTitle && <meta name="twitter:title" content={fullTitle} />}
      {includeDescription && (
        <meta name="twitter:description" content={desc} />
      )}
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
    </Helmet>
  );
}
