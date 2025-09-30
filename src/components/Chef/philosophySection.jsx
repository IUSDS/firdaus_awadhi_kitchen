// app/components/sections/PhilosophySection.jsx
import React from "react";
import { philosophy1, philosophy2, philosophy3, philosophyDivider } from "../../assets/images";

export default function PhilosophySection() {
  return (
    // Transparent section with generous bottom padding; clip X to avoid scroll on small zooms
    <section className="relative overflow-x-hidden overflow-y-hidden pb-54 sm:pb-64 md:pb-74 lg:pb-[22rem]">
      {/* GREEN PANEL: only heading + content */}
      <div className="relative bg-[#005931]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:pt-30 md:pt-24 pt-22 pb-10 md:pb-12">
          {/* Heading */}
          <h2 className="text-center font-porscha text-[#FFF2DD] leading-[1.15] text-[clamp(42px,5.6vw,58px)]">
            Philosophy &amp; Inspirations
          </h2>

          {/* Content (tight) */}
          <div className="mt-5 md:mt-6 space-y-6 md:space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 md:gap-7 lg:gap-10">
              <div className="lg:col-span-5 order-1">
                <img
                  src={philosophy1}
                  alt=""
                  className="w-[74%] sm:w-[72%] md:w-[82%] max-w-[340px] mx-auto object-contain select-none"
                  loading="lazy" decoding="async" draggable="false"
                />
              </div>
              <div className="lg:col-span-7 order-2">
                <p className="text-[#FFF2DD]/90 font-quicksand font-medium leading-7 max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
                  At Firdaus, authenticity is everything. We honour recipes measured not
                  just in teaspoons, but in memory, instinct, and care.
                </p>
              </div>
            </div>

            <div className="h-px w-28 md:w-40 mx-auto bg-[#FFF2DD]/40" />

            {/* Row 2 (reverse on lg; image first on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 md:gap-7 lg:gap-10">
              <div className="lg:col-span-5 order-1 lg:order-2">
                <img
                  src={philosophy2}
                  alt=""
                  className="w-[74%] sm:w-[72%] md:w-[82%] max-w-[340px] mx-auto object-contain select-none"
                  loading="lazy" decoding="async" draggable="false"
                />
              </div>
              <div className="lg:col-span-7 order-2 lg:order-1">
                <p className="text-[#FFF2DD]/90 font-quicksand font-medium leading-7 max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
                  We hope to bring the warmth of families in our hospitality, so when you
                  visit Firdaus, our food offers instant comfort, connection, and calm.
                </p>
              </div>
            </div>

            <div className="h-px w-28 md:w-40 mx-auto bg-[#FFF2DD]/40" />

            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 md:gap-7 lg:gap-10">
              <div className="lg:col-span-5 order-1">
                <img
                  src={philosophy3}
                  alt=""
                  className="w-[74%] sm:w-[72%] md:w-[82%] max-w-[340px] mx-auto object-contain select-none"
                  loading="lazy" decoding="async" draggable="false"
                />
              </div>
              <div className="lg:col-span-7 order-2">
                <p className="text-[#FFF2DD]/90 font-quicksand font-medium leading-7 max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
                  Some dishes are rooted in centuries-old Awadhi kitchens, others in the
                  warmth of our family home. Together, they tell a living story of traditions
                  kept, flavours rediscovered, and community shared.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with responsive LIFT (in rem) and tiny zoom */}
        <img
          src={philosophyDivider}
          alt=""
          aria-hidden="true"
          className={[

            "max-w-none",
            "transform-gpu origin-bottom will-change-transform",
            "pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 h-auto select-none",
            // Responsive LIFT (in rem) via Tailwind arbitrary values:
            "top-[calc(100%-7rem)] sm:top-[calc(100%-9rem)] md:top-[calc(100%-17rem)] lg:top-[calc(100%-24rem)] xl:top-[calc(100%-38rem)]",
            // Tiny responsive zoom (width bumps slightly with viewport):
            "w-[108vw] sm:w-[110vw] md:w-[115vw] lg:w-[118vw] xl:w-[120vw]",
    // tiny additional optical zoom via scale (optional; tweak freely)
    "scale-[1.00] sm:scale-[1.02] md:scale-[1.04] lg:scale-[1.1]",
          ].join(" ")}
          loading="lazy" decoding="async" draggable="false"
        />
      </div>
    </section>
  );
}
