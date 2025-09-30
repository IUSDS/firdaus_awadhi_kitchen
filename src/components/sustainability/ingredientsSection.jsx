// app/components/sections/IngredientsSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import { food11, food12, food13 } from "../../assets/images";

export default function IngredientsSection() {
  return (
    <section
      className={`
        relative isolate overflow-hidden
      `}
    >
      {/* Two-row layout */}
      <div
        className="
          grid w-full
          lg:min-h-[560px] xl:min-h-[640px]   /* lowered section height */
          lg:grid-rows-2
        "
      >
        {/* ===== UpperDiv (50%) ===== */}
        <div className="relative bg-[#005930] text-white overflow-hidden lg:row-span-1">
          <div className="grid h-full w-full grid-cols-1 lg:grid-cols-10">
            {/* textDiv (70%) */}
            <div className="col-span-10 lg:col-span-7 flex items-center">
              <div className="mx-auto w-full py-12 max-w-4xl">
                {/* apply the same padding to each text element individually */}
                <SectionDecor
                  variant="green"
                  className="mb-2 pl-4 sm:pl-6"
                />

                <h2 className="pl-4 sm:pl-6 font-porscha leading-[1.25] -tight text-white text-4xl sm:text-5xl lg:text-5xl">
                  Ingredients & Sourcing
                </h2>

                <p
                  className="
                    px-4 sm:px-6
                    mt-6  /* slightly tighter */
                    text-sm sm:text-base
                    text-white/90 font-[500] font-quicksand max-w-2xl
                  "
                  style={{
                    fontFamily:
                      "var(--font-quicksand, Quicksand, ui-sans-serif, system-ui)",
                  }}
                >
                  We source our ingredients from trusted local vendors, choosing
                  seasonal produce that reflects the rhythm of the land.
                  Whenever possible, we opt for organic—ensuring our food is
                  both nourishing and rooted in mindful practices.
                </p>
              </div>
            </div>

            {/* image (30%) — full-bleed */}
            <div className="col-span-10 lg:col-span-3">
              <img
                src={food11}
                alt=" "
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* ===== LowerDiv (50%) ===== */}
        <div className="relative overflow-hidden lg:row-span-1">
          <div className="grid h-full w-full grid-cols-1 lg:grid-cols-5">
            {/* ImageLeft (40%) */}
            <div className="lg:col-span-2">
              <img
                src={food12}
                alt=" "
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover select-none"
                draggable="false"
              />
            </div>

            {/* ImageRight (60%) */}
            <div className="lg:col-span-3">
              <img
                src={food13}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
