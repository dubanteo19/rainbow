import { ImageContainer } from "@/components/common/ImageContainer";
import Slider, { type Settings } from "react-slick";

export const CertificatesSection = () => {
  const certificates = ["/certificates/1.jpg"]
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    slidesToShow: 5, //default
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, //tablet
      { breakpoint: 768, settings: { slidesToShow: 1 } }, //mobile
    ],
  };
  return (
    <div className="">
      <div className="text-center">
        <h4 className=" font-bold">Certificates</h4>
        <p className="text-sm text-gray-500 py-2 md:py-6">Education is the key that unlocks a world of possibilities.</p>
      </div>
      <div className="slider-container py-5">
        <Slider {...settings}>
          {certificates.map((certificate,index) => (
            <ImageContainer key={index} src={certificate} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
