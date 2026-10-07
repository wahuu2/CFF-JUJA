"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Event = {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  status: "Draft" | "Published";
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        const publishedEvents = data.filter(
          (event: Event) => event.status === "Published"
        );

        const upcomingEvents = publishedEvents.filter((event: Event) => {
          const eventDate = new Date(`${event.date}T23:59:59`);
          return eventDate >= new Date();
        });

        setEvents(upcomingEvents);
      } catch (error) {
        console.error("Events page error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#10243D]">

      {/* =========================================================
          PAGE HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#061B3A] px-5 pb-24 pt-40 md:px-8 md:pb-28 md:pt-48">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=90"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#061B3A]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A] via-[#0B3D91]/75 to-[#061B3A]/40" />
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#D62828]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                CFF Juja
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Upcoming
              <span className="block text-[#D62828]">
                events.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Discover what's happening at CFF Juja. Join us for
              worship, fellowship, teaching and opportunities to
              grow together as a church family.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          EVENTS
      ========================================================== */}
      <section className="bg-white px-5 py-24 md:px-8 md:py-32">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                What's Happening
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0B3D91] md:text-5xl">
                Events at CFF.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#10243D]/60">
                Find upcoming gatherings, church activities and
                special events happening in our community.
              </p>

            </div>

            <Link
              href="/"
              className="inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-wide text-[#0B3D91] transition hover:text-[#D62828]"
            >
              Back Home
              <span className="text-[#D62828]">→</span>
            </Link>

          </div>


          {/* LOADING */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center border border-[#E5EAF0] bg-[#F8FAFC]">

              <div className="flex items-center gap-3 text-sm text-[#64748B]">

                <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#D9E0E8] border-t-[#083e74]" />

                Loading events...

              </div>

            </div>
          )}


          {/* NO EVENTS */}
          {!loading && events.length === 0 && (
            <div className="border border-[#E5EAF0] bg-[#F8FAFC] px-6 py-24 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D9E2EC] bg-white">

                <span className="text-2xl text-[#083e74]/40">
                  ✝
                </span>

              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#083e74]">
                No upcoming events.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#64748B]">
                There are no upcoming events at the moment.
                Check back soon for what's happening at CFF Juja.
              </p>

            </div>
          )}


          {/* EVENTS GRID */}
          {!loading && events.length > 0 && (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {events.map((event) => (

                <article
                  key={event._id}
                  className="group overflow-hidden border border-[#E5EAF0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden bg-[#061B3A]">

                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#061B3A]">

                        <div className="text-center">

                          <span className="text-5xl text-white/20">
                            ✝
                          </span>

                          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                            CFF Juja
                          </p>

                        </div>

                      </div>
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/50 to-transparent" />

                    {/* DATE */}
                    <div className="absolute left-5 top-5 min-w-[62px] bg-[#FF5A5A] px-3 py-3 text-center text-white shadow-lg">

                      <p className="text-2xl font-bold leading-none">
                        {formatEventDay(event.date)}
                      </p>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em]">
                        {formatEventMonth(event.date)}
                      </p>

                    </div>

                  </div>


                  {/* CONTENT */}
                  <div className="p-7">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D62828]">
                      CFF Event
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#083e74]">
                      {event.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#64748B]">
                      {event.description}
                    </p>


                    {/* DETAILS */}
                    <div className="mt-6 space-y-3 border-t border-[#EDF1F5] pt-5">

                      <div className="flex items-center gap-3 text-sm text-[#475569]">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#F5F8FC] text-[#FF5A5A]">
                          ◷
                        </span>

                        <span>
                          {event.time}
                        </span>

                      </div>


                      <div className="flex items-center gap-3 text-sm text-[#475569]">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#F5F8FC] text-[#FF5A5A]">
                          ⌖
                        </span>

                        <span className="line-clamp-1">
                          {event.location}
                        </span>

                      </div>

                    </div>


                    {/* VIEW EVENT */}
                    <Link
                      href={`/events/${event._id}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#083e74] transition-all group-hover:gap-3 hover:text-[#D62828]"
                    >
                      View Event
                      <span className="text-[#D62828]">
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>
          )}

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="bg-[#F5F8FC] px-5 py-24 md:px-8 md:py-28">

        <div className="mx-auto max-w-5xl border border-[#D9E2EC] bg-white px-7 py-14 text-center shadow-sm md:px-12 md:py-20">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#0B3D91] md:text-4xl">
            There is always something happening at CFF.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
            Keep checking this page for upcoming services,
            gatherings, conferences and other church activities.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D62828] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#B91F1F]"
          >
            Return Home
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
    DATE HELPERS
========================================================= */

function formatEventDay(date: string) {
  const eventDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(eventDate.getTime())) {
    return "--";
  }

  return eventDate.getDate().toString();
}


function formatEventMonth(date: string) {
  const eventDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(eventDate.getTime())) {
    return "---";
  }

  return eventDate.toLocaleDateString("en-US", {
    month: "short",
  });
}