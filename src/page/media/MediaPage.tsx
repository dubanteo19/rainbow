import { ImageContainer } from "@/components/common/ImageContainer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { USER_ROUTES } from "@/constants/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

export const MediaPage = () => {
  const images = Array.from(
    { length: 32 },
    (_, i) => `/media/pic${i + 1}.avif`,
  );
  return (
    <div>
      <Container>
        <div
          className="bg-[url('/home/carousel2.jpg')] min-h-[400px] w-full  bg-cover bg-center
          flex flex-col justify-end"
        >
          <div className="inline-flex  flex-col">
            <h2 className="text-white bg-primary/90 p-4">HÌNH ẢNH</h2>
            <Breadcrumb child={<Link to={USER_ROUTES.MEDIA}>Hình ảnh</Link>} />
          </div>
        </div>

        <ResponsiveMasonry
          className="mt-4"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            {images.map((src, index) => (
              <ImageContainer key={index} src={src} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
};
