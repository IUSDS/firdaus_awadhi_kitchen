import React from "react";
import { menuStripW } from "../../assets/icons";
import { menuThree } from "../../assets/images";

const MENU_GREEN = "#005931";

const items = [
  {
    name: "Bhuna Gosht",
    price: "₹ 315/630",
    desc: "On the bone meat cooked with onions & whole spices in mustard oil",
  },
  {
    name: "Mutton Biryani",
    price: "₹ 525",
    desc: "Fragrant basmati rice layered with delicate & flavorful mutton yakhni",
  },
  {
    name: "Chicken Korma",
    price: "₹ 390",
    desc: "Slow cooked on the bone chicken with a rich gravy",
  },
  {
    name: "Butter Chicken (Boneless)",
    price: "₹ 390",
    desc: "Roasted chicken in a sweet & sour Tomato gravy",
  },
];

export default function ThirdMenuSection() {
  return (
    <section id="menu-1b" className="relative isolate overflow-hidden">
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

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-18 sm:px-22 lg:px-18 xl:px-4 py-14 lg:py-14">
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT: menu list */}
          <div className="relative flex flex-col justify-center">
            {/* Half/Full label aligned to price column */}
            <div
              className="absolute font-porsha -top-7 right-0 w-[6.75rem] text-right text-lg sm:text-xl lg:text-2xl"
              style={{ color: MENU_GREEN }}
            >
              Half/Full
            </div>

            <ul data-aos="fade-right"  data-aos-duration="900">
              {items.map((it, idx) => (
                <li key={idx} className="py-5 first:pt-8">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-porsha text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                      style={{ color: MENU_GREEN }}
                    >
                      {it.name}
                    </span>

                    {/* leader line */}
                    <span
                      className="flex-1 border-b translate-y-[2px]"
                      style={{ borderColor: `${MENU_GREEN}66` }}
                    />

                    <span
                      className="w-[6.75rem] font-porsha text-right text-[16px] sm:text-[18px] lg:text-[20px] tabular-nums"
                      style={{ color: MENU_GREEN }}
                    >
                      {it.price}
                    </span>
                  </div>

                  <p
                    className="mt-1.5 text-[13px] sm:text-sm md:text-[15px] lg:text-[16px] leading-snug"
                    style={{ color: `${MENU_GREEN}CC` }}
                  >
                    {it.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: image */}
          <div className="flex items-center justify-center">
             <img
   src={menuThree}
   alt="Biryani & chicken bowl illustration"
   loading="lazy"
   decoding="async"
   fetchPriority="low"
   width={800}   
   height={800}   
   className="max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] w-auto object-contain"
   draggable="false"
   data-aos="zoom-in"  data-aos-duration="900"
 />
          </div>
        </div>
      </div>
    </section>
  );
}
