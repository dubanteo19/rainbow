import { Footer } from "@/page/Footer";
import { Header } from "@/page/Header";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="flex flex-col  md:px-[200px]  min-h-screen  w-full   bg-background">
      <Header />
      <main className="flex-1  px-2 md:px-[100px] max-w-screen mx-auto w-full  mt-[50px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
