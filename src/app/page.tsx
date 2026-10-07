"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Gallery from "@/components/Gallery";


const heroSlides = [
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
label: "Daughters of Zion",
title: "Women walking",
highlight: "together.",
description:
"A community of women growing through prayer, fellowship, encouragement and the Word of God.",
},
{
image:
"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2200&q=90",
label: "Kingdom Men",
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
];

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
const eventDate = new Date("2026-10-31T10:00:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const updateCountdown = () => {
    const difference = eventDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      return;
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    });
  };

  updateCountdown();

  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);
useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((current) => (current + 1) % heroSlides.length);
}, 6000);


return () => clearInterval(interval);

}, []);

const slide = heroSlides[currentSlide];

return ( 
<main className="min-h-screen bg-[#F5F8FC] text-[#10243D]">

 {/* =========================================================
    HERO
========================================================= */}
<section className="relative min-h-[720px] overflow-hidden bg-[#061B3A] md:min-h-[820px]">

  {/* =========================================================
      BACKGROUND SLIDES
  ========================================================== */}
  <div className="absolute inset-0">
    {heroSlides.map((item, index) => (
      <div
        key={item.label}
        className={`absolute inset-0 transition-opacity duration-[1500ms] ${
          index === currentSlide
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <img
          src={item.image}
          alt={item.label}
          className="h-full w-full object-cover"
        />
      </div>
    ))}
  </div>


  {/* =========================================================
      BLUE OVERLAY
  ========================================================== */}
  <div className="absolute inset-0 bg-[#061B3A]/55" />

  {/* =========================================================
      BLUE LEFT GRADIENT
  ========================================================== */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#0B3D91]/55 to-transparent" />

  {/* =========================================================
      BOTTOM GRADIENT
  ========================================================== */}
  <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#061B3A]/90 via-[#061B3A]/40 to-transparent" />

  {/* =========================================================
      SUBTLE BLUE GLOW
  ========================================================== */}
  <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#0B3D91]/20 blur-3xl" />


  {/* =========================================================
      RED ACCENT
  ========================================================== */}
  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />


  {/* =========================================================
      HERO CONTENT
  ========================================================== */}
  <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-20 pt-40 md:min-h-[820px] md:px-8 md:pb-28">

    <div className="max-w-3xl">

      {/* LABEL */}
      <div className="mb-6 flex items-center gap-3">

        <span className="h-[2px] w-12 rounded-full bg-[#D62828]" />

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
          {slide.label}
        </span>

      </div>


      {/* MAIN MESSAGE */}
      <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[82px]">

        {slide.title}

        <span className="block text-[#D62828]">
          {slide.highlight}
        </span>

      </h1>


      {/* DESCRIPTION */}
      <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
        {slide.description}
      </p>


      {/* ACTIONS */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        {/* PRIMARY BUTTON */}
        <Link
          href="#welcome"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#061B3A]/30 transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91F1F]"
        >
          Welcome to CFF
          <span>→</span>
        </Link>


        {/* SECONDARY BUTTON */}
        <Link
          href="/sermons"
          className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-[#0B3D91]/40 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-[#0B3D91]/65"
        >
          Watch Sermons
          <span>→</span>
        </Link>

      </div>


      {/* SLIDE INDICATORS */}
      <div className="mt-10 flex items-center gap-2">

        {heroSlides.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-[#D62828]"
                : "w-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}

      </div>

    </div>

  </div>

</section>


  {/* =========================================================
      SERVICE STRIP
  ========================================================== */}
  <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-5">
    <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-2xl md:grid-cols-3">

      <div className="border-b border-[#E3EAF1] p-7 md:border-b-0 md:border-r">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
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
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
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
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
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


 {/* =========================================================
    WELCOME TO CFF
========================================================= */}
<section
  id="welcome"
  className="bg-white px-5 py-24 md:px-8 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

      {/* LEFT CONTENT */}
      <div>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
          Welcome to CFF Juja
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#0B3D91] md:text-5xl lg:text-6xl">
          A church family where faith, community and purpose come together.
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#10243D]/70 md:text-lg">
          Christian Foundation Fellowship Juja is a community of
          believers growing together in Christ, building meaningful
          relationships and discovering their place to serve.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#10243D]/70">
          Whether you are visiting for the first time, looking for a
          church family, or seeking a place to grow and serve, you are
          welcome at CFF Juja.
        </p>


        {/* BUTTONS */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

          {/* PRIMARY */}
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B3D91] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0B3D91]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#061B3A]"
          >
            Discover CFF
            <span className="text-[#D62828]">→</span>
          </Link>

          {/* SECONDARY */}
          <Link
            href="#visit"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0B3D91]/20 bg-white px-7 py-4 text-sm font-semibold text-[#0B3D91] transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3D91] hover:bg-[#0B3D91] hover:text-white"
          >
            Plan Your Visit
          </Link>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="relative">

        {/* IMAGE */}
        <div className="relative h-[480px] overflow-hidden rounded-[2rem] shadow-xl md:h-[560px]">

          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1400&q=90"
            alt="Church worship"
            className="h-full w-full object-cover"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#0B3D91]/20" />

          {/* BOTTOM GRADIENT */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B3D91]/95 via-[#0B3D91]/55 to-transparent" />

          {/* RED ACCENT */}
          <div className="absolute bottom-0 left-0 h-1.5 w-24 bg-[#D62828]" />


          {/* IMAGE TEXT */}
          <div className="absolute bottom-8 left-8 right-8">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
              CFF Juja
            </p>

            <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
              Growing together in Christ.
            </h3>

          </div>

        </div>


        {/* FLOATING SCRIPTURE CARD */}
        <div className="absolute -bottom-8 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-[#0B3D91] p-7 shadow-2xl md:left-10 md:right-10">

          <div className="flex gap-4">

            {/* RED ACCENT */}
            <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-[#D62828]" />

            <div>

              <p className="text-base font-medium leading-7 text-white md:text-lg">
                "Come, let us go up to the house of the Lord."
              </p>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
                Isaiah 2:3
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* QUICK INFORMATION */}
    <div className="mt-24 grid overflow-hidden rounded-[1.75rem] border border-[#D9E2EC] bg-[#F5F8FC] md:grid-cols-3">

      {/* SUNDAY */}
      <div className="border-b border-[#D9E2EC] p-7 md:border-b-0 md:border-r md:p-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Every Sunday
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#061B3A]">
          Sunday Worship
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#10243D]/65">
          Join us as we gather together to worship, hear the Word
          and fellowship as a church family.
        </p>

      </div>


      {/* LOCATION */}
      <div className="border-b border-[#D9E2EC] p-7 md:border-b-0 md:border-r md:p-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Location
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#061B3A]">
          CFF Juja
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#10243D]/65">
          Juja, Kiambu County, Kenya.
        </p>

      </div>


      {/* COMMUNITY */}
      <div className="p-7 md:p-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Community
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#061B3A]">
          Find Your Place
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#10243D]/65">
          Connect through our ministries, departments and
          fellowship groups.
        </p>

        <Link
          href="/departments"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B3D91] transition hover:text-[#D62828]"
        >
          Explore Departments
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </div>

  </div>
</section>
{/* =========================================================
    FEATURED EVENT
========================================================= */}
<section className="bg-[#F5F8FC] px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">

    <div className="overflow-hidden rounded-[2rem] bg-[#0B3D91] shadow-2xl">

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

        {/* EVENT IMAGE */}
        <div className="relative min-h-[420px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=90"
            alt="CFF Juja church event"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/20 via-[#0B3D91]/20 to-[#061B3A]/85" />

          <div className="absolute left-7 top-7">
            <span className="rounded-full bg-[#D62828] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              Upcoming Event
            </span>
          </div>

        </div>


        {/* EVENT CONTENT */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Mark Your Calendar
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
            CFF Juja Church Event
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
            Join us for a special time of worship, fellowship,
            teaching and community.
          </p>


          {/* DATE */}
          <div className="mt-7 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D62828]">
              <span className="text-lg">◷</span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Date
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                October 31, 2026
              </p>
            </div>

          </div>


          {/* TIME */}
          <div className="mt-5 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D62828]">
              <span className="text-lg">◷</span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Time
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                10:00 AM
              </p>
            </div>

          </div>


          {/* COUNTDOWN */}
          <div className="mt-9 grid grid-cols-4 gap-2 sm:gap-3">

            <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
              <p className="text-2xl font-semibold text-white">
                {timeLeft.days}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Days
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
              <p className="text-2xl font-semibold text-white">
                {String(timeLeft.hours).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Hours
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
              <p className="text-2xl font-semibold text-white">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Minutes
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
              <p className="text-2xl font-semibold text-white">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Seconds
              </p>
            </div>

          </div>


          {/* BUTTON */}
          <Link
            href="/events"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#D62828] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#061B3A]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91F1F]"
          >
            View Event Details
            <span>→</span>
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>


{/* =========================================================
    EVENTS & SERMONS
========================================================= */}
<section className="bg-white px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">

    <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

      {/* HEADING */}
      <div>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
          Stay Connected
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#0B3D91] md:text-5xl lg:text-6xl">
          Events, sermons and moments that bring us together.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#10243D]/65 md:text-lg">
          Stay connected with what is happening at CFF Juja.
          Discover upcoming events, listen to biblical teaching
          and grow together as a church family.
        </p>

      </div>


      {/* BUTTON */}
      <Link
        href="/events"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#0B3D91]/20 px-6 py-3.5 text-sm font-semibold text-[#0B3D91] transition duration-300 hover:bg-[#0B3D91] hover:text-white"
      >
        View All Events
        <span>→</span>
      </Link>

    </div>


    {/* FEATURED CONTENT */}
    <div className="mt-14 grid gap-6 lg:grid-cols-2">

      {/* EVENTS */}
      <Link
        href="/events"
        className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#061B3A]"
      >

        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=90"
          alt="CFF Juja church community event"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#0B3D91]/45 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
            Upcoming Events
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            There is always something happening.
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
            From church services and fellowship gatherings to
            special events, find opportunities to connect and
            grow together.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3">
            Explore Events
            <span className="text-[#D62828]">→</span>
          </span>

        </div>

      </Link>


      {/* SERMONS */}
      <Link
        href="/sermons"
        className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#0B3D91]"
      >

        <img
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=90"
          alt="Bible and Christian teaching"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#0B3D91]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
            Sermons & Teaching
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Grow deeper in the Word.
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
            Listen to messages that encourage you to know God,
            understand His Word and live out your faith.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3">
            Watch Sermons
            <span className="text-[#D62828]">→</span>
          </span>

        </div>

      </Link>

    </div>

  </div>
</section>


{/* =========================================================
    AUDIO SERMONS
========================================================= */}
<section className="bg-[#F5F8FC] px-5 py-24 md:px-8 md:py-28">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
          Listen & Grow
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0B3D91] md:text-5xl">
          Audio Sermons
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#10243D]/65">
          Listen to messages from CFF Juja wherever you are.
          Be encouraged, challenged and strengthened through
          God's Word.
        </p>

      </div>

      <Link
        href="/sermons"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#0B3D91]/20 px-6 py-3.5 text-sm font-semibold text-[#0B3D91] transition duration-300 hover:bg-[#0B3D91] hover:text-white"
      >
        Browse All Sermons
        <span>→</span>
      </Link>

    </div>


    {/* FEATURED AUDIO */}
    <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#0B3D91] shadow-xl">

      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

        {/* IMAGE */}
        <div className="relative min-h-[360px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=90"
            alt="Bible and sermon teaching"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#061B3A]/60" />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D62828] text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-[#B91F1F]">
              <span className="ml-1 text-2xl">
                ▶
              </span>
            </div>

          </div>

        </div>


        {/* AUDIO INFORMATION */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            Featured Message
          </p>

          <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            The Greater Sacrifice
          </h3>

          <p className="mt-3 text-sm text-white/45">
            CFF Juja • Sunday Service
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            Discover the meaning of sacrifice throughout Scripture
            and how Jesus Christ became the greater and final
            sacrifice for humanity.
          </p>


          {/* AUDIO PLAYER */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">

            <div className="flex items-center gap-4">

              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D62828] text-white transition hover:bg-[#B91F1F]"
                aria-label="Play sermon"
              >
                <span className="ml-0.5">
                  ▶
                </span>
              </button>

              <div className="flex-1">

                <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[35%] rounded-full bg-[#D62828]" />
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-white/35">
                  <span>00:00</span>
                  <span>--:--</span>
                </div>

              </div>

            </div>

          </div>


          {/* BUTTON */}
          <Link
            href="/sermons"
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0B3D91] transition hover:bg-[#F5F8FC]"
          >
            View Sermon Details
            <span className="text-[#D62828]">
              →
            </span>
          </Link>

        </div>

      </div>

    </div>


    {/* SMALL SERMON LIST */}
    <div className="mt-7 grid gap-4 md:grid-cols-3">

      {/* SERMON 1 */}
      <article className="group rounded-2xl border border-[#D9E2EC] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-white transition group-hover:bg-[#D62828]">
            ▶
          </div>

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D62828]">
              Faith
            </p>

            <h3 className="mt-1 truncate text-base font-semibold text-[#061B3A]">
              Walking in Faith
            </h3>

            <p className="mt-1 text-xs text-[#10243D]/45">
              Sunday Service
            </p>

          </div>

        </div>

      </article>


      {/* SERMON 2 */}
      <article className="group rounded-2xl border border-[#D9E2EC] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-white transition group-hover:bg-[#D62828]">
            ▶
          </div>

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D62828]">
              Discipleship
            </p>

            <h3 className="mt-1 truncate text-base font-semibold text-[#061B3A]">
              Growing in Christ
            </h3>

            <p className="mt-1 text-xs text-[#10243D]/45">
              Bible Teaching
            </p>

          </div>

        </div>

      </article>


      {/* SERMON 3 */}
      <article className="group rounded-2xl border border-[#D9E2EC] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B3D91] text-white transition group-hover:bg-[#D62828]">
            ▶
          </div>

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D62828]">
              Christian Living
            </p>

            <h3 className="mt-1 truncate text-base font-semibold text-[#061B3A]">
              A Life of Purpose
            </h3>

            <p className="mt-1 text-xs text-[#10243D]/45">
              Featured Message
            </p>

          </div>

        </div>

      </article>

    </div>

  </div>
</section>


{/* =========================================================
    OUR MISSION
========================================================= */}
<section className="relative overflow-hidden bg-[#0B3D91] px-5 py-24 md:px-8 md:py-32">

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2200&q=90"
      alt=""
      className="h-full w-full object-cover"
    />

    {/* NAVBAR BLUE OVERLAY */}
    <div className="absolute inset-0 bg-[#0B3D91]/90" />

    <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/90 to-[#0B3D91]/75" />

  </div>


  {/* SUBTLE BLUE GLOW */}
  <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#0B3D91]/25 blur-3xl" />


  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl">

    {/* INTRO */}
    <div className="max-w-3xl">

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
        Our Mission
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
        Growing in Christ.
        <span className="block text-[#D62828]">
          Living with purpose.
        </span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
        CFF Juja exists to help people know Christ, grow in faith,
        build meaningful relationships and use their lives to serve
        God and others.
      </p>

    </div>


    {/* MISSION + VISION */}
    <div className="mt-16 grid gap-6 md:grid-cols-2">

      {/* MISSION */}
      <div className="rounded-[2rem] border border-white/10 bg-[#0B3D91]/25 p-8 backdrop-blur-md md:p-10">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D62828] text-2xl text-white shadow-lg">
          ✦
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
          Our Mission
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          To know Christ and make Him known.
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
          We desire to see people encounter God, understand His
          Word, grow in spiritual maturity and become people who
          reflect Christ in their families, workplaces and communities.
        </p>

      </div>


      {/* VISION */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md md:p-10">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B3D91] text-2xl text-white shadow-lg">
          ◇
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
          Our Vision
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          A growing church transforming lives.
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
          We envision a Christ-centred church where people grow
          together, discover their God-given purpose and positively
          influence their families, communities and generation.
        </p>

      </div>

    </div>


    {/* VALUES */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div className="border-l-2 border-[#D62828] pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          01
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Faith
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Rooted in God's Word and dependent on Him.
        </p>
      </div>


      <div className="border-l-2 border-[#D62828] pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          02
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Community
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Growing together through fellowship and care.
        </p>
      </div>


      <div className="border-l-2 border-[#D62828] pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          03
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Service
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Using our gifts to serve God and others.
        </p>
      </div>


      <div className="border-l-2 border-[#D62828] pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          04
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          Purpose
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Living intentionally for God's Kingdom.
        </p>
      </div>

    </div>


    {/* SCRIPTURE */}
    <div className="mt-16 border-t border-white/10 pt-10">

      <p className="max-w-3xl text-2xl font-medium leading-9 text-white md:text-3xl">
        "But grow in the grace and knowledge of our Lord and Savior
        Jesus Christ."
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
        2 Peter 3:18
      </p>

    </div>

  </div>

</section>
  {/* =========================================================
      PASTORAL BOARD
  ========================================================== */}
  <section className="bg-white px-5 py-24 md:px-8 md:py-32">
    <div className="mx-auto max-w-7xl">

      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            Pastoral Board
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#0B3D91] md:text-5xl">
            Serving the church with faith and purpose.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#123B63]/60">
            Meet the pastors who provide spiritual leadership, guidance
            and care for the CFF Juja church family.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex w-fit items-center gap-3 rounded-full border border-[#123B63]/15 px-6 py-3 text-sm font-semibold text-[#123B63] transition hover:bg-[#123B63] hover:text-white"
        >
          Meet the Pastoral Board
          <span>→</span>
        </Link>

      </div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
          },
          {
            image:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90",
          },
          {
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
          },
          {
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90",
          },
        ].map((pastor, index) => (
          <article
            key={pastor.image}
            className="group overflow-hidden rounded-[1.75rem] bg-[#F7F9FC] shadow-sm ring-1 ring-[#123B63]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={pastor.image}
                alt="Pastoral Board member"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/50 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
                Pastoral Board
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#123B63]">
                Pastor Name
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#123B63]/55">
                Official pastoral profile to be confirmed.
              </p>
            </div>

          </article>
        ))}

      </div>

    </div>
  </section>


{/* =========================================================
    MINISTRIES
========================================================= */}
<section className="bg-white px-5 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
          Get Involved
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#0B3D91] md:text-5xl lg:text-6xl">
          There is a place for you at CFF.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#123B63]/60 md:text-lg">
          Discover a ministry where you can grow in faith, build
          meaningful relationships, serve others and use your gifts
          for God's Kingdom.
        </p>
      </div>

      <Link
        href="/ministries"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-[#123B63]/15 px-6 py-3.5 text-sm font-semibold text-[#123B63] transition hover:bg-[#123B63] hover:text-white"
      >
        View All Ministries
        <span>→</span>
      </Link>

    </div>


    {/* FEATURED MINISTRIES */}
    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {/* WORSHIP */}
      <Link
        href="/ministries/music"
        className="group relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#061B3A]"
      >
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=90"
          alt="Worship and Praise Ministry"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-9">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Worship & Praise
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            Worship
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Using music and worship to create moments where people
            can encounter God and draw closer to Him.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3">
            Explore Ministry
            <span className="text-[#FF5A5A]">→</span>
          </span>

        </div>
      </Link>


      {/* EVANGELISM */}
      <Link
        href="/ministries/evangelism"
        className="group relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#123B63]"
      >
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=90"
          alt="Evangelism and Missions Ministry"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#123B63]/45 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-9">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Evangelism & Missions
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            Reach
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Sharing the Gospel, reaching people with the love of
            Christ and serving communities with hope.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3">
            Explore Ministry
            <span className="text-[#FF5A5A]">→</span>
          </span>

        </div>
      </Link>


      {/* MEDIA */}
      <Link
        href="/ministries/media"
        className="group relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#061B3A]"
      >
        <img
          src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1400&q=90"
          alt="Media and ICT Ministry"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-9">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Media & ICT
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            Connect
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Using creativity, technology and communication to help
            the message of Christ reach more people.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3">
            Explore Ministry
            <span className="text-[#FF5A5A]">→</span>
          </span>

        </div>
      </Link>

    </div>


    {/* OTHER MINISTRIES */}
    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <Link
        href="/ministries/ushering"
        className="group rounded-[1.5rem] border border-[#D9E2EC] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Ministry
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#123B63]">
          Ushering
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#123B63]/55">
          Creating a welcoming environment where everyone feels
          valued and cared for.
        </p>

        <span className="mt-5 inline-flex text-sm font-bold text-[#D62828] transition-all group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>


      <Link
        href="/ministries/intercessory"
        className="group rounded-[1.5rem] border border-[#D9E2EC] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Ministry
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#123B63]">
          Intercessory
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#123B63]/55">
          Standing together in prayer for the church, families,
          communities and God's purposes.
        </p>

        <span className="mt-5 inline-flex text-sm font-bold text-[#D62828] transition-all group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>


      <Link
        href="/ministries/hospitality"
        className="group rounded-[1.5rem] border border-[#D9E2EC] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
          Ministry
        </p>

        <h3 className="mt-3 text-xl font-semibold text-[#123B63]">
          Hospitality
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#123B63]/55">
          Serving people with warmth, generosity and genuine
          Christian hospitality.
        </p>

        <span className="mt-5 inline-flex text-sm font-bold text-[#D62828] transition-all group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>


      <Link
        href="/ministries"
        className="group rounded-[1.5rem] bg-[#D62828] p-6 transition hover:-translate-y-1 hover:bg-[#B91F1F] hover:shadow-lg"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          Discover More
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          Find Your Place
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/70">
          Explore all our ministries and discover where you can
          connect, serve and grow.
        </p>

        <span className="mt-5 inline-flex text-sm font-bold text-white transition-all group-hover:translate-x-1">
          View Ministries →
        </span>
      </Link>

    </div>

  </div>
</section>

  {/* =========================================================
      GALLERY
  ========================================================== */}
  <Gallery />


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
