// app/components/sections/EventsIntroSection.jsx
import React from "react";
import SectionDecor from "../sectionDecor";
import { typeTwoStrip } from "../../assets/icons";
import { eventsIntroImg, food6, food7, food8 } from "../../assets/images";

export default function EventsIntroSection({
  cards = [
    { id: "eid", title: "Eid Special Dinner", meta: "July 30, 2025", blurb: "A traditional festive spread with stories from Lucknow.", img: food6 },
    { id: "masterclass", title: "Awadhi Spice Masterclass", meta: "August 15, 2025", blurb: "Hands-on cooking and spice-blending session.", img: food7 },
    { id: "cookalong", title: "Community Cook-Along", meta: "September 5, 2025", blurb: "Join Chef Asma for a virtual gathering to recreate family-style meals.", img: food8 },
  ],
}) {
  return (
    <section className="relative isolate px-6 sm:px-10 md:px-14 lg:px-20 pt-16 md:pt-18 lg:pt-20 pb-16 md:pb-18 lg:pb-20">
      {/* Top strip */}
      <div className="pointer-events-none select-none absolute inset-x-0 top-0 h-7 sm:h-8">
        <img src={typeTwoStrip} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </div>

      {/* ContentDivOne */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
        {/* Left image — ~50% smaller than before */}
        <figure className="mx-auto w-full max-w-[250px] md:max-w-[320px] lg:max-w-[340px]">
          <div className="relative aspect-square rounded-full">
            <div className="absolute inset-0 rounded-full" />
            <img src={eventsIntroImg} alt="Firdaus plated dish" className="relative z-[1] h-full w-full rounded-full object-cover" loading="lazy" decoding="async" />
          </div>
        </figure>

        {/* Right text — sized to visually match image width */}
        <div className="relative mx-auto lg:mx-0 w-full">
          <SectionDecor variant="white" align="start" className="mb-1.5" sizeClass="h-10 w-10" gapClass="" />
          <div className="space-y-2 font-porscha text-[#005931]">
            <p className="text-[clamp(22px,2.6vw,25px)]">
              Every <span className="font-semibold">Firdaus event</span> is a <span className="font-semibold">journey</span> into the <span className="font-semibold">heart</span> of Awadhi hospitality.
            </p>
            <p className="text-[clamp(22px,2.1vw,25px)]">
              From <span className="font-semibold">Eid dinners</span> to seasonal tastings, we <span className="font-semibold">create immersive experiences</span> that celebrate <span className="font-semibold">flavor</span>, <span className="font-semibold">community</span>, and <span className="font-semibold">tradition</span>.
            </p>
          </div>
        </div>
      </div>

      {/* ContentDivTwo — Cards closer & narrower */}
      <div className="mx-auto max-w-5xl mt-30 md:mt-32 lg:mt-44">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-y-28 gap-x-3 md:gap-y-35">
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative w-full max-w-[280px] sm:max-w-[280px] rounded-3xl bg-[#005931] text-[#FFF2DD] shadow-md pt-14 pb-8 px-5 min-h-[350px] flex flex-col items-center justify-end overflow-visible"
            >
              {/* Card image — no ring, tighter, 50% out */}
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="w-44 h-42 sm:w-28 sm:h-28 md:w-56 md:h-52 overflow-hidden">
                  <img src={card.img} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="w-full text-center mt-1">
                <h3 className="font-porscha text-[clamp(20px,1.9vw,21px)]">{card.title}</h3>
                {card.meta && <p className="mt-2 text-[14px]/5 opacity-80">{card.meta}</p>}
                {card.blurb && <p className="mt-2 text-[clamp(14.5px,1.6vw,14.5px)] opacity-90">{card.blurb}</p>}
                <a
                  href="/contact"
                  type="button"
                  className="mt-5 cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FFF2DD] text-[#005931] px-6 py-2 text-[13.5px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFF2DD] focus-visible:ring-offset-[#005931]"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-7 sm:h-8">
        <img src={typeTwoStrip} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
