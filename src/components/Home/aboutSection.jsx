// src/components/AboutSection.jsx
import React from "react";
import {food1, food2, food3} from "../../assets/images";
import SectionDecor from "../sectionDecor";

export default function AboutSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-14 lg:pt-30 md:pt-24 pt-22 isolate bg-[#F5EBDC] text-[#16321F]">
      {/* Top container */}
      <div className="mx-auto max-w-7xl ">
        {/* Decorative strip (separate row, left-aligned) */}
        <SectionDecor className="mb-2" />

        {/* Heading + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] items-start gap-8 lg:gap-16 mb-14">
          <div>
            <h2
              id="about-title"
              className="text-5xl font-porscha sm:text-6xl lg:text-6xl  -tight text-[#005931]"
            >
              About Firdaus <br /> Awadhi Kitchen
            </h2>
          </div>

          <p
            className="text-base sm:text-lg lg:text-xl leading-7 lg:leading-8 text-[#005931] font-[600] font-quicksand"
            style={{ fontFamily: 'var(--font-quicksand, Quicksand, ui-sans-serif, system-ui)' }}
          >
            Firdaus Awadhi Kitchen was born from the memory of a food-obsessed
            childhood in Lucknow, where every meal in our joint family was a
            shared ritual. I learned to choose vegetables from my uncle and
            watched my father handle meat with quiet skill. But the real lessons
            came from the women—my grandmother’s mindful kitchen, and my
            mother’s belief that good food takes time and practice.
          </p>
        </div>
      </div>

      {/* Full-bleed media grid — reduced overall height a bit */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left image (slightly shorter than before) */}
          <figure className="min-h-[300px] md:min-h-[360px] lg:min-h-[500px]">
            <img
              src={food1}
              alt="A bowl of biryani with chutneys and condiments."
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* Right 2×2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 min-h-[300px] md:min-h-[360px] lg:min-h-[500px]">
            <div className="overflow-hidden">
              <img
                src={food2}
                alt="Fresh snacks and condiments served with green chutney."
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex items-center justify-center bg-[#005931] text-[#FFF2DD] p-8 md:p-10 text-sm sm:text-base leading-relaxed">
              <p className="max-w-[38ch] font-quicksand" style={{ fontFamily: 'var(--font-quicksand, Quicksand, ui-sans-serif, system-ui)' }}>
                The name Firdaus came long before the restaurant. I always imagined giving it
                to a child—something soft, timeless, and full of heart.
              </p>
            </div>

            <div className="flex items-center justify-center bg-[#005931] text-[#FFF2DD] p-8 md:p-10 text-sm sm:text-base leading-relaxed">
              <p className="max-w-[40ch] font-quicksand" style={{ fontFamily: 'var(--font-quicksand, Quicksand, ui-sans-serif, system-ui)' }}>
                In Persian, it means paradise. But for me, Firdaus is not far away. It’s here,
                in the food, the memory, the care. It’s where taste brings you back to your
                mother’s kitchen. Where love lives in every layer. Firdaus is home. Firdaus is
                memory. Firdaus is us.
              </p>
            </div>

            <div className="overflow-hidden">
              <img
                src={food3}
                alt="A hearty Awadhi platter served with chutneys and onions."
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
