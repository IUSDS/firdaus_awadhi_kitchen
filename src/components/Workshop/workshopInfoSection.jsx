// src/components/WorkshopInfoSection.jsx
import React from "react";
import { food4, food5 } from "../../assets/images";

export default function WorkshopInfoSection({
  points = [
    "History of each dish",
    "Ingredient selection and sustainability",
    "Grandma-approved kitchen hacks",
    "Zero-waste meal planning",
  ],
}) {
  return (
    <section className="relative bg-[#FFF2DD]">
      {/* Top padding = keep in sync with quotesBanner section */}
      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-20 lg:pt-24 text-center" data-aos="fade-up" data-aos-duration="800">
        <p className="font-quicksand text-[#005931] text-base md:text-lg">
          Virtual Workshop: Everyday Lucknow Comforts
        </p>
        <h2 className="font-porscha text-[#005931] mt-2 text-3xl md:text-5xl lg:text-6xl">
          What You’ll Learn?
        </h2>
      </div>

      {/* Full-bleed content banner */}
      <div className="mt-8 w-screen relative left-1/2 -translate-x-1/2">
        <div className="bg-[#005931] text-[#FFF2DD]">
          {/* Grid gives exact 60/20/20 on md+; stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-10 items-stretch overflow-hidden">
            {/* 60% text column */}
            <div className="md:col-span-6 px-8 sm:px-22 md:px-10 lg:px-22 py-16 md:py-12 flex items-center justify-center">
              <ul className="w-full max-w-xl md:max-w-none space-y-3 md:space-y-4 text-left font-quicksand text-sm md:text-base lg:text-lg leading-relaxed mx-auto">
                {points.map((p, i) => (
                  <li key={i} className="list-disc list-inside" data-aos="fade-right" data-aos-duration="800">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* 20% image 1 */}
            <div className="md:col-span-2 relative h-44 sm:h-56 md:h-auto md:min-h-[280px] lg:min-h-[320px]">
              <img
                src={food4}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* 20% image 2 */}
            <div className="md:col-span-2 relative h-44 sm:h-56 md:h-auto md:min-h-[280px] lg:min-h-[320px]">
              <img
                src={food5}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
