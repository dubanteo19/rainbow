import { CTASection } from "@/components/common/CTASection";
import { ImageContainer } from "@/components/common/ImageContainer";
import { ProgramSection } from "@/components/common/Program";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { programTitles, USER_ROUTES } from "@/constants/constants";
import { programs } from "@/data/programs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

export const PrivateCoursePage = () => {
  const program = programs.find((program) => program.id == "private-online");
  return (
    <div>
      <Container className="mb-6">
        <div
          className="bg-[url('/program/private/private4.avif')] min-h-[400px] w-full  bg-cover bg-center
          flex flex-col justify-end"
        >
          <div className="inline-flex  flex-col">
            <h2 className="text-white bg-primary/90 p-4">
              {programTitles["private-online"]}
            </h2>
            <Breadcrumb
              child={
                <Link to={USER_ROUTES.COURSE_PRIVATE}>
                  {programTitles["private-online"]}
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
            <ImageContainer src="/program/private/private1.jpg" />
            <ImageContainer src="/program/private/private2.jpg" />
            <ImageContainer src="/program/private/private3.jpg" />
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      <CTASection />
    </div>
  );
};
