import { teacherQuotes } from "@/data/teacher-quotes";
import Slider, { type Settings } from "react-slick";

export const TeacherQuotes = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    autoplay: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };
  return (
    <div className="py-6 mt-4">
      <Slider {...settings}>
        {teacherQuotes.map((quote, index) => (
          <div key={index} className="text-center space-y-4">
            <p className="uppercase text-gray-500 ">{quote.author}</p>
            <p className="text-sm text-gray-400">Teacher</p>
            <p className="italic text-gray-500">{quote.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
