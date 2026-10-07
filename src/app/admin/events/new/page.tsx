"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewEventPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Published" | "Draft">(
    "Draft"
  );

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        time,
        location,
        description,
        status,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create event");
    }

    alert("Event created successfully!");

    window.location.href = "/admin/events";
  } catch (error) {
    console.error("Create event error:", error);
    alert("Failed to create event. Please try again.");
  }
};

  return (
    <div className="mx-auto max-w-4xl">

      {/* HEADER */}
      <div className="mb-8">

        <Link
          href="/admin/events"
          className="text-xs font-semibold text-[#083e74] transition hover:text-[#FF5A5A]"
        >
          ← Back to Events
        </Link>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
          Events
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-[#061B3A]">
          Add New Event
        </h2>

        <p className="mt-3 text-sm text-[#061B3A]/50">
          Create an event that can be displayed on the CFF website.
        </p>

      </div>


      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="border border-[#083e74]/10 bg-white"
      >

        {/* EVENT DETAILS */}
        <div className="border-b border-[#083e74]/10 p-6 md:p-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A5A]">
            Event Details
          </p>

          <div className="mt-7 space-y-6">

            {/* TITLE */}
            <div>

              <label
                htmlFor="title"
                className="text-sm font-semibold text-[#061B3A]"
              >
                Event Name
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Youth Sunday"
                required
                className="mt-2 w-full border border-[#083e74]/15 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/25 focus:border-[#FF5A5A]"
              />

            </div>


            {/* DATE + TIME */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>

                <label
                  htmlFor="date"
                  className="text-sm font-semibold text-[#061B3A]"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="mt-2 w-full border border-[#083e74]/15 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#FF5A5A]"
                />

              </div>


              <div>

                <label
                  htmlFor="time"
                  className="text-sm font-semibold text-[#061B3A]"
                >
                  Time
                </label>

                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="mt-2 w-full border border-[#083e74]/15 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#FF5A5A]"
                />

              </div>

            </div>


            {/* LOCATION */}
            <div>

              <label
                htmlFor="location"
                className="text-sm font-semibold text-[#061B3A]"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. CFF Juja"
                required
                className="mt-2 w-full border border-[#083e74]/15 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/25 focus:border-[#FF5A5A]"
              />

            </div>


            {/* DESCRIPTION */}
            <div>

              <label
                htmlFor="description"
                className="text-sm font-semibold text-[#061B3A]"
              >
                Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell visitors about this event..."
                rows={6}
                className="mt-2 w-full resize-none border border-[#083e74]/15 bg-white px-4 py-3 text-sm leading-7 text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/25 focus:border-[#FF5A5A]"
              />

            </div>

          </div>

        </div>


        {/* PUBLISHING */}
        <div className="p-6 md:p-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A5A]">
            Publishing
          </p>

          <div className="mt-6">

            <label
              htmlFor="status"
              className="text-sm font-semibold text-[#061B3A]"
            >
              Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "Published" | "Draft")
              }
              className="mt-2 w-full border border-[#083e74]/15 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#FF5A5A]"
            >
              <option value="Draft">
                Draft
              </option>

              <option value="Published">
                Published
              </option>
            </select>

          </div>


          {/* ACTIONS */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              href="/admin/events"
              className="inline-flex items-center justify-center border border-[#083e74]/15 px-6 py-3 text-sm font-semibold text-[#083e74] transition hover:bg-[#F5F8FC]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#FF5A5A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D62828]"
            >
              Save Event
            </button>

          </div>

        </div>

      </form>

    </div>
  );
}