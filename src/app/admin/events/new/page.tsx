"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function NewEventPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState<"Draft" | "Published">("Draft");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSaving(true);
    setError("");

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
          image,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create event");
      }

      window.location.href = "/admin/events";
    } catch (error) {
      console.error("Create event error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to create event. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <div className="flex flex-col gap-5 border-b border-[#D9E0E8] pb-7 md:flex-row md:items-end md:justify-between">

        <div>
          <Link
            href="/admin/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] transition hover:text-[#083e74]"
          >
            <span>←</span>
            Back to Events
          </Link>

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5A5A]">
            Event Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
            Add Event
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Create an event that can appear on the CFF website.
          </p>
        </div>

      </div>

      {/* =========================================================
          ERROR
      ========================================================= */}
      {error && (
        <div className="border border-[#F1CACA] bg-[#FFF5F5] px-5 py-4">
          <p className="text-sm font-semibold text-[#D62828]">
            Unable to create event
          </p>

          <p className="mt-1 text-xs text-[#9B4A4A]">
            {error}
          </p>
        </div>
      )}

      {/* =========================================================
          FORM
      ========================================================= */}
      <form onSubmit={handleSubmit}>

        <div className="border border-[#D9E0E8] bg-white">

          {/* FORM HEADER */}
          <div className="border-b border-[#D9E0E8] px-6 py-5 md:px-8">
            <h2 className="text-sm font-semibold text-[#061B3A]">
              Event Details
            </h2>

            <p className="mt-1 text-xs text-[#94A3B8]">
              Enter the information visitors will see on the website.
            </p>
          </div>

          {/* FORM CONTENT */}
          <div className="space-y-7 px-6 py-7 md:px-8 md:py-9">

            {/* TITLE */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-xs font-semibold text-[#334155]"
              >
                Event Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. CFF Sunday Service"
                required
                className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#083e74] focus:bg-white"
              />
            </div>

            {/* DATE / TIME */}
            <div className="grid gap-7 md:grid-cols-2">

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-xs font-semibold text-[#334155]"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-xs font-semibold text-[#334155]"
                >
                  Time
                </label>

                <input
                  id="time"
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 10:00 AM"
                  required
                  className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#083e74] focus:bg-white"
                />
              </div>

            </div>

            {/* LOCATION */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-xs font-semibold text-[#334155]"
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
                className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#083e74] focus:bg-white"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-xs font-semibold text-[#334155]"
              >
                Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the event..."
                rows={6}
                required
                className="w-full resize-none border border-[#D9E0E8] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#061B3A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#083e74] focus:bg-white"
              />
            </div>

            {/* IMAGE */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-xs font-semibold text-[#334155]"
              >
                Event Image URL
                <span className="ml-2 font-normal text-[#94A3B8]">
                  Optional
                </span>
              </label>

              <input
                id="image"
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition placeholder:text-[#A0A9B5] focus:border-[#083e74] focus:bg-white"
              />

              <p className="mt-2 text-xs text-[#94A3B8]">
                Image uploads will be added later. For now, you can use an
                image URL.
              </p>
            </div>

            {/* STATUS */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-xs font-semibold text-[#334155]"
              >
                Status
              </label>

              <select
                id="status"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "Draft" | "Published")
                }
                className="h-12 w-full border border-[#D9E0E8] bg-[#F8FAFC] px-4 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white md:max-w-xs"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>

              <p className="mt-2 text-xs text-[#94A3B8]">
                Draft events stay hidden from the public website.
              </p>
            </div>

          </div>

          {/* =====================================================
              ACTIONS
          ===================================================== */}
          <div className="flex flex-col-reverse gap-3 border-t border-[#D9E0E8] bg-[#F8FAFC] px-6 py-5 sm:flex-row sm:justify-end md:px-8">

            <Link
              href="/admin/events"
              className="inline-flex h-11 items-center justify-center border border-[#D9E0E8] bg-white px-5 text-sm font-semibold text-[#475569] transition hover:border-[#94A3B8] hover:text-[#061B3A]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex h-11 items-center justify-center bg-[#061B3A] px-6 text-sm font-semibold text-white transition hover:bg-[#083e74] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Create Event"}
            </button>

          </div>

        </div>

      </form>

    </div>
  );
}