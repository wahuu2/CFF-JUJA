import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061B3A] text-white">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] lg:py-20">

          {/* =====================================================
              CHURCH INFO
          ====================================================== */}
          <div className="max-w-md">

            {/* LOGO / NAME */}
            <Link href="/" className="inline-flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white">
                <span className="text-xl font-bold text-[#083e74]">
                  ✝
                </span>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  CFF Juja
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                  Christian Foundation Fellowship
                </p>
              </div>

            </Link>


            {/* DESCRIPTION */}
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              A church family growing in Christ, building meaningful
              relationships and serving God and our community through
              the love of Jesus Christ.
            </p>


            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-3">

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


          {/* =====================================================
              EXPLORE
          ====================================================== */}
          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
              Explore
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <Link
                href="/"
                className="block transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block transition hover:text-white"
              >
                About CFF
              </Link>

              <Link
                href="/sermons"
                className="block transition hover:text-white"
              >
                Sermons
              </Link>

              <Link
                href="/events"
                className="block transition hover:text-white"
              >
                Events
              </Link>

              <Link
                href="/ministries"
                className="block transition hover:text-white"
              >
                Ministries
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* =====================================================
              MINISTRIES
          ====================================================== */}
          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
              Ministries
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <Link
                href="/ministries/music"
                className="block transition hover:text-white"
              >
                Music
              </Link>

              <Link
                href="/ministries/media"
                className="block transition hover:text-white"
              >
                Media
              </Link>

              <Link
                href="/ministries/ushering"
                className="block transition hover:text-white"
              >
                Ushering
              </Link>

              <Link
                href="/ministries/intercessory"
                className="block transition hover:text-white"
              >
                Intercessory
              </Link>

              <Link
                href="/ministries/hospitality"
                className="block transition hover:text-white"
              >
                Hospitality
              </Link>

              <Link
                href="/ministries/evangelism"
                className="block transition hover:text-white"
              >
                Evangelism & Missions
              </Link>

            </div>

          </div>


          {/* =====================================================
              VISIT
          ====================================================== */}
          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
              Visit Us
            </p>

            <div className="mt-6">

              <p className="text-sm leading-7 text-white/60">
                Christian Foundation Fellowship
                <br />
                Juja, Kiambu County
                <br />
                Kenya
              </p>


              <Link
                href="/#visit"
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-[#FF5A5A]"
              >
                Find us on the map
                <span className="text-[#FF5A5A]">→</span>
              </Link>

            </div>

          </div>

        </div>


        {/* =====================================================
            FOOTER DIVIDER
        ====================================================== */}
        <div className="border-t border-white/10" />


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="flex flex-col justify-between gap-4 py-7 text-[11px] text-white/35 sm:flex-row sm:items-center">

          <p>
            © 2026 CFF Juja. All rights reserved.
          </p>


          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <p>
              Designed by{" "}
              <a
                href="https://lilywahu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/70 transition hover:text-[#FF5A5A]"
              >
                Lilahu
              </a>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}