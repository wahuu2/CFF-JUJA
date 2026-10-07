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

      {/* MAP / VISIT */}
      <section className="bg-[#061B3A] px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
              Visit Us
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Come worship with us.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/50">
              Find CFF Juja and plan your visit. We look forward to welcoming
              you.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white">
            <div className="h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=CFF%20Juja%2C%20Kenya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CFF Juja Location"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=CFF+Juja+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              Get Directions →
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}