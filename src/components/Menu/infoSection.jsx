// app/components/HomeComponents/InfoSection.jsx
import React from "react";
import { GreenSectionDecor } from "../sectionDecor";

export default function InfoSection() {
  return (
    <section
      className="relative bg-[#005931] text-[#FFF2DD]"
    >
      {/* Keep section rhythm consistent with other sections */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 text-center font-porscha">

        {/* SectionDecor — same placement as quotes section */}
        <div className="flex justify-center">
          <GreenSectionDecor align="center" />
        </div>

        {/* Heading */}
        <h2 className="mt-3 md:mt-4 leading-tight  text-[clamp(20px,2.6vw,28px)]">
          AWADHI KITCHEN
        </h2>

        {/* Address (same style as heading) */}
        <h3 className="mt-2 leading-tight  text-[clamp(20px,2.6vw,28px)]">
          Kisan Bazar, Vibhuti Khand, Gomti Nagar, Lucknow
        </h3>

        {/* Small description */}
        <p className="mt-8  text-[clamp(14px,1.2vw,18px)]">
          To place your order, Reach out to us via call/Whatsapp on
          &nbsp;+91-731109090 / +91-731109092
        </p>
      </div>
    </section>
  );
}
