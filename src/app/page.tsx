"use client";

import { useEffect, useState } from "react";
const ministries = [
  {
    title: "Children",
    description:
      "A safe and joyful environment where children can learn, grow and discover faith.",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Youth",
    description:
      "A space for young people to connect, grow in faith and build meaningful relationships.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Women",
    description:
      "Building women through fellowship, encouragement, prayer and spiritual growth.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Men",
    description:
      "Encouraging men to grow in faith, purpose, leadership and service.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  },
];

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

const events = [
  {
    date: "18",
    month: "OCT",
    title: "Church Gathering",
    description: "Join us for a time of worship, fellowship and the Word.",
  },
  {
    date: "25",
    month: "OCT",
    title: "Youth Fellowship",
    description: "A dedicated gathering for young people to connect and grow.",
  },
  {
    date: "02",
    month: "NOV",
    title: "Special Service",
    description: "A special time of worship, prayer and fellowship.",
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

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#101a2b]">

{/* NAVIGATION */}
<header className="absolute left-0 right-0 top-0 z-50 md:top-7">
  <nav className="mx-auto max-w-7xl px-5 py-5 md:px-8">
    <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#061B3A]/95 px-5 py-4 shadow-2xl backdrop-blur-md">

      {/* LOGO */}
      <a href="#" className="flex shrink-0 items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white">
          <span className="text-xl font-bold text-[#0B3D91]">
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
          className="relative text-sm font-semibold text-white transition hover:text-red-400"
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
          href="#departments"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Departments
        </a>

        <a
          href="#contact"
          className="text-sm font-medium text-white/75 transition hover:text-white"
        >
          Contact
        </a>

      </div>


      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* SOCIAL ICONS */}
<div className="hidden items-center gap-2 md:flex">

  {/* FACEBOOK */}
  <a
    href="#"
    aria-label="Facebook"
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white transition hover:scale-105"
  >
    f
  </a>

  {/* YOUTUBE */}
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
          href="#sermons"
          className="hidden rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#B91C1C] md:inline-flex"
        >
          Sermons
        </a>


        {/* MOBILE MENU */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <span className="text-xl leading-none">
            ☰
          </span>
        </button>

      </div>

    </div>
  </nav>
</header>
{/* HERO */}
<section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#071426] md:min-h-[820px]">

  {/* HERO SLIDESHOW */}
  <div className="absolute inset-0">

    {[
      {
        image:
          "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=85",
        label: "Welcome to CFF Juja",
        title: "A place to",
        highlight: "belong.",
        description:
          "Welcome to Christian Foundation Fellowship, Juja. A place where faith, community and purpose come together.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2200&q=85",
        label: "Children's Ministry",
        title: "Growing young",
        highlight: "hearts.",
        description:
          "Creating a safe and joyful environment where children can learn about God, grow in faith and build friendships.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2200&q=85",
        label: "Youth Ministry",
        title: "Faith for a",
        highlight: "new generation.",
        description:
          "A community where young people can discover their identity, grow in Christ and live with purpose.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=85",
        label: "Women's Ministry",
        title: "Women walking",
        highlight: "together.",
        description:
          "A community of women growing through prayer, fellowship, encouragement and the Word of God.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2200&q=85",
        label: "Men's Ministry",
        title: "Men of faith.",
        highlight: "Men of purpose.",
        description:
          "Encouraging men to grow spiritually, lead with integrity and serve their families and community.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=2200&q=85",
        label: "Worship",
        title: "Come and",
        highlight: "worship.",
        description:
          "A time to lift our hearts, celebrate God's goodness and draw closer to Him together.",
      },

      {
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2200&q=85",
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
          className="h-full w-full object-cover"
        />

      </div>

    ))}

  </div>


  {/* IMAGE OVERLAY */}
  <div className="absolute inset-0 bg-[#071426]/50" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#071426]/55 to-[#071426]/10" />

  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />


  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-44 md:px-8 md:pb-28">

    <div className="max-w-3xl">

      {/* DEPARTMENT LABEL */}
      <div className="mb-7 flex items-center gap-3">

        <span className="h-px w-10 bg-[#d5b66a]" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5b66a]">
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

        <span className="block text-[#d5b66a]">

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
      <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">

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
          className="rounded-full bg-[#d5b66a] px-7 py-4 text-center text-sm font-semibold text-[#071426] transition hover:bg-[#e4cb8b]"
        >
          Plan Your Visit
        </a>

        <a
          href="#ministries"
          className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
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
              ? "w-10 bg-[#d5b66a]"
              : "w-2 bg-white/40"
          }`}
        />

      ))}

    </div>

  </div>

</section>

      {/* SERVICE STRIP */}
      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-5">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-3">
          <div className="border-b border-gray-100 p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7a32]">
              Sunday
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#101a2b]">
              Main Service
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Official schedule to be confirmed
            </p>
          </div>

          <div className="border-b border-gray-100 p-7 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7a32]">
              Midweek
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#101a2b]">
              Gathering
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Official schedule to be confirmed
            </p>
          </div>

          <div className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7a32]">
              Connect
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#101a2b]">
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
  className="bg-[#f8f7f3] px-5 py-24 md:px-8 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b7a32]">
        About CFF Juja
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#101a2b] md:text-5xl">
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 right-8">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d5b66a]">
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
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#071426] p-7 sm:col-span-2">

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-[#d5b66a]/10" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d5b66a]">
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
        <div className="rounded-[1.5rem] border border-gray-200 bg-white p-7">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071426] text-[#d5b66a]">
            ✦
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7a32]">
            Our Mission
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#101a2b]">
            Our Mission
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            The official mission statement of CFF Juja will be added
            here after confirmation.
          </p>

        </div>


        {/* VISION */}
        <div className="rounded-[1.5rem] border border-gray-200 bg-white p-7">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d5b66a]/20 text-[#9b7a32]">
            ◇
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7a32]">
            Our Vision
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#101a2b]">
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
    <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-gray-200 bg-white p-7 sm:flex-row sm:items-center md:p-8">

      <div>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b7a32]">
          Learn More
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#101a2b]">
          Discover our story and what we believe.
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Learn more about CFF Juja, our history, leadership and
          values.
        </p>

      </div>


      <a
        href="/about"
        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#071426] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#10243e]"
      >
        About Us

        <span className="text-[#d5b66a]">
          →
        </span>
      </a>

    </div>

  </div>
</section>

      {/* MINISTRIES */}
      <section id="ministries" className="bg-[#071426] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b66a]">
                Find Your Place
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
                Ministries
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55">
              There is a place for everyone to connect, serve, grow and build
              meaningful relationships.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((ministry) => (
              <article
                key={ministry.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {ministry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {ministry.description}
                  </p>

                  <a
                    href="#"
                    className="mt-5 inline-block text-sm font-semibold text-[#d5b66a]"
                  >
                    Discover →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERMONS */}
      <section id="sermons" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b7a32]">
                Watch & Listen
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#101a2b] md:text-5xl">
                Messages for your journey.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-gray-500">
                Explore sermons, Bible teaching and messages designed to help
                you grow in faith.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex rounded-full bg-[#071426] px-6 py-3 text-sm font-semibold text-white"
              >
                View All Sermons
              </a>
            </div>

            <div className="grid gap-4">
              {sermons.map((sermon, index) => (
                <article
                  key={sermon.title}
                  className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-[#071426]">
                    <span className="text-2xl text-[#d5b66a]">▶</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7a32]">
                      {sermon.category}
                    </p>

                    <h3 className="mt-1 truncate text-lg font-semibold text-[#101a2b]">
                      {sermon.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {sermon.date}
                    </p>
                  </div>

                  <span className="hidden text-xl text-gray-400 transition group-hover:text-[#9b7a32] sm:block">
                    →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-[#eeece5] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b7a32]">
                What's Happening
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[#101a2b] md:text-5xl">
                Upcoming events
              </h2>
            </div>

            <a
              href="#"
              className="text-sm font-semibold text-[#071426]"
            >
              View all events →
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-4xl font-semibold text-[#071426]">
                      {event.date}
                    </p>

                    <p className="mt-1 text-xs font-bold tracking-[0.2em] text-[#9b7a32]">
                      {event.month}
                    </p>
                  </div>

                  <span className="text-2xl text-[#d5b66a]">✦</span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-[#101a2b]">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {event.description}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block text-sm font-semibold text-[#071426]"
                >
                  Event details →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
<section className="px-5 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b66a]">
          Our Leadership
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#071426] md:text-5xl">
          Servants leading with faith and purpose.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-[#071426]/60">
          Meet some of the people who serve and lead the CFF Juja church
          family.
        </p>
      </div>

      <a
        href="/about"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#071426]/15 px-6 py-3 text-sm font-semibold text-[#071426] transition hover:bg-[#071426] hover:text-white"
      >
        Meet Our Leadership
        <span>→</span>
      </a>
    </div>

    {/* PASTORS */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Pastor 1 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-[#f4f1e9]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
            alt="Pastor placeholder"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5b66a]">
            Senior Pastor
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#071426]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#071426]/55">
            Official leadership profile to be confirmed.
          </p>
        </div>
      </div>

      {/* Pastor 2 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-[#f4f1e9]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
            alt="Pastor placeholder"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5b66a]">
            Pastor
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#071426]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#071426]/55">
            Official leadership profile to be confirmed.
          </p>
        </div>
      </div>

      {/* Pastor 3 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-[#f4f1e9]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
            alt="Pastor placeholder"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5b66a]">
            Pastor
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#071426]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#071426]/55">
            Official leadership profile to be confirmed.
          </p>
        </div>
      </div>

      {/* Pastor 4 */}
      <div className="group overflow-hidden rounded-[1.75rem] bg-[#f4f1e9]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85"
            alt="Pastor placeholder"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5b66a]">
            Pastor
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[#071426]">
            Pastor Name
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#071426]/55">
            Official leadership profile to be confirmed.
          </p>
        </div>
      </div>

    </div>

    {/* VIEW MORE */}
    <div className="mt-10 text-center">
      <a
        href="/about"
        className="inline-flex items-center gap-3 rounded-full bg-[#071426] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#102844]"
      >
        View All Pastors
        <span>→</span>
      </a>
    </div>

  </div>
</section>

      {/* GIVE */}
      <section id="give" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#d5b66a] px-7 py-16 md:px-14 md:py-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />

            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071426]/60">
                Give
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#071426] md:text-5xl">
                Generosity makes a difference.
              </h2>

              <p className="mt-5 leading-8 text-[#071426]/65">
                Official giving methods and payment information will be added
                here after confirmation from the church.
              </p>

              <button className="mt-8 rounded-full bg-[#071426] px-7 py-4 text-sm font-semibold text-white">
                Giving Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIND US */}
<section id="visit" className="bg-[#071426] px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b66a]">
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
      <div className="flex flex-col justify-between bg-[#0b1b30] p-8 md:p-10">

        <div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d5b66a]/10 text-2xl text-[#d5b66a]">
            📍
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#d5b66a]">
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
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d5b66a] px-6 py-4 text-sm font-semibold text-[#071426] transition hover:bg-[#e4cb8b]"
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
            href="#"
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