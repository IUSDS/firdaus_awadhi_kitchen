// app/components/sections/firdausMemorySection.jsx
import React from "react";
import { chefStrip } from "../../assets/icons";
import { tiltedLimg, tiltedRimg } from "../../assets/images";

export default function FirdausMemorySection() {
  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:py-30 md:py-24 py-22">
      {/* Top strip */}
      <div className="pointer-events-none select-none absolute inset-x-0 top-0 h-8 sm:h-9">
        <img
          src={chefStrip}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      {/* Headings */}
      <div className="mx-auto max-w-7xl text-center">
        <div data-aos="fade-up"  data-aos-duration="800">
        <h2 className="font-porsha text-[#005931] leading-[1.15] text-[clamp(42px,5.6vw,58px)]">
          FIRDAUS
        </h2>
        <h3 className="mt-2 font-porsha text-[#005931] leading-[1.15] text-[clamp(26px,5.6vw,46px)]">
          A Kitchen of Memory and Heart
        </h3>
        </div>

        {/* CONTENT */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10 lg:gap-14">
          {/* Left image (normal image; tilts only on md+) */}
          <div className="flex justify-center md:justify-start">
            <img
              /* replace srcs with your assets */
              src={tiltedLimg}
              alt="Firdaus dish"
              className="rotate-12 md:-rotate-0 w-[62%] sm:w-[68%] md:w-[80%] max-w-[320px] object-cover"
              loading="lazy"
              decoding="async"
              draggable="false"
              data-aos="zoom-in"  data-aos-duration="800"
            />
          </div>

          {/* Middle description */}
          <p className="text-[#005931] font-quicksand font-[500] text-center leading-7 lg:leading-8 max-w-prose mx-auto">
            Firdaus Awadhi Kitchen is the living archive of this legacy. My cooking is grounded in memory and lifted by the community. With every dish I serve, I carry forward the whispered instructions of mothers, the sharp corrections of grandmothers, the laughter around shared meals, and the quiet reverence of a craft learned with heart. Firdaus is my offering to the world, a homecoming in every bite.
          </p>

          {/* Right image (normal image; tilts only on md+) */}
          <div className="flex justify-center md:justify-end">
            <img
              src= {tiltedRimg}
              alt="Firdaus dish"
              className="-rotate-12 md:rotate-0 w-[62%] sm:w-[68%] md:w-[80%] max-w-[320px] object-cover"
              loading="lazy"
              decoding="async"
              draggable="false"
              data-aos="zoom-in"  data-aos-duration="800"
            />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-8 sm:h-9">
        <img
          src={chefStrip}
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
