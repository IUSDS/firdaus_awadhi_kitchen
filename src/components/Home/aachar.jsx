import React, { useEffect, useMemo, useState } from "react";
import { sectionStrip } from "../../assets/icons";
import { underlineGrow } from "./eventsGallery";
import { aachar1, aachar2, aachar3, aachar4 } from "../../assets/iftari";

function AutoCarousel({
  images = [aachar1, aachar2, aachar3, aachar4],
  interval = 3200,
  ariaLabel = "Achaars By Firdaus image carousel",
}) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div
      className="relative isolate h-full min-h-[320px] sm:min-h-[420px] lg:min-h-0 overflow-hidden rounded-[28px] bg-[#005931]"
      role="region"
      aria-label={ariaLabel}
    >
      <div className="relative h-full min-h-[320px] sm:min-h-[420px] lg:min-h-0">
        {slides.map((src, idx) => (
          <img
            key={`${src}-${idx}`}
            src={src}
            alt={`Achaars By Firdaus ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={idx === 0 ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-quicksand text-[12px] uppercase tracking-[0.18em] text-[#FFF2DD]/78">
                Heirloom preserves
              </p>
              <p className="mt-1 font-porsha text-[22px] sm:text-[28px] text-[#FFF2DD]">
                Achaars By Firdaus
              </p>
            </div>

            {slides.length > 1 && (
              <div className="flex items-center gap-2" aria-hidden="true">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === active ? "w-7 bg-[#FFF2DD]" : "w-2.5 bg-[#FFF2DD]/45"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AchaarsSection({
  id = "achaars-by-firdaus",
  images = [aachar1, aachar2, aachar3, aachar4],
  ctaHref = "https://forms.gle/4Mtq8LLjVQRm9rjz8",
}) {
  return (
    <section id={id} className="w-full bg-[#FFF2DD] text-[#005931] pt-22 md:pt-24 lg:pt-28">
      <div className="relative bg-[#005931] text-[#FFF2DD]">
        <div className="relative h-8 md:h-10 pointer-events-none select-none">
          <img
            src={sectionStrip}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="py-7 sm:py-8" data-aos="fade-up" data-aos-duration="800">
          <p className="text-center font-quicksand text-[14px] sm:text-[15px] tracking-[0.18em] uppercase opacity-90">
            Heirloom Preserves
          </p>
          <h2 className="mt-3 text-center font-porsha tracking-wide text-[clamp(34px,3.8vw,56px)]">
            Achaars By Firdaus
          </h2>
        </div>

        <div className="relative h-8 md:h-10 pointer-events-none select-none">
          <img
            src={sectionStrip}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover rotate-180"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-14 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 sm:gap-10 lg:gap-14 items-stretch">
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="900">
            <div className="h-full">
              <AutoCarousel images={images} />
            </div>
          </div>

          <div
            className="order-2 lg:order-1 h-full"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="flex h-full flex-col justify-center">
              <div className="inline-flex w-fit items-center rounded-full border border-[#005931]/15 bg-white/40 px-4 py-2">
                <span className="font-quicksand text-[13px] sm:text-[14px] tracking-[0.14em] uppercase">
                  Bottled with heritage
                </span>
              </div>

              <p className="mt-6 font-quicksand text-[16px] sm:text-[18px] leading-8 max-w-[62ch]">
                In Awadhi tradition, a meal is only complete with the spirited kick of a home-made
                pickle. More than a condiment, our achaars are the soul of our kitchen; bottled with
                heritage to provide the perfect punctuation to every bite of your meal.
              </p>

              <div className="mt-8 rounded-[26px] border border-[#005931]/12 bg-white/45 p-6 sm:p-7">
                <p className="font-quicksand text-[13px] sm:text-[14px] uppercase tracking-[0.18em] text-[#005931]/70">
                  Now featured
                </p>
                <h3 className="mt-3 font-porsha text-[30px] sm:text-[38px] leading-tight">
                  Mirch Ka Achaar
                </h3>
                <p className="mt-4 font-quicksand text-[16px] sm:text-[18px] leading-8 text-[#005931]/92 max-w-[52ch]">
                  A masterpiece of fire and tang, bottled at the peak of the season. The essential,
                  flavour-packed side for every bite.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#005931] px-7 py-3 font-quicksand text-[16px] sm:text-[18px] text-[#FFF2DD] shadow-lg ring-1 ring-[#005931]/15 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6b47]/50"
                >
                  <span className={`${underlineGrow} after:bg-[#FFF2DD]/90`}>
                    Order Now
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <span className="font-quicksand text-[14px] sm:text-[15px] text-[#005931]/72">
                  Small-batch. Seasonal. Made the Firdaus way.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}