// src/components/Hero.jsx
import React from "react";
import { Helmet } from "react-helmet";

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
  headingAlign = "center",
  headingVAlign = "center",
  // pan + scale controls
  imgScale = 1,
  offsetX = 0,
  offsetY = 0,
  constrain = true,
}) {
  // --- helpers ---
  const parseFocus = (val) => {
    if (typeof val === "string") {
      const parts = val.trim().split(/\s+/);
      const [x = "50%", y = "50%"] = parts;
      const toNum = (p) =>
        typeof p === "string" && p.endsWith("%")
          ? Number(p.slice(0, -1))
          : Number(p);
      return [toNum(x), toNum(y)];
    }
    if (Array.isArray(val)) return [Number(val[0]) || 50, Number(val[1]) || 50];
    return [50, 50];
  };

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const [baseX, baseY] = parseFocus(focus);
  let finalX = baseX + (Number(offsetX) || 0);
  let finalY = baseY + (Number(offsetY) || 0);
  if (constrain) {
    finalX = clamp(finalX, 0, 100);
    finalY = clamp(finalY, 0, 100);
  }

  // heading alignment classes
  const sidePad = "px-6 sm:px-8 md:px-12";
  const hJustify =
    headingAlign === "left"
      ? `justify-start ${sidePad}`
      : headingAlign === "right"
      ? `justify-end ${sidePad}`
      : `justify-center ${sidePad}`;
  const textAlign =
    headingAlign === "left"
      ? "text-left"
      : headingAlign === "right"
      ? "text-right"
      : "text-center";
  const vItems =
    headingVAlign === "top"
      ? "items-start"
      : headingVAlign === "bottom"
      ? "items-end"
      : "items-center";

  return (
    <section
      className={`relative w-full z-0 ${className}`}
      style={behindNavbar ? { marginTop: "calc(var(--nav-h, 8rem) * -1)" } : undefined}
    >
      {/* Preload hero to start fetching before React paints */}
      {priority && (
        <Helmet>
          <link rel="preload" as="image" href={image} fetchpriority="high" />
        </Helmet>
      )}

      <div className={`relative w-full overflow-hidden ${heightClasses}`}>
        {/* Hero image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover select-none will-change-transform"
          style={{
            objectPosition: `${finalX}% ${finalY}%`,
            transformOrigin: "center center",
            transform: `scale(${imgScale})`,
            transition: "transform 300ms ease, object-position 200ms ease",
          }}
          draggable="false"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="sync"
        />

        {/* Tint overlay */}
        {tint && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: tintColor,
              opacity: Math.max(0, Math.min(1, tintOpacity)),
              transition: "opacity 200ms ease",
            }}
          />
        )}

        {/* Heading layer */}
        <div
          className={`absolute inset-0 flex ${hJustify} ${vItems}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className={`font-porsha text-5xl sm:text-7xl lg:text-8xl text-[#FFF2DD] ${textAlign}`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
