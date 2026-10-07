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
  image: string;
  status: "Draft" | "Published";
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function fetchEvents() {
    try {
      setLoading(true);

      const response = await fetch("/api/events");

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load events.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  async function handleDelete(id: string, title: string) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setMessage("");

      const response = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete event");
      }

      setEvents((currentEvents) =>
        currentEvents.filter((event) => event._id !== id)
      );

      setMessage("Event deleted successfully.");
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to delete event."
      );
    } finally {
      setDeletingId(null);
    }
  }

  async function handleStatusChange(event: Event) {
    const newStatus =
      event.status === "Published" ? "Draft" : "Published";

    try {
      const response = await fetch(`/api/events/${event._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: event.title,
          date: event.date,
          time: event.time,
          location: event.location,
          description: event.description,
          image: event.image,
          status: newStatus,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      setEvents((currentEvents) =>
        currentEvents.map((item) =>
          item._id === event._id
            ? { ...item, status: newStatus }
            : item
        )
      );
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to update status."
      );
    }
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || event.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const publishedCount = events.filter(
    (event) => event.status === "Published"
  ).length;

  const draftCount = events.filter(
    (event) => event.status === "Draft"
  ).length;

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Content Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
            Events
          </h1>

          <p className="mt-2 text-sm text-[#061B3A]/50">
            Create and manage church events.
          </p>
        </div>

        <Link
          href="/admin/events/new"
          className="inline-flex items-center justify-center bg-[#083e74] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061B3A]"
        >
          + Add Event
        </Link>
      </div>

      {/* MESSAGE */}
      {message && (
        <div className="mb-6 flex items-center justify-between border border-[#061B3A]/10 bg-white px-5 py-4 text-sm shadow-sm">
          <span
            className={
              message.includes("successfully")
                ? "text-green-700"
                : "text-red-600"
            }
          >
            {message}
          </span>

          <button
            onClick={() => setMessage("")}
            className="text-[#061B3A]/40 hover:text-[#061B3A]"
          >
            ×
          </button>
        </div>
      )}

      {/* STATS */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="border border-[#061B3A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
            Total Events
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#061B3A]">
            {events.length}
          </p>
        </div>

        <div className="border border-[#061B3A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
            Published
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#083e74]">
            {publishedCount}
          </p>
        </div>

        <div className="border border-[#061B3A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
            Drafts
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#D62828]">
            {draftCount}
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mb-5 flex flex-col gap-3 border border-[#061B3A]/10 bg-white p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none focus:border-[#083e74]"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#061B3A] outline-none focus:border-[#083e74]"
        >
          <option value="All">All Statuses</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      {/* EVENTS TABLE */}
      <div className="overflow-hidden border border-[#061B3A]/10 bg-white shadow-sm">
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-[#061B3A]/45">
              Loading events...
            </p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center bg-[#F1F4F8] text-2xl text-[#083e74]">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#061B3A]">
              No events found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#061B3A]/45">
              Try changing your search or filter, or create a new event.
            </p>

            <Link
              href="/admin/events/new"
              className="mt-5 bg-[#083e74] px-5 py-3 text-sm font-semibold text-white hover:bg-[#061B3A]"
            >
              Add Event
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left">
              <thead>
                <tr className="border-b border-[#061B3A]/10 bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Event
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Date
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Location
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredEvents.map((event) => (
                  <tr
                    key={event._id}
                    className="border-b border-[#061B3A]/10 last:border-0 hover:bg-[#FAFBFC]"
                  >
                    {/* EVENT */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {event.image ? (
                          <img
                            src={event.image}
                            alt=""
                            className="h-14 w-20 shrink-0 object-cover"
                          />
                        ) : (
                          <div className="flex h-14 w-20 shrink-0 items-center justify-center bg-[#F1F4F8] text-xs text-[#061B3A]/30">
                            No image
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-[#061B3A]">
                            {event.title}
                          </p>

                          <p className="mt-1 max-w-xs truncate text-xs text-[#061B3A]/40">
                            {event.time}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-[#061B3A]">
                        {event.date}
                      </p>
                    </td>

                    {/* LOCATION */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-[#061B3A]/60">
                        {event.location}
                      </p>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <button
                        onClick={() => handleStatusChange(event)}
                        title="Click to change status"
                        className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-semibold transition ${
                          event.status === "Published"
                            ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                            : "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            event.status === "Published"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }`}
                        />

                        {event.status}
                      </button>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        {event.status === "Published" && (
                          <Link
                            href={`/events/${event._id}`}
                            target="_blank"
                            className="border border-[#061B3A]/10 px-3 py-2 text-xs font-semibold text-[#061B3A]/65 transition hover:border-[#083e74] hover:text-[#083e74]"
                          >
                            View
                          </Link>
                        )}

                        <Link
                          href={`/admin/events/${event._id}`}
                          className="border border-[#061B3A]/10 px-3 py-2 text-xs font-semibold text-[#061B3A]/65 transition hover:border-[#083e74] hover:text-[#083e74]"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(event._id, event.title)
                          }
                          disabled={deletingId === event._id}
                          className="border border-red-100 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === event._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* RESULTS COUNT */}
      {!loading && filteredEvents.length > 0 && (
        <p className="mt-4 text-xs text-[#061B3A]/40">
          Showing {filteredEvents.length} of {events.length} events
        </p>
      )}
    </div>
  );
}