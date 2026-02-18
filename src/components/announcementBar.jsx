import React, { useEffect, useState } from "react";

export default function AnnouncementBar({
  storageKey = "firdaus_announcement_dismissed_v1",
  href = "/#iftari-boxes",
  message = "Ramzan Mubarak! Order your Iftari Boxes and bring a taste of Awadh to your Dastarkhwan!",
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(storageKey) === "1";
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
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

  if (!open) return null;

  return (
    <div className="sticky top-0 z-[60] w-full bg-[#005931] text-[#FFF2DD] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-2 sm:px-6">
        {/* Message (clickable like Squarespace) */}
        <a
          href={href}
          className="font-quicksand flex-1 text-center text-[13.5px] leading-snug underline-offset-4 hover:underline sm:text-[14px] sm:text-center"
        >
          {message}
        </a>

        {/* Close button with perfectly centered X (no font glyph) */}
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          className="relative cursor-pointer h-9 w-9 flex-none  focus-visible:outline-none"
        >
          <span className="absolute left-1/2 top-1/2 h-[2px] w-[14px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#FFF2DD]" />
          <span className="absolute left-1/2 top-1/2 h-[2px] w-[14px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#FFF2DD]" />
        </button>
      </div>
    </div>
  );
}
