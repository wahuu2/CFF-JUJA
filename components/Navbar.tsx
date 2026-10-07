"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 md:top-7">
      <nav className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#123B63]/95 px-4 py-4 shadow-2xl backdrop-blur-md sm:px-5">

          {/* LOGO */}
          <a href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white">
              <span className="text-xl font-bold text-[#123B63]">
                ✝
              </span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-white">
                CFF
              </p>

              <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                Juja
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="/"
              className="relative text-sm font-semibold text-white transition hover:text-red-300"
            >
              Home

              <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#D62828]" />
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              Discover
            </a>

            <a
              href="/ministries"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              Ministries
            </a>

            <a
              href="/departments"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              Departments
            </a>

            <a
              href="/contact"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* SOCIAL ICONS */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white transition hover:scale-105"
              >
                f
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-xs font-bold text-white transition hover:scale-105"
              >
                ▶
              </a>
            </div>

            {/* SERMONS */}
            <a
              href="/sermons"
              className="hidden rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/15 transition hover:bg-[#A61F1F] md:inline-flex"
            >
              Sermons
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-white/30 hover:bg-white/10 lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="text-xl leading-none">
                {isMenuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobile-navigation"
          className={`mt-3 overflow-hidden rounded-2xl border border-white/15 bg-[#123B63] shadow-2xl transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] translate-y-0 p-5 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 border-transparent p-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col gap-5">

            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white transition hover:text-red-300"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white/80 transition hover:text-white"
            >
              Discover
            </a>

            <a
              href="/ministries"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white/80 transition hover:text-white"
            >
              Ministries
            </a>

            <a
              href="/departments"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white/80 transition hover:text-white"
            >
              Departments
            </a>

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white/80 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="/sermons"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-[#D62828] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#A61F1F]"
            >
              Sermons
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}