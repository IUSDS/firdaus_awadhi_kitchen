// app/components/sections/TimelineSection.jsx
import React from "react";
import { timelineBadge } from "../../assets/images";

const TIMELINE_ITEMS = [
  "Early food memories in Lucknow mandi and Eid kitchens",
  "Collaborations with local butchers, farmers, and food historians",
  "Featured in leading food publications for sustainability and tradition",
  "Culinary training in Pune",
  "Launched Firdaus Awadhi Kitchen in 2024",
];

function BadgeNode({ text }) {
  return (
    <div
      className="
        relative select-none
        w-[170px] h-[170px] md:w-[190px] md:h-[190px] lg:w-[210px] lg:h-[220px]
        shrink-0
      "
      aria-label={text}
    >
      {/* Badge image (webp). Fixed size so text length never stretches it */}
      <img
        src={timelineBadge}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain"
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      {/* Text lives INSIDE the badge with generous padding */}
      <div className="relative z-10 flex h-full w-full items-center justify-center pt-1 px-5 md:px-6 lg:px-8">
        <p className="text-center font-quicksand text-[13px] md:text-[13px] leading-relaxed text-white/95">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative isolate overflow-visible px-4 sm:px-6 lg:pb-30 md:pb-24 pb-22">
      {/* Heading — mirrors firdausMemorySection.jsx */}
      <div className="mx-auto max-w-7xl text-center" >
        <h2 className="font-porsha text-[#005931] leading-[1.15] text-[clamp(42px,5.6vw,58px)]"  data-aos="fade-up"  data-aos-duration="800">
          Chef’s Timeline
        </h2>

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl mt-10 md:mt-12"  data-aos="fade-in"  data-aos-duration="800">
          {/* --- Desktop / Tablet: horizontal timeline with a single flowing dotted curve --- */}
          <div className="relative hidden md:block">
            {/* Dotted curved connector (responsive via viewBox) */}
            <svg
              viewBox="0 8 1200 270"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-[240px] w-full"
              aria-hidden="true"
            >
              {/* Gentle S-curve across the full width; scales with container */}
              <path
                d="M0,170 C150,90 300,90 450,170 S750,250 900,170 S1050,90 1200,170"
                fill="none"
                stroke="#105C38"
                strokeWidth="2.75"
                strokeLinecap="round"
                /* subtle dotted look */
                strokeDasharray="2 10"
                opacity="0.7"
              />
            </svg>

            {/* Nodes laid over the curve */}
            <ul className="relative grid grid-cols-5 items-center gap-6 lg:gap-10">
              {TIMELINE_ITEMS.map((t, i) => (
                <li
                  key={i}
                  className={`
                    flex justify-center
                    ${i % 2 === 0 ? "pt-8" : "pb-8"}  /* tiny vertical staggering for flow */
                  `}
                >
                  <BadgeNode text={t} />
                </li>
              ))}
            </ul>
          </div>

          {/* --- Mobile: vertical stack with dotted connector --- */}
          <div className="relative md:hidden">
            {/* Vertical dotted spine */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-6 bottom-6 -translate-x-1/2 border-l-2 border-dotted border-[#105C38]/70"
            />
            <ul className="relative grid grid-cols-1 gap-8 place-items-center">
              {TIMELINE_ITEMS.map((t, i) => (
                <li key={i} className="relative">
                  <BadgeNode text={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
