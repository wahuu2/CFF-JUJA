"use client";

import { useMemo, useState } from "react";

const sermons = [
  {
    slug: "the-greater-sacrifice",
    title: "The Greater Sacrifice",
    speaker: "CFF Juja",
    date: "Sunday Service",
    category: "Sunday Services",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    slug: "the-power-of-prayer",
    title: "The Power of Prayer",
    speaker: "CFF Juja",
    date: "Sunday Service",
    category: "Sunday Services",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=85",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    slug: "growing-in-the-word",
    title: "Growing in the Word",
    speaker: "CFF Juja",
    date: "Bible Study",
    category: "Bible Study",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=85",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

const categories = [
  "All",
  "Sunday Services",
  "Bible Study",
  "Special Messages",
];

export default function SermonLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSermons = useMemo(() => {
    if (activeCategory === "All") {
      return sermons;
    }

    return sermons.filter(
      (sermon) => sermon.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="sermon-library"
      className="bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D62828]">
              Sermon Library
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#123B63] md:text-5xl">
              Messages that help
              <br className="hidden md:block" />
              you grow.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
              Explore messages from CFF Juja and find biblical teaching
              that encourages, challenges and strengthens your faith.
            </p>
          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#123B63] text-white"
                    : "border border-gray-200 bg-white text-gray-500 hover:border-[#123B63]/30 hover:text-[#123B63]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* SERMON GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSermons.map((sermon) => (
            <article
              key={sermon.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#061B3A]/25 transition group-hover:bg-[#061B3A]/40" />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#D62828] shadow-xl transition duration-300 group-hover:scale-110">
                    <span className="ml-1 text-xl">
                      ▶
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D62828]">
                  {sermon.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#123B63]">
                  {sermon.title}
                </h3>

                <div className="mt-4 flex items-center justify-between gap-4 text-sm text-gray-400">
                  <span>{sermon.speaker}</span>
                  <span>{sermon.date}</span>
                </div>

                <a
  href={`/sermons/${sermon.slug}`}
  className="mt-6 inline-flex items-center text-sm font-semibold text-[#123B63] transition group-hover:text-[#D62828]"
>
  Watch Message
  <span className="ml-2 transition-transform group-hover:translate-x-1">
    →
  </span>
</a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}