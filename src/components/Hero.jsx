import React from "react";
import PropTypes from "prop-types";

// ---------- helpers ----------
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

// parse "50% 40%" -> [50, 40]
function parseFocusPair(focusStr = "50% 50%") {
  const [x = "50%", y = "50%"] = String(focusStr).trim().split(/\s+/);
  const toNum = (s) => {
    if (typeof s === "number") return s;
    const n = parseFloat(String(s).replace("%", ""));
    return Number.isFinite(n) ? n : 50;
  };
  return [toNum(x), toNum(y)];
}

// normalize offset input: 10, "10", "10%" -> number 10
function normOffset(v) {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v.replace("%", ""));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

/**
 * HeroSection — full‑bleed hero with controllable zoom + pan that never spills outside.
 *
 * Props of interest:
 * - imgScale (number): zoom (e.g., 1.2)
 * - offsetX / offsetY (number|string): pan in percent; accepts 10 or "10%" (right/down positive)
 * - focus (string): base object-position like "50% 50%"; offsets apply on top
 * - constrain (bool): clamp pan so edges don't show (default true)
 */
export default function HeroSection({
  image,
  title,
  focus = "50% 50%",
  behindNavbar = true,
  heightClasses = "h-[100vh]",
  className = "",
  priority = true,
  tint = true,
  tintOpacity = 0.4,
  tintColor = "#000000",
  headingAlign = "center", // "center" | "left" | "right"
  headingVAlign = "center", // "center" | "top" | "bottom"

  // pan + scale controls
  imgScale = 1,
  offsetX = 0,
  offsetY = 0,
  constrain = true,
}) {
  // layout classes for heading
  const hJustify =
    headingAlign === "left" ? "justify-start" :
    headingAlign === "right" ? "justify-end" : "justify-center";
  const vItems =
    headingVAlign === "top" ? "items-start" :
    headingVAlign === "bottom" ? "items-end" : "items-center";
  const textAlign =
    headingAlign === "left" ? "text-left" :
    headingAlign === "right" ? "text-right" : "text-center";
  const sidePad =
    headingAlign === "left" ? "pl-6 sm:pl-8 lg:pl-12" :
    headingAlign === "right" ? "pr-6 sm:pr-8 lg:pr-12" : "";

  // compute final object-position after offsets
  const [baseX, baseY] = parseFocusPair(focus);
  const userX = normOffset(offsetX);
  const userY = normOffset(offsetY);
  const rawX = baseX + userX;
  const rawY = baseY + userY;
  const finalX = constrain ? clamp(rawX, 0, 100) : rawX;
  const finalY = constrain ? clamp(rawY, 0, 100) : rawY;

  // tiny safety bump if panned with no scale, to minimize edge risk on extreme positions
  const effectiveScale = imgScale === 1 && (userX || userY) ? 1.02 : imgScale;

  return (
    <section
      className={`relative w-full z-0 ${className}`}
      style={behindNavbar ? { marginTop: "calc(var(--nav-h, 7rem) * -1)" } : undefined}
    >
      <div className={`relative w-full overflow-hidden ${heightClasses}`}>
        {/* Image (object-position does the actual pan; transform applies scale) */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover select-none will-change-transform"
          style={{
            objectPosition: `${finalX}% ${finalY}%`,
            transformOrigin: "center center",
            transform: `scale(${effectiveScale})`,
            transition: "transform 300ms ease, object-position 200ms ease",
          }}
          draggable="false"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />

        {/* Tint overlay */}
        {tint && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: tintColor, opacity: Math.max(0, Math.min(1, tintOpacity)), transition: "opacity 200ms ease" }}
          />
        )}

        {/* Heading layer */}
        <div className={`absolute inset-0 flex ${hJustify} ${vItems} ${sidePad}`} data-aos="fade-up" data-aos-duration="800">
          <h1 className={`font-porscha text-5xl sm:text-7xl lg:text-8xl text-[#FFF2DD] ${textAlign}`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  focus: PropTypes.string,
  behindNavbar: PropTypes.bool,
  heightClasses: PropTypes.string,
  className: PropTypes.string,
  priority: PropTypes.bool,
  tint: PropTypes.bool,
  tintOpacity: PropTypes.number,
  tintColor: PropTypes.string,
  headingAlign: PropTypes.oneOf(["center", "left", "right"]),
  headingVAlign: PropTypes.oneOf(["center", "top", "bottom"]),
  imgScale: PropTypes.number,
  offsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  constrain: PropTypes.bool,
};
