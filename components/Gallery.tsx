
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
      className="overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C62828]">
            Life at CFF Juja
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#123B63] md:text-5xl lg:text-6xl">
            Moments of faith &amp; fellowship.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Take a glimpse into our worship, fellowship, community and
            the moments we share together as a church family.
          </p>
        </div>

        {/* HORIZONTAL PHOTO STRIP */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Open ${image.title}`}
              className="group relative h-[250px] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 text-left sm:h-[300px] sm:w-[280px] md:h-[340px] md:w-[300px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute bottom-5 left-5 right-3 text-base font-semibold text-white">
                {image.title}
              </p>

              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-[#123B63] opacity-0 shadow transition group-hover:opacity-100">
                +
              </span>
            </button>
          ))}
        </div>

        <p className="mt-2 text-xs text-gray-400 md:hidden">
          Swipe to explore photos
        </p>
      </div>

      {/* FULL-SCREEN IMAGE VIEWER */}
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
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-[#C62828]"
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
            className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-[#C62828] sm:left-6 sm:h-14 sm:w-14"
          >
            &#8249;
          </button>

          {/* SELECTED PHOTO */}
          <div
            className="relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#10243D] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4 text-white sm:px-7">
              <div>
                <h3 className="font-semibold sm:text-lg">
                  {images[selected].title}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  CFF Juja · Church Life
                </p>
              </div>

              <p className="shrink-0 text-sm text-white/70">
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
            className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-[#C62828] sm:right-6 sm:h-14 sm:w-14"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}