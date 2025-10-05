import React from "react";
import { menuStripG } from "../../assets/icons";
import { menuFour } from "../../assets/images";

const BG_GREEN = "#005931";
const TEXT_LIGHT = "#FFF2DD";

const items = [
  {
    name: "Chicken Masala",
    price: "₹ 390",
    desc: "Roasted chicken cooked in a spicy semi gravy",
  },
  {
    name: "Chicken Bhuna",
    price: "₹ 390",
    desc: "On the bone chicken cooked with onions & whole spices in mustard oil",
  },
  {
    name: "Chicken Kali Mirch",
    price: "₹ 390",
    desc: "Chicken slow cooked in a curd based gravy along with methi",
  },
  {
    name: "Chicken Biryani",
    price: "₹ 390",
    desc: "Fragrant basmati rice layered in with succulent chicken yakhni",
  },
];

export default function FourthMenuSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: BG_GREEN }}
    >
      {/* SIDE STRIPS pinned to edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-y-0 left-0 z-0 w-7 sm:w-8 lg:w-10 bg-left bg-repeat-y"
        style={{
          backgroundImage: `url(${menuStripG})`,
          backgroundSize: "100% auto",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-y-0 right-0 z-0 w-7 sm:w-8 lg:w-10 bg-right bg-repeat-y"
        style={{
          backgroundImage: `url(${menuStripG})`,
          backgroundSize: "100% auto",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-18 sm:px-22 lg:px-18 xl:px-4 py-14 lg:py-14">
        {/* GRID: image left, menu right; on mobile, image drops to bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT: Illustration */}
          <div className="order-2 lg:order-1 flex items-center justify-start lg:justify-center">
            <img
              src={menuFour}
              alt="Chicken dish illustration"
              className="max-h-[300px] sm:max-h-[340px] lg:max-h-[380px] w-auto object-contain"
              draggable="false"
              data-aos="zoom-in"  data-aos-duration="900"
            />
          </div>

          {/* RIGHT: Menu list */}
          <div className="order-1 lg:order-2 relative flex flex-col justify-center">
            {/* Half/Full label aligned over price column */}
            <div
              className="absolute font-porsha -top-7 right-0 w-[6.75rem] text-right text-lg sm:text-xl lg:text-2xl"
              style={{ color: TEXT_LIGHT }}
            >
              Half/Full
            </div>

            <ul data-aos="fade-left"  data-aos-duration="900">
              {items.map((it, idx) => (
                <li key={idx} className="py-5 first:pt-8">
                  {/* Name — leader — Price */}
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-porsha text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                      style={{ color: TEXT_LIGHT }}
                    >
                      {it.name}
                    </span>

                    <span
                      className="flex-1 border-b translate-y-[2px]"
                      style={{ borderColor: `${TEXT_LIGHT}66` }}
                    />

                    <span
                      className="w-[6.75rem] font-porsha text-right text-[16px] sm:text-[18px] lg:text-[20px] tabular-nums"
                      style={{ color: TEXT_LIGHT }}
                    >
                      {it.price}
                    </span>
                  </div>

                  <p
                    className="mt-1.5 text-[13px] sm:text-sm md:text-[15px] lg:text-[16px] leading-snug font-quicksand"
                    style={{ color: `${TEXT_LIGHT}CC` }}
                  >
                    {it.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
