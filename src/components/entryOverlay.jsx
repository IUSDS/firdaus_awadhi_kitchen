import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { fort as fortImg } from "../assets/images"; // adjust if your export/path differs

/**
 * Entry overlay:
 * - Fort stays STATIC (no animation)
 * - H1 "FIRDAUS" slides up from bottom with a slight delay
 * - Hero H1 (#introTitle) fades in under the overlay BEFORE overlay closes (no gap)
 * - Overlay now does a softer FADE at the very end
 * - oncePerSession prevents replay within the same tab
 */
export default function EntryOverlay({
  text = "FIRDAUS",
  heroSelector = "#introTitle",
  bgColor = "#FFF2DD",
  color = "#005930",
  coverNavbar = true,
  fortSrc = fortImg,
  hold = 200,             // ms delay to let fonts paint
  oncePerSession = true,  // keep this so it doesn't replay on SPA back-to-Home
}) {
  const rootRef = useRef(null);
  const wordRef = useRef(null);
  const fortRef = useRef(null);

  const [show, setShow] = useState(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return oncePerSession ? !sessionStorage.getItem("introSeen") : true;
  });

  useLayoutEffect(() => {
    if (!show) return;

    const ctx = gsap.context(() => {
      const overlay = rootRef.current;
      const word = wordRef.current;
      const fort = fortRef.current;
      const hero = document.querySelector(heroSelector);

      // If hero missing, gracefully fade overlay away
      if (!hero) {
        gsap.to(overlay, { autoAlpha: 0, duration: 0.5, delay: hold / 1000, onComplete: complete });
        return;
      }

      // --- Initial states ---
      // Fort: STATIC & visible (no y/opacity animation)
      gsap.set(fort, { autoAlpha: 1, y: 0, willChange: "transform,opacity" });

      // Word: hidden & below (we animate this one)
      gsap.set(word, { autoAlpha: 0, y: 56, willChange: "transform,opacity" });

      // Hero: hidden (no movement; we only fade it in before overlay closes)
      gsap.set(hero, { autoAlpha: 0, clearProps: "transform" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: hold / 1000,
        onComplete: complete,
      });

      // Stage 1 — Text enters (fort stays static)
      tl.to(word, { y: 0, autoAlpha: 1, duration: 1, force3D: true }, 0.08);

      // Stage 2 — Reveal hero UNDER overlay (no gap)
      tl.to(hero, { autoAlpha: 1, duration: 0.35, ease: "power1.out" }, ">");

      // Stage 3 — Soft close: fade text slightly, then overlay fade
      tl.to(word, { autoAlpha: 0.6, duration: 0.25, ease: "power1.out" }, ">-0.05");
      tl.to(
        overlay,
        { autoAlpha: 0, duration: 1, ease: "power2.out" }, // smoother end fade
        ">"
      );

      function complete() {
        if (oncePerSession) sessionStorage.setItem("introSeen", "1");
        setShow(false);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [show, heroSelector, hold, oncePerSession]);

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={["fixed inset-0", coverNavbar ? "z-[9999]" : "z-[30]"].join(" ")}
      style={{
        backgroundColor: bgColor,
        color,
        contain: "layout paint style", // isolate to reduce reflow
        willChange: "opacity, transform",
      }}
    >
      {/* Center wordmark (under fort on mobile, above on desktop for visibility) */}
      <div className="absolute inset-0 grid place-items-center px-6">
        <h1
          ref={wordRef}
          className="font-porscha text-center leading-[0.9] z-[0]"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          {text}
        </h1>
      </div>

      {/* Fort / skyline — STATIC, scaled down on desktop, under title on lg */}
      <img
        ref={fortRef}
        src={fortSrc}
        alt=""
        className="
      pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
      w-[120vw] max-w-none md:w-[100vw] lg:w-[120vw] 
      lg:max-h-[56vh] 
      object-contain
      z-[10]                               
    "   /* set to your real intrinsic size */
        fetchPriority="high"
      />
    </div>
  );
}
