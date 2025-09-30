// components/Footer.jsx
import React from "react";
import PropTypes from "prop-types";
import { sectionStrip, LogoW } from "../assets/icons";

export default function Footer({
  logo = LogoW,
  logoAlt = "Firdaus — Awadhi Kitchen",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Chef", href: "/chef" },
    { label: "Events", href: "/event" },
    { label: "Workshops", href: "/workshop" },
    { label: "Contact", href: "/contact" },
    { label: "Sustainability", href: "/sustainability" },
  ],
  socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/firdausawadhikitchen/" },
    { label: "Facebook", href: "https://www.facebook.com/firdausawadhkitchen/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/firdaus-awadhi-kitchen" },
  ],
  email = "info@firdaus.com",
  phones = ["+91-7311109092", "+91-7311109091"],
  addressLines = ["C-10 Kisan Bazar,", "Lucknow"],
  madeByText = "IUS Digital Solutions",
  madeByHref = "#",
  strip = sectionStrip,
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#005930] text-[#FFF2DD]">
      {/* Decorative strip (full-width) */}
      <div className="relative h-8 md:h-10">
        {strip && (
          <img
            src={strip}
            alt="Decorative strip"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
          />
        )}
      </div>

      {/* Content */}
      <nav aria-label="Footer" className="mx-auto max-w-7xl px-6 pb-10 pt-10 md:pb-12 md:pt-12">
        <div
          className="
            grid grid-cols-1 items-start justify-items-center text-center
            gap-y-10 gap-x-8
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* 1) Logo / Brand */}
          <div className="w-full md:col-span-full lg:col-span-1">
            {logo && (
              <img
                src={logo}
                alt={logoAlt}
                className="mx-auto h-12 w-auto md:h-14"
                loading="lazy"
              />
            )}
          </div>

          {/* 2) Navigation */}
          <Section title="Navigation" links={navLinks} />

          {/* 3) Contact Us */}
          <div className="w-full">
            <h3 className="text-lg font-porscha">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="opacity-80 font-quicksand">Email</span>
                <div>
                  <a
                    className="underline-offset-4 font-quicksand hover:underline focus:outline-none focus:ring-2 focus:ring-white/40"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </div>
              </li>
              {phones?.length > 0 && (
                <li className="mt-3">
                  <span className="opacity-80 font-quicksand">Call</span>
                  <div className="mt-1 space-y-1">
                    {phones.map((p) => (
                      <a
                        key={p}
                        className="block font-quicksand underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-white/40"
                        href={`tel:${p.replace(/\s+/g, "")}`}
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </div>

          {/* 4) Location */}
          <div className="w-full">
            <h3 className="text-lg font-porscha">Location</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="opacity-80 font-quicksand">Address</span>
                <div className="mt-1 font-quicksand leading-relaxed">
                  {addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* 5) Social */}
          <Section title="Follow us on" links={socialLinks} external />
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t font-quicksand border-white/15 pt-6 text-center text-xs md:text-sm">
          <p className="opacity-90">
            © {year} All Rights Reserved. Website and Marketing by{" "}
            <a
              href={madeByHref}
              className="font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-white/40"
              {...(isExternal(madeByHref) && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {madeByText}
            </a>
          </p>
        </div>
      </nav>
    </footer>
  );
}

function Section({ title, links, external = false }) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-porscha">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="underline-offset-4 font-quicksand hover:underline "
              {...((external || isExternal(item.href)) && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              aria-label={item.ariaLabel || item.label}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string,
    })
  ).isRequired,
  external: PropTypes.bool,
};

Footer.propTypes = {
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  navLinks: Section.propTypes.links,
  socialLinks: Section.propTypes.links,
  email: PropTypes.string,
  phones: PropTypes.arrayOf(PropTypes.string),
  addressLines: PropTypes.arrayOf(PropTypes.string),
  madeByText: PropTypes.string,
  madeByHref: PropTypes.string,
  strip: PropTypes.string,
};

function isExternal(href = "") {
  try {
    const u = new URL(href, window.location.origin);
    return u.origin !== window.location.origin;
  } catch {
    // If invalid URL or relative path, treat as internal.
    return false;
  }
}
