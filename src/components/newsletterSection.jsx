// Project/app/components/HomeComponents/NewsletterSection.jsx
import React from "react";
import { newsletterBorder } from "../assets/icons";

const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function InnerContent() {
  const [result, setResult] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // Prepare form data (email-only + hidden fields)
    setSubmitting(true);
    setResult("Subscribing…");

    try {
      const form = e.target;
      const formData = new FormData(form);

      // Ensure the Web3Forms key is present
      formData.append("access_key", "5bde4d34-5cc4-4bff-9da4-67ee92d58d51");
      formData.append("subject", "Newsletter signup — Firdaus Awadhi Kitchen");
      formData.append("from_name", "Firdaus Awadhi Kitchen");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult("You're in! Please check your inbox for updates.");
        form.reset();
      } else {
        console.log("Web3Forms Error:", data);
        setResult(data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12 min-w-0">
      <div className="min-w-0">
        <h2 className="font-porsha text-[#005931] text-5xl sm:text-6xl lg:text-6xl leading-tight">
          Sign up for our Newsletter
        </h2>
        <p className="mt-4 font-quicksand text-[#005931] text-[15px] sm:text-[16px]">
          To receive updates and special offers
        </p>
      </div>

      <form
        className="flex flex-col gap-3 sm:gap-4 md:items-start min-w-0"
        onSubmit={onSubmit}
        noValidate
      >
        {/* Email */}
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <input
          id="nl-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={submitting}
          className="
    w-full max-w-full md:max-w-[520px] h-11 md:h-12 rounded-md
    bg-[#005931] text-[#FFF2DD] placeholder-[#FFF2DD]/85
    caret-[#FFF2DD] selection:bg-[#FFF2DD]/20 selection:text-[#FFF2DD]
    px-4 outline-none ring-1 ring-[#FFF2DD]/25 focus:ring-2 focus:ring-[#FFF2DD]/60
    font-quicksand text-sm md:text-[15px]
    disabled:opacity-70 disabled:pointer-events-none appearance-none

    /* ⬇️ Tailwind arbitrary variants for autofill (Chrome/Edge/Safari) */
    [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#005931]
    [&:-webkit-autofill]:[-webkit-text-fill-color:#FFF2DD]
    [&:-webkit-autofill]:caret-[#FFF2DD]
    [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]
    [&:-webkit-autofill:focus]:shadow-[inset_0_0_0_1000px_#005931]
    [&:-webkit-autofill:focus]:[-webkit-text-fill-color:#FFF2DD]
  "
          placeholder="Enter your Email Address"
        />

        {/* Hidden helpers for nicer inbox formatting */}
        <input
          type="hidden"
          name="subject"
          value="Newsletter signup — Firdaus Awadhi Kitchen"
        />
        <input type="hidden" name="from_name" value="Firdaus Awadhi Kitchen" />

        <button
          type="submit"
          disabled={submitting}
          className="
            w-[140px] cursor-pointer h-9 md:h-10 rounded-md
            bg-[#005931] text-[#FFF2DD]
            ring-1 ring-[#FFF2DD]/25 hover:ring-[#FFF2DD]/40
            transition-transform duration-150 active:scale-[.98]
            font-quicksand text-sm
            disabled:opacity-70 disabled:pointer-events-none
          "
        >
          {submitting ? "Submitting…" : "Submit"}
        </button>

        {/* Result message */}
        {result && (
          <span className="font-quicksand text-sm text-[#005931] mt-1">
            {result}
          </span>
        )}
      </form>
    </div>
  );
}

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative isolate px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-20"
    >
      {/* ⬅︎ matches Testimonials cards width + padding-x */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-14">
        <div className="relative rounded-2xl overflow-hidden">
          {/* ===== Mobile/Tablet: keep green frame (no border image) ===== */}
          <div className="block lg:hidden rounded-2xl bg-[#005931] p-2 sm:p-3 md:p-4">
            <div className="rounded-xl bg-[var(--root-bg,#FFF2DD)] p-6 sm:p-8">
              <InnerContent />
            </div>
          </div>

          {/* ===== Desktop lg+: green frame + background border image ===== */}
          <div className="hidden lg:block relative rounded-2xl bg-[#005931] p-2 sm:p-3 md:p-12">
            {/* decorative border as a real image = lazy-loadable */}
            <img
              src={newsletterBorder}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              draggable="false"
              className="pointer-events-none select-none absolute inset-1 w-full h-full object-fill rounded-2xl"
            />
            <div className="relative rounded-xl bg-[var(--root-bg,#FFF2DD)] p-10 xl:p-12">
              <InnerContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
