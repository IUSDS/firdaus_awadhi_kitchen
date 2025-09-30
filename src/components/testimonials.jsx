// Project/app/components/HomeComponents/ReviewSection.jsx
import React from "react";
import { h1decorL, h1decorR } from "../assets/icons";

/** Reusable little avatar stack (use your own images if you want) */
function AvatarStack({ avatars = [] }) {
  if (!avatars.length) {
    // subtle placeholders so layout never collapses
    avatars = [null, null, null, null];
  }
  return (
    <div className="mt-6 flex -space-x-2 justify-center">
      {avatars.map((src, i) => (
        <span
          key={i}
          className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FFF2DD] overflow-hidden bg-[#FFF2DD]/20"
          style={
            src
              ? {
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        />
      ))}
    </div>
  );
}

function RatingCard({
  rating = "4.9",
  countLabel = "100+ Reviews",
  avatars = [],
}) {
  return (
    <article className="relative flex flex-col items-center justify-center bg-[#005931] text-[#FFF2DD] rounded-b-[28px] min-h-[280px] md:min-h-[340px] lg:min-h-[380px] px-6">
      <div className="text-[48px] leading-none font-porscha sm:text-[56px] lg:text-[64px]">
        {rating}
      </div>
      <div className="mt-3 font-quicksand text-[14px] sm:text-[15px]">
        {countLabel}
      </div>
      <AvatarStack avatars={avatars} />
    </article>
  );
}

function ReviewCard({ quote, author }) {
  return (
    <figure
      className={[
        // open-top feel: sides + bottom only
        "relative flex flex-col items-center text-center",
        "border-x border-b border-[#005931] rounded-b-[28px]",
        "min-h-[280px] md:min-h-[340px] lg:min-h-[380px]",
        // give a little top drop so it looks nestled into the first card
        "pt-10 pb-8 px-6 sm:px-8",
      ].join(" ")}
      role="figure"
    >
      <p className="max-w-[34ch] font-quicksand text-[15px] sm:text-[16px] leading-7 text-[#005931]">
        {quote}
      </p>
      <figcaption className="mt-auto pt-8 font-quicksand text-[15px] text-[#005931]/90">
        {author}
      </figcaption>
    </figure>
  );
}

export default function Testimonials({
  rating = "4.9",
  countLabel = "100+ Reviews",
  avatars = [],
  reviews = [
    {
      quote: "I finally understood my grandmother’s biryani notes",
      author: "~ Meera",
    },
    {
      quote: "The keema tips changed how I cook at home",
      author: "~ Samir R.",
    },
    {
      quote: "The food here is delicious, especially their Mango pickle",
      author: "~ Hasnaat",
    },
  ],
}) {
  return (
    <section
      id="reviews"
      className="relative isolate px-4 sm:px-6 lg:pt-30 md:pt-24 pt-22"
    >
      {/* Centered heading (same scale as Events) */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-14 flex items-center justify-center gap-3 sm:gap-4">
          <img
            src={h1decorL}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="40"
            height="40"
            draggable="false"
            className="h-10 w-10 sm:h-10 sm:w-8 object-contain"
          />

          <h2 className="text-center text-5xl font-porscha sm:text-6xl lg:text-6xl text-[#005931]">
            What our Customers Say
          </h2>

          <img
            src={h1decorR}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="40"
            height="40"
            draggable="false"
            className="h-10 w-10 sm:h-10 sm:w-8 object-contain"
          />
        </div>
      </div>

      {/* Cards: match MeetTheChef content width & horizontal padding */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-14">
        {/* No gaps so borders line up like the design; add vertical gap on small screens only */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-y-0 md:gap-x-0">
          <RatingCard
            rating={rating}
            countLabel={countLabel}
            avatars={avatars}
          />
          {reviews.map((r, i) => (
            <ReviewCard key={i} quote={r.quote} author={r.author} />
          ))}
        </div>
      </div>
    </section>
  );
}
