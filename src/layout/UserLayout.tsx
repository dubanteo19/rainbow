import { Footer } from "@/page/Footer";
import { Header } from "@/page/Header";
import { ActionGroup } from "@/page/home/ActionGroup";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="flex flex-col    min-h-screen  w-full   bg-background overflow-hidden relative">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ActionGroup />
    </div>
  );
};
