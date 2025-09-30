// app/components/sections/CommitmentSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import { sustainabilityStrip, typeTwoStrip } from "../../assets/icons";
import { chefWorking } from "../../assets/images";

/**
 * Props:
 * - bgImage: string (required) – illustration anchored bottom-right
 * - heading?: string – defaults to "Commitment Statement"
 * - description?: string – optional custom copy
 */
export default function CommitmentSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-22 md:pb-24 lg:pb-30">
      {/* ==== Full-bleed Top Strip (same usage as ContactBanner) ==== */}
      <div className="pointer-events-none select-none absolute inset-x-0 top-0 h-8 sm:h-9 z-20">
        <img
          src={sustainabilityStrip}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      {/* ==== Bottom-right background illustration ==== */}
        <img
          src={chefWorking}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute bottom-0 right-0 z-0
            w-[74%] sm:w-[56%] md:w-[48%] lg:w-[44%] xl:w-[40%] 2xl:w-[38%]
            max-w-none object-contain
          "
          loading="lazy"
          decoding="async"
          draggable="false"
        />

      {/* ==== Main Content ==== */}
      <div className="relative z-10 pb-28 md:pb-36 mx-auto max-w-7xl">
        {/* Decor (same usage as in contactBanner.jsx) */}
        <SectionDecor
          variant="white"
          className="mb-2"
        />

        {/* Section Heading (same sizing & spacing as contactBanner.jsx) */}
        <h2 className="font-porscha text-[#005931] leading-[1.3] -tight text-5xl sm:text-6xl lg:text-6xl">
          Commitment Statement
        </h2>

        {/* Paragraph Description (exact sizing you specified) */}
        <p
          className="mt-6 text-base sm:text-lg lg:text-2xl text-[#005931] font-[500] font-quicksand max-w-2xl"
          style={{
            fontFamily:
              "var(--font-quicksand, Quicksand, ui-sans-serif, system-ui)",
          }}
        >
          "Guided by traditional wisdom, we cook mindfully using seasonal, local ingredients, avoiding waste, and honoring every element with care and respect.
        </p>
      </div>

      {/* ==== Full-bleed Bottom Strip (same usage as ContactBanner) ==== */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-8 sm:h-9 z-20">
        <img
          src={sustainabilityStrip}
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
