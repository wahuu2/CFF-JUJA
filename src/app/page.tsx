"use client";

import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";

const sermons = [
  {
    title: "Walking in Faith",
    category: "Faith",
    date: "Latest Message",
  },
  {
    title: "Growing in Christ",
    category: "Discipleship",
    date: "Bible Teaching",
  },
  {
    title: "A Life of Purpose",
    category: "Christian Living",
    date: "Featured Message",
  },
];

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((current) => (current + 1) % 7);
  }, 6000);

  return () => clearInterval(interval);
}, []);

const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#10243D]">
{/* NAVIGATION */}
<header className="absolute left-0 right-0 top-0 z-50 md:top-7">
  <nav className="mx-auto max-w-7xl px-5 py-5 md:px-8">
    <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#123B63]/95 px-4 py-4 shadow-2xl backdrop-blur-md sm:px-5">

      {/* LOGO */}
      <a href="/" className="flex shrink-0 items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white">
          <span className="text-xl font-bold text-[#123B63]">✝</span>
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
          href="/#departments"
          onClick={() => setIsMenuOpen(false)}
          className="font-medium text-white/80 transition hover:text-white"
        >
          Departments
        </a>

        <a
          href="/#contact"
          onClick={() => setIsMenuOpen(false)}
          className="font-medium text-white/80 transition hover:text-white"
        >
          Contact
        </a>

        <a
          href="/#sermons"
          onClick={() => setIsMenuOpen(false)}
          className="rounded-full bg-[#D62828] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#A61F1F]"
        >
          Sermons
        </a>
      </div>
    </div>
  </nav>
