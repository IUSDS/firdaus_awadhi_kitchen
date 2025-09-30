// src/components/Home/CardGallerySection.jsx
import React, { useState } from "react";
import { topR, bottomL } from "../../assets/icons";
import { food18, food19, food20, food21 } from "../../assets/images";

function CornerArt({ size = 360, position = "top-right", src }) {
  const base = "pointer-events-none absolute opacity-80 object-contain";
  const pos = {
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-10",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-10",
  };
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`${base} ${pos[position]}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function CardGallerySection({
  id = "card-gallery",
  title = "Private Chef Services",
  subtitle = "Chef Asma is available for bespoke dining experiences including",
  cards = [
    {
      title: "Intimate at-home Awadhi feasts",
      image: food18,
      alt: "Awadhi kebabs plated",
    },
    { title: "Pop-up collaborations", image: food19, alt: "Pop-up service" },
    {
      title: "Cultural storytelling dinners",
      image: food20,
      alt: "Story-led dinner",
    },
    { title: "Menu consultations", image: food21, alt: "Menu consulting" },
  ],
}) {
  const [active, setActive] = useState(0);

  const onKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
    if (e.key === "ArrowRight")
      setActive((v) => Math.min(v + 1, cards.length - 1));
    if (e.key === "ArrowLeft") setActive((v) => Math.max(v - 1, 0));
  };

  return (
    // define brand text as CSS var; fallback is #005931 in case #00529 is not valid in your setup
    <section
      id={id}
      className="relative isolate"
      style={{ ["--inactive-fg"]: "#00529" }}
    >
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-[#005931]">
        <CornerArt src={topR} size={360} position="top-right" />
        <CornerArt src={bottomL} size={360} position="bottom-left" />

        {/* Heading and subtext inside the banner, centered */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center text-[#FFF2DD]">
          <h2 className="font-porscha leading-[1.15] text-[clamp(40px,5.2vw,58px)]">
            {title}
          </h2>
          <p className="mt-2 font-quicksand text-[clamp(16px,2.3vw,20px)]">
            {subtitle}
          </p>

          {/* Gallery */}
          <div
            className="mt-10 md:mt-12 flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-1"
            role="tablist"
            aria-label="Chef Services Gallery"
          >
            {cards.map((c, i) => {
              const isActive = active === i;

              const basis = isActive ? "md:basis-[58%]" : "md:basis-[14%]";
              // explicit heights so the card never collapses to 0 on mobile
              const height = isActive
                ? "h-[420px] sm:h-[520px] md:h-[440px]" // expanded
                : "h-[88px] md:h-[440px]"; // collapsed

              return (
                <article
                  key={i}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`${id}-panel-${i}`}
                  id={`${id}-tab-${i}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={[
                    "group relative w-full overflow-hidden rounded-2xl",
                    // 1) INACTIVE gets cream bg; ACTIVE is covered by image
                    isActive ? "bg-transparent" : "bg-[#FFF2DD]",
                    "md:min-w-[72px]",
                    "motion-safe:transition-[flex-basis,max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    basis,
                    height,
                    "md:max-h-none cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFF2DD]/50",
                  ].join(" ")}
                >
                  {/* Image: shows only when active; hidden when inactive */}
                  <img
                    src={c.image}
                    alt={c.alt || ""}
                    className={[
                      "absolute inset-0 h-full w-full object-cover select-none",
                      isActive ? "opacity-100" : "opacity-0",
                      "transition-opacity duration-400",
                    ].join(" ")}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                  {/* Mask for readability only when image is visible */}
                  <div
                    className={[
                      "absolute inset-0 bg-black/25 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden
                  />

                  {/* Title overlay ONLY (no body text) */}
                  <div
                    className={[
                      "absolute inset-0 flex items-center justify-center text-center",
                      "motion-safe:transition-transform duration-400",
                      // 2) Inactive = sideways (90°); Active = straight & centered
                      isActive ? "rotate-0" : "rotate-0 md:rotate-90",
                    ].join(" ")}
                  >
                    <h3
                      // Inactive uses brand text color; Active uses light text over image
                      style={{ color: isActive ? "#FFF2DD" : "#005930" }}
                      className="font-porscha text-[clamp(16px,2.2vw,22px)] sm:text-[clamp(18px,2.4vw,24px)]"
                    >
                      {c.title}
                    </h3>
                  </div>

                  {/* Keep a visible height on mobile when active so content never disappears */}
                  <div
                    role="tabpanel"
                    id={`${id}-panel-${i}`}
                    aria-labelledby={`${id}-tab-${i}`}
                    className="hidden"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
