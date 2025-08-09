import { cn } from "@/lib/utils";
import type { FC } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";
import { Container } from "@/components/ui/container";
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
  const images = [
    "/home/carousel1.avif",
    "/home/carousel2.avif",
    "/home/carousel3.avif",
    "/home/carousel4.avif",
    "/home/carousel5.avif",
  ];
  return (
    <div className={cn(className, "w-full  bg-foreground max-h-[500px]")}>
      <Container>
        <Slider {...settings}>
          {images.map((src) => (
            <div>
              <picture>
                <source srcSet={src} type="image/avif" />
                <img
                  className="h-[200px] md:h-[500px] object-fill w-full"
                  loading="lazy"
                  src={src}
                />
              </picture>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};
