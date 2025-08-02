import { ImageContainer } from "@/components/common/ImageContainer";
import type { FC } from "react";

interface Feedback {
  id: string;
  content: string;
  authorName: string;
  authorImage: string;
}
const FeedbackItem: FC<Feedback> = ({ content, authorImage, authorName }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-gray-500 p-4">
        <p className="text-sm text-gray-800">{content}</p>
      </div>
      <div className="flex flex-col items-center gap-20">
        <ImageContainer src={authorImage} />
        <p className="uppercase">{authorName}</p>
      </div>
    </div>
  );
};
export const FeedbacksSection = () => {
  return (
    <div>
      <h2 className="text-center">What Our Customers Say About Us</h2>

    </div>
  );
};
