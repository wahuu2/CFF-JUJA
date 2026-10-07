import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#123B63] px-5 pt-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* CHURCH INFO */}
          <div className="lg:col-span-1">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white">
                <span className="text-xl font-bold text-[#123B63]">
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
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              A church family committed to growing in faith, building
              meaningful relationships and serving the community through
              the love of Jesus Christ.
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

              <Link
                href="/about"
                className="block transition hover:text-white"
              >
                Our Church
              </Link>

              <Link
                href="/about#who-we-are"
                className="block transition hover:text-white"
              >
                Our History
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/privacy"
                className="block transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block transition hover:text-white"
              >
                Terms of Use
              </Link>

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

              <Link
                href="/ministries/music"
                className="block transition hover:text-[#D62828]"
              >
                Music
              </Link>

              <Link
                href="/ministries/media"
                className="block transition hover:text-[#D62828]"
              >
                Media
              </Link>

              <Link
                href="/ministries/ushering"
                className="block transition hover:text-[#D62828]"
              >
                Ushering
              </Link>

              <Link
                href="/ministries/intercessory"
                className="block transition hover:text-[#D62828]"
              >
                Intercessory
              </Link>

              <Link
                href="/ministries/hospitality"
                className="block transition hover:text-[#D62828]"
              >
                Hospitality
              </Link>

              <Link
                href="/ministries/evangelism"
                className="block transition hover:text-[#D62828]"
              >
                Evangelism & Missions
              </Link>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/30 sm:flex-row">

          <p>
            © 2026 CFF Juja. All rights reserved.
          </p>

          <p>
            Designed by{" "}
            <a
              href="https://lilywahu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition hover:text-[#D62828]"
            >
              Lilahu
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}