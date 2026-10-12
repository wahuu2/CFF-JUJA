"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Sermon = {
  _id: string;
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  description: string;
  videoUrl: string;
  audioUrl: string;
  image: string;
  status: "Draft" | "Published";
};

export default function EditSermonPage() {
  const params = useParams();
  const router = useRouter();

  const [sermon, setSermon] = useState<Sermon | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSermon() {
      try {
        const response = await fetch(`/api/sermons/${params.id}`);

        if (!response.ok) {
          throw new Error("Sermon not found");
        }

        const data = await response.json();
        setSermon(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load sermon.");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchSermon();
    }
  }, [params.id]);

  function updateField(field: keyof Sermon, value: string) {
    if (!sermon) return;

    setSermon({
      ...sermon,
      [field]: value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!sermon) return;

    setSaving(true);
    setError("");

    try {
      const response = await fetch(`/api/sermons/${sermon._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: sermon.title,
          speaker: sermon.speaker,
          date: sermon.date,
          scripture: sermon.scripture,
          description: sermon.description,
          videoUrl: sermon.videoUrl,
          audioUrl: sermon.audioUrl,
          image: sermon.image,
          status: sermon.status,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update sermon");
      }

      router.push("/admin/sermons");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Unable to save changes. Please try again.");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-sm font-medium text-[#061B3A]/50">
          Loading sermon...
        </div>
      </div>
    );
  }

  if (error || !sermon) {
    return (
      <div className="rounded-2xl border border-red-100 bg-white p-8">
        <p className="text-sm font-semibold text-red-600">
          {error || "Sermon not found."}
        </p>

        <button
          onClick={() => router.push("/admin/sermons")}
          className="mt-5 rounded-xl bg-[#061B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083e74]"
        >
          Back to Sermons
        </button>
      </div>
    );
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
            Edit Sermon
          </h1>

          <p className="mt-2 text-sm text-[#061B3A]/50">
            Update the sermon information and publishing status.
          </p>
        </div>

        <button
          onClick={() => router.push("/admin/sermons")}
          className="inline-flex items-center justify-center rounded-xl border border-[#061B3A]/10 bg-white px-5 py-3 text-sm font-semibold text-[#061B3A] transition hover:bg-[#F1F4F8]"
        >
          ← Back to Sermons
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* MAIN FORM */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#061B3A]/8 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-7">
                <h2 className="text-lg font-semibold text-[#061B3A]">
                  Sermon Information
                </h2>

                <p className="mt-1 text-sm text-[#061B3A]/45">
                  Basic information about the sermon.
                </p>
              </div>

              <div className="space-y-5">
                {/* TITLE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Sermon Title
                  </label>

                  <input
                    type="text"
                    value={sermon.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>

                {/* SPEAKER + DATE */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                      Speaker
                    </label>

                    <input
                      type="text"
                      value={sermon.speaker}
                      onChange={(e) =>
                        updateField("speaker", e.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                      Date
                    </label>

                    <input
                      type="date"
                      value={sermon.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      required
                      className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                    />
                  </div>
                </div>

                {/* SCRIPTURE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Scripture
                  </label>

                  <input
                    type="text"
                    value={sermon.scripture}
                    onChange={(e) =>
                      updateField("scripture", e.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Description
                  </label>

                  <textarea
                    value={sermon.description}
                    onChange={(e) =>
                      updateField("description", e.target.value)
                    }
                    required
                    rows={7}
                    className="w-full resize-none rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm leading-7 text-[#061B3A] outline-none transition focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>
              </div>
            </div>

            {/* MEDIA */}
            <div className="rounded-2xl border border-[#061B3A]/8 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-7">
                <h2 className="text-lg font-semibold text-[#061B3A]">
                  Media
                </h2>

                <p className="mt-1 text-sm text-[#061B3A]/45">
                  Add links to the sermon video, audio and image.
                </p>
              </div>

              <div className="space-y-5">
                {/* VIDEO */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Video URL
                  </label>

                  <input
                    type="url"
                    value={sermon.videoUrl}
                    onChange={(e) =>
                      updateField("videoUrl", e.target.value)
                    }
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>

                {/* AUDIO */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Audio URL
                  </label>

                  <input
                    type="url"
                    value={sermon.audioUrl}
                    onChange={(e) =>
                      updateField("audioUrl", e.target.value)
                    }
                    placeholder="https://..."
                    className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>

                {/* IMAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                    Image URL
                  </label>

                  <input
                    type="url"
                    value={sermon.image}
                    onChange={(e) => updateField("image", e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-[#061B3A]/30 focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                  />
                </div>

                {/* IMAGE PREVIEW */}
                {sermon.image && (
                  <div className="overflow-hidden rounded-xl border border-[#061B3A]/10">
                    <div className="border-b border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/45">
                        Image Preview
                      </p>
                    </div>

                    <img
                      src={sermon.image}
                      alt="Sermon preview"
                      className="h-64 w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* PUBLISHING */}
            <div className="rounded-2xl border border-[#061B3A]/8 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#061B3A]">
                Publishing
              </h2>

              <p className="mt-1 text-sm text-[#061B3A]/45">
                Control whether visitors can see this sermon.
              </p>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold text-[#061B3A]">
                  Status
                </label>

                <select
                  value={sermon.status}
                  onChange={(e) =>
                    updateField(
                      "status",
                      e.target.value as "Draft" | "Published"
                    )
                  }
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-4 py-3 text-sm font-medium text-[#061B3A] outline-none transition focus:border-[#083e74] focus:ring-2 focus:ring-[#083e74]/10"
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              <div className="mt-5 rounded-xl bg-[#F1F4F8] p-4">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-2.5 w-2.5 rounded-full ${
                      sermon.status === "Published"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#061B3A]">
                      {sermon.status === "Published"
                        ? "Published"
                        : "Draft"}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#061B3A]/45">
                      {sermon.status === "Published"
                        ? "This sermon is visible on the public website."
                        : "This sermon is saved but hidden from visitors."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="rounded-2xl border border-[#061B3A]/8 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#061B3A]">
                Actions
              </h2>

              <div className="mt-5 space-y-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full rounded-xl bg-[#083e74] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#061B3A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving Changes..." : "Save Changes"}
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/admin/sermons")}
                  className="w-full rounded-xl border border-[#061B3A]/10 bg-white px-5 py-3.5 text-sm font-semibold text-[#061B3A] transition hover:bg-[#F1F4F8]"
                >
                  Cancel
                </button>
              </div>

              {error && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}