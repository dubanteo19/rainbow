import { teachers } from "@/data/teachers";
import type { Teacher } from "@/type/teacher";
import type { FC } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TeacherCard: FC<Teacher> = ({
  id,
  image,
  name,
  certificate,
  education,
}) => {
  return (
    <div className="border shadow flex flex-col gap-2 mr-3 min-h-[310px]">
      <div id={id} className=" w-full aspect-[3/4] overflow-hidden">
        <img src={image} className="w-full h-full object-cover object-center" />
      </div>
      <div className="text-center uppercase px-2 py-4">
        <p className="text-xs">{name}</p>
        <p className="text-[11px]  mt-2 text-gray-500">{certificate}</p>
        <p className="text-[10px] mt-2 font-bold text-gray-500">{education}</p>
      </div>
    </div>
  );
};
export const TeachersSection = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    slidesToShow: 5, //default
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, //tablet
      { breakpoint: 768, settings: { slidesToShow: 1 } }, //mobile
    ],
  };
  return (
    <div className="py-10 w-full px-4 md:px-0">
      <div className="text-center">
        <h4 className=" font-bold">Our Teachers</h4>
        <p className="text-sm text-gray-500 py-2 md:py-6">
          Learning opens the door to endless opportunities.
        </p>
      </div>
      <div className="slider-container py-5">
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
