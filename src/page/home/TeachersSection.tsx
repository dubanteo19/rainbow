import { ImageContainer } from "@/components/common/ImageContainer";
import { teachers } from "@/data/teachers";
import type { Teacher } from "@/type/teacher";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { FC } from "react";
import Slider, { type Settings } from "react-slick";

const TeacherCard: FC<Teacher> = ({
  id,
  image,
  name,
  certificate,
  education,
}) => {
  return (
    <div className="border shadow flex flex-col gap-2 mr-3 min-h-[310px]">
      <div id={id} className="w-500px">
        <ImageContainer src={image} />
      </div>
      <div className="text-center uppercase px-2 py-4">
        <p>{name}</p>
        <p className="text-sm text-gray-500">{certificate}</p>
        <p className="text-[10px] mt-4 font-bold text-gray-500">{education}</p>
      </div>
    </div>
  );
};
export const TeachersSection = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesPerRow:1,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="py-10 w-full">
      <div className="text-center">
        <h4 className=" font-bold">Our Teachers</h4>
        <p className="text-sm text-gray-500 py-6">
          Learning opens the door to endless opportunities.
        </p>
      </div>
      <div className="slider-container py-5">
        <Slider {...settings} >
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </Slider>
      </div>
      <blockquote className="text-center text-sm text-gray-500">
        "Let failure guide you – Let questions shape you – Let every soul you
        meet inspire you" – Cô tin rằng thất bại là người dẫn đường, câu hỏi là
        động lực để trưởng thành, và mỗi con người đều có thể là nguồn cảm hứng.
      </blockquote>
    </div>
  );
};
