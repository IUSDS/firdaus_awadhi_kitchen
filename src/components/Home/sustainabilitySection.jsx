// src/components/Home/SustainabilitySection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import {topR, bottomL, pot, ingredients, book, cooking} from "../../assets/icons";
import { underlineGrow } from "./eventsGallery"; // re-use the exact CTA underline behavior

/**
 * Quarter-circle corner art
 * Positions a full circle so only a quarter shows within the container.
 */
function CornerArt({ size = 420, position = "top-right", src }) {
  // translate to put the circle's center exactly on the container corner
  const baseImg = "pointer-events-none absolute rounded-full object-contain object-center opacity-80";
  const commonStyle = {
    width: size,
    height: size,
  };

  const posMap = {
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-15",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-15",
  };

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      draggable={false}
      width={size}
      height={size}
      className={`${baseImg} ${posMap[position]}`}
      style={commonStyle}
    />
  );
}

function Feature({ icon, alt, text, side = "left" }) {
  return ( 
    <div className="flex flex-col items-center sm:items-start gap-3 p-5 sm:p-6 w-11/12 sm:w-auto mx-auto sm:mx-0 border-b border-[#FFF2DD]/60 sm:border-none last:border-b-0">
      {icon ? (
        <img
          src={icon}
          alt={alt || ""}
          className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-sm border border-[#FFF2DD]" aria-hidden />
      )}
        <p className="font-quicksand text-[18px] sm:text-[20px] leading-snug text-[#FFF2DD] max-w-[22rem] sm:max-w-[24rem] text-center sm:text-left">
        {text}
      </p>
    </div>
  );
}

export default function SustainabilitySection({
  id = "sustainability",
  ctaHref = "/sustainability",
  features = [
    {
      icon: pot,
      alt: "Cooking pot",
      text: "Zero-waste cooking and no preservatives",
    },
    {
      icon: ingredients,
      alt: "Basket",
      text: "Seasonal, locally sourced ingredients",
    },
    {
      icon: book,
      alt: "Recipe card",
      text: "Recipes passed down by women home cooks",
    },
    {
      icon: cooking,
      alt: "Traditional pan",
      text: "Traditional techniques and small-batch preparations",
    },
  ],
}) {
  return (
    <section className="relative isolate px-4 sm:px-6 lg:pt-30 md:pt-24 pt-22">
      <div className="mx-auto max-w-7xl" >
        {/* Decor strip — same spacing cadence as Events */}
        <SectionDecor className="mb-2" />

        {/* Heading + Right CTA (mirrors Events heading block) */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] items-end gap-6 lg:gap-16">
          <div data-aos="fade-right"  data-aos-duration="900">
            <h2
              id={`${id}-title`}
              className="text-5xl font-porsha sm:text-6xl lg:text-6xl leading-[1.3] -tight text-[#005931]" 
            >
              Sustainability Highlight
            </h2>
            <p className="mt-6 max-w-xl font-quicksand text-base sm:text-lg text-[#005931]">
              At Firdaus, every dish respects tradition and environment
            </p>
          </div>

          <div className="flex lg:justify-end" data-aos="fade-left"  data-aos-duration="900">
            <a href="/sustainability" className={`${underlineGrow} font-quicksand text-[22px] text-[#005931]`}>
              <span className="transition-colors duration-300">Read More</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed banner area (deep green) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#005931] overflow-hidden">
        {/* taller section + min height to fully contain corner art */}
        <div className="relative mx-auto max-w-7xl text-[#FFF2DD] py-20 sm:py-24 lg:py-28 min-h-[520px] sm:min-h-[560px]">
          {/* Corner quarter-circles */}
          <CornerArt src={topR} size={360} position="top-right" />
          <CornerArt src={bottomL} size={360} position="bottom-left" />

           {/* Cross lines (desktop/tablet only) inset to avoid edges; hidden on mobile */}
          <div className="pointer-events-none absolute inset-0 px-10 sm:px-14 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-20 hidden sm:block">
            <div className="relative h-full w-full">
            {/* Vertical top half */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px bg-[#FFF2DD]"
              style={{ top: 0, height: "calc(50% - 22px)" }}
              aria-hidden
            />
            {/* Vertical bottom half */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px bg-[#FFF2DD]"
              style={{ bottom: 0, height: "calc(50% - 22px)" }}
              aria-hidden
            />
            {/* Horizontal left half */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px bg-[#FFF2DD]"
              style={{ left: 0, width: "calc(50% - 22px)" }}
              aria-hidden
            />
            {/* Horizontal right half */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px bg-[#FFF2DD]"
              style={{ right: 0, width: "calc(50% - 22px)" }}
              aria-hidden
            />
            {/* Center dot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#FFF2DD]" aria-hidden />
            </div>
          </div>

          {/* Feature Grid
              - Mobile: center items and dividers
              - ≥sm: start-align items
              - ≥lg: bring columns further inward so they don't stick to the right */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 place-items-center sm:place-items-start mx-auto max-w-[48rem] sm:max-w-[60rem] px-4 sm:px-0" data-aos="fade-in"  data-aos-duration="800">
            <div className="w-full sm:w-auto sm:pl-10 lg:pl-16 xl:pl-20"><Feature {...features[0]} /></div>
            <div className="w-full sm:w-auto sm:pr-10 lg:pr-16 xl:pr-20"><Feature {...features[1]} /></div>
            <div className="w-full sm:w-auto sm:pl-10 lg:pl-16 xl:pl-20"><Feature {...features[2]} /></div>
            <div className="w-full sm:w-auto sm:pr-10 lg:pr-16 xl:pr-20"><Feature {...features[3]} /></div>
           </div>
        </div>
      </div>
    </section>
  );
}
