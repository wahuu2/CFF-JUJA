"use client";

import Link from "next/link";
import { useState } from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: "Published" | "Draft";
};

const initialEvents: Event[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "October 11, 2026",
    time: "10:00 AM",
    location: "CFF Juja",
    status: "Published",
  },
  {
    id: 2,
    title: "Youth Fellowship",
    date: "October 18, 2026",
    time: "2:00 PM",
    location: "CFF Juja",
    status: "Published",
  },
  {
    id: 3,
    title: "Men's Fellowship",
    date: "October 24, 2026",
    time: "3:00 PM",
    location: "CFF Juja",
    status: "Draft",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents);

  const deleteEvent = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    setEvents((current) =>
      current.filter((event) => event.id !== id)
    );
  };

  return (
    <div className="mx-auto max-w-7xl">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Content Management
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#061B3A]">
            Events
          </h2>

          <p className="mt-3 text-sm text-[#061B3A]/50">
            Create and manage events displayed on the CFF website.
          </p>

        </div>

        <Link
          href="/admin/events/new"
          className="inline-flex items-center justify-center gap-2 bg-[#FF5A5A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D62828]"
        >
          <span className="text-lg leading-none">+</span>
          Add Event
        </Link>

      </div>


      {/* SUMMARY */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">

        <div className="border border-[#083e74]/10 bg-white p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#083e74]/45">
            Total Events
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#061B3A]">
            {events.length}
          </p>

        </div>


        <div className="border border-[#083e74]/10 bg-white p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#083e74]/45">
            Published
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#061B3A]">
            {
              events.filter(
                (event) => event.status === "Published"
              ).length
            }
          </p>

        </div>


        <div className="border border-[#083e74]/10 bg-white p-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#083e74]/45">
            Drafts
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#061B3A]">
            {
              events.filter(
                (event) => event.status === "Draft"
              ).length
            }
          </p>

        </div>

      </div>


      {/* EVENTS TABLE */}
      <section className="mt-8 border border-[#083e74]/10 bg-white">

        <div className="flex flex-col justify-between gap-4 border-b border-[#083e74]/10 px-6 py-5 md:flex-row md:items-center">

          <div>

            <h3 className="text-lg font-semibold text-[#061B3A]">
              All Events
            </h3>

            <p className="mt-1 text-xs text-[#061B3A]/40">
              Manage your upcoming church events.
            </p>

          </div>

          <div className="text-xs text-[#061B3A]/40">
            {events.length} event{events.length !== 1 ? "s" : ""}
          </div>

        </div>


        {/* DESKTOP TABLE */}
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full">

            <thead>

              <tr className="border-b border-[#083e74]/10 bg-[#F5F8FC] text-left">

                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#083e74]/45">
                  Event
                </th>

                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#083e74]/45">
                  Date & Time
                </th>

                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#083e74]/45">
                  Location
                </th>

                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#083e74]/45">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-[0.15em] text-[#083e74]/45">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-[#083e74]/10">

              {events.map((event) => (

                <tr
                  key={event.id}
                  className="transition hover:bg-[#F5F8FC]/70"
                >

                  <td className="px-6 py-5">

                    <p className="text-sm font-semibold text-[#061B3A]">
                      {event.title}
                    </p>

                  </td>


                  <td className="px-6 py-5">

                    <p className="text-sm text-[#061B3A]/70">
                      {event.date}
                    </p>

                    <p className="mt-1 text-xs text-[#061B3A]/40">
                      {event.time}
                    </p>

                  </td>


                  <td className="px-6 py-5 text-sm text-[#061B3A]/60">
                    {event.location}
                  </td>


                  <td className="px-6 py-5">

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide ${
                        event.status === "Published"
                          ? "text-green-600"
                          : "text-[#FF5A5A]"
                      }`}
                    >
                      {event.status}
                    </span>

                  </td>


                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-4">

                      <Link
                        href={`/admin/events/${event.id}/edit`}
                        className="text-xs font-semibold text-[#083e74] transition hover:text-[#FF5A5A]"
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() => deleteEvent(event.id)}
                        className="text-xs font-semibold text-red-500 transition hover:text-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* MOBILE LIST */}
        <div className="divide-y divide-[#083e74]/10 md:hidden">

          {events.map((event) => (

            <div
              key={event.id}
              className="p-5"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-sm font-semibold text-[#061B3A]">
                    {event.title}
                  </p>

                  <p className="mt-2 text-xs text-[#061B3A]/45">
                    {event.date} · {event.time}
                  </p>

                  <p className="mt-1 text-xs text-[#061B3A]/45">
                    {event.location}
                  </p>

                </div>

                <span
                  className={`shrink-0 text-[10px] font-bold uppercase ${
                    event.status === "Published"
                      ? "text-green-600"
                      : "text-[#FF5A5A]"
                  }`}
                >
                  {event.status}
                </span>

              </div>


              <div className="mt-5 flex gap-5">

                <Link
                  href={`/admin/events/${event.id}/edit`}
                  className="text-xs font-semibold text-[#083e74]"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  onClick={() => deleteEvent(event.id)}
                  className="text-xs font-semibold text-red-500"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* EMPTY STATE */}
        {events.length === 0 && (
          <div className="px-6 py-16 text-center">

            <p className="text-sm font-semibold text-[#061B3A]">
              No events yet.
            </p>

            <p className="mt-2 text-xs text-[#061B3A]/40">
              Create your first church event.
            </p>

            <Link
              href="/admin/events/new"
              className="mt-5 inline-flex bg-[#FF5A5A] px-5 py-3 text-xs font-semibold text-white"
            >
              Add Event
            </Link>

          </div>
        )}

      </section>

    </div>
  );
}