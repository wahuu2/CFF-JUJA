"use client";

import { useState } from "react";

const departments = [
  {
    number: "01",
    title: "Church Ministries",
    description:
      "Ministries that help us worship, grow in faith, serve others and build a strong church family.",
    items: [
      {
        name: "Worship & Praise",
        href: "/ministries/music",
      },
      {
        name: "Children's Ministry",
        href: "/departments/children",
      },
      {
        name: "Youth Ministry",
        href: "/departments/youth",
      },
      {
        name: "Men's Ministry",
        href: "/departments/men",
      },
      {
        name: "Women's Ministry",
        href: "/departments/women",
      },
      {
        name: "Prayer Ministry",
        href: "/departments/prayer",
      },
      {
        name: "Evangelism & Missions",
        href: "/ministries/evangelism",
      },
      {
        name: "Media & ICT",
        href: "/ministries/media",
      },
      {
        name: "Ushering",
        href: "/ministries/ushering",
      },
      {
        name: "Intercessory",
        href: "/ministries/intercessory",
      },
      {
        name: "Hospitality ",
        href: "/ministries/hospitality",
      },
    ],
  },
  {
    number: "02",
    title: "Boards",
    description:
      "Leadership structures that provide spiritual direction, oversight and accountability within the church.",
    items: [
      {
        name: "Church Leadership Board",
        href: "/departments/boards/church-leadership",
      },
      {
        name: "Elders",
        href: "/departments/boards/elders",
      },
      {
        name: "Deacons",
        href: "/departments/boards/deacons",
      },
      {
        name: "Ministry Leadership",
        href: "/departments/boards/ministry-leadership",
      },
    ],
  },
  {
    number: "03",
    title: "Committees",
    description:
      "Teams that support the church through planning, administration, development and service.",
    items: [
      {
        name: "Finance Committee",
        href: "/departments/committees/finance",
      },
      {
        name: "Welfare Committee",
        href: "/departments/committees/welfare",
      },
      {
        name: "Events Committee",
        href: "/departments/committees/events",
      },
      {
        name: "Development Committee",
        href: "/departments/committees/development",
      },
      {
        name: "Discipleship Committee",
        href: "/departments/committees/discipleship",
      },
    ],
  },
  {
    number: "04",
    title: "Groups",
    description:
      "Smaller communities where people connect, fellowship, grow together and support one another.",
    items: [
      {
        name: "Men's Groups",
        href: "/departments/groups/men",
      },
      {
        name: "Women's Groups",
        href: "/departments/groups/women",
      },
      {
        name: "Youth Groups",
        href: "/departments/groups/youth",
      },
      {
        name: "Young Adults",
        href: "/departments/groups/young-adults",
      },
      {
        name: "Small Groups",
        href: "/departments/groups/small-groups",
      },
      {
        name: "Fellowship Groups",
        href: "/departments/groups/fellowship",
      },
    ],
  },
];

export default function ChurchDepartments() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="ministries"
      className="bg-[#F7F9FC] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C62828]">
            Get Involved
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#123B63] md:text-5xl lg:text-6xl">
            Church Ministries
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            There is a place for everyone at CFF Juja. Discover the ministries,
            boards, committees and groups where you can serve, connect and grow
            in faith.
          </p>
        </div>

        {/* DEPARTMENT CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {departments.map((department, index) => {
            const isActive = active === index;

            return (
              <div
                key={department.title}
                className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isActive
                    ? "border-[#123B63] bg-[#123B63] shadow-xl"
                    : "border-gray-200 bg-white hover:-translate-y-1 hover:border-[#123B63]/30 hover:shadow-lg"
                }`}
              >
                {/* CARD TOP */}
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  className="w-full p-7 text-left sm:p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className={`text-sm font-bold tracking-wider ${
                        isActive ? "text-white/50" : "text-[#C62828]"
                      }`}
                    >
                      {department.number}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl transition-transform duration-300 ${
                        isActive
                          ? "rotate-45 border-white/20 bg-white/10 text-white"
                          : "border-gray-200 bg-gray-50 text-[#123B63]"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <h3
                    className={`mt-10 text-2xl font-bold sm:text-3xl ${
                      isActive ? "text-white" : "text-[#123B63]"
                    }`}
                  >
                    {department.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-xl text-sm leading-6 sm:text-base ${
                      isActive ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {department.description}
                  </p>
                </button>

                {/* EXPANDED CONTENT */}
                <div
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-7 pb-8 pt-6 sm:px-8 md:px-10">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                        Areas
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {department.items.map((item) => (
  <a
    key={item.href}
    href={item.href}
    className="group/item flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/15"
  >
    <span className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />
      {item.name}
    </span>

    <span className="text-white/40 transition-transform group-hover/item:translate-x-1 group-hover/item:text-white">
      →
    </span>
  </a>
))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#123B63] p-7 sm:p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
              Find your place
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Ready to get involved?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
              Connect with a ministry or group and become part of what God is
              doing at CFF Juja.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A91F1F]"
          >
            Get Connected
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}