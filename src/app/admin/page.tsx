"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Event = {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: "Draft" | "Published";
};

export default function AdminDashboard() {
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
        setEvents(data);
      } catch (error) {
        console.error("Dashboard events error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const publishedEvents = events.filter(
    (event) => event.status === "Published"
  );

  const draftEvents = events.filter(
    (event) => event.status === "Draft"
  );

  const upcomingEvents = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];

    return events
      .filter((event) => event.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [events]);

  const recentEvents = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  function formatDate(date: string) {
    const parsedDate = new Date(`${date}T00:00:00`);

    return parsedDate.toLocaleDateString("en-KE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
          Overview
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-[#061B3A]/50">
          Manage the content and activity of CFF Juja.
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* TOTAL */}
        <div className="border border-[#061B3A]/10 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                Total Events
              </p>

              <p className="mt-4 text-3xl font-semibold text-[#061B3A]">
                {loading ? "—" : events.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center bg-[#EAF0F7] text-[#083e74]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path
                  strokeLinecap="round"
                  d="M8 2v4M16 2v4M3 10h18"
                />
              </svg>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#061B3A]/40">
            All events in the system
          </p>
        </div>

        {/* PUBLISHED */}
        <div className="border border-[#061B3A]/10 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                Published
              </p>

              <p className="mt-4 text-3xl font-semibold text-[#083e74]">
                {loading ? "—" : publishedEvents.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center bg-green-50 text-green-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#061B3A]/40">
            Visible on the website
          </p>
        </div>

        {/* DRAFTS */}
        <div className="border border-[#061B3A]/10 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                Drafts
              </p>

              <p className="mt-4 text-3xl font-semibold text-[#D62828]">
                {loading ? "—" : draftEvents.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center bg-orange-50 text-orange-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#061B3A]/40">
            Not visible to visitors
          </p>
        </div>

        {/* UPCOMING */}
        <div className="border border-[#061B3A]/10 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                Upcoming
              </p>

              <p className="mt-4 text-3xl font-semibold text-[#061B3A]">
                {loading ? "—" : upcomingEvents.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center bg-[#EAF0F7] text-[#083e74]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v20M2 12h20"
                />
              </svg>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#061B3A]/40">
            Events scheduled from today
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        {/* UPCOMING EVENTS */}
        <div className="border border-[#061B3A]/10 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#061B3A]/10 px-6 py-5">
            <div>
              <h2 className="text-base font-semibold text-[#061B3A]">
                Upcoming Events
              </h2>

              <p className="mt-1 text-xs text-[#061B3A]/40">
                Your next scheduled church events
              </p>
            </div>

            <Link
              href="/admin/events"
              className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
            >
              View all →
            </Link>
          </div>

          {loading ? (
            <div className="px-6 py-12 text-center text-sm text-[#061B3A]/40">
              Loading events...
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-[#061B3A]">
                No upcoming events
              </p>

              <p className="mt-2 text-xs text-[#061B3A]/40">
                Create an event to see it here.
              </p>
            </div>
          ) : (
            <div>
              {upcomingEvents.slice(0, 5).map((event) => (
                <div
                  key={event._id}
                  className="flex items-center gap-4 border-b border-[#061B3A]/10 px-6 py-5 last:border-0"
                >
                  {/* IMAGE */}
                  {event.image ? (
                    <img
                      src={event.image}
                      alt=""
                      className="h-16 w-20 shrink-0 object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-20 shrink-0 items-center justify-center bg-[#F1F4F8] text-xs text-[#061B3A]/30">
                      No image
                    </div>
                  )}

                  {/* INFO */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold text-[#061B3A]">
                        {event.title}
                      </h3>

                      <span
                        className={`border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                          event.status === "Published"
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-orange-200 bg-orange-50 text-orange-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#061B3A]/45">
                      <span>{formatDate(event.date)}</span>
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* EDIT */}
                  <Link
                    href={`/admin/events/${event._id}`}
                    className="hidden shrink-0 border border-[#061B3A]/10 px-3 py-2 text-xs font-semibold text-[#061B3A]/60 transition hover:border-[#083e74] hover:text-[#083e74] sm:block"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* QUICK ACTIONS */}
        <div className="border border-[#061B3A]/10 bg-white shadow-sm">
          <div className="border-b border-[#061B3A]/10 px-6 py-5">
            <h2 className="text-base font-semibold text-[#061B3A]">
              Quick Actions
            </h2>

            <p className="mt-1 text-xs text-[#061B3A]/40">
              Common administration tasks
            </p>
          </div>

          <div className="p-4">
            <Link
              href="/admin/events/new"
              className="group flex items-center gap-4 border border-[#061B3A]/10 p-4 transition hover:border-[#083e74] hover:bg-[#F8FAFC]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#083e74] text-lg text-white">
                +
              </div>

              <div>
                <p className="text-sm font-semibold text-[#061B3A]">
                  Add Event
                </p>

                <p className="mt-1 text-xs text-[#061B3A]/40">
                  Create a new church event
                </p>
              </div>

              <span className="ml-auto text-[#061B3A]/25 transition group-hover:text-[#083e74]">
                →
              </span>
            </Link>

            <Link
              href="/admin/events"
              className="group mt-3 flex items-center gap-4 border border-[#061B3A]/10 p-4 transition hover:border-[#083e74] hover:bg-[#F8FAFC]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EAF0F7] text-[#083e74]">
                ≡
              </div>

              <div>
                <p className="text-sm font-semibold text-[#061B3A]">
                  Manage Events
                </p>

                <p className="mt-1 text-xs text-[#061B3A]/40">
                  View, edit and publish events
                </p>
              </div>

              <span className="ml-auto text-[#061B3A]/25 transition group-hover:text-[#083e74]">
                →
              </span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="group mt-3 flex items-center gap-4 border border-[#061B3A]/10 p-4 transition hover:border-[#083e74] hover:bg-[#F8FAFC]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F1F4F8] text-[#083e74]">
                ↗
              </div>

              <div>
                <p className="text-sm font-semibold text-[#061B3A]">
                  View Website
                </p>

                <p className="mt-1 text-xs text-[#061B3A]/40">
                  Open the public CFF website
                </p>
              </div>

              <span className="ml-auto text-[#061B3A]/25 transition group-hover:text-[#083e74]">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* RECENT EVENTS */}
      <div className="mt-6 border border-[#061B3A]/10 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#061B3A]/10 px-6 py-5">
          <div>
            <h2 className="text-base font-semibold text-[#061B3A]">
              Recent Events
            </h2>

            <p className="mt-1 text-xs text-[#061B3A]/40">
              Latest events in your content
            </p>
          </div>

          <Link
            href="/admin/events"
            className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
          >
            Manage →
          </Link>
        </div>

        {recentEvents.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-[#061B3A]/40">
            No events yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-[#061B3A]/10 bg-[#F8FAFC]">
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Event
                  </th>

                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Date
                  </th>

                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Status
                  </th>

                  <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentEvents.map((event) => (
                  <tr
                    key={event._id}
                    className="border-b border-[#061B3A]/10 last:border-0"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-[#061B3A]">
                        {event.title}
                      </p>

                      <p className="mt-1 text-xs text-[#061B3A]/40">
                        {event.location}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-[#061B3A]/60">
                      {formatDate(event.date)}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex border px-2.5 py-1 text-[10px] font-bold ${
                          event.status === "Published"
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-orange-200 bg-orange-50 text-orange-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/events/${event._id}`}
                        className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
                      >
                        Edit →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}