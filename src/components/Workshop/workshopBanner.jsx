// app/components/sections/WorkshopBannerSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor"; // uses the same component variants
import { workshopStripB, workshopStripT } from "../../assets/icons";

export default function WorkshopBannerSection() {
  return (
    <section className="relative isolate px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-22 md:pb-24 lg:pb-30">
      {/* === Full-bleed Top Strip === */}
        <div className="pointer-events-none select-none absolute inset-x-0 top-0 h-8 sm:h-9">
          <img
            src={workshopStripT}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>

      <div className="mx-auto max-w-7xl text-center">
        {/* Subheading (top) */}
        <p className="font-quicksand text-[clamp(16px,1.8vw,22px)] text-[#005931] font-bold uppercase">
          LEARN THE ART OF
        </p>

        {/* Title */}
        <h2 className="mt-3 font-porscha text-[#005931] leading-[1.15]  text-[clamp(38px,5.6vw,58px)]">
          AWADHI COOKING
        </h2>

        {/* Subheading (bottom) */}
        <p className="mt-2 font-quicksand ] text-[clamp(16px,1.8vw,20px)] text-[#005931] font-bold uppercase">
          WITH CHEF ASMA
        </p>

        {/* Centered decor — same variant used in quote banner headings */}
        <SectionDecor
          variant="white"
          align="center"
          className="mt-5"
        />

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto font-porscha text-[#005931]  text-[clamp(20px,2.4vw,32px)]">
          Each Workshop Is A Blend Of <br /> Technique, Story, And Sensory Exploration.
        </p>
      </div>

      {/* === Full-bleed Bottom Strip === */}   
        <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-8 sm:h-9">
          <img
            src={workshopStripB}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
    </section>
  );
}
