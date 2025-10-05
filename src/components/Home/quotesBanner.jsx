// src/components/sections/quoteBanner.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import {food1} from "../../assets/images";
import {sectionStrip} from "../../assets/icons";

export default function QuoteBanner() {
  return (
    <section
      className="relative isolate px-4 sm:px-6 lg:pt-30 md:pt-24 pt-22"
    >
      <div className="mx-auto max-w-7xl" >
        {/* Decor strip (separate row) — same as eventsGallery */}
        <SectionDecor className="mb-2" />

        {/* Heading row — same styling & spacing as eventsGallery */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] items-end gap-6 lg:gap-16" data-aos="fade-right"  data-aos-duration="800">
          <h2
            id="quote-banner-title"
            className="text-5xl font-porsha sm:text-6xl lg:text-6xl leading-[1.3] -tight text-[#005931]"
          >
            Chef's Quote
          </h2>
          {/* Intentionally empty right cell to preserve the same layout rhythm */}
          <div aria-hidden className="hidden lg:block" />
        </div>
      </div>

      {/* ===== Full-bleed Banner (edge-to-edge) ===== */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        {/* Lock shared height on md+ so image and banner align perfectly */}
        <div className="flex flex-col md:flex-row md:h-[440px] lg:h-[520px]">
          {/* Left Image (w-1/4 on md+) */}
          <div className="bg-[#005930] relative w-full md:w-2/5 h-[58vw] min-h-[260px] md:h-full" data-aos="fade-in"  data-aos-duration="800">
            <img
              src={food1}
              alt="Decorative showcase image for the quote banner"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>

          {/* Right Banner */}
          <div className="relative w-full md:w-3/5 bg-[#005931] text-[#FFF2DD]">
            {/* Top strip — same pattern as SignatureDishes */}
            <div className="relative h-8 md:h-10 pointer-events-none select-none" >
              <img
                src={sectionStrip}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Centered content */}
            <div className="flex items-center justify-start text-left px-6 sm:px-10 lg:px-16 py-8 md:py-0 md:h-[calc(100%-5rem)]">
              <div className="max-w-3xl relative" data-aos="fade-up"  data-aos-duration="800">
                <p className="font-porsha leading-[1.45] -wide text-[clamp(22px,3vw,36px)]">
                  “Firdaus is my way of honouring the hands that fed me—with care, memory, and quiet mastery.”
                </p>
                   <p className="mt-5 md:mt-0 font-porsha text-[clamp(26px,1.6vw,18px)] opacity-90 md:absolute md:-bottom-16 md:right-0">
                    — Chef Asma Alvi
                  </p>
              </div>
            </div>

            {/* Bottom strip — flipped, same as SignatureDishes */}
            <div className="relative h-8 md:h-10 pointer-events-none select-none">
              <img
                src={sectionStrip}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
