import React, { useState } from "react";
import SectionDecor from "../sectionDecor";
import { food15, food16, food17 } from "../../assets/images";
import { eventsBorder } from "../../assets/icons";

/** CTA underline-grow (kept from your pattern) */
export const underlineGrow =
  "group relative inline-flex items-center gap-2 " +
  "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 " +
  "after:bg-current after:transition-all after:duration-300 " +
  "hover:after:w-full focus-visible:after:w-full";

function GalleryCard({ title, date, imgSrc, imgAlt, decorLength = "78%", decorAlign = "center" }) {
  const [active, setActive] = React.useState(false);
  const toggle = () => setActive((v) => !v);
  const deactivate = () => setActive(false);

  const alignClass =
    decorAlign === "top" ? "items-start"
    : decorAlign === "bottom" ? "items-end"
    : "items-center"; // center default

  return (
    <button
      type="button"
      data-active={active}
      className={[
        "group relative isolate block w-full text-left",
        "min-h-[480px] md:min-h-[600px] lg:min-h-[640px]",
        "bg-[#005931] text-[#FFF2DD] overflow-hidden outline-none",
      ].join(" ")}
      aria-pressed={active}
      onClick={toggle}
      onMouseLeave={deactivate}
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={imgAlt}
        className={[
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        ].join(" ")}
        loading="lazy"
        decoding="async"
        draggable="false"
      />

      {/* Tint */}
      <div
        className={[
          "pointer-events-none absolute inset-0 bg-black/45 transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        ].join(" ")}
      />

      {/* === OUTER hairline (unchanged) === */}
      

      {/* === MIDDLE FRAME for the border decor (NEW) ===
          Positioned BETWEEN outer and inner hairlines so the decor always fits. */}
      <div
        className={[
          "pointer-events-none absolute z-20",
          // Slightly more inset than OUTER hairline, but less than INNER hairline
          "-inset-8 md:inset-2 lg:-inset-5 x-4" ,
          "flex justify-center", // horizontal center
          alignClass,            // vertical align (top/center/bottom)
          "transition-opacity duration-500",
          active ? "opacity-0" : "opacity-100 group-hover:opacity-0",
        ].join(" ")}
        aria-hidden="true"
      >
        <img
          src={eventsBorder}
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
          className="block w-auto max-w-full max-h-full object-contain"
          style={{
            // Custom length: sets the decor's height; width auto-scales to preserve aspect
            height: decorLength,
          }}
        />
      </div>

      {/* === INNER hairline (kept, pulled further in) === */}
      

      {/* Title */}
      <div
        className={[
          "absolute z-30 text-center",
          "inset-x-12 sm:inset-x-14 md:inset-x-16 lg:inset-x-20",
          "top-1/2 -translate-y-1/2",
        ].join(" ")}
      >
        <h3 className="font-porscha text-2xl sm:text-3xl lg:text-4xl leading-tight">
          {title}
        </h3>
      </div>

      {/* Date */}
      <div
        className={[
          "absolute z-30 text-center",
          "inset-x-12 sm:inset-x-14 md:inset-x-16 lg:inset-x-20",
          "bottom-18 sm:bottom-19 md:bottom-16 lg:bottom-22",
        ].join(" ")}
      >
        <p className="font-quicksand text-base sm:text-lg">{date}</p>
      </div>
    </button>
  );
}


export default function GallerySection({
  ctaHref = "/events",
  events = [
    {
      title: "Eid Special Dinner",
      date: "July 30, 2025",
      imgSrc: food15,
      imgAlt: "Festive Awadhi dinner spread.",
    },
    {
      title: "Awadhi Spice Masterclass",
      date: "August 15, 2025",
      imgSrc: food16,
      imgAlt: "Array of ground spices used in Awadhi cuisine.",
    },
    {
      title: "Community Cook-Along",
      date: "September 5, 2025",
      imgSrc: food17,
      imgAlt: "Guests cooking together and plating dishes.",
    },
  ],
}) {
  return (
    <section className="relative isolate px-4 sm:px-6 lg:pt-30 md:pt-24 pt-22">
      <div className="mx-auto max-w-7xl">
        {/* Decor strip (separate row) */}
        <SectionDecor className="mb-2" />

        {/* Heading + CTA (same rhythm as AboutSection) */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] items-end gap-6 lg:gap-16"  >
          <h2
            id="events-title"
            className="text-5xl font-porscha sm:text-6xl lg:text-6xl leading-[1.3] -tight text-[#005931]" data-aos="fade-right"  data-aos-duration="800"
          >
            Upcoming Events <br className="hidden sm:block" /> & Workshops
          </h2>

          <div className="flex lg:justify-end">
            <a
              href="/event"
              className={`${underlineGrow} font-quicksand text-[22px] text-[#005931]`} data-aos="fade-left"  data-aos-duration="800"
            >
              <span className="transition-colors duration-300">
                View All Events
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed gallery with tiny gaps; section has no background */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {events.map((e, i) => (
            <GalleryCard key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
