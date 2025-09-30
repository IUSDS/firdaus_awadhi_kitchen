// app/components/sections/UpcomingWorkshopSection.jsx
import React, { useEffect, useState } from "react";
import { circularMandala, food11, food14, food16, food21, } from "../../assets/images";

export default function UpcomingWorkshopSection({
  items = [
    {
      title: "Awadhi Biryani Masterclass",
      description: "Learn Rice Layering, Meat Cuts & Dum Techniques",
      imgSrc: food14,
    },
    {
      title: "Spice Trials",
      description: "Understanding Spice Pairing And Roasting",
      imgSrc: food16 ,
    },
  ],
}) {
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

  return (
    <section className="relative isolate overflow-hidden bg-[#005931] text-[#FFF2DD] px-4 sm:px-6 py-12 md:py-14 lg:py-16">
      {/* Background mandalas (half visible like introHome) */}
      <img
        src={circularMandala}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-0 object-contain opacity-60"
        style={{
          width: mSize,
          height: mSize,
          transform: "translate(-55%, -50%)",
          willChange: "transform",
        }}
      />
      <img
        src={circularMandala}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 right-0 object-contain opacity-60"
        style={{
          width: mSize,
          height: mSize,
          transform: "translate(55%, -50%) scaleX(-1)",
          willChange: "transform",
        }}
      />

      {/* Narrower container */}
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Subheading + Heading (slightly smaller) */}
        <div className="text-center">
          <p className="font-quicksand font-semibold uppercase text-[clamp(23px,1.35vw,22px)]">
            Upcoming
          </p>
          <h2 className="mt-1 font-porscha leading-[1.15] text-[clamp(50px,4.2vw,52px)]">
            Workshops
          </h2>
        </div>

        {/* Items */}
        <div className="mt-8 space-y-7 sm:space-y-8">
          {items.map((it, idx) => (
            <WorkshopRow
              key={idx}
              title={it.title}
              description={it.description}
              imgSrc={it.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkshopRow({ imgSrc = "", title, description }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-7">
      {/* Left: Image (slightly smaller via inner max-width) */}
      <div className="w-full md:justify-self-end md:max-w-[92%]">
        <div className="relative aspect-[5/3] rounded-xl overflow-hidden bg-[#E7E7E7]">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          ) : null}
        </div>
      </div>

      {/* Right: Title + Description (smaller sizes) */}
      <div className="w-full ml-2 md:justify-self-start md:max-w-[92%]">
        <h3 className="font-porscha text-[clamp(24px,2.1vw,22px)] leading-tight">
          {title}
        </h3>
        <p className="mt-1.5 font-quicksand text-[clamp(16px,1.25vw,15px)] opacity-95">
          {description}
        </p>
      </div>
    </div>
  );
}
