import React from "react";
import {mandala, fort} from "../../assets/images";

export default function IntroHome({
  bottomImg = fort,
  onMeet,

}) {
  return (
    <section
      className="relative isolate overflow-hidden"
    >
      {/* Left mandala — exactly half visible */}
      <img
        src={mandala}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute top-1/2 left-0
          object-contain opacity-80
        "
       style={{
          width: "clamp(260px, 50vmin, 620px)",
         height: "clamp(260px, 50vmin, 620px)",
          transform: "translate(-32%, -50%)",
          willChange: "transform",
        }}
      />

      {/* Right mandala — half shows (left half visible), mirrored to face inward */}
      <img
        src={mandala}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute top-1/2 right-0
          object-contain opacity-80
        "
        style={{
          width: "clamp(260px, 50vmin, 620px)",
          height: "clamp(260px, 50vmin, 620px)",
          // mirror horizontally so the visible half faces the center
          transform: "translate(32%, -50%) scaleX(-1)",
          willChange: "transform",
        }}
      />

      {/* Bottom skyline — full width, anchored at bottom */}
      <img
        src={bottomImg}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute bottom-0 inset-x-0 mx-auto
          w-full max-h-[26vh] sm:max-h-[30vh] md:max-h-[34vh]
          object-contain
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto max-w-6xl px-6
          pt-16 sm:pt-20 lg:pt-24
          /* extra whitespace so text sits comfortably above the skyline */
          pb-56 sm:pb-64 lg:pb-72
          text-center
        "
      >
        <h1
          className="
            font-porscha
            text-6xl sm:text-6xl md:text-8xl
            text-[#005930]
          "
        >
          FIRDAUS
        </h1>

        <p
          className="
            mx-auto font-porscha mt-2 sm:mt-3 max-w-3xl
            text-base sm:text-xl md:text-2xl
            leading-relaxed text-[#005930]
          "
        >
          A Culinary Journey Into Awadhi Royalty With Chef Asma Alvi
        </p>

        {/* Actions */}
        <a href="/chef" className="mt-8 sm:mt-10 cursor-pointer flex items-center justify-center gap-4 sm:gap-5">
          <FillButton variant="outline">
            Meet the Chef
          </FillButton>
        </a>
      </div>
    </section>
  );
}

/** Button with a left→right "fill" hover effect */
function FillButton({ children, onClick, variant = "solid" }) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a6b47]";
  const palette =
    variant === "solid"
      ? "text-white bg-[#0a6b47]"
      : "text-[#0a6b47] border border-[#0a6b47]";

  return (
    <button type="button" className={`${base} ${palette} cursor-pointer`}>
      {/* Fill layer */}
      <span
        className={`
          absolute  inset-0 bg-[#0a6b47]
          origin-left scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 ease-out will-change-transform
          ${variant === "solid" ? "opacity-25" : "opacity-100"}
        `}
        aria-hidden="true"
      />
      {/* Label */}
      <span
        className={`
          relative z-10 font-quicksand 
          transition-transform duration-200 ease-out will-change-transform
          ${variant === "solid" ? "text-white" : "group-hover:text-white"}
        `}
     >
        {children}
      </span>
    </button>
  );
}
