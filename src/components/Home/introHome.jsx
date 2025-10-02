import React from "react";
import { mandala, fort } from "../../assets/images";
import Typed from "typed.js";

export default function IntroHome() {
  const TYPE_TEXT =
    "A Culinary Journey Into Awadhi Royalty With Chef Asma Alvi";
  const typeRef = React.useRef(null);

  React.useEffect(() => {
    if (!typeRef.current) return;

    const typed = new Typed(typeRef.current, {
      strings: [TYPE_TEXT],
      typeSpeed: 70, // slower typing (ms per char)
      backSpeed: 40, // slower deletion
      startDelay: 250,
      backDelay: 1400,
      smartBackspace: true,
      loop: true,
      showCursor: false, // we’ll draw our own caret INSIDE the typed element
    });

    return () => typed.destroy();
  }, []);

  <style>{`
  .typed-caret::after {
    content: '|';
    display: inline-block;
    margin-left: 0.1em;
    animation: typedBlink 1s step-end infinite;
  }
  @keyframes typedBlink {
    50% { opacity: 0; }
  }
`}</style>;

  return (
    <section className="relative isolate overflow-hidden">
      {/* Left mandala — exactly half visible */}
      <img
        src={mandala}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute top-1/2 left-0
          object-contain opacity-80
        "
        style={{
          width: "clamp(260px, 50vmin, 620px)",
          height: "clamp(260px, 50vmin, 620px)",
          transform: "translate(-32%, -50%)",
          willChange: "transform",
        }}
      />

      {/* Right mandala — half shows (left half visible), mirrored to face inward */}
      <img
        src={mandala}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute top-1/2 right-0
          object-contain opacity-80
        "
        style={{
          width: "clamp(260px, 50vmin, 620px)",
          height: "clamp(260px, 50vmin, 620px)",
          transform: "translate(32%, -50%) scaleX(-1)",
          willChange: "transform",
        }}
      />

      {/* Bottom skyline — full width, anchored at bottom */}
      <img
        src={fort}
        alt=""
        fetchPriority="high"
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute bottom-0 inset-x-0 mx-auto
          w-full max-h-[26vh] sm:max-h-[30vh] md:max-h-[34vh]
          object-contain
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto max-w-6xl px-6
          pt-26 sm:pt-30 lg:pt-34
          pb-56 sm:pb-64 lg:pb-57
          text-center
        "
      >

        {/* Paragraph UPDATED: typewriter effect only; classes unchanged */}
        <h2
        id="introTitle"
          className="
    mx-auto font-porscha mt-2 sm:mt-3 max-w-3xl
    text-2xl md:text-4xl lg:text-5xl
    leading-relaxed text-[#005930]
  "
          aria-live="off"
        >
          {/* Wrapper keeps size fixed; no reflow during typing */}
          <span className="relative inline-block align-baseline">
            {/* Ghost line: reserves final width/height without showing */}
            <span
              aria-hidden="true"
              style={{ visibility: "hidden", whiteSpace: "pre-wrap" }}
            >
              {TYPE_TEXT}
            </span>

            {/* Actual typed content */}
            <span
              ref={typeRef}
              className="absolute left-0 top-0 typed-caret"
              style={{ whiteSpace: "pre-wrap" }}
            />
          </span>
        </h2>

        {/* Actions */}
        <a
          href="/chef"
          className="mt-8 sm:mt-10 cursor-pointer flex items-center justify-center gap-4 sm:gap-5"
        >
          <FillButton variant="outline">Meet the Chef</FillButton>
        </a>
      </div>
    </section>
  );
}

/** Button with a left→right "fill" hover effect */
function FillButton({ children, onClick, variant = "solid" }) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a6b47]";
  const palette =
    variant === "solid"
      ? "text-white bg-[#0a6b47]"
      : "text-[#0a6b47] border border-[#0a6b47]";

  return (
    <button type="button" className={`${base} ${palette} cursor-pointer`}>
      <span
        className={`
          absolute inset-0 bg-[#0a6b47]
          origin-left scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 ease-out will-change-transform
          ${variant === "solid" ? "opacity-25" : "opacity-100"}
        `}
        aria-hidden="true"
      />
      <span
        className={`
          relative z-10 font-quicksand 
          transition-transform duration-200 ease-out will-change-transform
          ${variant === "solid" ? "text-white" : "group-hover:text-white"}
        `}
      >
        {children}
      </span>
    </button>
  );
}
