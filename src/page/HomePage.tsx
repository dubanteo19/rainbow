import { useEffect } from "react";
import { CarouselSection } from "./home/CarouselSection";
import { IntroductionSection } from "./home/IntroductionSection";
import { Container } from "@/components/ui/container";
import { TeachersSection } from "./home/TeachersSection";
import { QuoteSection } from "./home/QuoteSection";

export const HomePage = () => {
  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */

  return (
    <div className="w-full flex flex-col gap-5">
      <CarouselSection />
      <Container>
        <IntroductionSection />
      </Container>
      <QuoteSection />
      <div className="w-full bg-gray-100">
        <Container>
          <TeachersSection />
        </Container>
      </div>
    </div>
  );
};
