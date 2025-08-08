import type { EducationFactor } from "@/type/education-factor";
import { Heart, Puzzle, Rocket, Star } from "lucide-react";
export const educationFactors: EducationFactor[] = [
  {
    icon: <Heart />,
    title: "Tận tâm",
    description:
      "Chúng tôi tin rằng mỗi học viên đều xứng đáng nhận được sự quan tâm và hỗ trợ tận tình. Đội ngũ giáo viên luôn đồng hành, theo sát từng bước tiến bộ của học viên, tạo nên một môi trường học tập thân thiện, cởi mở và truyền cảm hứng.",
  },
  {
    icon: <Puzzle />,
    title: "Thực tế",
    description:
      "Giáo trình được thiết kế xoay quanh các tình huống giao tiếp thực tế, giúp học viên áp dụng ngay những gì đã học vào đời sống hằng ngày, công việc và học tập.",
  },
  {
    icon: <Rocket />,
    title: "Hiện đại",
    description:
      "Chúng tôi không ngừng cập nhật phương pháp giảng dạy hiện đại và tích hợp công nghệ vào lớp học, giúp học viên tiếp cận một mô hình giáo dục tiên tiến.",
  },
  {
    icon: <Star />,
    title: "Truyền cảm hứng",
    description:
      "Hơn cả một trung tâm tiếng Anh, chúng tôi mong muốn trở thành nơi khơi dậy đam mê học tập và giúp học viên tự tin thể hiện bản thân.",
  },
];