</header>
{/* HERO */}
<section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#123B63] md:min-h-[820px]">

  {/* HERO SLIDESHOW */}
  <div className="absolute inset-0">

    {[
      {
        image:
          "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=90",
        label: "Welcome to CFF Juja",
        title: "A place to",
        highlight: "belong.",
        description:
          "Welcome to Christian Foundation Fellowship, Juja. A place where faith, community and purpose come together.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2200&q=90",
        label: "Children's Ministry",
        title: "Growing young",
        highlight: "hearts.",
        description:
          "Creating a safe and joyful environment where children can learn about God, grow in faith and build friendships.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2200&q=90",
        label: "Youth Ministry",
        title: "Faith for a",
        highlight: "new generation.",
        description:
          "A community where young people can discover their identity, grow in Christ and live with purpose.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=90",
        label: "Women's Ministry",
        title: "Women walking",
        highlight: "together.",
        description:
          "A community of women growing through prayer, fellowship, encouragement and the Word of God.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2200&q=90",
        label: "Men's Ministry",
        title: "Men of faith.",
        highlight: "Men of purpose.",
        description:
          "Encouraging men to grow spiritually, lead with integrity and serve their families and community.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=2200&q=90",
        label: "Worship",
        title: "Come and",
        highlight: "worship.",
        description:
          "A time to lift our hearts, celebrate God's goodness and draw closer to Him together.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2200&q=90",
        label: "Community",
        title: "Life is better",
        highlight: "together.",
        description:
          "Connect with people, build meaningful relationships and become part of the CFF Juja community.",
      },
    ].map((slide, index) => (

      <div
        key={slide.label}
        className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
          index === currentSlide
            ? "translate-y-0 opacity-100"
            : index === (currentSlide - 1 + 7) % 7
              ? "-translate-y-full opacity-0"
              : "translate-y-full opacity-0"
        }`}
      >

        {/* IMAGE */}
        <img
          src={slide.image}
          alt={slide.label}
          className="h-full w-full object-cover object-center"
        />

      </div>

    ))}

  </div>


  {/* SUBTLE IMAGE OVERLAY */}
  <div className="absolute inset-0 bg-black/15" />

  {/* TEXT READABILITY GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

  {/* BOTTOM FADE */}
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />


  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-44 md:px-8 md:pb-28">

    <div className="max-w-3xl">

      {/* DEPARTMENT LABEL */}
      <div className="mb-7 flex items-center gap-3">

        <span className="h-px w-10 bg-[#C62828]" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF5A5A]">
          {
            [
              "Welcome to CFF Juja",
              "Children's Ministry",
              "Youth Ministry",
              "Women's Ministry",
              "Men's Ministry",
              "Worship",
              "Community",
            ][currentSlide]
          }
        </span>

      </div>


      {/* TITLE */}
      <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">

        {
          [
            "A place to",
            "Growing young",
            "Faith for a",
            "Women walking",
            "Men of faith.",
            "Come and",
            "Life is better",
          ][currentSlide]
        }

        <span className="block text-[#FF4B4B]">

          {
            [
              "belong.",
              "hearts.",
              "new generation.",
              "together.",
              "Men of purpose.",
              "worship.",
              "together.",
            ][currentSlide]
          }

        </span>

      </h1>


      {/* DESCRIPTION */}
      <p className="mt-7 max-w-xl text-base leading-8 text-white/90 md:text-lg">

        {
          [
            "Welcome to Christian Foundation Fellowship, Juja. A place where faith, community and purpose come together.",

            "Creating a safe and joyful environment where children can learn about God, grow in faith and build friendships.",

            "A community where young people can discover their identity, grow in Christ and live with purpose.",

            "A community of women growing through prayer, fellowship, encouragement and the Word of God.",

            "Encouraging men to grow spiritually, lead with integrity and serve their families and community.",

            "A time to lift our hearts, celebrate God's goodness and draw closer to Him together.",

            "Connect with people, build meaningful relationships and become part of the CFF Juja community.",
          ][currentSlide]
        }

      </p>


      {/* BUTTONS */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        <a
          href="#visit"
          className="rounded-full bg-[#C62828] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#E04848]"
        >
          Plan Your Visit
        </a>

        <a
          href="#ministries"
          className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
        >
          Explore Ministries
        </a>

      </div>

    </div>


    {/* SLIDE INDICATORS */}
    <div className="mt-12 flex items-center gap-2">

      {Array.from({ length: 7 }).map((_, index) => (

        <span
          key={index}
          className={`h-1 rounded-full transition-all duration-500 ${
            index === currentSlide
              ? "w-10 bg-[#C62828]"
              : "w-2 bg-white/60"
          }`}
        />

      ))}

    </div>

  </div>

</section>

      {/* SERVICE STRIP */}
      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-5">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-3">
          <div className="border-b border-[#E3EAF1] p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
              Sunday
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#10243D]">
              Main Service
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Official schedule to be confirmed
            </p>
          </div>

          <div className="border-b border-[#E3EAF1] p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
              Midweek
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#10243D]">
              Gathering
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Official schedule to be confirmed
            </p>
          </div>

          <div className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
              Connect
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#10243D]">
              Find Your Community
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Discover ministries and fellowship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section
  id="about"
  className="bg-[#F5F8FC] px-5 py-24 md:px-8 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
        About CFF Juja
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#10243D] md:text-5xl">
        A church rooted in faith, purpose and community.
      </h2>

      <p className="mt-6 max-w-2xl leading-8 text-gray-600">
        Discover who we are, what we believe and the vision that guides
        our church community.
      </p>
    </div>


    {/* MAIN ABOUT GRID */}
    <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">

      {/* IMAGE */}
      <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">

        <img
          src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1400&q=85"
          alt="CFF Juja church"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/90 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 right-8">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
            Christian Foundation Fellowship
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            CFF Juja
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
            A community of believers seeking to grow in faith,
            fellowship and purpose.
          </p>

        </div>

      </div>


      {/* INFORMATION */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* THEME OF THE YEAR */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#123B63] p-7 sm:col-span-2">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-[#C62828]/10" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
              Theme of the Year
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Theme of the Year
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
              The official CFF Juja theme for the year will be added here
              after confirmation from the church.
            </p>

          </div>

        </div>


        {/* MISSION */}
        <div className="rounded-[1.5rem] border border-[#D9E2EC] bg-white p-7">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123B63] text-[#C62828]">
            ✦
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
            Our Mission
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#10243D]">
            Our Mission
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            The official mission statement of CFF Juja will be added
            here after confirmation.
          </p>

        </div>


        {/* VISION */}
        <div className="rounded-[1.5rem] border border-[#D9E2EC] bg-white p-7">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C62828]/20 text-[#C62828]">
            ◇
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
            Our Vision
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#10243D]">
            Our Vision
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            The official vision statement of CFF Juja will be added
            here after confirmation.
          </p>

        </div>

      </div>

    </div>


    {/* BOTTOM CTA */}
    <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-[#D9E2EC] bg-white p-7 sm:flex-row sm:items-center md:p-8">

      <div>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
          Learn More
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#10243D]">
          Discover our story and what we believe.
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Learn more about CFF Juja, our history, leadership and
          values.
        </p>

      </div>


      <a
        href="/about"
        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#123B63] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0D2D4D]"
      >
        About Us

        <span className="text-[#C62828]">
          →
        </span>
      </a>

    </div>

  </div>
</section>

{/* PASTORAL BOARD */}
<section className="bg-[#F7F9FC] px-5 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
          Pastoral Board
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#123B63] md:text-5xl">
          Serving the church with faith and purpose.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-[#123B63]/60">
          Meet the pastors who provide spiritual leadership, guidance and
          care for the CFF Juja church family.
        </p>
      </div>

      <a
        href="/about"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#123B63]/15 px-6 py-3 text-sm font-semibold text-[#123B63] transition hover:bg-[#123B63] hover:text-white"
      >
        Meet the Pastoral Board
        <span>→</span>
      </a>
    </div>


    {/* PASTORAL BOARD MEMBERS */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Pastor 1 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90"
            alt="Pastoral Board member"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/45 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C62828]">
            Pastoral Board
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#123B63]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#123B63]/55">
            Official pastoral profile to be confirmed.
          </p>
        </div>
      </div>


      {/* Pastor 2 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90"
            alt="Pastoral Board member"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/45 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C62828]">
            Pastoral Board
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#123B63]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#123B63]/55">
            Official pastoral profile to be confirmed.
          </p>
        </div>
      </div>


      {/* Pastor 3 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90"
            alt="Pastoral Board member"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/45 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C62828]">
            Pastoral Board
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#123B63]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#123B63]/55">
            Official pastoral profile to be confirmed.
          </p>
        </div>
      </div>


      {/* Pastor 4 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90"
            alt="Pastoral Board member"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/45 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C62828]">
            Pastoral Board
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#123B63]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#123B63]/55">
            Official pastoral profile to be confirmed.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* MINISTRIES */}
<section id="ministries" className="bg-[#F5F7FA] px-5 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
          Find Your Place
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#123B63] md:text-5xl">
          Our Ministries
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#123B63]/60">
          Discover a place to connect, grow in faith, serve others and use the
          gifts God has given you.
        </p>
      </div>

      <a
        href="/ministries"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#123B63]/15 px-6 py-3 text-sm font-semibold text-[#123B63] transition hover:bg-[#123B63] hover:text-white"
      >
        View All Ministries
        <span>→</span>
      </a>
    </div>


    {/* MINISTRY CARDS */}
    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

      {/* MUSIC MINISTRY */}
      <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=90"
            alt="Music Ministry"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">
            01
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
              CFF Juja
            </p>

            <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
              Music Ministry
            </h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-sm leading-7 text-[#123B63]/60">
            Using music and worship to create an atmosphere where people can
            praise God, encounter His presence, and grow in their faith.
          </p>

          <a
            href="/ministries/music"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C62828] transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>


      {/* MEDIA MINISTRY */}
      <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=90"
            alt="Media Ministry"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">
            02
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
              CFF Juja
            </p>

            <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
              Media Ministry
            </h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-sm leading-7 text-[#123B63]/60">
            Helping share the message of CFF Juja through photography, video,
            livestreaming, social media, and digital communication.
          </p>

          <a
            href="/ministries/media"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C62828] transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>


      {/* USHERING MINISTRY */}
      <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1400&q=90"
            alt="Ushering Ministry"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">
            03
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
              CFF Juja
            </p>

            <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
              Ushering Ministry
            </h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-sm leading-7 text-[#123B63]/60">
            Serving with warmth and excellence by welcoming people, helping
            them feel comfortable, and supporting church services.
          </p>

          <a
            href="/ministries/ushering"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C62828] transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>


      {/* INTERCESSORY MINISTRY */}
      <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#123B63]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1400&q=90"
            alt="Intercessory Ministry"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white backdrop-blur-md ring-1 ring-white/20">
            04
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
              CFF Juja
            </p>

            <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
              Intercessory Ministry
            </h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-sm leading-7 text-[#123B63]/60">
            A ministry committed to prayer, standing in the gap for
            individuals, families, the church, and the wider community.
          </p>

          <a
            href="/ministries/intercessory"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C62828] transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>

    </div>
  </div>
</section>

     {/* SERMONS */}
<section id="sermons" className="bg-[#F7F9FC] px-5 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">

      {/* LEFT */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
          Sermons & Teachings
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#10243D] md:text-5xl">
          Grow deeper in the Word.
        </h2>

        <p className="mt-6 max-w-md leading-7 text-gray-500">
          Listen to powerful messages, biblical teachings and sermons that
          encourage you to grow in your faith and walk with Christ.
        </p>

        <a
          href="/sermons"
          className="mt-8 inline-flex items-center rounded-full bg-[#123B63] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0E2F4F]"
        >
          Explore Sermons
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* SERMON LIST */}
      <div className="grid gap-4">
        {sermons.map((sermon) => (
          <article
            key={sermon.title}
            className="group flex items-center gap-5 rounded-2xl border border-[#D9E2EC] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* PLAY BUTTON */}
            <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-[#123B63] transition group-hover:bg-[#C62828]">
              <span className="ml-1 text-xl text-white">
                ▶
              </span>
            </div>

            {/* CONTENT */}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
                {sermon.category}
              </p>

              <h3 className="mt-1 truncate text-lg font-semibold text-[#10243D]">
                {sermon.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {sermon.date}
              </p>
            </div>

            {/* ARROW */}
            <span className="hidden text-xl text-[#123B63] transition group-hover:translate-x-1 group-hover:text-[#C62828] sm:block">
              →
            </span>
          </article>
        ))}
      </div>

    </div>
  </div>
</section>

<Gallery />

          {/* FIND US */}
<section id="visit" className="bg-[#123B63] px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C62828]">
        Find Us
      </p>

      <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
        Come worship with us.
      </h2>

      <p className="mt-4 max-w-xl leading-7 text-white/50">
        Find CFF Juja and plan your visit. We look forward to welcoming you.
      </p>
    </div>


    {/* MAP + INFORMATION */}
    <div className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1.6fr_1fr]">

      {/* GOOGLE MAP */}
      <div className="h-[420px] lg:h-[500px]">

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


      {/* LOCATION INFORMATION */}
      <div className="flex flex-col justify-between bg-[#0F3152] p-8 md:p-10">

        <div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C62828]/10 text-2xl text-[#C62828]">
            📍
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#C62828]">
            CFF Juja
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            Visit Us
          </h3>

          <p className="mt-5 leading-7 text-white/55">
            Christian Foundation Fellowship
            <br />
            Juja, Kiambu County
            <br />
            Kenya
          </p>

        </div>


        <div className="mt-10 space-y-6">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Service Times
            </p>

            <p className="mt-2 text-sm text-white/75">
              Official service times to be confirmed
            </p>
          </div>


          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>

            <p className="mt-2 text-sm text-white/75">
              Official contact details to be confirmed
            </p>
          </div>


          <a
            href="https://www.google.com/maps/search/?api=1&query=CFF+Juja+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C62828] px-6 py-4 text-sm font-semibold text-[#123B63] transition hover:bg-[#E04848]"
          >
            Get Directions
            <span>→</span>
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-[#123B63] px-5 pt-16 text-white md:px-8">
  <div className="mx-auto max-w-7xl">

    {/* MAIN FOOTER */}
    <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

      {/* CHURCH INFO */}
      <div className="lg:col-span-1">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white">
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
      href="/ministries/music"
      className="block transition hover:text-[#C62828]"
    >
      Music
    </a>

    <a
      href="/ministries/media"
      className="block transition hover:text-[#C62828]"
    >
      Media
    </a>

    <a
      href="/ministries/ushering"
      className="block transition hover:text-[#C62828]"
    >
      Ushering
    </a>

    <a
      href="/ministries/intercessory"
      className="block transition hover:text-[#C62828]"
    >
      Intercessory
    </a>

    <a
      href="/ministries/hospitality"
      className="block transition hover:text-[#C62828]"
    >
      Hospitality
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
  Designed by{" "}
  <a
    href="https://lilywahu.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-white transition hover:text-[#C62828]"
  >
    Lilahu
  </a>
</p>

    </div>

  </div>
</footer>
    </main>
  );
}