import { useMemo, useState, useCallback } from "react";
import {sectionStrip} from "../../assets/icons"; // same source as MeetTheChef
import {food1, food13, food2, food3, food4} from "../../assets/images";

export default function SignatureDishes({ items }) {
  const DISHES = useMemo(
    () =>
      items ?? [
        { title: "Shami Kebab", src: food2 },
        { title: "Mutton Yakhni Biryani", src: food1 },
        { title: "Khaliya Salan", src: food3 },
        { title: "Seasonal Awadhi Thali", src: food13 },
        { title: "Bhuna Mutton", src: food4 },
      ],
    [items]
  );

  const [active, setActive] = useState(0);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setActive((i) => (i + 1) % DISHES.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => (i - 1 + DISHES.length) % DISHES.length);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(DISHES.length - 1);
      }
    },
    [DISHES.length]
  );

  return (
    <section id="signature-dishes" className="w-full lg:pt-30 md:pt-24 pt-22 bg-[#FFF2DD] text-[#005931]">
      {/* ===== Banner with ornament strips (same pattern as MeetTheChef) ===== */}
      <div className="relative bg-[#005931] text-[#FFF2DD]">
        {/* Top strip */}
        <div className="relative h-8 md:h-10 pointer-events-none select-none">
          <img
            src={sectionStrip}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Center heading */}
        <div className="py-6" data-aos="fade-up"  data-aos-duration="800">
          <h2 className="text-center font-porsha leading-[1.54] -wide
                         text-[clamp(34px,3.8vw,56px)]">
            Signature Dishes
          </h2>
        </div>

        {/* Bottom strip (flipped) */}
        <div className="relative h-8 md:h-10 pointer-events-none select-none">
          <img
            src={sectionStrip}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover rotate-180"
          />
        </div>
      </div>

      {/* ===== Full-bleed Gallery (no margins) ===== */}
      <div
        className="
          relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen
        "
      >
        {/* Lock a shared height so image & list match perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-[560px]">
          {/* === Image Stage (bottom + right green borders) === */}
          <div className="relative h-[62vw] min-h-[320px] max-h-[640px] md:h-full">
            {DISHES.map((d, i) => (
              <img
                key={d.title}
                src={d.src}
                alt={d.title}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover
                            transition-opacity duration-500 ease-out
                            ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            {/* borders */}
            <div className="pointer-events-none absolute inset-0 border-b-2 border-r-2 border-[#005931]" />
            {/* soft fade at bottom for polish */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
          </div>

          {/* === Options List (left divider + item separators) === */}
          <div className="md:h-full">
            <ul
              role="tablist"
              aria-label="Select a dish to preview"
              onKeyDown={onKeyDown}
              className="
                flex h-full flex-col
                border-l-2 border-[#005931]
              "
            >
              {DISHES.map((d, i) => {
                const isActive = i === active;
                return (
                  <li key={d.title} className="list-none" role="none">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`dish-panel-${i}`}
                      id={`dish-tab-${i}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onTouchStart={() => setActive(i)}
                      className={`
                        bg-[#FFF2DD] group relative block w-full text-left overflow-hidden
                        px-8 py-10
                        border-b-2 border-[#005931]
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B42]/70
                        font-porsha
                        text-[clamp(18px,2.2vw,26px)] leading-tight
                        -wide
                        transition-all duration-300
                        ${isActive ? "" : ""}
                        before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0
                        before:bg-[#005931] before:transition-all before:duration-500 before:ease-out
                        group-hover:before:w-full
                        ${isActive ? "before:w-full" : ""}
                      `}
                    >
                      {/* Active marker: strong left rule, no backgrounds */}
                      <span
                        aria-hidden="true"
                        className={`
                          mr-3 inline-block h-[1.15em] w-1 align-[-0.15em]
                          bg-transparent transition-colors duration-200
                        `}
                      />
                      <span
                        className="
                          relative z-10 inline-block
                          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                          after:bg-[#005931] after:transition-all after:duration-300
                          group-hover:after:w-full
                          group-hover:translate-x-0.5
                          transition-transform
                        "
                      >
                        <span className={`${isActive ? "text-[#FFF2DD]" : "text-[#005931] group-hover:text-[#FFF2DD]"} transition-colors duration-300`}>
                          {d.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
              </ul>
            

              {/* a11y tabpanels (hidden visually) */}
              <div className="sr-only">
                {DISHES.map((d, i) => (
                  <div
                    key={d.title}
                    role="tabpanel"
                    id={`dish-panel-${i}`}
                    aria-labelledby={`dish-tab-${i}`}
                    hidden={i !== active}
                  >
                    {d.title}
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
