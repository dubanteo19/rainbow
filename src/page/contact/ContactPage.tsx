import { CTASection } from "@/components/common/CTASection";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { ADDRESS, EMAIL, PHONE, USER_ROUTES } from "@/constants/constants";
import type { ContactItem } from "@/type/contact-item";
import { LocateIcon, MailIcon, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { CentreMap } from "./CentreMap";

export const ContactPage = () => {
  const contacts: ContactItem[] = [
    {
      icon: <LocateIcon />,
      des: ADDRESS,
      title: "address info",
    },
    {
      icon: <MailIcon />,
      des: EMAIL,
      title: "mail info",
    },
    {
      icon: <PhoneCall />,
      des: PHONE,
      title: "phone number",
    },
  ];
  return (
    <div>
      <Container>
        <div
          className="bg-[url('/home/carousel2.jpg')] min-h-[400px] w-full  bg-cover bg-center
          flex flex-col justify-end"
        >
          <div className="inline-flex  flex-col">
            <h2 className="text-white bg-primary/90 p-4">LIÊN HỆ</h2>
            <Breadcrumb child={<Link to={USER_ROUTES.CONTACT}>Liên hệ</Link>} />
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-center items-center shadow bg-gray-200 py-8 px-4"
            >
              <div className="text-secondary">{contact.icon}</div>
              <p className="text-gray-700 uppercase">{contact.title}</p>
              <p className="text-gray-700 text-xs text-center">{contact.des}</p>
            </div>
          ))}
        </div>
        <div className="flex ">
          <div className="w-[4px] bg-primary "></div>
          <h3 className="w-full bg-gray-100 py-5 px-2">LOCATION</h3>
        </div>
        <CentreMap />
      </Container>
      <CTASection />
    </div>
  );
};
