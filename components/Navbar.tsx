"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 md:top-6">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-5 md:px-8">
        <div className="flex items-center justify-between rounded-2xl bg-[#0B3D91] px-4 py-3.5 shadow-2xl sm:px-5">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
              <span className="text-xl font-bold text-[#0B3D91]">
                ✝
              </span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-white">
                CFF
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
                Juja
              </p>
            </div>
          </Link>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden items-center gap-7 lg:flex">

            <Link
              href="/"
              className="relative py-2 text-sm font-semibold text-white transition hover:text-white/75"
            >
              Home

              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#D62828]" />
            </Link>

            <Link
              href="/about"
              className="py-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Discover
            </Link>

            <Link
              href="/ministries"
              className="py-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Ministries
            </Link>

            <Link
              href="/departments"
              className="py-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Departments
            </Link>

            <Link
              href="/contact"
              className="py-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Contact
            </Link>

          </div>


          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="flex items-center gap-3">

            {/* SOCIALS */}
            <div className="hidden items-center gap-2 md:flex">

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


            {/* SERMONS */}
            <Link
              href="/sermons"
              className="hidden rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#B91F1F] md:inline-flex"
            >
              Sermons
            </Link>


            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
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


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        <div
          id="mobile-navigation"
          className={`mt-3 overflow-hidden rounded-2xl bg-[#0B3D91] shadow-2xl transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] translate-y-0 p-5 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 p-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Discover
            </Link>

            <Link
              href="/ministries"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Ministries
            </Link>

            <Link
              href="/departments"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Departments
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/sermons"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#D62828] px-5 py-3.5 text-center font-semibold text-white transition hover:bg-[#B91F1F]"
            >
              Sermons
            </Link>

          </div>

        </div>

      </nav>
    </header>
  );
}