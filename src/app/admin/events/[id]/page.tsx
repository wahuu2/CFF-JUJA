"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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

export default function EditEventPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`/api/events/${id}`);

        if (!response.ok) {
          throw new Error("Event not found");
        }

        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load event.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchEvent();
    }
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    if (!event) return;

    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!event) return;

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`/api/events/${id}`, {
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
          status: event.status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update event");
      }

      setMessage("Event updated successfully.");

      setTimeout(() => {
        router.push("/admin/events");
      }, 800);
    } catch (error) {
      console.error(error);
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to update event."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-sm text-[#061B3A]/50">
          Loading event...
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-10 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-[#061B3A]">
          Event not found
        </h2>

        <p className="mt-2 text-sm text-[#061B3A]/50">
          The event you are looking for does not exist.
        </p>

        <Link
          href="/admin/events"
          className="mt-6 inline-flex bg-[#083e74] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#061B3A]"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Events
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
            Edit Event
          </h1>

          <p className="mt-2 text-sm text-[#061B3A]/50">
            Update the event information below.
          </p>
        </div>

        <Link
          href="/admin/events"
          className="inline-flex items-center justify-center border border-[#061B3A]/10 bg-white px-5 py-3 text-sm font-semibold text-[#061B3A] transition hover:bg-[#F1F4F8]"
        >
          ← Back to Events
        </Link>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* MAIN FORM */}
          <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 border-b border-[#061B3A]/10 pb-5">
              <h2 className="text-lg font-semibold text-[#061B3A]">
                Event Information
              </h2>

              <p className="mt-1 text-sm text-[#061B3A]/45">
                Basic information about the event.
              </p>
            </div>

            <div className="space-y-6">
              {/* TITLE */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Event Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={event.title}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* DATE + TIME */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-[#061B3A]"
                  >
                    Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={event.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-semibold text-[#061B3A]"
                  >
                    Time
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="text"
                    value={event.time}
                    onChange={handleChange}
                    placeholder="10:00 AM - 1:00 PM"
                    required
                    className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                  />
                </div>
              </div>

              {/* LOCATION */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={event.location}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={event.description}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full resize-none border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm leading-7 text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* IMAGE */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Event Image URL
                </label>

                <input
                  id="image"
                  name="image"
                  type="url"
                  value={event.image}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />

                <p className="mt-2 text-xs text-[#061B3A]/40">
                  Use a publicly accessible image URL.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* STATUS */}
            <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-[#061B3A]">
                Publishing
              </h2>

              <p className="mt-1 text-sm text-[#061B3A]/45">
                Control whether visitors can see this event.
              </p>

              <div className="mt-5">
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={event.status}
                  onChange={handleChange}
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#061B3A] outline-none focus:border-[#083e74]"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>

            {/* IMAGE PREVIEW */}
            {event.image && (
              <div className="overflow-hidden rounded-2xl border border-[#061B3A]/10 bg-white shadow-sm">
                <div className="border-b border-[#061B3A]/10 px-6 py-4">
                  <h2 className="text-base font-semibold text-[#061B3A]">
                    Image Preview
                  </h2>
                </div>

                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            )}

            {/* SAVE */}
            <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-6 shadow-sm">
              {message && (
                <div
                  className={`mb-4 border px-4 py-3 text-sm ${
                    message.includes("successfully")
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-[#083e74] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#061B3A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}