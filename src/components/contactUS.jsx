// components/ContactSection.jsx
import React from "react";
import { food21 } from "../assets/images";

export default function ContactSection() {
  const [result, setResult] = React.useState("");
    const [submitting, setSubmitting] = React.useState(false);

      const onSubmit = async (event) => {
  event.preventDefault();

  setSubmitting(true);
  try {
    setResult("Sending…");
    const formData = new FormData(event.target);

    formData.append("access_key", "5bde4d34-5cc4-4bff-9da4-67ee92d58d51");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <section
      id="contact"
      className="relative isolate bg-transparent px-4 sm:px-6 pt-22 md:pt-24 lg:pt-30 pb-20"
    >
      <input type="hidden" name="subject" value="New message from Firdaus Contact Form" />
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-14">
        {/* bg image wrapper */}
        <div
          className="relative rounded-2xl overflow-hidden bg-center bg-cover min-h-[420px] md:min_h-[520px] flex items-stretch justify-center lg:justify-end"
          style={{ backgroundImage: `url(${food21})` }}
        >
          {/* Contact subframe — centered by default, right on lg */}
          <div className="w-full sm:max-w-[520px] bg-[#0B5C3B]/95 text-[#FFF2DD] m-4 sm:m-6 md:m-10 rounded-xl ring-1 ring-[#FFF2DD]/10 shadow-2xl"  data-aos="fade-in"  data-aos-duration="800">
            <div className="p-6 sm:p-8 md:p-9">
              <h2 className="font-porscha text-[38px] sm:text-[44px] leading-tight">
                Contact Us
              </h2>

              <form className="contact-form mt-6 grid grid-cols-1 gap-5" onSubmit={onSubmit}>

                <input type="hidden" name="subject" value="New message from Firdaus Contact Form" />
                <input type="hidden" name="from_name" value="Firdaus Awadhi Kitchen" />
                <label htmlFor="cu-name" className="sr-only">Name</label>
                <input
                  id="cu-name" type="text" placeholder="Enter your name" name="name" autoComplete="name"
                  className="w-full h-11 bg-transparent outline-none border-b border-[#FFF2DD]/40 focus:border-[#FFF2DD]/80 placeholder-[#FFF2DD]/85 font-quicksand"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cu-email" className="sr-only">Email</label>
                    <input
                      id="cu-email" type="email" placeholder="Email address" name="email" autoComplete="email"
                      className="w-full h-11 bg-transparent outline-none border-b border-[#FFF2DD]/40 focus:border-[#FFF2DD]/80 placeholder-[#FFF2DD]/85 font-quicksand"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cu-phone" className="sr-only">Phone</label>
                    <input
                      id="cu-phone" type="tel" placeholder="Phone number"  name="phone" inputMode="tel" pattern="^[0-9+() -]{7,}$"
                      className="w-full h-11 bg-transparent outline-none border-b border-[#FFF2DD]/40 focus:border-[#FFF2DD]/80 placeholder-[#FFF2DD]/85 font-quicksand"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cu-message" className="sr-only">Message</label>
                  <textarea
                    id="cu-message" rows={4} placeholder="Message" name="message"
                    className="w-full resize-none bg-transparent outline-none border-b border-[#FFF2DD]/40 focus:border-[#FFF2DD]/80 placeholder-[#FFF2DD]/85 pt-2 pb-3  font-quicksand"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-6 h-10 rounded-md bg-[#005931] text-[#FFF2DD] ring-1 ring-[#FFF2DD]/25 hover:ring-[#FFF2DD]/40 transition active:scale-[.98] text-sm font-quicksand"
                  >
                    { submitting ? "Sending..." : "Submit" }
                  </button>
                </div>
              </form>
              <p className="mt-2 text-sm opacity-80" aria-live="polite">{result}</p>
            </div>
          </div>
          {/* /Contact subframe */}
        </div>
      </div>
    </section>
  );
}
