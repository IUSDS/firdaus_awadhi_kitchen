import { useState, useEffect, useRef } from "react";
import {LogoG, LogoW} from "../assets/icons";

const LINKS = [
  { label: "HOME", href: "/" },
  { label: "CHEF", href: "/chef" },
  { label: "MENU", href: "/menu" },
  { label: "EVENTS", href: "/event" },
  { label: "WORKSHOPS", href: "/workshop" },
  { label: "CONTACT US", href: "/contact" },
];

const LOGO_DEFAULT = LogoG; // normal
const LOGO_MOBILE_MENU = LogoW; // high-contrast for green bg

export default function Navbar() {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  // Home = show default logo; other pages = show the mobile-menu variant
  const isHome =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" ||
     window.location.pathname === "/index.html");
  const logoSrc = open
    ? LOGO_MOBILE_MENU
    : (isHome ? LOGO_DEFAULT : LOGO_MOBILE_MENU);

  // Smooth anchor scrolling
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    if (!prev) root.style.scrollBehavior = "smooth";
    return () => { root.style.scrollBehavior = prev; };
  }, []);

  // Lock page scroll while overlay is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [open]);


  return (
    <>
      {/* HEADER stays above overlay */}
      <header
        ref={headerRef}
        className={[
          "sticky top-0 font-quicksand z-50 transition-all duration-300 ease-in-out",
          open ? "bg-[#005931] min-[868px]:bg-transparent" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-8xl px-4 min-[868px]:px-6 lg:px-14">
          <div className="grid grid-cols-[1fr_auto_1fr] min-h-20 items-center gap-4 min-[868px]:min-h-26">
            {/* 1) Logo */}
            <div className="flex items-center justify-self-start col-start-1">
              <a href="/" className="block">
                <img
                  src={logoSrc}
                  alt="Firdaus Awadhi Kitchen"
                  className="block h-auto w-auto max-h-10 min-[868px]:max-h-12"
                  onError={(e) => {
                    // Fallback safely to the opposite variant if the chosen asset fails
                    e.currentTarget.src =
                      logoSrc === LOGO_MOBILE_MENU ? LOGO_DEFAULT : LOGO_MOBILE_MENU;
                  }}
                />
              </a>
            </div>

            {/* 2) Center nav — desktop only (>= 868px), stays centered and wraps if needed */}
            <div className="hidden min-[868px]:flex justify-center self-center justify-self-center col-start-2">
              <div className="flex min-h-16 min-[868px]:min-h-26 items-center rounded-b-[48px] bg-[#005931] px-8 lg:px-14">
                <ul className="flex flex-wrap content-center items-center justify-center gap-x-6 gap-y-2 text-center lg:flex-nowrap">
                  {LINKS.map((l) => (
                    <li key={l.href}>
                       <a
                        href={l.href}
                        className="relative inline-block text-[11px] lg:text-xs -[0.16em]  text-[#FFF2DD]
                                   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full
                                   after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200
                                   after:bg-[#FFF2DD] hover:after:bg-[#FFF2DD]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3) CTA + Hamburger */}
            <div className="flex items-center gap-2 justify-self-end col-start-3">
              {/* Desktop CTA only (>= 868px) */}
              <a
                href="/contact#contacform"
                className="hidden min-[868px]:inline-flex rounded-full bg-[#005931] md:text-[10px] lg:text-[12px] -[0.20em] text-[#FFF2DD] py-3 px-6"
              >
                BOOK NOW
              </a>

              {/* Mobile hamburger (<= 900px) */}
              <button
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  // Keep cross/open color the same; only change closed color by route
                  open ? "text-[#FFF2DD]" : (isHome ? "text-[#005930]" : "text-[#FFF2DD]"),
                  "min-[868px]:hidden",
                ].join(" ")}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {open ? (
                    // CROSS in #FFF2DD (via currentColor)
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY — only below 868px */}
      <div
        className={[
          "fixed inset-0 z-40 transition-all duration-300 ease-in-out min-[868px]:hidden",
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-1 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Full-screen green background */}
        <div className="absolute inset-0 bg-[#005931]" />

        {/* Content area below header; use dynamic --nav-h */}
        <div
          className="relative w-full"
          style={{ paddingTop: "var(--nav-h, 6rem)" }}
        >
          <div
            className="flex w-full flex-col items-center justify-center gap-6 px-6 overscroll-contain"
            style={{ height: "calc(100vh - var(--nav-h, 6rem))" }}
          >
            {/* Centered nav links */}
            <ul className="flex w-full max-w-sm flex-col items-center justify-center gap-3 text-center">
              {LINKS.map((l) => (
                <li key={l.href} className="w-full">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-quicksand w-full rounded-lg px-22 py-5 text-[15px] font-semibold text-[#FFF2Dd] hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Single BOOK NOW on mobile */}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="inline-flex font-quicksand rounded-full bg-white/10 hover:bg-[#FFF2DD] hover:text-[#005931] transition duration-500 px-28 py-5 text-[15px] font-semibold text-[#FFF2DD]"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
