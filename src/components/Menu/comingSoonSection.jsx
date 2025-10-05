// src/components/sections/comingSoonSection.jsx
import React from "react";
import {comingSoonIMG} from "../../assets/images"; // if you have a stamp asset: images.comingSoonStamp

const GREEN = "#005931";
const LIGHT = "#FFF2DD";

const vegItems = [
  "Paneer Masala",
  "Kali Mirch Paneer",
  "Paneer Kofta",
  "Bhagare Baigan",
  "Ghuyyain Korma",
  "Gobhi Musallam",
  "Lauki ke Kebab",
  "Dal Kebab",
];

const rollItems = [
  "Shammi Kebab Roll",
  "Galawat Kebab Roll",
  "Chicken Bhuna Roll",
  "Mutton Bhuna Roll",
];

export default function ComingSoonSection() {
  return (
    <section className="relative isolate py-22 md:py-24 lg:py-30">
      {/* ===== Heading Banner (full-bleed) ===== */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative bg-[#005931]">
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-20">
            {/* Stamp */}
            <div className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 left-[max(8px,2vw)] z-10">
                <img
                  src={comingSoonIMG}
                  alt="Coming Soon"
                  className="h-[clamp(90px,14vw,200px)] w-[clamp(90px,14vw,200px)] object-contain"
                  draggable="false"
                  data-aos="zoom-in"  data-aos-duration="900"
                />
            </div>

            {/* Title with padding to clear the stamp */}
            <div className="relative min-h-[58px] sm:min-h-[70px]" data-aos="fade-in"  data-aos-duration="900">
              <h2
                className="font-porsha text-[clamp(18px,2.2vw,28px)] -wide text-[#FFF2DD] py-4"
                style={{ paddingLeft: "clamp(110px,17vw,230px)" }}
              >
                Vegetarian, Rolls &amp; Combo Menu
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Small description under the banner */}
      <p className="mx-auto max-w-7xl pl-25 sm:pl-30 md:pl-50 lg:pl-70 xl:pl-80 mt-3 text-[13px] sm:text-sm md:text-base font-quicksand text-[#005931]" data-aos="fade-in"  data-aos-duration="900">
        We also provide catering services for big gatherings, bulk orders &amp; kitty party orders.
      </p>

      {/* ===== Menu Content (no background) ===== */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-20 mt-10 sm:mt-15">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 lg:divide-x divide-[#00593140]">
          {/* Left: Vegetarian 60% */}
          <div data-aos="fade-in"  data-aos-duration="900">
            <h3 className="font-porsha text-[#005931] text-[clamp(32px,4.4vw,48px)]">
              Vegetarian Menu
            </h3>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-2">
              {vegItems.map((it) => (
                <li
                  key={it}
                  className="font-porsha text-[#005931] text-[clamp(20px,2.2vw,22px)]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Rolls 40% */}
          <div className="lg:pl-12" data-aos="fade-in"  data-aos-duration="900">
            <h3 className="font-porsha text-[#005931] text-[clamp(32px,4.4vw,48px)]">
              Rolls
            </h3>

            <ul className="mt-6 space-y-2">
              {rollItems.map((it) => (
                <li
                  key={it}
                  className="font-porsha text-[#005931] text-[clamp(20px,2.2vw,22px)]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
