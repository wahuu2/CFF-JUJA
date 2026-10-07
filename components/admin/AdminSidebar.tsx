"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: "⌂",
  },
  {
    label: "Events",
    href: "/admin/events",
    icon: "◷",
  },
  {
    label: "Sermons",
    href: "/admin/sermons",
    icon: "▶",
  },
  {
    label: "Ministries",
    href: "/admin/ministries",
    icon: "✦",
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: "▧",
  },
  {
    label: "Announcements",
    href: "/admin/announcements",
    icon: "!",
  },
  {
    label: "Messages",
    href: "/admin/messages",
    icon: "✉",
  },
];

const settings = [
  {
    label: "Church Information",
    href: "/admin/church-info",
    icon: "●",
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: "⚙",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-white/10 bg-[#061B3A] lg:flex lg:flex-col">

      {/* LOGO */}
      <div className="flex h-20 items-center border-b border-white/10 px-6">

        <Link href="/admin" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center bg-white">
            <span className="text-lg font-bold text-[#083e74]">
              ✝
            </span>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              CFF JUJA
            </p>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-white/40">
              Administration
            </p>
          </div>

        </Link>

      </div>


      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-4 py-7">

        <p className="px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
          Main Menu
        </p>

        <nav className="mt-4 space-y-1">

          {navigation.map((item) => {

            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 text-sm transition ${
                  active
                    ? "bg-[#FF5A5A] text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >

                <span
                  className={`flex h-7 w-7 items-center justify-center text-sm ${
                    active
                      ? "text-white"
                      : "text-white/40"
                  }`}
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>

              </Link>
            );
          })}

        </nav>


        {/* SETTINGS */}
        <p className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
          Configuration
        </p>

        <nav className="mt-4 space-y-1">

          {settings.map((item) => {

            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 text-sm transition ${
                  active
                    ? "bg-[#FF5A5A] text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >

                <span className="flex h-7 w-7 items-center justify-center text-sm text-white/40">
                  {item.icon}
                </span>

                <span>{item.label}</span>

              </Link>
            );
          })}

        </nav>

      </div>


      {/* BACK TO WEBSITE */}
      <div className="border-t border-white/10 p-4">

        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-3 text-sm text-white/50 transition hover:text-white"
        >
          <span>←</span>
          Back to website
        </Link>

      </div>

    </aside>
  );
}