"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export default function EventDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`/api/events/${id}`);

        if (!response.ok) {
          throw new Error("Event not found");
        }

        const data = await response.json();

        // Do not show drafts publicly
        if (data.status !== "Published") {
          throw new Error("Event not found");
        }

        setEvent(data);
      } catch (error) {
        console.error("Event details error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load this event."
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchEvent();
    }
  }, [id]);

  /* =========================================================
      LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F5F8FC]">

        <section className="flex min-h-screen items-center justify-center px-5">
          <div className="flex items-center gap-3 text-sm text-[#64748B]">

            <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#D9E0E8] border-t-[#083e74]" />

            Loading event...

          </div>
        </section>

      </main>
    );
  }

  /* =========================================================
      ERROR
  ========================================================= */

  if (error || !event) {
    return (
      <main className="min-h-screen bg-[#F5F8FC]">

        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-lg border border-[#D9E0E8] bg-white px-7 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D9E0E8] bg-[#F8FAFC]">

              <span className="text-2xl text-[#083e74]/40">
                ✝
              </span>

            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
              CFF Juja
            </p>

            <h1 className="mt-3 text-2xl font-semibold text-[#083e74]">
              Event not found
            </h1>

            <p className="mt-3 text-sm leading-7 text-[#64748B]">
              This event may have been removed or is no longer
              available.
            </p>

            <Link
              href="/events"
              className="mt-7 inline-flex items-center gap-3 bg-[#083e74] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#061B3A]"
            >
              <span>←</span>
              Back to Events
            </Link>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#10243D]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#061B3A] px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">

        <div className="absolute inset-0">

          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          ) : null}

          <div className="absolute inset-0 bg-[#061B3A]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A] via-[#0B3D91]/70 to-[#061B3A]/50" />

        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D62828]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60 transition hover:text-white"
          >
            <span>←</span>
            All Events
          </Link>

          <div className="mt-10 max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A5A]">
              CFF Event
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {event.description}
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          EVENT INFORMATION
      ========================================================== */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">

            {/* DESCRIPTION */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D62828]">
                About The Event
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0B3D91] md:text-4xl">
                Join us at CFF Juja.
              </h2>

              <div className="mt-7 max-w-3xl text-base leading-8 text-[#475569]">
                <p>
                  {event.description}
                </p>
              </div>

            </div>


            {/* EVENT DETAILS */}
            <aside>

              <div className="border border-[#D9E0E8] bg-[#F8FAFC]">

                <div className="border-b border-[#D9E0E8] px-6 py-5">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
                    Event Details
                  </p>

                </div>


                {/* DATE */}
                <div className="border-b border-[#E5EAF0] px-6 py-6">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#083e74] text-white">
                      <span className="text-lg">
                        {formatEventDay(event.date)}
                      </span>
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                        Date
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#083e74]">
                        {formatFullDate(event.date)}
                      </p>

                    </div>

                  </div>

                </div>


                {/* TIME */}
                <div className="border-b border-[#E5EAF0] px-6 py-6">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FDECEC] text-[#D62828]">
                      ◷
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                        Time
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#083e74]">
                        {event.time}
                      </p>

                    </div>

                  </div>

                </div>


                {/* LOCATION */}
                <div className="px-6 py-6">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FDECEC] text-[#D62828]">
                      ⌖
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#94A3B8]">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#083e74]">
                        {event.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              <Link
                href="/events"
                className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-[#D62828] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#B91F1F]"
              >
                View Other Events
                <span>→</span>
              </Link>

            </aside>

          </div>

        </div>

      </section>


      {/* =========================================================
          EVENT IMAGE
      ========================================================== */}
      {event.image && (
        <section className="bg-[#F5F8FC] px-5 pb-24 md:px-8 md:pb-32">

          <div className="mx-auto max-w-7xl">

            <div className="relative h-[360px] overflow-hidden md:h-[520px] lg:h-[620px]">

              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="bg-[#061B3A] px-5 py-20 md:px-8 md:py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A5A]">
            CFF Juja
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
            We look forward to seeing you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Join us as we worship, fellowship and grow together
            as a church family.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-3 bg-[#FF5A5A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D62828]"
          >
            Explore Events
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


function formatFullDate(date: string) {
  const eventDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(eventDate.getTime())) {
    return "Date unavailable";
  }

  return eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}