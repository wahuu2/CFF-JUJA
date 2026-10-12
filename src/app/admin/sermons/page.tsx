"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function AdminSermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function fetchSermons() {
    try {
      setLoading(true);

      const response = await fetch("/api/sermons");

      if (!response.ok) {
        throw new Error("Failed to fetch sermons");
      }

      const data = await response.json();
      setSermons(data);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load sermons.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSermons();
  }, []);

  async function handleDelete(id: string, title: string) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setMessage("");

      const response = await fetch(`/api/sermons/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete sermon");
      }

      setSermons((current) =>
        current.filter((sermon) => sermon._id !== id)
      );

      setMessage("Sermon deleted successfully.");
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to delete sermon."
      );
    } finally {
      setDeletingId(null);
    }
  }

  async function handleStatusChange(sermon: Sermon) {
    const newStatus =
      sermon.status === "Published" ? "Draft" : "Published";

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
          status: newStatus,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update sermon status"
        );
      }

      setSermons((current) =>
        current.map((item) =>
          item._id === sermon._id
            ? { ...item, status: newStatus }
            : item
        )
      );
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to update sermon status."
      );
    }
  }

  const filteredSermons = sermons.filter((sermon) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      sermon.title.toLowerCase().includes(searchTerm) ||
      sermon.speaker.toLowerCase().includes(searchTerm) ||
      sermon.scripture.toLowerCase().includes(searchTerm);

    const matchesStatus =
      statusFilter === "All" || sermon.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const publishedCount = sermons.filter(
    (sermon) => sermon.status === "Published"
  ).length;

  const draftCount = sermons.filter(
    (sermon) => sermon.status === "Draft"
  ).length;

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
      {/* HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
            Content Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A]">
            Sermons
          </h1>

          <p className="mt-2 text-sm text-[#061B3A]/50">
            Manage sermons, teachings and messages.
          </p>
        </div>

        <Link
          href="/admin/sermons/new"
          className="inline-flex items-center justify-center bg-[#083e74] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061B3A]"
        >
          + Add Sermon
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
            Total Sermons
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#061B3A]">
            {loading ? "—" : sermons.length}
          </p>
        </div>

        <div className="border border-[#061B3A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
            Published
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#083e74]">
            {loading ? "—" : publishedCount}
          </p>
        </div>

        <div className="border border-[#061B3A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
            Drafts
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#D62828]">
            {loading ? "—" : draftCount}
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="mb-5 flex flex-col gap-3 border border-[#061B3A]/10 bg-white p-4 shadow-sm md:flex-row">
        <input
          type="text"
          placeholder="Search by title, speaker or scripture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full flex-1 border border-[#061B3A]/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[#061B3A] outline-none focus:border-[#083e74]"
        />

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

      {/* TABLE */}
      <div className="overflow-hidden border border-[#061B3A]/10 bg-white shadow-sm">
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-[#061B3A]/45">
              Loading sermons...
            </p>
          </div>
        ) : filteredSermons.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center bg-[#F1F4F8] text-2xl text-[#083e74]">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#061B3A]">
              No sermons found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#061B3A]/45">
              Try changing your search or filter, or add a new sermon.
            </p>

            <Link
              href="/admin/sermons/new"
              className="mt-5 bg-[#083e74] px-5 py-3 text-sm font-semibold text-white hover:bg-[#061B3A]"
            >
              Add Sermon
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left">
              <thead>
                <tr className="border-b border-[#061B3A]/10 bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Sermon
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Speaker
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Date
                  </th>

                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#061B3A]/40">
                    Scripture
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
                {filteredSermons.map((sermon) => (
                  <tr
                    key={sermon._id}
                    className="border-b border-[#061B3A]/10 last:border-0 hover:bg-[#FAFBFC]"
                  >
                    {/* SERMON */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {sermon.image ? (
                          <img
                            src={sermon.image}
                            alt=""
                            className="h-14 w-20 shrink-0 object-cover"
                          />
                        ) : (
                          <div className="flex h-14 w-20 shrink-0 items-center justify-center bg-[#F1F4F8] text-xs text-[#061B3A]/30">
                            No image
                          </div>
                        )}

                        <div className="max-w-xs">
                          <p className="truncate text-sm font-semibold text-[#061B3A]">
                            {sermon.title}
                          </p>

                          <p className="mt-1 truncate text-xs text-[#061B3A]/40">
                            {sermon.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SPEAKER */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-[#061B3A]/65">
                        {sermon.speaker}
                      </p>
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5">
                      <p className="text-sm text-[#061B3A]/65">
                        {formatDate(sermon.date)}
                      </p>
                    </td>

                    {/* SCRIPTURE */}
                    <td className="px-6 py-5">
                      <p className="max-w-[180px] truncate text-sm text-[#061B3A]/65">
                        {sermon.scripture}
                      </p>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <button
                        onClick={() => handleStatusChange(sermon)}
                        title="Click to change status"
                        className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-semibold transition ${
                          sermon.status === "Published"
                            ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                            : "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            sermon.status === "Published"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }`}
                        />

                        {sermon.status}
                      </button>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        {sermon.status === "Published" && (
                          <Link
                            href={`/sermons/${sermon._id}`}
                            target="_blank"
                            className="border border-[#061B3A]/10 px-3 py-2 text-xs font-semibold text-[#061B3A]/65 transition hover:border-[#083e74] hover:text-[#083e74]"
                          >
                            View
                          </Link>
                        )}

                        <Link
                          href={`/admin/sermons/${sermon._id}`}
                          className="border border-[#061B3A]/10 px-3 py-2 text-xs font-semibold text-[#061B3A]/65 transition hover:border-[#083e74] hover:text-[#083e74]"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(sermon._id, sermon.title)
                          }
                          disabled={deletingId === sermon._id}
                          className="border border-red-100 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === sermon._id
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

      {/* RESULTS */}
      {!loading && filteredSermons.length > 0 && (
        <p className="mt-4 text-xs text-[#061B3A]/40">
          Showing {filteredSermons.length} of {sermons.length} sermons
        </p>
      )}
    </div>
  );
}