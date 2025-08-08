import { CTASection } from "@/components/common/CTASection";
import { ProgramSection } from "@/components/common/Program";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { programTitles, USER_ROUTES } from "@/constants/constants";
import { programs } from "@/data/programs";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const YoungCoursePage = () => {
  const program = programs.find((program) => (program.id = "young-learners"));
  return (
    <div>
      <Container className="mb-6">
        <div
          className="bg-[url('/program/young/young3.jpg')] min-h-[400px] w-full  bg-cover bg-bottom
          flex flex-col justify-end"
        >
          <div className="inline-flex  flex-col">
            <h2 className="text-white bg-primary/90 p-4">
              {programTitles["young-learners"]}
            </h2>
            <Breadcrumb
              child={
                <Link to={USER_ROUTES.COURSE_YOUNG}>
                  {programTitles["young-learners"]}
                </Link>
              }
            />
          </div>
        </div>
        {program && <ProgramSection {...program} />}
        <ResponsiveMasonry
          className="mt-4"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            <img src="/program/young/young1.jpg" loading="lazy" />
            <img src="/program/young/young2.jpg" loading="lazy" />
            <img src="/program/young/young3.jpg" loading="lazy" />
            <img src="/program/young/young4.jpg" loading="lazy" />
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      <CTASection />
    </div>
  );
};
