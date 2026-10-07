import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A] px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#0B3D91]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#D62828]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            Contact Us
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            We would love to
            <span className="block text-white/70">hear from you.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            Have a question, need prayer, or want to learn more about CFF
            Juja? Get in touch with us and we will be happy to connect with
            you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* CONTACT DETAILS */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#061B3A] md:text-5xl">
              Connect with CFF Juja.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-[#061B3A]/60">
              Whether you are visiting for the first time, looking for a
              church family, or simply have a question, we are here to help.
            </p>

            <div className="mt-10 space-y-7">
              {/* LOCATION */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-lg text-[#0B3D91]">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-[#061B3A]">Location</h3>
                  <p className="mt-1 text-sm leading-6 text-[#061B3A]/55">
                    Christian Foundation Fellowship
                    <br />
                    Juja, Kiambu County
                    <br />
                    Kenya
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D62828]/10 text-lg text-[#D62828]">
                  ☎
                </div>

                <div>
                  <h3 className="font-semibold text-[#061B3A]">Phone</h3>
                  <p className="mt-1 text-sm text-[#061B3A]/55">
                    Official phone number to be confirmed
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B3D91]/10 text-lg text-[#0B3D91]">
                  ✉
                </div>

                <div>
                  <h3 className="font-semibold text-[#061B3A]">Email</h3>
                  <p className="mt-1 text-sm text-[#061B3A]/55">
                    Official email address to be confirmed
                  </p>
                </div>
              </div>

              {/* SERVICE TIMES */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D62828]/10 text-lg text-[#D62828]">
                  ◷
                </div>

                <div>
                  <h3 className="font-semibold text-[#061B3A]">
                    Service Times
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#061B3A]/55">
                    Official service times
                    <br />
                    to be confirmed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-[2rem] bg-[#F5F7FA] p-7 md:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B3D91]">
                Send A Message
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#061B3A]">
                How can we help?
              </h2>
            </div>

            <form className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#0B3D91]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#0B3D91]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#0B3D91]"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-4 text-sm text-[#061B3A] outline-none transition focus:border-[#0B3D91]"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="visit">Planning a Visit</option>
                  <option value="ministry">Ministry Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-[#061B3A]/10 bg-white px-4 py-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#0B3D91]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#D62828] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-900/10 transition hover:bg-[#B91C1C]"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-[#061B3A]/40">
                Contact form functionality will be connected to the church
                email or admin dashboard.
              </p>
            </form>
          </div>
        </div>
      </section>

{/* =========================================================
    VISIT CFF
========================================================= */}
<section
  id="visit"
  className="bg-[#e7ecf4] px-5 py-24 md:px-8 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-12 max-w-2xl">

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A5A]">
        Find Us
      </p>

      <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#083e74] md:text-5xl">
        Come worship with us.
      </h2>

      <p className="mt-5 max-w-xl text-base leading-8 text-[#083e74]/60">
        Find CFF Juja and plan your visit. We look forward to welcoming
        you into our church family.
      </p>

    </div>


    {/* CONTENT */}
    <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-xl lg:grid-cols-[1.55fr_0.85fr]">

      {/* =====================================================
          MAP
      ====================================================== */}
      <div className="relative h-[420px] lg:h-[540px]">

        <iframe
          src="https://www.google.com/maps?q=CFF%20Juja%2C%20Kenya&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CFF Juja Location"
        />

        {/* MAP LABEL */}
        <div className="absolute left-5 top-5 bg-white px-5 py-3 shadow-lg md:left-7 md:top-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
            CFF Juja
          </p>

          <p className="mt-1 text-sm font-semibold text-[#083e74]">
            Juja, Kiambu County
          </p>
        </div>

      </div>


      {/* =====================================================
          INFORMATION
      ====================================================== */}
      <div className="flex flex-col justify-between bg-[#083e74] p-8 md:p-10 lg:p-12">

        <div>

          {/* LOCATION ICON */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-[#FF5A5A]"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
              />

              <circle
                cx="12"
                cy="9"
                r="2.3"
              />
            </svg>
          </div>


          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A5A]">
            CFF Juja
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Visit Us
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/60">
            Christian Foundation Fellowship
            <br />
            Juja, Kiambu County
            <br />
            Kenya
          </p>

        </div>


        {/* DETAILS */}
        <div className="mt-12">

          <div className="border-t border-white/10 pt-7">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              Service Times
            </p>

            <p className="mt-3 text-sm leading-6 text-white/75">
              Official service times to be confirmed.
            </p>

          </div>


          <div className="mt-7 border-t border-white/10 pt-7">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              Contact
            </p>

            <p className="mt-3 text-sm leading-6 text-white/75">
              Official contact details to be confirmed.
            </p>

          </div>


          {/* BUTTON */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=CFF+Juja+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-[#FF5A5A] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#D62828]"
          >
            Get Directions
            <span>→</span>
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}