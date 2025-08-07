import { Container } from "@/components/ui/container";
import { CarouselSection } from "./home/CarouselSection";
import { CertificatesSection } from "./home/CertificatesSection";
import { FeedbacksSection } from "./home/FeedbacksSection";
import { IntroductionSection } from "./home/IntroductionSection";
import { QuoteSection } from "./home/QuoteSection";
import { TeachersSection } from "./home/TeachersSection";

export const HomePage = () => {
  /* useEffect(() => {
      window.scrollTo(0, 0);
    }, []); */

  return (
    <div className="w-full flex flex-col gap-5 ">
      <CarouselSection />
      <Container>
        <IntroductionSection />
      </Container>
      <QuoteSection
        quote={
          "“Education is the most powerful weapon which you can use to change the world.”"
        }
        author="Nelson Mandela"
      />
      <FeedbacksSection />
      <div className="w-full bg-gray-100">
        <Container>
          <TeachersSection />
        </Container>
      </div>
      <div className="w-full ">
        <Container>
          <CertificatesSection />
        </Container>
      </div>
      <QuoteSection
        quote="Let failure guide you – Let questions shape you – Let every soul you
        meet inspire you"
        subquote="Cô tin rằng thất bại là người dẫn đường, câu hỏi là
        động lực để trưởng thành, và mỗi con người đều có thể là nguồn cảm hứng."
      />
    </div>
  );
};
