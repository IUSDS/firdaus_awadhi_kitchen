import React from "react";
import {rootsBG} from "../../assets/images";

export default function ChefHistory({
  bottomImg = rootsBG,

}) {
  return (
    <section
      className="relative pt-0 sm:pt-2 lg:pt-12 isolate overflow-hidden"
    >
      {/* Bottom skyline — full width, anchored at bottom */}
      <img
        src={bottomImg}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -bottom-4 inset-x-0 mx-auto
          w-full max-h-[32vh] sm:max-h-[32vh] md:max-h-[32vh] lg:max-h-[38vh]
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
          pb-42 sm:pb-52 md:pb-74 lg:pb-92
          text-center
        "
      >
        <h1
          className="
            font-porscha
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-[#005930]
          "
        >
          ROOTS IN A CULINARY LEGACY
        </h1>

        <p
          className="
            mx-auto px-4 md:px-6 lg:px-0 font-quicksand mt-10 sm:mt-12 max-w32xl text-lg
            sm:text-xl md:text-xl
            text-[#005930]
          "
        >
          I grew up in the heart of Lucknow, in a joint family of 22 where every meal was a collective ritual and food was never just sustenance; it was a legacy. My earliest memories are of trailing behind my uncle through the bustling mandi, learning how to choose the freshest vegetables, or standing beside my father as he carefully selected meat from the butcher, discussing cuts like a connoisseur.
        </p>
      </div>
    </section>
  );
}