// src/components/EntryOverlay.jsx
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { fort } from "../assets/images"; // adjust import if your path/export differs

/**
 * Entry overlay:
 * - Fort slides up from bottom
 * - H1 "FIRDAUS" slides up from bottom with slight delay
 * - Hero H1 becomes visible under overlay BEFORE overlay fades (no gap)
 * - oncePerSession prevents replay within same tab
 */
export default function EntryOverlay({
  text = "FIRDAUS",
  heroSelector = "#introTitle",
  bgColor = "#FFF2DD",
  color = "#005930",
  coverNavbar = true,
  hold = 200, // ms delay to let fonts paint
  oncePerSession = true, // bring-back: prevent replays within tab
}) {
  const rootRef = useRef(null);
  const wordRef = useRef(null);
  const fortRef = useRef(null);

  const [show, setShow] = useState(() => {
    // accessibility: skip if reduced motion
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return false;
    return oncePerSession ? !sessionStorage.getItem("introSeen") : true;
  });

  useLayoutEffect(() => {
    if (!show) return;

    const ctx = gsap.context(() => {
      const overlay = rootRef.current;
      const word = wordRef.current;
      const fort = fortRef.current;
      const hero = document.querySelector(heroSelector);

      // If hero missing, just run a graceful fade-out
      if (!hero) {
        gsap.to(overlay, {
          autoAlpha: 0,
          duration: 0.45,
          delay: hold / 1000,
          onComplete: complete,
        });
        return;
      }

      // Prepare initial states
      // Hero: DO NOT move it; just hide then reveal (no slide to avoid the jolt you noticed)
      gsap.set(hero, { autoAlpha: 0, clearProps: "transform,filter" });

      // Overlay elements
      gsap.set(fort, { autoAlpha: 0, y: 48, willChange: "transform,opacity" });
      gsap.set(word, {
        autoAlpha: 0,
        y: 56, // slide up from lower start than fort for a nice parallax feel
        willChange: "transform,opacity",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: hold / 1000,
        onComplete: complete,
      });

      // Stage 1 — Enter: fort up, then word up with slight offset
      tl.to(fort, { y: 0, autoAlpha: 1, duration: 0.7 }, 0);
      tl.to(word, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.08);

      // Stage 2 — Reveal hero UNDER overlay before overlay fades (no gap)
      // Quick fade only (no y). Starts just after word settles.
      tl.to(hero, { autoAlpha: 1, duration: 0.35, ease: "power1.out" }, ">");

      // Stage 3 — Fade overlay off with a tiny overlap
      tl.to(overlay, { autoAlpha: 0, duration: 0.45 }, ">-0.05");

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
      className={["fixed inset-0", coverNavbar ? "z-[9999]" : "z-[30]"].join(
        " "
      )}
      style={{ backgroundColor: bgColor, color }}
    >
      {/* Center wordmark (under the fort per your spec) */}
      <div className="absolute inset-0 grid place-items-center px-6">
        <h1
          ref={wordRef}
          className="
        font-porscha text-center leading-[0.9] z-[40]"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          {text}
        </h1>
      </div>

      {/* Fort / skyline — higher z than title, attached to bottom */}
      <img
        ref={fortRef}
        src={fort}
        alt=""
        className="
      pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
      w-[120vw] max-w-none md:w-[100vw] lg:w-[120vw] 
      lg:max-h-[56vh] 
      object-contain
      z-[50]                               
    "
        fetchPriority="high"
      />
    </div>
  );
}
