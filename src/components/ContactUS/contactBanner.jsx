// app/components/sections/ContactBannerSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import { typeTwoStrip } from "../../assets/icons";
import { food10, food11 } from "../../assets/images";

export default function ContactBannerSection() {
  return (
    <section className="relative isolate px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-22 md:pb-24 lg:pb-30">
      {/* ==== Full-bleed Top Strip (same as WorkshopBanner) ==== */}
      <div className="pointer-events-none select-none absolute inset-x-0 top-0 h-8 sm:h-9">
        <img
          src={typeTwoStrip}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Decor (white variant), same placement/usage as quotesBanner heading */}
        <SectionDecor
          className="mb-3"
        />

        {/* Heading — same sizing as quotesBanner heading */}
        <h2 className="font-porsha text-[#005931] leading-[1.3] -tight text-5xl sm:text-6xl lg:text-6xl" data-aos="fade-up" data-aos-duration="800">
          WE LOVE TO HEAR FROM YOU.
        </h2>

        {/* Long image box (placeholder)
        <div
          aria-hidden="true"
          className="mt-6 rounded-xl md:rounded-2xl bg-[#D9D9D9]/80 shadow-sm h-24 sm:h-28 md:h-32 lg:h-36 w-full"
        /> */}

        {/* Description — left aligned */}
        <p className="mt-6 max-w-xl font-quicksand text-[clamp(14px,1.25vw,16px)] text-[#005931]/90" data-aos="fade-up" data-aos-duration="800">
          Whether you have a query, feedback, or a catering request,
          <br className="hidden sm:block" />
          our team is just a message away.
        </p>
      </div>

      {/* ==== Full-bleed Bottom Strip (same as WorkshopBanner) ==== */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-8 sm:h-9">
        <img
          src={typeTwoStrip}
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
