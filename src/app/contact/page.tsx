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
      {/* FOOTER */}
<footer className="bg-[#061B3A] px-5 pt-16 text-white md:px-8">
  <div className="mx-auto max-w-7xl">

    {/* MAIN FOOTER */}
    <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

      {/* CHURCH INFO */}
      <div className="lg:col-span-1">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white">
            <span className="text-xl font-bold text-[#0B3D91]">
              ✝
            </span>
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.18em]">
              CFF JUJA
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/45">
              Christian Foundation Fellowship
            </p>
          </div>
        </a>

        {/* DESCRIPTION */}
        <p className="mt-6 text-sm leading-7 text-white/55">
          A church family committed to growing in faith, building meaningful
          relationships and serving the community through the love of Jesus
          Christ.
        </p>


        {/* SOCIAL MEDIA */}
        <div className="mt-7 flex items-center gap-3">

          {/* FACEBOOK */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white transition hover:scale-105"
          >
            f
          </a>

          {/* YOUTUBE */}
          <a
            href="#"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-xs font-bold text-white transition hover:scale-105"
          >
            ▶
          </a>

        </div>

      </div>


      {/* ABOUT */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          About
        </h3>

        <div className="mt-5 space-y-3 text-sm text-white/50">

          <a
            href="/about"
            className="block transition hover:text-white"
          >
            Our Church
          </a>

          <a
            href="/about#who we are"
            className="block transition hover:text-white"
          >
            Our History
          </a>

          <a
            href="contact"
            className="block transition hover:text-white"
          >
            Contact Us
          </a>

          <a
            href="privacy"
            className="block transition hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="/Terms"
            className="block transition hover:text-white"
          >
            Terms of Use
          </a>

        </div>
      </div>


      {/* SERVICES */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          Services
        </h3>

        <div className="mt-5 space-y-5 text-sm text-white/50">

          <div>
            <p className="font-medium text-white/80">
              Sunday Service
            </p>

            <p className="mt-1">
              Service times to be confirmed
            </p>
          </div>

          <div>
            <p className="font-medium text-white/80">
              Midweek Services
            </p>

            <p className="mt-1">
              Details to be confirmed
            </p>
          </div>

          <div>
            <p className="font-medium text-white/80">
              Bible Study
            </p>

            <p className="mt-1">
              Details to be confirmed
            </p>
          </div>

        </div>
      </div>


      {/* MINISTRIES */}
      <div>
        <h3 className="text-sm font-semibold text-white">
          Ministries
        </h3>

        <div className="mt-5 space-y-3 text-sm text-white/50">

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Children
          </a>

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Youth
          </a>

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Women
          </a>

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Men
          </a>

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Worship
          </a>

          <a
            href="#ministries"
            className="block transition hover:text-white"
          >
            Community
          </a>

        </div>
      </div>

    </div>


    {/* BOTTOM BAR */}
    <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/30 md:flex-row">

      <p>
        © 2026 CFF Juja. All rights reserved.
      </p>

      <p>
        Website prototype — official information pending confirmation.
      </p>

    </div>

  </div>
</footer>
    </main>
  );
}