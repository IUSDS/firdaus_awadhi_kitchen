// src/components/sections/MeetTheChefBanner.jsx
import React from "react";
import PropTypes from "prop-types";
import {sectionStrip} from "../../assets/icons";
import { asmahome, food1, food10, food11, food12, food2, food3, food4, food5, food6, food7, food8, food9 } from "../../assets/images";

export default function MeetTheChefBanner({
  id = "chef",
  heading = "Meet The Chef",
  ctaHref = "/chef",
}) {
  // Visible underline that grows from left → right on hover/focus
  const underlineGrow = [
    "group relative inline-flex items-center gap-2", 
    "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0",
    "after:bg-[#FFF2DD]/90 after:transition-all after:duration-300 ",
    "hover:after:w-full focus-visible:after:w-full"].join(" ");

  return (
    <section id={id} className="relative bg-[#005930] text-[#FFF2DD]">
      {/* Top ornament strip */}
      <div className="relative h-8 md:h-10 pointer-events-none select-none">
        <img
          src={sectionStrip}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[1390px] px-4 sm:px-6 lg:px-14 py-12 sm:py-16">
        {/* Make row height equal to tallest item (left text), then stretch right image to match */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-stretch">
          {/* LEFT: Heading + paragraph */}
          <div className="col-span-12 lg:col-span-7 self-start" data-aos="fade-in"  data-aos-duration="800">
            <h2 className="font-porscha text-[44px] sm:text-[56px] lg:text-[72px]">
              {heading}
            </h2>

            <p className="mt-6 max-w-[62ch] font-quicksand text-[15px] leading-7 sm:text-[16px] sm:leading-8 opacity-95">
              Born into a food-loving family in Lucknow, Chef Asma Alvi’s earliest culinary lessons came from the everyday rhythms of a large joint household. Her journey began at the mandi and the butcher’s shop, where she learned to select ingredients with care. Her grandmother’s zero-waste kitchen instilled the value of sustainability, and her mother taught her that good cooking is a craft honed by time and experience. Chef Asma’s food reflects these deep roots, is authentic and nostalgic, and is made with quiet mastery.
            </p>
          </div>

          {/* RIGHT: Chef (tall) — matches LEFT column height on lg+ */}
          <div className="col-span-12 lg:col-span-5 lg:self-stretch">
            <div className="relative ml-auto w-full h-[300px] sm:h-[360px] lg:h-full overflow-hidden" data-aos="fade-left"  data-aos-duration="800">
              <img
                src={asmahome}
                alt=""
                className="h-full rounded-2xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* BOTTOM LEFT: Narrower wide image (reduced span on lg+) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-9">
            <div className="relative w-full overflow-hidden" data-aos="fade-right"  data-aos-duration="800">
              <img
                src={food10}
                alt=""
                className="w-full rounded-2xl h-32 sm:h-40 lg:h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* BOTTOM RIGHT: CTA with visible underline hover */}
          <div className="col-span-12 lg:col-span-3 flex items-center lg:justify-end">
            <a
              href={ctaHref}
              className={`${underlineGrow} font-quicksand text-[22px]`}
            >
              <span className="transition-colors duration-300">
                Meet the Chef
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom ornament strip (flipped) */}
      <div className="relative h-8 md:h-10 pointer-events-none select-none">
        <img
          src={sectionStrip}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover rotate-180"
        />
      </div>
    </section>
  );
}

MeetTheChefBanner.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  copy: PropTypes.string,
  rightImage: PropTypes.string.isRequired,
  bottomImage: PropTypes.string.isRequired,
  rightImageAlt: PropTypes.string,
  bottomImageAlt: PropTypes.string,
  ctaHref: PropTypes.string,
};
