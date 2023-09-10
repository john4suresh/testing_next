import Header from "@/components/header";
import Drawer from "@/components/drawer";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-blue-veryLight">
      <Header />
      <main className="relative flex min-w-full gap-6 py-[70px]">
        <Drawer />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
