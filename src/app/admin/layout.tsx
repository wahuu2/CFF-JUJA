import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F1F4F8] text-[#061B3A]">

      {/* =========================================================
          ADMIN SIDEBAR
      ========================================================= */}
      <AdminSidebar />

      {/* =========================================================
          ADMIN WORKSPACE
      ========================================================= */}
      <div className="min-h-screen lg:pl-64">

        {/* TOP HEADER */}
        <AdminHeader />

        {/* CONTENT */}
        <main className="px-5 py-6 md:px-8 md:py-8 lg:px-10">
          <div className="mx-auto w-full max-w-[1500px]">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}