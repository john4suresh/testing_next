import Drawer from "@/components/drawer";
import Header from "@/components/header";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container flex min-w-full gap-6 py-[70px]">
        <Drawer />
        <div className="flex-1">{children}</div>
      </main>
    </>
  );
}
