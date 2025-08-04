import FacebookPagePlugin from "@/components/common/facebookPage";
import { ImageContainer } from "@/components/common/ImageContainer";
import { Container } from "@/components/ui/container";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FooterItem {
  title: string;
  nodes: ReactNode[];
}
export const Footer = () => {
  const footerItems: FooterItem[] = [
    {
      title: "Social Media",
      nodes: [
        <FacebookPagePlugin pageUrl="https://www.facebook.com/rainbowenglishcentre.trungtamngoainguphuochai" />,
      ],
    },
    {
      title: "Address",
      nodes: [
        <div className="flex items-center  gap-2 text-sm ">
          <div className="text-primary ">
            <HomeIcon size={20} />
          </div>
          17 ô 2/52 ấp Hải Tân, xã Phước Hải, TP. HCM
        </div>,
        <div className="flex item-center gap-2 text-sm ">
          <div className="text-primary">
            <PhoneIcon size={20} />
          </div>
          0888 77 1986 (Ms. Sửu)
        </div>,
        <div className="flex item-center gap-2 text-sm ">
          <div className="text-primary">
            <MailIcon size={20} />
          </div>
          surihuynh012@gmail.com
        </div>,
      ],
    },
    {
      title: "Useful links",
      nodes: [
        <Link to="/about">Giới thiệu</Link>,
        <Link to="/contact">Liên hệ</Link>,
        <Link to="/course">Khóa học</Link>,
        <Link to="/">Tin tức</Link>,
      ],
    },

    {
      title: "Authentication",
      nodes: [<ImageContainer src="/ssl.webp" className="w-[120px]" />],
    },
  ];
  return (
    <Container>
      <div className=" md:-mx-4 px-8 mt-4">
        <div className="grid md:grid-cols-4 gap-2">
          {footerItems.map((item) => (
            <div className="">
              <p className="text-xl ">{item.title}</p>
              <div className="w-[50px] h-[2px] bg-primary mt-4"></div>
              <div className="mt-6 flex flex-col gap-2">
                {item.nodes.map((node) => node)}
              </div>
            </div>
          ))}
        </div>
        <div className="h-[2px] w-full bg-gray-400 my-4 "></div>
        <p className="text-xs mt-2 py-2">
          Copyright (c) 2025 Suri. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};
