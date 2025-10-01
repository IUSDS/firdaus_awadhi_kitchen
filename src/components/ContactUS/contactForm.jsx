// app/components/sections/ContactFormSection.jsx
import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const headingClass =
    "font-porscha text-[#FFF2DD] text-[44px] leading-[1.06] sm:text-[56px] lg:text-[72px] lg:leading-[1.04]";
  const labelClass = "sr-only";
  const inputBase =
    "w-full rounded-md border border-[#FFF2DD]/10 bg-white/5 px-4 py-5 ";
  ("text-[#FFF2DD] placeholder-[#FFF2DD]/80 outline-none ");
  ("focus-visible:ring-2 focus-visible:ring-[#FFF2DD]/40 focus-visible:border-transparent ");
  ("transition");

  const onSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    try {
      setResult("Sending…");
      const formData = new FormData(event.target);

      formData.append("access_key", "5bde4d34-5cc4-4bff-9da4-67ee92d58d51");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setResult("Form submitted successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed");
      }
    } catch (e) {
      console.error(e);
      setResult("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#005930] text-[#FFF2DD]">
      {/* invisible helpers for cleaner emails – no styling impact */}
      <input
        type="hidden"
        name="subject"
        value="New message from Firdaus Contact Form"
      />

      <input type="hidden" name="from_name" value="Firdaus Awadhi Kitchen" />
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 py-12 sm:py-16">
        {/* Two equal parts with padding like ContactBanner content spacing */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          {/* LEFT: Contact info */}
          <div className="col-span-12 lg:col-span-6">
            <div className="p-2 sm:p-3 md:p-4 lg:p-5">
              <h2 className={headingClass} data-aos="fade-right" data-aos-duration="800">Get in Touch</h2>

              <div className="mt-6 space-y-2 font-quicksand text-[15px] sm:text-[16px] leading-7 opacity-95" data-aos="fade-right" data-aos-duration="800">
                <p>+91 - 12345 67890</p>
                <p>firdausawadhikitchen@gmail.com</p>
                <p>Working Hours: 12:30 AM–10:30 PM</p>
              </div>

              <h3 className={`${headingClass} mt-10`} data-aos="fade-right" data-aos-duration="800">Address</h3>
              <div className="mt-4 space-y-1 font-quicksand text-[15px] sm:text-[16px] leading-7 opacity-95" data-aos="fade-right" data-aos-duration="800">
                <p>C-10, Kisan Bazaar,</p>
                <p>Lucknow, Uttar Pradesh</p>
                <p>226010</p>
              </div>

              <h3 className={`${headingClass} mt-10`} data-aos="fade-right" data-aos-duration="800">Follow Us</h3>
              <div className="mt-4 flex items-center gap-3" data-aos="fade-right" data-aos-duration="800">
                {/* Social icons inside #FFF2DD circle with #005930 icon color */}
                <SocialCircle href="https://www.facebook.com/firdausawadhkitchen/" label="Facebook">
                  {/* Minimal FB mark */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.6l.4-3H14V9z" />
                  </svg>
                </SocialCircle>
                <SocialCircle href="https://www.instagram.com/firdausawadhikitchen/" label="Instagram">
                  {/* Minimal IG mark */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zm5.25-3.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
                  </svg>
                </SocialCircle>
                <SocialCircle href="https://www.linkedin.com/company/firdaus-awadhi-kitchen" label="LinkedIn">
                  {/* Minimal IN mark */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.1 0-3.5 1.2-3.5 3.4V21h4v-6.6c0-1.1.7-1.8 1.7-1.8s1.8.7 1.8 1.8V21h4v-7.4C22.5 10.5 20.6 9 18.5 9c-1.4 0-2.6.7-3.2 1.7V9h-0.8z" />
                  </svg>
                </SocialCircle>
              </div>
            </div>
          </div>

          {/* RIGHT: Request form */}
          <div className="col-span-12 lg:col-span-6">
            <div className="p-2 sm:p-3 md:p-4 lg:p-5">
              <h2 className={headingClass}>Request Form</h2>

              <form className="contact-form mt-6 space-y-5" onSubmit={onSubmit}>
                {/* Full width name */}
                {/* 50/50 row: first name + last name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first_name" className={labelClass}>
                      First name
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      className={inputBase}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className={labelClass}>
                      Last name
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      className={inputBase}
                      required
                    />
                  </div>
                </div>

                {/* 50/50 row: mobile + email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="mobile" className={labelClass}>
                      Mobile number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="tel"
                      placeholder="Mobile number"
                      className={inputBase}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email Address"
                      className={inputBase}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className={inputBase}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message..."
                    className={`${inputBase} resize-none`}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#FFF2DD] px-6 py-2.5 font-quicksand text-[16px] text-[#005930] shadow-sm transition hover:bg-[#FFF2DD]/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#FFF2DD]/40"
                  >
                    {submitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
              <p className="mt-2 text-sm opacity-80" aria-live="polite">
                {result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small helper: circular icon button with brand colors */
function SocialCircle({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF2DD] text-[#005930] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF2DD]/40"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
