import { CTASection } from "@/components/common/CTASection";
import { EducationFactors } from "@/components/common/EducationFactors";
import { ImageContainer } from "@/components/common/ImageContainer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { USER_ROUTES } from "@/constants/constants";
import { Link } from "react-router-dom";
import { Facts } from "./Facts";
import { Skills } from "./Skills";
import { TeacherQuotes } from "./TeacherQuotes";

export const AboutPage = () => {
  return (
    <div>
      <Container>
        <div
          className="bg-[url('/home/carousel2.jpg')] min-h-[400px] w-full  bg-cover bg-center
          flex flex-col justify-end"
        >
          <div className="inline-flex  flex-col">
            <h2 className="text-white bg-primary/90 p-4">GIỚI THIỆU</h2>
            <Breadcrumb
              child={<Link to={USER_ROUTES.ABOUT}>Giới thiệu</Link>}
            />
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between  items-end ">
            <div>
              <h2 className="text-xl md:text-2xl">RAINBOW ENGLISH CENTER</h2>
              <h3 className="text-sm text-gray-500">
                Trung tâm Ngoại ngữ Rainbow
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="mt-2 text-sm text-gray-600 space-y-4">
              <p>
                Trung tâm Ngoại ngữ Rainbow được thành lập từ năm 2014 tại Phước
                Hải, với mong muốn mang đến cho mọi người một môi trường học
                tiếng Anh chất lượng, hiệu quả và đầy cảm hứng. Hiện nay,
                Rainbow có 7 phòng học hiện đại, đầy đủ tiện nghi, cùng đội ngũ
                7 giáo viên chuyên nghiệp, nhiệt huyết và luôn tận tâm đồng hành
                cùng học viên. Hơn 300 học viên đang theo học tại Rainbow mỗi
                ngày đều được trải nghiệm không gian học tập sáng tạo, năng động
                và khuyến khích phát triển toàn diện các kỹ năng ngôn ngữ.
              </p>
              <p>
                Bên cạnh các khóa tiếng Anh giao tiếp cho mọi lứa tuổi và trình
                độ, Rainbow còn chuyên đào tạo và luyện thi các chứng chỉ quốc
                tế như Starters, Movers, KET, PET, FCE, giúp học viên tự tin
                chinh phục những mục tiêu học thuật quan trọng.
              </p>

              <p>
                Với phương châm “The more you learn – the more you earn”, chúng
                tôi luôn nỗ lực nâng cao chất lượng giảng dạy để mang lại giá
                trị tốt nhất cho từng học viên.
              </p>
            </div>
            <div className="flex flex-wrap gap-4  ">
              <ImageContainer className=" aspect-[2/1]" src="/about/pic1.jpg" />
              <div className="grid grid-cols-2 gap-2">
                <ImageContainer
                  className="aspect-[16/9] "
                  src="/about/pic2.jpg"
                />
                <ImageContainer
                  className="aspect-[16/9]"
                  src="/about/pic3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <EducationFactors />
      </Container>
      <div className="w-full bg-secondary mt-4">
        <Container>
          <Facts />
          <Skills />
        </Container>
      </div>

      <TeacherQuotes />
      <CTASection />
    </div>
  );
};
