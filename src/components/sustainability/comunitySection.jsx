// app/components/sections/CommunitySection.jsx
import React from "react";
import { food14 } from "../../assets/images";

function ProgressCircle({
  value = 0,
  label = "",
  size = 128,
  stroke = 10,
  track = "rgba(255,255,255,0.15)",
  color = "#FFF2DD",
  ariaLabel,
}) {
  const v = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (v / 100);

  return (
    <div
      className="relative inline-block"
      role="img"
      aria-label={ariaLabel ?? `Progress ${v}%`}
      data-aos="fade-in" data-aos-duration="800"
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={track}
          strokeWidth={stroke}
          style={{ strokeWidth: stroke }}
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          style={{ strokeWidth: stroke }}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 grid place-items-center text-white">
        <span className="font-quicksand text-base sm:text-lg font-semibold">
          {label || `${v}%`}
        </span>
      </div>
    </div>
  );
}

export default function CommunitySection({
  bullets = [
    "Donations to urban food banks",
    "Collaborations with sustainability educators",
    "Workshops on zero-waste practices",
  ],
  // Progress items: description + circle (use value 100 for quantity labels)
  progressItems = [
    { label: "240kg", value: 100, desc: "Waste Diverted in 2024" },
    { label: "85%", value: 85, desc: "Local Sourcing" },
    { label: "0%", value: 0, desc: "Single-use plastic kitchen" },
  ],
}) {
  return (
    <section className="relative isolate overflow-hidden w-full pt-12 md:pt-14 lg:pt-16">
      {/* Two-column wrapper (60/40 on lg+) */}
       <div className="grid grid-cols-1 lg:grid-cols-5 w-full">
        {/* LEFT IMAGE / CONTENT (60%) */}
        <div className="relative lg:col-span-3 min-h-[440px]">
          {/* Background image */}
          <img
            src={food14}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Dark tint to match reference */}
          <div className="absolute inset-0 bg-black/45" />
          {/* Text content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full max-w-3xl px-10 sm:px-14 lg:px-20 py-10 sm:py-12">
              {/* Heading — matches EcoPracticesSection sizing (font + scale) */}
              <h2 className="font-porscha text-white leading-[1.3] -tight text-5xl sm:text-6xl lg:text-6xl" data-aos="fade-up" data-aos-duration="800">
                Community Ties
              </h2>

              {/* Description list — same visual weight as Eco list items, left-aligned */}
              <ul className="mt-6 space-y-3 max-w-2xl" >
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className="font-quicksand font-[500] text-white/95 text-[clamp(18px,1.4vw,18px)]" data-aos="fade-up" data-aos-duration="800"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT PROGRESS LIST (40%) */}
        <div className="lg:col-span-2 bg-[#005931] text-white">
          <div className="h-full flex flex-col">
            {progressItems.map((it, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-8 lg:px-12 py-7 border-b border-white/10 last:border-b-0 gap-x-4"
              >
                {/* Description (left) */}
                <div className="pr-8 max-w-[64%] px-3 lg:px-4">
                  <p className="font-quicksand text-lg sm:text-xl lg:text-2xl leading-7 sm:leading-8 lg:leading-9 font-bold" data-aos="fade-in" data-aos-duration="800">
                    {it.desc}
                  </p>
                </div>

                {/* Progress circle (right) */}
                <div className="shrink-0">
                  <ProgressCircle
                    value={it.value}
                    label={it.label}
                    size={128}
                    stroke={10}
                    track="rgba(255,255,255,0.18)"
                    color="#FFF2DD"
                    ariaLabel={`${it.desc}: ${it.label ?? `${it.value}%`}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
