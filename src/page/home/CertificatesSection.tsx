import Slider, { type Settings } from "react-slick";

export const CertificatesSection = () => {
  const certificates = Array.from({ length: 17 }, (_, i)=>`/certifications/pic${i+1}.avif`);
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    slidesToShow: 4, //default
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, //tablet
      { breakpoint: 768, settings: { slidesToShow: 1 } }, //mobile
    ],
  };
  return (
    <div className="">
      <div className="text-center">
        <h4 className=" font-bold">Certificates</h4>
        <p className="text-sm text-gray-500 py-2 md:py-6">
          Education is the key that unlocks a world of possibilities.
        </p>
      </div>
      <div className="slider-container ">
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="w-full aspect-[3/2] overflow-hidden mr-4 border-2 border-primary"
            >
              <img
                src={certificate}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
