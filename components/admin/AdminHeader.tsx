"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/events": "Events",
  "/admin/sermons": "Sermons",
  "/admin/ministries": "Ministries",
  "/admin/gallery": "Gallery",
  "/admin/announcements": "Announcements",
  "/admin/messages": "Messages",
  "/admin/church-info": "Church Information",
  "/admin/settings": "Settings",
};

export default function AdminHeader() {
  const pathname = usePathname();

  const title =
    pageTitles[pathname] ||
    Object.entries(pageTitles).find(
      ([path]) => path !== "/admin" && pathname.startsWith(path)
    )?.[1] ||
    "Dashboard";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#083e74]/10 bg-white px-5 md:px-8">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A5A]">
          CFF Administration
        </p>

        <h1 className="mt-1 text-xl font-semibold text-[#061B3A]">
          {title}
        </h1>

      </div>


      {/* ADMIN PROFILE */}
      <div className="flex items-center gap-3">

        <div className="hidden text-right sm:block">

          <p className="text-sm font-semibold text-[#061B3A]">
            Administrator
          </p>

          <p className="text-xs text-[#061B3A]/45">
            CFF Juja
          </p>

        </div>

        <div className="flex h-10 w-10 items-center justify-center bg-[#083e74] text-sm font-bold text-white">
          A
        </div>

      </div>

    </header>
  );
}