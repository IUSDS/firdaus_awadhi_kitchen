// app/components/sections/EventHighlightsSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import {food6, food7, food9, philosophyDivider } from "../../assets/images"; 

const DEFAULT_ITEMS = [
  { img: food6, title: "Eid at Firdaus", blurb: "Laughter, biryani, and chandeliers" },
  { img: food9, title: "Thali Tastings", blurb: "A journey through seasonal menus" },
  { img: food7, title: "Women Who Cooked With Us", blurb: "A tribute to home chefs" },
];

export default function EventHighlightsSection({ items = DEFAULT_ITEMS }) {
  return (
    // Match Philosophy: transparent section, generous bottom pad, hide sideways overflow
    <section className="relative overflow-x-hidden overflow-y-hidden pb-54 sm:pb-60 md:pb-70 lg:pb-[23rem]">
      {/* GREEN PANEL holds heading + content ONLY (section background stays transparent) */}
      <div className="relative bg-[#005931] text-[#FFF2DD]">
        <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-2 md:pb-2">
          {/* ——— KEEP YOUR HEADING EXACTLY AS-IS ——— */}
          <SectionDecor variant="green" className="mb-2" />
          <h2 className="mb-10 text-5xl sm:text-6xl leading-[1.3] tracking-tight font-porscha">
            Event Highlights Gallery
          </h2>

          {/* ——— KEEP YOUR INNER CONTENT LAYOUT ———
              Only wrapped with a subtle scale to “increase the size a little” */}
          <div className="mx-auto w-full max-w-[620px] sm:max-w-[680px] md:max-w-[720px] transform-gpu origin-top scale-[1.02] md:scale-[1.04]">
            {items.map((it, i) => {
              const reversed = i === 1; // straight → reverse → straight (unchanged)
              return (
                <div key={i} className="mb-8 sm:mb-10 md:mb-12">
                  <div
                    className={[
                      "flex items-center gap-5 md:gap-10",
                      reversed
                        ? "flex-col md:flex-row-reverse md:pr-16 lg:pr-20"
                        : "flex-col md:flex-row md:pl-16 lg:pl-20",
                    ].join(" ")}
                  >
                    <img
                      src={it.img}
                      alt={it.title}
                      className="h-[78px] w-[78px] md:h-[120px] md:w-[120px] rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                    <div className="min-w-0">
                      <h3 className="font-quicksand font-[500] leading-tight text-[clamp(19px,1.8vw,22px)]">
                        {it.title}
                      </h3>
                      {it.blurb && (
                        <p className="mt-2 opacity-90 text-[clamp(15px,1.25vw,18px)]">
                          {it.blurb}
                        </p>
                      )}
                    </div>
                  </div>

                  {i !== items.length - 1 && (
                    <div className="mx-auto mt-6 md:mt-8 h-px w-[50%] bg-[#FFF2DD]/50" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ——— DIVIDER: identical behavior to Philosophy (outside content, -z-10) ——— */}
        <img
          src={philosophyDivider}
          alt=""
          aria-hidden="true"
          className={[
    // layering + anchoring (unchanged)
    "pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2",
    // allow exceeding container width (fixes 'zoom not changing')
    "max-w-none",
    // compose transforms with Tailwind vars
    "transform-gpu origin-bottom will-change-transform",
    // responsive LIFT in rem (same pattern you use)
    "top-[calc(100%-8rem)] sm:top-[calc(100%-15rem)] md:top-[calc(100%-20rem)] lg:top-[calc(100%-24rem)] xl:top-[calc(100%-26rem)]",
    // width “zoom” (now actually works because of max-w-none)
    "w-[110vw] sm:w-[116vw] md:w-[125vw] lg:w-[124vw] xl:w-[105vw]",
    // tiny additional optical zoom via scale (optional; tweak freely)
    "scale-[1.05] sm:scale-[1.02] md:scale-[1.01] lg:scale-[1.06]"
  ].join(" ")}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
    </section>
  );
}
