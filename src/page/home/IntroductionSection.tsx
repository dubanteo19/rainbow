import { ImageContainer } from "@/components/common/ImageContainer";
import { Heart, Puzzle, Rocket, Star } from "lucide-react";

type EducationFactor = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const educationFactors: EducationFactor[] = [
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
export const IntroductionSection = () => {
  return (
    <div className="py-5">
      <div className="flex justify-between  items-end ">
        <div>
          <h2 className="text-xl md:text-2xl">
            Welcome to RAINBOW ENGLISH CENTER
          </h2>
          <h3 className="text-sm text-gray-500">Trung tâm Ngoại ngữ Rainbow</h3>
        </div>
        <ImageContainer
          src="/logo.jpg"
          className="hidden md:block w-[100px] bg-red-500"
        />
      </div>
      <div className="mt-10 text-sm text-gray-600 space-y-4">
        <p>
          Được thành lập từ tháng 01 năm 2014 tại thị trấn{" "}
          <span className="font-semibold text-primary">Phước Hải</span> (nay là
          xã Phước Hải, TP.HCM),{" "}
          <span className="font-semibold ">Trung tâm Ngoại ngữ Rainbow</span> tự
          hào là nơi gắn bó và đồng hành cùng hành trình học tập của biết bao
          thế hệ học sinh thân yêu suốt hơn{" "}
          <span className="font-semibold">10 năm</span> qua.
        </p>

        <p>
          <span className="font-semibold text-primary">Rainbow</span> chọn xây
          dựng một môi trường học tập gần gũi, thân thiện và đầy yêu thương, nơi
          mỗi học sinh đều được <span className="font-semibold">quan tâm</span>,{" "}
          <span className="font-semibold">lắng nghe</span> và{" "}
          <span className="font-semibold">hỗ trợ tận tình</span>. Chúng tôi tin
          rằng,{" "}
          <span className="italic ">
            giáo dục xuất phát từ cái tâm và tình yêu thương chân thành
          </span>{" "}
          sẽ tạo nên những thay đổi bền vững nhất.
        </p>

        <p>
          Tại <span className="font-semibold">Rainbow</span>, tiếng Anh không
          chỉ là môn học, mà là
          <span className="italic"> chìa khóa mở ra thế giới</span>. Với{" "}
          <span className="font-semibold">phương pháp giảng dạy linh hoạt</span>
          , chương trình phù hợp từng lứa tuổi, kết hợp giữa kiến thức nền tảng
          và kỹ năng thực hành, học sinh được phát triển toàn diện – từ{" "}
          <span className="font-semibold ">tự tin giao tiếp</span> đến{" "}
          <span className="font-semibold ">vững vàng tiến bước</span> trong học
          tập và cuộc sống.
        </p>
        <p>
          Trong suốt chặng đường phát triển, sự tin tưởng và đồng hành của quý
          phụ huynh chính là động lực lớn lao để <span className="font-semibold">Rainbow</span> không ngừng nỗ lực.
          Chúng tôi vô cùng trân trọng tình cảm gắn bó và sự ủng hộ chân thành
          mà quý phụ huynh đã dành cho trung tâm cũng như đội ngũ giáo viên.
          Trung tâm Ngoại ngữ Rainbow – cùng học sinh khởi đầu vững chắc, đồng
          hành dài lâu trên hành trình chinh phục tiếng Anh.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {educationFactors.map((item, index) => (
          <div key={index} className="flex gap-4 ">
            <div>
              <div className="size-[50px] border-2 rounded-full p-2 flex  justify-center items-center">
                {item.icon}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-500">{item.title}</h3>
              <div className="w-[70px] h-[2px] bg-gray-400"></div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
