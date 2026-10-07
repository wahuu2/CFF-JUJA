"use client";

import { useState } from "react";

const images = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Church worship and praise",
    title: "Worship & Fellowship",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Church members gathered for service",
    title: "Sunday Service",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Praise and worship at church",
    title: "Praise & Worship",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Church community and fellowship",
    title: "Church Family",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Church members worshipping together",
    title: "Life Together",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const previous = () => {
    if (selected !== null) {
      setSelected((selected - 1 + images.length) % images.length);
    }
  };

  const next = () => {
    if (selected !== null) {
      setSelected((selected + 1) % images.length);
    }
  };

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#F7F9FC] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D62828]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                Life at CFF
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#123B63] md:text-5xl lg:text-6xl">
              Moments of faith,
              <span className="block text-[#D62828]">
                fellowship &amp; community.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#123B63]/60 md:text-lg">
              Take a glimpse into the moments we share together
              through worship, fellowship, service and life as a
              church family.
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="text-right text-sm font-medium text-[#123B63]/40">
              CFF JUJA
            </p>

            <p className="mt-1 text-right text-xs uppercase tracking-[0.2em] text-[#123B63]/30">
              Church Life
            </p>
          </div>
        </div>

        {/* GALLERY */}
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">

          {/* FEATURED IMAGE */}
          <button
            type="button"
            onClick={() => setSelected(0)}
            aria-label={`Open ${images[0].title}`}
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#0B3D91] text-left md:col-span-7 md:row-span-2 md:min-h-[650px]"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/90 via-[#061B3A]/20 to-transparent" />

            <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
              <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Featured
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl font-light text-[#123B63] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                +
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
                {images[0].title}
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                Together in His presence.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Celebrating worship, fellowship and the joy of
                gathering together as the body of Christ.
              </p>
            </div>
          </button>

          {/* SECOND IMAGE */}
          <button
            type="button"
            onClick={() => setSelected(1)}
            aria-label={`Open ${images[1].title}`}
            className="group relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#0B3D91] text-left md:col-span-5"
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/85 via-transparent to-transparent" />

            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#123B63] opacity-0 shadow transition group-hover:opacity-100">
              +
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
                Sunday
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {images[1].title}
              </h3>
            </div>
          </button>

          {/* THIRD IMAGE */}
          <button
            type="button"
            onClick={() => setSelected(2)}
            aria-label={`Open ${images[2].title}`}
            className="group relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#0B3D91] text-left md:col-span-5"
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/85 via-transparent to-transparent" />

            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#123B63] opacity-0 shadow transition group-hover:opacity-100">
              +
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
                Worship
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {images[2].title}
              </h3>
            </div>
          </button>
        </div>

        {/* SMALLER GALLERY ROW */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">

          <button
            type="button"
            onClick={() => setSelected(3)}
            aria-label={`Open ${images[3].title}`}
            className="group relative h-[280px] overflow-hidden rounded-[2rem] bg-[#0B3D91] text-left"
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/85 via-transparent to-transparent" />

            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#123B63] opacity-0 shadow transition group-hover:opacity-100">
              +
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
                Community
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {images[3].title}
              </h3>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelected(4)}
            aria-label={`Open ${images[4].title}`}
            className="group relative h-[280px] overflow-hidden rounded-[2rem] bg-[#0B3D91] text-left"
          >
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/90 via-[#061B3A]/20 to-transparent" />

            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#123B63] opacity-0 shadow transition group-hover:opacity-100">
              +
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
                Church Life
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {images[4].title}
              </h3>
            </div>
          </button>

        </div>

        {/* MOBILE HINT */}
        <p className="mt-5 text-center text-xs font-medium text-[#123B63]/35 md:hidden">
          Tap a photo to view it full screen
        </p>
      </div>

      {/* =====================================================
          FULL-SCREEN IMAGE VIEWER
      ===================================================== */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-3 py-16 backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Church photo viewer"
          onClick={() => setSelected(null)}
        >

          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-[#D62828]"
          >
            &times;
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-[#D62828] sm:left-6 sm:h-14 sm:w-14"
          >
            &#8249;
          </button>

          {/* IMAGE CONTAINER */}
          <div
            className="relative flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-[#10243D] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* IMAGE */}
            <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-white sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
                  CFF Juja
                </p>

                <h3 className="mt-1 font-semibold sm:text-lg">
                  {images[selected].title}
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Church Life
                </p>
              </div>

              <p className="shrink-0 text-sm text-white/60">
                {selected + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-[#D62828] sm:right-6 sm:h-14 sm:w-14"
          >
            &#8250;
          </button>

        </div>
      )}
    </section>
  );
}