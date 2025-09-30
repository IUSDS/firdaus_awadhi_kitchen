// Project/app/components/HomeComponents/NewsletterSection.jsx
import React from "react";
import { newsletterBorder } from "../assets/icons";

function InnerContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12 min-w-0">
      <div className="min-w-0">
        <h2 className="font-porscha text-[#005931] text-5xl sm:text-6xl lg:text-6xl leading-tight">
          Sign up for our Newsletter
        </h2>
        <p className="mt-4 font-quicksand text-[#005931] text-[15px] sm:text-[16px]">
          To receive updates and special offers
        </p>
      </div>

      <form
        className="flex flex-col gap-3 sm:gap-4 md:items-start min-w-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <input
          id="nl-email"
          type="email"
          autoComplete="email"
          required
          className="
            w-full max-w-full md:max-w-[520px] h-11 md:h-12 rounded-md
            bg-[#005931] text-[#FFF2DD] placeholder-[#FFF2DD]/85
            px-4 outline-none ring-1 ring-[#FFF2DD]/25 focus:ring-2 focus:ring-[#FFF2DD]/60
            font-quicksand text-sm md:text-[15px]
          "
          placeholder="Enter your Email Address"
        />
        <button
          type="submit"
          className="
            w-[140px] cursor-pointer h-9 md:h-10 rounded-md
            bg-[#005931] text-[#FFF2DD]
            ring-1 ring-[#FFF2DD]/25 hover:ring-[#FFF2DD]/40
            transition-transform duration-150 active:scale-[.98]
            font-quicksand text-sm
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative isolate px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-20"
    >
      {/* ⬅︎ matches Testimonials cards width + padding-x */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-14">
        <div className="relative rounded-2xl overflow-hidden">
          {/* ===== Mobile/Tablet: keep green frame (no border image) ===== */}
          <div className="block lg:hidden rounded-2xl bg-[#005931] p-2 sm:p-3 md:p-4">
            <div className="rounded-xl bg-[var(--root-bg,#FFF2DD)] p-6 sm:p-8">
              <InnerContent />
            </div>
          </div>

          {/* ===== Desktop lg+: green frame + background border image ===== */}
          <div
   className="hidden lg:block relative rounded-2xl bg-[#005931] p-2 sm:p-3 md:p-12"
 >
   {/* decorative border as a real image = lazy-loadable */}
   <img
     src={newsletterBorder}
     alt=""
     aria-hidden="true"
     loading="lazy"
     decoding="async"
     fetchPriority="low"
     draggable="false"
     className="pointer-events-none select-none absolute inset-1 w-full h-full object-fill rounded-2xl"
   />
   <div className="relative rounded-xl bg-[var(--root-bg,#FFF2DD)] p-10 xl:p-12">
     <InnerContent />
   </div>
 </div>
        </div>
      </div>
    </section>
  );
}
