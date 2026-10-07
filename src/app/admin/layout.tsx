import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F8FC]">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN AREA */}
      <div className="lg:pl-64">

        <AdminHeader />

        <main className="p-5 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}