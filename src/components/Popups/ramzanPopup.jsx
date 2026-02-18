import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ramzanPopup.css";

// Adjust this import path if needed.
// Example alternate: import bannerStripTop from "../../assets/banners/bannerStripTop.png";
import { bannerStripTop, bannerStripSide } from "../../assets/icons";

export default function RamzanPopup({
  delayMs = 1400, // gives EntryOverlay time to finish
  storageKey = "firdaus_ramzan_popup_dismissed_v1",
  learnMoreTargetId = "iftari-boxes",
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  const canShow = useMemo(() => {
    try {
      return localStorage.getItem(storageKey) !== "1";
    } catch {
      return true;
    }
  }, [storageKey]);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(storageKey, "1");
    } catch {
      // ignore
    }
  };

  const onLearnMore = (e) => {
    e.preventDefault();
    close();
    window.location.href = `/#${learnMoreTargetId}`; // always navigates to Home + anchor
  };

  useEffect(() => {
    if (!canShow) return;

    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [canShow, delayMs]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Autofocus for accessibility
  useEffect(() => {
    if (open) dialogRef.current?.focus?.();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="ramzanOverlay"
      role="presentation"
      onMouseDown={(e) => {
        // click outside closes
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="ramzanDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ramzanTitle"
        tabIndex={-1}
        ref={(node) => {
          dialogRef.current = node;
        }}
      >
        <div className="ramzanFrame">
          {/* Border strips (frame) */}
          <div
            className="ramzanStripTop"
            style={{ backgroundImage: `url(${bannerStripTop})` }}
            aria-hidden="true"
          />
          <div
            className="ramzanStripBottom"
            style={{ backgroundImage: `url(${bannerStripTop})` }}
            aria-hidden="true"
          />
          <div
            className="ramzanStripLeft"
            style={{ backgroundImage: `url(${bannerStripSide})` }}
            aria-hidden="true"
          />
          <div
            className="ramzanStripRight"
            style={{ backgroundImage: `url(${bannerStripSide})` }}
            aria-hidden="true"
          />

          {/* Close */}
          <button
            type="button"
            className="ramzanClose"
            onClick={close}
            aria-label="Close popup"
          />

          {/* Content */}
          <div className="ramzanContent">
            <h2 id="ramzanTitle" className="ramzanHeading font-porsha">
              RAMZAN MUBARAK
            </h2>

            <div className="ramzanCopy font-quicksand">
              <p>
                In The Sacred Month Of Ramzan, Every Sunset Brings Faith,
                Family, And The Comfort Of A Shared Meal.
              </p>

              <p>
                From Our Heart To Your Table, Chef Asma Presents Our Handcrafted
                Iftari Boxes: A Soulful Collection Of Awadhi Heritage, Prepared
                To Honor The Spirit Of Iftar.
              </p>

              <p>
                Each Iftari Box Is A Tribute To The Memory Of Home, Delivered To
                Ensure Your Evening Begins In Peace.
              </p>

              <p>Bringing The Warmth Of Our Dastarkhwan To Yours.</p>
            </div>

            <div className="ramzanActions">
              <a
                href={`#${learnMoreTargetId}`}
                onClick={onLearnMore}
                className="ramzanBtn font-quicksand"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
