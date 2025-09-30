// app/components/shared/sectionDecor.jsx
import React from "react";

// Update paths to your assets:
import sectionDecorW from "../assets/icons/sectionDecorW.png";
import sectionDecorG from "../assets/icons/sectionDecorG.png";

/**
 * SectionDecor
 * - variant: "white" | "green"
 * - align: "start" | "center" | "end" | undefined (undefined = inherit parent)
 * - count: number of icons (default 3)
 * - sizeClass / gapClass: quick sizing controls
 */
export default function SectionDecor({
  variant = "white",
  align, // don't set by default so existing positioning stays the same
  count = 3,
  sizeClass = "h-8 w-8 sm:h-10 sm:w-10",
  gapClass = "gap-2 sm:gap-3",
  className = "",
}) {
  const src = variant === "green" ? sectionDecorG : sectionDecorW;

  const alignClass =
    align === "start"
      ? "justify-start"
      : align === "center"
      ? "justify-center"
      : align === "end"
      ? "justify-end"
      : ""; // inherit previous behavior

  return (
    <div
      className={`flex items-center ${alignClass} ${gapClass} ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`${sizeClass} shrink-0 object-contain select-none pointer-events-none`}
          loading="lazy"
          decoding="async"
          draggable="false"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ))}
    </div>
  );
}

export const WhiteSectionDecor = (props) => (
  <SectionDecor {...props} variant="white" />
);

export const GreenSectionDecor = (props) => (
  <SectionDecor {...props} variant="green" />
);
