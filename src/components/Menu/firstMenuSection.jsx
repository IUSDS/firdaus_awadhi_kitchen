import React from "react";

import { menuStripW } from "../../assets/icons";
import SectionDecor from "../sectionDecor";
import { menuOne } from "../../assets/images";

const MENU_GREEN = "#005931";

const items = [
  {
    name: "Mutton Keema",
    price: "₹ 630",
    desc: "Minced meat cooked along with onion",
  },
  {
    name: "Katte Masale Ka Keema",
    price: "₹ 630",
    desc: "Minced meat along with pieces cooked in whole spices",
  },
  {
    name: "Kofte",
    price: "₹ 540",
    desc: "Meatball cooked in a dhaniya and onion based gravy",
  },
  {
    name: "Shammi Kebab (2 Pcs)",
    price: "₹ 160",
    desc: "Minced meat cooked with spices & lentils, finished off with cooking over a pan",
  },
  {
    name: "Galawat Kebab (2 Pcs)",
    price: "₹ 160",
    desc: "Melt-in-mouth minced mutton with special spices, cooked over a pan",
  },
];

export default function FirstMenuSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* SIDE STRIPS — fixed on the screen edges at all breakpoints */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-y-0 left-0 z-0 w-7 sm:w-8 lg:w-10 bg-left bg-repeat-y"
        style={{
          backgroundImage: `url(${menuStripW})`,
          backgroundSize: "100% auto",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-y-0 right-0 z-0 w-7 sm:w-8 lg:w-10 bg-right bg-repeat-y"
        style={{
          backgroundImage: `url(${menuStripW})`,
          backgroundSize: "100% auto",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-18 sm:px-22 lg:px-18 xl:px-4 py-14 lg:py-14">
        {/* SectionDecor above heading, aligned with left content start */}
        <div className="mb-2">
          <SectionDecor />
        </div>

        {/* Heading – mirror ChefQuotes spacing/scale */}
        <h2
          className="text-3xl sm:text-4xl lg:text-6xl font-porscha"
          style={{ color: MENU_GREEN }}
        >
          MENU
        </h2>

        {/* CONTENT GRID */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT: Menu list with Half/Full header + leader lines */}
          <div className="relative flex flex-col justify-center">
            {/* Half/Full label aligned to price column */}
            <div
              className="absolute font-porscha -top-7 right-0 w-[6.75rem] text-right text-lg sm:text-xl lg:text-2xl"
              style={{ color: MENU_GREEN }}
            >
              Half/Full
            </div>

            <ul>
              {items.map((it, idx) => (
                <li key={idx} className="py-5 first:pt-8">
                  {/* Name — leader — Price */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-porscha text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                      style={{ color: MENU_GREEN }}
                    >
                      {it.name}
                    </span>

                    {/* leader line */}
                    <span
                      className="flex-1 border-b translate-y-[2px]"
                      style={{ borderColor: `${MENU_GREEN}` }}
                    />

                    <span
                      className="w-[5.25rem] font-porscha text-right text-[16px] sm:text-[18px] lg:text-[20px] tabular-nums"
                      style={{ color: MENU_GREEN }}
                    >
                      {it.price}
                    </span>
                  </div>

                  <p
                    className="mt-1.5 text-lg sm:text-[18px] font-quicksand"
                    style={{ color: `${MENU_GREEN}CC` }}
                  >
                    {it.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Illustration, vertically & horizontally centered.
              This column automatically matches the left column height via grid. */}
          <div className="flex items-center justify-center">
            <img
              src={menuOne}
              alt="Signature dish illustration"
              className="max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
