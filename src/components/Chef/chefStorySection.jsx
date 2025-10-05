// src/components/sections/ChefStorySection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";

import { cookingBowl, familyCooking, lucknowTomb } from "../../assets/images";
import { sectionHanging } from "../../assets/icons";

export default function ChefStorySection() {
  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
      {/* Top-right background art (clipped by overflow-hidden) */}
      <div
        aria-hidden="true"
        className="pointer-events-none -z-10 select-none absolute right-1 sm:-right-4 md:right-4 lg:right-12 -top-26 sm:-top-30 lg:-top-30 w-[280px] sm:w-[360px] lg:w-[400px] opacity-50 aspect-square bg-no-repeat bg-contain bg-right"
        style={{
          backgroundImage: `url(${sectionHanging})`,
          contentVisibility: "auto",
        }} data-aos="fade-down"  data-aos-duration="800"
      />

      <div className="mx-auto max-w-7xl" >
        {/* Desktop/tablet: decor above the heading row — FORCE HORIZONTAL */}
        <div data-aos="fade-in"  data-aos-duration="800">

        <div className="hidden sm:flex items-center">
          <SectionDecor className="block" />
        </div>

        {/* Heading block — stacks on xs, row from sm+ */}
        {/* Mobile: decor BETWEEN bowl & heading — FORCE HORIZONTAL */}
        <div className="sm:hidden flex justify-center">
          <SectionDecor className="block" />
        </div>
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6" >
          <img
            src={cookingBowl}
            alt="Cooking bowl illustration"
            className="h-50 sm:h-36 md:h-40 lg:h-44 w-auto object-contain select-none"
            loading="eager"
            decoding="async"
            draggable="false"
            />

          <h2 className="text-[#005931] -tight text-center sm:text-left font-porsha leading-[1.25] text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
            <span className="block">Distance Makes</span>
            <span className="block">the Flavours Clearer</span>
          </h2>
        </div>
            </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 mb-12 lg:mb-16">
          <p className="text-[#005931] font-quicksand font-[500] text-center sm:text-left sm:text-lg lg:text-xl leading-7 lg:leading-8 max-w-prose" data-aos="fade-right"  data-aos-duration="800">
            It wasn’t until I left Lucknow, first to Aurangabad and then to
            Pune, that I realized how rare and rich my upbringing was. In those
            new cities, I searched for the flavours of home, the smoky softness
            of Galawat kebabs, the comforting balance of biryani rice “that
            doesn’t break,” the unexpected delight of mango with birhayi.
          </p>
          <img
            src={lucknowTomb}
            alt="Cityscape line art"
            className="w-full h-auto object-contain select-none"
            loading="lazy"
            decoding="async"
            draggable="false"
            data-aos="fade-left"  data-aos-duration="800"
          />
        </div>

        {/* Row 2 — image a touch smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <p className="text-[#005931] font-quicksand font-[500] text-center sm:text-left sm:text-lg lg:text-xl leading-7 lg:leading-8 max-w-prose lg:order-2" data-aos="fade-left"  data-aos-duration="800">
            But it was absence that awakened appreciation. The knowledge passed
            to me quietly, in the daily rhythms of a large family kitchen became
            the soul of Firdaus. A kitchen built not just on recipes, but on
            trial, error, and the gentle insistence of a grandmother.
          </p>

          {/* Image — mobile second, lg first (slightly reduced width) */}
          <div className="w-full justify-self-start lg:order-1">
            <img
              src={familyCooking}
              alt="Family cooking together"
              className="w-[88%] md:w-[82%] h-auto object-contain select-none"
              loading="lazy"
              decoding="async"
              draggable="false"
              data-aos="fade-right"  data-aos-duration="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
