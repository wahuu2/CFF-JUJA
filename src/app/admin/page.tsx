import Link from "next/link";

const stats = [
  {
    label: "Events",
    value: "8",
    description: "Published events",
    href: "/admin/events",
  },
  {
    label: "Sermons",
    value: "24",
    description: "Available sermons",
    href: "/admin/sermons",
  },
  {
    label: "Gallery",
    value: "156",
    description: "Uploaded photos",
    href: "/admin/gallery",
  },
  {
    label: "Messages",
    value: "12",
    description: "Contact messages",
    href: "/admin/messages",
  },
];

const recentEvents = [
  {
    title: "Sunday Worship Service",
    date: "October 11, 2026",
    status: "Published",
  },
  {
    title: "Youth Fellowship",
    date: "October 18, 2026",
    status: "Published",
  },
  {
    title: "Men's Fellowship",
    date: "October 24, 2026",
    status: "Draft",
  },
];

const recentSermons = [
  {
    title: "Walking by Faith",
    preacher: "Pastor",
    date: "October 4, 2026",
  },
  {
    title: "The Power of Prayer",
    preacher: "Pastor",
    date: "September 27, 2026",
  },
  {
    title: "Growing in Christ",
    preacher: "Pastor",
    date: "September 20, 2026",
  },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl">

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <div className="mb-8">

        <p className="text-sm text-[#061B3A]/45">
          Welcome back, Administrator.
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#061B3A] md:text-4xl">
          CFF Juja Dashboard
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#061B3A]/50">
          Manage your church website, events, sermons, ministries and
          other content from one place.
        </p>

      </div>


      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group border border-[#083e74]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#FF5A5A]/40 hover:shadow-lg"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#083e74]/45">
                  {stat.label}
                </p>

                <p className="mt-4 text-4xl font-semibold text-[#061B3A]">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-[#061B3A]/40">
                  {stat.description}
                </p>

              </div>

              <span className="text-lg text-[#FF5A5A] transition group-hover:translate-x-1">
                →
              </span>

            </div>

          </Link>
        ))}

      </div>


      {/* =====================================================
          QUICK ACTIONS
      ====================================================== */}
      <section className="mt-8 border border-[#083e74]/10 bg-white p-6 md:p-7">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
              Quick Actions
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#061B3A]">
              Manage website content
            </h3>

          </div>

        </div>


        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/admin/events/new"
            className="flex items-center justify-between border border-[#083e74]/10 px-5 py-4 text-sm font-semibold text-[#083e74] transition hover:border-[#FF5A5A] hover:text-[#FF5A5A]"
          >
            Add Event
            <span>+</span>
          </Link>

          <Link
            href="/admin/sermons/new"
            className="flex items-center justify-between border border-[#083e74]/10 px-5 py-4 text-sm font-semibold text-[#083e74] transition hover:border-[#FF5A5A] hover:text-[#FF5A5A]"
          >
            Add Sermon
            <span>+</span>
          </Link>

          <Link
            href="/admin/gallery"
            className="flex items-center justify-between border border-[#083e74]/10 px-5 py-4 text-sm font-semibold text-[#083e74] transition hover:border-[#FF5A5A] hover:text-[#FF5A5A]"
          >
            Upload Photos
            <span>+</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          RECENT CONTENT
      ====================================================== */}
      <div className="mt-8 grid gap-8 xl:grid-cols-2">

        {/* RECENT EVENTS */}
        <section className="border border-[#083e74]/10 bg-white">

          <div className="flex items-center justify-between border-b border-[#083e74]/10 px-6 py-5">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A5A]">
                Events
              </p>

              <h3 className="mt-1 text-lg font-semibold text-[#061B3A]">
                Recent Events
              </h3>

            </div>

            <Link
              href="/admin/events"
              className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
            >
              View all →
            </Link>

          </div>


          <div className="divide-y divide-[#083e74]/10">

            {recentEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >

                <div>

                  <p className="text-sm font-semibold text-[#061B3A]">
                    {event.title}
                  </p>

                  <p className="mt-1 text-xs text-[#061B3A]/40">
                    {event.date}
                  </p>

                </div>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wide ${
                    event.status === "Published"
                      ? "text-green-600"
                      : "text-[#FF5A5A]"
                  }`}
                >
                  {event.status}
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* RECENT SERMONS */}
        <section className="border border-[#083e74]/10 bg-white">

          <div className="flex items-center justify-between border-b border-[#083e74]/10 px-6 py-5">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5A5A]">
                Sermons
              </p>

              <h3 className="mt-1 text-lg font-semibold text-[#061B3A]">
                Recent Sermons
              </h3>

            </div>

            <Link
              href="/admin/sermons"
              className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
            >
              View all →
            </Link>

          </div>


          <div className="divide-y divide-[#083e74]/10">

            {recentSermons.map((sermon) => (
              <div
                key={sermon.title}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >

                <div>

                  <p className="text-sm font-semibold text-[#061B3A]">
                    {sermon.title}
                  </p>

                  <p className="mt-1 text-xs text-[#061B3A]/40">
                    {sermon.preacher} · {sermon.date}
                  </p>

                </div>

                <Link
                  href="/admin/sermons"
                  className="text-xs font-semibold text-[#083e74] hover:text-[#FF5A5A]"
                >
                  Edit
                </Link>

              </div>
            ))}

          </div>

        </section>

      </div>

    </div>
  );
}