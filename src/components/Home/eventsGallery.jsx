import React, { useState, useEffect, useRef } from "react";
import SectionDecor from "../sectionDecor";
import { food15, food16, food17 } from "../../assets/images";
import { eventsBorder } from "../../assets/icons";

/** CTA underline-grow (kept from your pattern) */
export const underlineGrow =
  "group relative inline-flex items-center gap-2 " +
  "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 " +
  "after:bg-current after:transition-all after:duration-300 " +
  "hover:after:w-full focus-visible:after:w-full";

/** Lightweight, PSI-friendly viewport watcher */
function useInViewport(opts = {}) {
  const { threshold = 0.35, rootMargin = "0px 0px -15% 0px" } = opts;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: consider visible to avoid broken UI on very old browsers
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setRatio(e.intersectionRatio);
          setInView(e.isIntersecting && e.intersectionRatio >= threshold);
        }
      },
      { root: null, rootMargin, threshold: [0, 0.1, 0.25, 0.35, 0.5, 0.75, 1] }
    );
    io.observe(el);
    return () => {
      try {
        io.unobserve(el);
        io.disconnect();
      } catch {}
    };
  }, [threshold, rootMargin]);

  return { ref, inView, ratio };
}

function GalleryCard({
  title,
  date,
  imgSrc,
  imgAlt,
  decorLength = "78%",
  decorAlign = "center",
  ctaHref = "/contact#contact-form", // <<— adjust anchor to your form’s id if needed
}) {
  const [active, setActive] = useState(false);
  const { ref, inView } = useInViewport({ threshold: 0.35, rootMargin: "0px 0px -15% 0px" });

  useEffect(() => {
    if (!inView && active) setActive(false);
  }, [inView, active]);

  const toggle = () => setActive((v) => !v);
  const deactivate = () => setActive(false);
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const revealed = inView || active;

  const alignClass =
    decorAlign === "top" ? "items-start" :
    decorAlign === "bottom" ? "items-end" :
    "items-center";

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={toggle}
      onKeyDown={onKey}
      onMouseLeave={deactivate}
      className={[
        "group relative isolate block w-full text-left",
        "min-h-[480px] md:min-h-[600px] lg:min-h-[640px]",
        "bg-[#005931] text-[#FFF2DD] overflow-hidden outline-none",
        "will-change-transform will-change-opacity",
      ].join(" ")}
    >
      {/* INNER LAYER: main content that goes back & forth */}
      <div
        className={[
          "absolute inset-0 transition-all duration-500 ease-out",
          "motion-reduce:transition-none motion-reduce:transform-none",
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
        aria-hidden="true"
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* MIDDLE FRAME: ornamental border (hidden when revealed) */}
      <div
        className={[
          "pointer-events-none absolute z-20",
          "-inset-8 md:inset-2 lg:-inset-5 x-4",
          "flex justify-center",
          alignClass,
          "transition-opacity duration-500",
          "motion-reduce:transition-none",
          revealed ? "opacity-0" : "opacity-100 group-hover:opacity-0",
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
          style={{ height: decorLength }}
        />
      </div>

      {/* OUTER LAYER: subtle frame */}
      <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-white/10" aria-hidden="true" />

      {/* Title */}
      <div
        className={[
          "absolute z-30 text-center",
          "inset-x-12 sm:inset-x-14 md:inset-x-16 lg:inset-x-20",
        ].join(" ")}
        style={{ top: "50%", transform: "translateY(-60%)" }}
      >
        <h3 className="font-porsha text-2xl sm:text-3xl lg:text-4xl leading-tight">
          {title}
        </h3>
      </div>

      {/* Date */}
      <div
        className={[
          "absolute z-30 text-center",
          "inset-x-12 sm:inset-x-14 md:inset-x-16 lg:inset-x-20",
          "bottom-24 sm:bottom-24 md:bottom-20 lg:bottom-24", // lifted to make space for CTA
        ].join(" ")}
      >
        <p className="font-quicksand text-base sm:text-lg">{date}</p>
      </div>

      {/* NEW: CTA (only interactive when revealed) */}
      <div
        className={[
          "absolute inset-x-0 z-30 flex justify-center",
          "bottom-8 sm:bottom-8 md:bottom-8 lg:bottom-10",
          "transition-all duration-300 motion-reduce:transition-none",
          revealed
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-1 pointer-events-none",
        ].join(" ")}
      >
        <a
          href={ctaHref}
          onClick={(e) => e.stopPropagation()}
          className={`${underlineGrow} font-quicksand text-[18px] sm:text-[20px] text-[#FFF2DD]`}
          aria-label={`Host with us — ${title}`}
        >
          <span className="transition-colors duration-300">Host with us</span>
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}


export default function GallerySection({
  ctaHref = "/contact",
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

        {/* Heading + CTA (unchanged) */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] items-end gap-6 lg:gap-16">
          <h2
            id="events-title"
            className="text-5xl font-porsha sm:text-6xl lg:text-6xl leading-[1.3] -tight text-[#005931]"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Upcoming Events <br className="hidden sm:block" /> & Workshops
          </h2>

          <div className="flex lg:justify-end">
            <a
              href="/event"
              className={`${underlineGrow} font-quicksand text-[22px] text-[#005931]`}
              data-aos="fade-left"
              data-aos-duration="800"
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
        <GalleryCard key={i} {...e} ctaHref={ctaHref} />
      ))}
    </div>
      </div>
    </section>
  );
}
