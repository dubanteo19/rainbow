import { cn } from "@/lib/utils";
import type { FC } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";
interface CarouselSectionProps {
  className?: string;
}
export const CarouselSection: FC<CarouselSectionProps> = ({ className }) => {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={cn(className, "flex justify-center bg-foreground -mx-88 ")}>
      <Slider className="w-[800px] h-[500px] overflow-hidden" {...settings}>
        <div>
          <img src="/home/carousel1.jpg" className="h-[500px] w-full object-fill" />
        </div>
        <div>
          <img src="/home/carousel2.jpg" className=" h-[500px] w-full object-fill" />
        </div>
      </Slider>
    </div>
  );
};
