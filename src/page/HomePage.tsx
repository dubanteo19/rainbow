import { useEffect } from "react";
import { CarouselSection } from "./home/CarouselSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-2 w-full ">
      <CarouselSection />
    </div>
  );
};
