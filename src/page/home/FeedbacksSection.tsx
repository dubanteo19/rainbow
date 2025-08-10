import { Container } from "@/components/ui/container";
import { feedbacks } from "@/data/feedbacks";
import type { Feedback } from "@/type/feedback";
import { QuoteIcon } from "lucide-react";
import type { FC } from "react";
import Slider, { type Settings } from "react-slick";

const FeedbackItem: FC<Feedback> = ({ content, authorImage, authorName }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-100 px-8 py-8 rounded relative">
        <QuoteIcon className="text-primary absolute right-2 top-2 " />
        <p className="text-sm text-gray-500 italic ">{content}</p>
      </div>
      <div className="flex  gap-2 md:gap-6 items-center ">
        <div className="w-15 h-auto aspect-square md:w-20  rounded-full overflow-hidden">
          <img className="w-full h-full object-fill" src={authorImage} />
        </div>
        <div>
          <p className="uppercase text-sm text-gray-500">{authorName}</p>
          <p className="text-xs text-gray-500 mt-2">Parents</p>
        </div>
      </div>
    </div>
  );
};
export const FeedbacksSection = () => {
  const settings: Settings = {
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <h3 className="text-center">What Our Customers Say About Us</h3>
        <div className="slider-container mt-5">
          <Slider {...settings}>
            {feedbacks.map((feedback) => (
              <FeedbackItem key={feedback.id} {...feedback} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
