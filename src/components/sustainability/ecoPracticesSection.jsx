// app/components/sections/EcoPracticesSection.jsx
import React, { useEffect, useState } from "react";
import { chefWorking2, chefWorking3, circularMandala } from "../../assets/images";

export default function EcoPracticesSection({
  items = [
    {
      bullets: [
        "Composting peels, stems, and leftovers",
        "Daily inventory checks to reduce waste",
      ],
      imgSrc: chefWorking2,
    },
    {
      bullets: [
        "Handmade spice blends (no plastic packaging)",
        "All prep done in-house",
      ],
      imgSrc: chefWorking3,
    },
  ],

  /**
   * Edit these numbers (percent units) to manually control mandala placement.
   * sm = <768px, md = 768–1023px, lg = ≥1024px
   */
  mandalaOffsets = {
    leftX: { sm: -70, md: -60, lg: -55 },   // e.g. -65% on mobile, -55% on lg
    rightX: { sm: 70, md: 60, lg: 55 },     // e.g. 65% on mobile, 55% on lg
    topY: { sm: -50, md: -50, lg: -50 },    // usually stays -50%
  },
}) {
  // === Mandala size (same strategy as before) ===
  const [mSize, setMSize] = useState(440);
  useEffect(() => {
    const calcSize = () => {
      const vw = window.innerWidth || 0;
      const vh = window.innerHeight || 0;
      const base = Math.min(vw, vh);
      let s = Math.max(240, Math.min(base * 0.46, 560));
      if (vw > 1600) s = Math.min(s * 1.05, 600);
      setMSize(Math.round(s));
    };
    calcSize();
    window.addEventListener("resize", calcSize);
    return () => window.removeEventListener("resize", calcSize);
  }, []);

  // === Breakpoint detector for transforms ===
  const [bp, setBp] = useState("sm"); // 'sm' | 'md' | 'lg'
  useEffect(() => {
    const computeBp = () => {
      const w = window.innerWidth || 0;
      if (w >= 1024) return "lg";
      if (w >= 768) return "md";
      return "sm";
    };
    const onResize = () => setBp(computeBp());
    setBp(computeBp());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Build the transform strings from the config
  const txLeft = mandalaOffsets.leftX[bp] ?? -55;
  const txRight = mandalaOffsets.rightX[bp] ?? 55;
  const ty = mandalaOffsets.topY[bp] ?? -50;

  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 pt-12 md:pt-14 lg:pt-16">
      {/* Background mandalas — responsive translate via config above */}
      <img
        src={circularMandala}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-0 object-contain opacity-30 md:opacity-60"
        style={{
          width: mSize,
          height: mSize,
          transform: `translate(${txLeft}%, ${ty}%)`,
          willChange: "transform",
        }}
      />
      <img
        src={circularMandala}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 right-0 object-contain opacity-30 md:opacity-60"
        style={{
          width: mSize,
          height: mSize,
          transform: `translate(${txRight}%, ${ty}%) scaleX(-1)`,
          willChange: "transform",
        }}
      />

      {/* Heading container (unchanged) */}
      <div className="relative z-10 mx-auto max-w-7xl" data-aos="fade-up" data-aos-duration="800">
        <h2 className="font-porsha text-[#005931] text-5xl sm:text-6xl lg:text-6xl">
          Eco Practices
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mx-auto mt-8 sm:mt-10 max-w-[46rem] space-y-22 sm:space-y-18 lg:space-y-2">
          {items.map((it, idx) => {
            const even = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-2 lg:gap-x-10"
              >
                {/* Description */}
                <div className={`w-full md:max-w-full ${even ? "md:order-1" : "md:order-2"}`}>
                  <ul className="space-y-2">
                    {(it.bullets || []).map((b, i) => (
                      <li
                        key={i}
                        className="font-quicksand font-[500] text-[#005931] text-[clamp(18px,1.4vw,18px)]" data-aos="fade-in" data-aos-duration="800"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={`w-full md:max-w-[92%] ${even ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative aspect-[5/3] sm:aspect-[7/3] md:aspect-[4/3] lg:aspect-[4/3] rounded-xl overflow-hidden">
                    {it.imgSrc ? (
                      <img
                        src={it.imgSrc}
                        alt=""
                        className="absolute inset-0 h-full w-full object-contain md:object-cover"
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        data-aos="zoom-in" data-aos-duration="800"
                      />
                    ) : (
                      <div className="absolute inset-0 border border-[#005931]/25 rounded-xl bg-transparent" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
