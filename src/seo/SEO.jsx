// src/seo/SEO.jsx
import { Helmet } from "react-helmet";
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
  includeTitle = true,
  includeDescription = true,
}) {
  const fullTitle = title ? `${title}` : DEFAULT_TITLE;

  // For browsers/Google (JS-enabled). Bots for previews won't use this.
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
    </Helmet>
  );
}
