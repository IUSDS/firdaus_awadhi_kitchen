// src/components/sections/EverydayRituals.jsx
import React from "react";
import { sectionStrip } from "../../assets/icons";
import { food11, food12, food15, food20 } from "../../assets/images";

export default function EverydayRituals() {
  return (
    <section className="relative bg-[#005930] text-[#FFF2DD] overflow-x-clip">
      {/* Top ornament strip */}
      <div className="relative h-8 md:h-10 pointer-events-none select-none">
        <img
          src={sectionStrip}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content container (unchanged spacing) */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
        {/* Mobile: single column; Large: 12-col grid for 45/55 + 50/50 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-16 items-stretch">
          {/* TITLE — mobile order 1, large order 1; large span ~45% */}
          <div className="min-w-0 order-1 lg:order-1 lg:col-span-5" data-aos="fade-in"  data-aos-duration="800">
            <h2 className="font-porsha leading-tight text-[34px] sm:text-[46px] lg:text-[60px]">
              Learning Through Everyday Rituals
            </h2>
          </div>

          {/* IMAGE 1 (top-right) — mobile order 2, large order 2; large span ~55% */}
          <div className="min-w-0 order-2 lg:order-2 lg:col-span-7">
            <div className="w-full overflow-hidden rounded-lg bg-white/5" data-aos="fade-left"  data-aos-duration="800">
              <img
                src={food20}
                alt=""
                className="w-full h-[200px] sm:h-[250px] lg:h-[220px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* IMAGE 2 (bottom-left on lg) — mobile order 4, large order 3; large span 50% */}
          <div className="min-w-0 order-4 lg:order-3 lg:col-span-6">
            <div className="w-full overflow-hidden rounded-xl" data-aos="fade-right"  data-aos-duration="800">
              <img
                src={food11}
                alt=""
                className="w-full h-[180px] sm:h-[220px] lg:h-[320px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* PARAGRAPH (bottom-right on lg) — mobile order 3, large order 4; large span 50% */}
          <div className="min-w-0 order-3 lg:order-4 lg:col-span-6">
            {/* keep vertical centering on large if desired */}
            <div className="h-full flex items-center" data-aos="fade-in"  data-aos-duration="800">
              <p className="break-words font-quicksand text-[15px] leading-7 sm:text-[16px] sm:leading-8 opacity-95 py-4 sm:py-6 lg:py-8">
                In our kitchen, the smallest acts—peeling garlic, sorting greens,
                roasting a single chilli—were done with intention, reverence, and
                often, with the women of the house laughing and instructing in equal
                measure. Even our butcher, Manu Uncle, was a teacher. His skill in
                dressing meat during Eid ul-Adha etched into memory. My grandmother,
                meticulous and frugal, ran a zero-waste kitchen that served hearty,
                flavorful meals without ever letting a single scrap go unused. While
                my mother instilled the belief that cooking is a skill, honed only
                through experience and mistakes. Every overcooked rice grain, every
                burnt tadka, became part of my journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ornament strip (flipped) */}
      <div className="relative h-8 md:h-10 pointer-events-none select-none">
        <img
          src={sectionStrip}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover rotate-180"
        />
      </div>
    </section>
  );
}
