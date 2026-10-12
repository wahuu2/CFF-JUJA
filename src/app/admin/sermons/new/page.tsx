"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddSermonPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    speaker: "",
    date: "",
    scripture: "",
    description: "",
    videoUrl: "",
    audioUrl: "",
    image: "",
    status: "Draft",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/sermons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create sermon");
      }

      setMessage("Sermon created successfully.");

      setTimeout(() => {
        router.push("/admin/sermons");
      }, 800);
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to create sermon."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Sermons
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
            Add Sermon
          </h1>

          <p className="mt-2 text-sm text-[#061B3A]/50">
            Add a new sermon to the church website.
          </p>
        </div>

        <Link
          href="/admin/sermons"
          className="inline-flex items-center justify-center border border-[#061B3A]/10 bg-white px-5 py-3 text-sm font-semibold text-[#061B3A] transition hover:bg-[#F1F4F8]"
        >
          ← Back to Sermons
        </Link>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* MAIN */}
          <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 border-b border-[#061B3A]/10 pb-5">
              <h2 className="text-lg font-semibold text-[#061B3A]">
                Sermon Information
              </h2>

              <p className="mt-1 text-sm text-[#061B3A]/45">
                Enter the details of the sermon or teaching.
              </p>
            </div>

            <div className="space-y-6">
              {/* TITLE */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Sermon Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Walking by Faith"
                  required
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* SPEAKER + DATE */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="speaker"
                    className="mb-2 block text-sm font-semibold text-[#061B3A]"
                  >
                    Speaker
                  </label>

                  <input
                    id="speaker"
                    name="speaker"
                    type="text"
                    value={form.speaker}
                    onChange={handleChange}
                    placeholder="e.g. Rev. John Doe"
                    required
                    className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                  />
                </div>

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
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                  />
                </div>
              </div>

              {/* SCRIPTURE */}
              <div>
                <label
                  htmlFor="scripture"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Scripture
                </label>

                <input
                  id="scripture"
                  name="scripture"
                  type="text"
                  value={form.scripture}
                  onChange={handleChange}
                  placeholder="e.g. Hebrews 11:1-6"
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
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write a short description of the sermon..."
                  required
                  rows={8}
                  className="w-full resize-none border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm leading-7 text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* VIDEO */}
              <div>
                <label
                  htmlFor="videoUrl"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Video URL
                  <span className="ml-2 text-xs font-normal text-[#061B3A]/40">
                    Optional
                  </span>
                </label>

                <input
                  id="videoUrl"
                  name="videoUrl"
                  type="url"
                  value={form.videoUrl}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* AUDIO */}
              <div>
                <label
                  htmlFor="audioUrl"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Audio URL
                  <span className="ml-2 text-xs font-normal text-[#061B3A]/40">
                    Optional
                  </span>
                </label>

                <input
                  id="audioUrl"
                  name="audioUrl"
                  type="url"
                  value={form.audioUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:bg-white"
                />
              </div>

              {/* IMAGE */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-semibold text-[#061B3A]"
                >
                  Sermon Image URL
                  <span className="ml-2 text-xs font-normal text-[#061B3A]/40">
                    Optional
                  </span>
                </label>

                <input
                  id="image"
                  name="image"
                  type="url"
                  value={form.image}
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

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* PUBLISHING */}
            <div className="rounded-2xl border border-[#061B3A]/10 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-[#061B3A]">
                Publishing
              </h2>

              <p className="mt-1 text-sm text-[#061B3A]/45">
                Choose whether this sermon should appear publicly.
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
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#061B3A] outline-none focus:border-[#083e74]"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>

            {/* PREVIEW */}
            {form.image && (
              <div className="overflow-hidden rounded-2xl border border-[#061B3A]/10 bg-white shadow-sm">
                <div className="border-b border-[#061B3A]/10 px-6 py-4">
                  <h2 className="text-base font-semibold text-[#061B3A]">
                    Image Preview
                  </h2>
                </div>

                <img
                  src={form.image}
                  alt="Sermon preview"
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
                {saving ? "Creating Sermon..." : "Create Sermon"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}