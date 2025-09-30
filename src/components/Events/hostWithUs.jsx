// src/components/sections/CateringSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor"; // same import style as quoteBanner.jsx
import { food10 } from "../../assets/images";

/**
 * Props:
 * - imageSrc: string (required) -> full-width image for the right column
 */
export default function CateringSection({ imageSrc = "" }) {
  const items = [
    "Cultural food nights",
    "Private dining",
    "Workshops and tastings",
    "Community fundraisers",
  ];

  return (
    <section className="relative isolate bg-[#005931] text-[#FFF2DD]">
      {/* Full-bleed container (no px/py for the combined content row) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-[520px] lg:h-[560px] xl:h-[600px]">
          {/* ===== Left: Text (this column alone has padding) ===== */}
          <div className="flex h-full items-center">
            <div className="w-full p-6 sm:p-10 lg:p-16">
              {/* SectionDecor — green variant, aligned above heading */}
              <SectionDecor
                variant="green"
                className="mb-2"
                // same default sizing as your component, so it matches quoteBanner.jsx
              />

              {/* Heading — same sizing/leading rhythm as quoteBanner.jsx */}
              <h2 className="text-5xl sm:text-6xl lg:text-6xl leading-[1.3] -tight font-porscha">
                Host With Us
              </h2>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg font-quicksand opacity-95">
                Firdaus welcomes collaborative hosting for:
              </p>

              {/* List with underlines (left-aligned, consistent spacing) */}
              <ul className="mt-8 space-y-6">
                {items.map((label) => (
                  <li key={label} className="w-full max-w-[430px]">
                    <div className="text-[17px] sm:text-[18px] lg:text-[19px]">
                      {label}
                    </div>
                    <div className="mt-2 h-px w-full bg-[#FFF2DD]/80" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== Right: Image (full size of the column, ZERO padding) ===== */}
          <div className="relative">
            {/* Responsive height on small screens; fixed shared height on md+ */}
            <div className="relative h-[62vw] min-h-[280px] md:absolute md:inset-0 md:h-full">
              {/* No whitespace around image */}
              <img
                src={food10}
                alt="Catering showcase"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
