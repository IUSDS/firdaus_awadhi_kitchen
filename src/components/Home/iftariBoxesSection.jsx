import React, { useMemo } from "react";
import { sectionStrip } from "../../assets/icons";
import { underlineGrow } from "./eventsGallery";
import { iftari1, iftari2, iftari3, iftari4, iftari5, iftari6 } from "../../assets/iftari";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  // Simple WhatsApp mark as inline SVG (keeps bundle lean, no extra deps)
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19.11 17.36c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.41-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49l-.55-.01c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.33 0 1.37 1 2.7 1.14 2.89.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"
      />
      <path
        fill="currentColor"
        d="M16 3C9.37 3 4 8.37 4 15c0 2.31.66 4.56 1.9 6.5L4 29l7.68-1.8A11.9 11.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.6c-1.85 0-3.67-.5-5.27-1.46l-.38-.22-4.56 1.07 1.22-4.45-.25-.4A9.54 9.54 0 0 1 6.4 15c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6z"
      />
    </svg>
  );
}

// Image strip: stationary on desktop, scrollable on small screens, with soft fades on both ends.
function ImageStrip({ images, ariaLabel = "Iftari Boxes photo gallery" }) {
  const list = useMemo(() => (images?.filter(Boolean) ?? []).slice(0, 10), [images]);
  if (!list.length) return null;

  const Tile = ({ src, className = "" }) => (
    <div
      className={`group relative overflow-hidden will-change-transform transition-transform duration-500 ease-out hover:scale-[1.03] hover:z-10 ${className}`}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.10]"
      />
    </div>
  );

  const fadeMask = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };

  return (
    <div className="relative" role="region" aria-label={ariaLabel} style={fadeMask}>
      {/* Mobile: horizontal scroll */}
      <div
        className="sm:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-3 pr-6">
          {list.map((src, idx) => (
            <Tile
              key={`m-${idx}-${src}`}
              src={src}
              className="snap-start flex-none h-[190px] w-[78vw] max-w-[420px]"
            />
          ))}
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden sm:grid lg:hidden grid-cols-4 gap-3">
        {list.slice(0, 4).map((src, idx) => (
          <Tile key={`s-${idx}-${src}`} src={src} className="h-[220px]" />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-6 gap-3 xl:gap-4">
        {list.slice(0, 6).map((src, idx) => (
          <Tile key={`l-${idx}-${src}`} src={src} className="h-[280px] 2xl:h-[310px]" />
        ))}
      </div>
    </div>
  );
}

export default function IftariBoxesSection({
  id = "iftari-boxes",
  eyebrow = "The Spirit of Ramzan on Your Dastarkhwan",
  heading = "Iftari Boxes",
  subheading = "Bring the Feast Home",
  whatsappHref = "https://chat.whatsapp.com/JDw9FG0ktD4DDPzB6qK3Kl",
  whatsappLabel = "Join WhatsApp Community",
  images,
}) {
  const fallbackImages = useMemo(
    () => [iftari1,iftari2,iftari3, iftari4, iftari5, iftari6],
    []
  );

  const carouselImages = images?.length ? images : fallbackImages;

  return (
    <section id={id} className="w-full lg:pt-30 md:pt-24 pt-22 bg-[#FFF2DD] text-[#005931]">
      {/* ===== Sophisticated heading band (matches Signature Dishes cadence) ===== */}
      <div className="relative bg-[#005931] text-[#FFF2DD]">
        <div className="relative h-8 md:h-10 pointer-events-none select-none">
          <img src={sectionStrip} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div className="py-8" data-aos="fade-up" data-aos-duration="800">
          <p className="text-center font-quicksand text-[14px] sm:text-[15px] tracking-[0.18em] uppercase opacity-90">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-center font-porsha  tracking-wide text-[clamp(34px,3.8vw,56px)]">
            {heading}
          </h2>
          <p className="mt-3 text-center font-quicksand text-[16px] sm:text-[18px] opacity-95">
            {subheading}
          </p>
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

      {/* ===== Body ===== */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-14">
          {/* Copy */}
          <div className="mx-auto max-w-3xl text-center pt-14" data-aos="fade-in" data-aos-duration="850">
            <p className="font-quicksand text-[16px] sm:text-[18px] leading-8">
              As the sun sets and the call to prayer resonates, the Dastarkhwan becomes a place of connection and
              gratitude. At Firdaus Awadhi Kitchen, Chef Asma honors this sacred time by bringing the soulful flavors of
              Lucknow to your home.
            </p>
            <p className="mt-6 font-quicksand text-[16px] sm:text-[18px] leading-8">
              Skip the kitchen stress and immerse yourself in the peace this season brings. Our Ramzan Iftari Boxes are
              a tribute to heritage—prepared with the same niyat and slow-cooked perfection that defines our kitchen.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#005931]/20 bg-white/40 px-5 py-2">
              <span className="font-quicksand text-[14px] sm:text-[15px]">Prepared fresh daily</span>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#005931]/60" />
              <span className="font-quicksand text-[14px] sm:text-[15px]">Limited batches</span>
            </div>
          </div>

          {/* Photo strip */}
          <div className="mt-12" data-aos="fade-up" data-aos-duration="900">
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
                <ImageStrip images={carouselImages} />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto max-w-3xl text-center pb-12 pt-12" data-aos="fade-up" data-aos-duration="900">
            <p className="font-quicksand text-[16px] sm:text-[18px] leading-8">
              Perfect for quiet family meals or a large gathering—every bite is a blessing and a celebration of
              togetherness.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappHref}
                className="
                  group inline-flex items-center gap-3
                  rounded-full bg-[#005931] px-7 py-3
                  font-quicksand text-[16px] sm:text-[18px] text-[#FFF2DD]
                  ring-1 ring-[#005931]/20 shadow-lg
                  transition-transform duration-300 hover:-translate-y-0.5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6b47]/60
                "
                aria-label={whatsappLabel}
              >
                <span className="inline-flex items-center justify-center rounded-full bg-[#FFF2DD]/10 p-2">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span className={`${underlineGrow} after:bg-[#FFF2DD]/90`}>{whatsappLabel}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
