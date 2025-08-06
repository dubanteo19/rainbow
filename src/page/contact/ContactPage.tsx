import { ImageContainer } from "@/components/common/ImageContainer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { USER_ROUTES } from "@/constants/constants";
import type { ContactItem } from "@/type/contact-item";
import { LocateIcon, MailIcon, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  const contacts: ContactItem[] = [
    {
      icon: <LocateIcon />,
      des: "99 Nguyen Thai Hoc street, ward 7, Vung Tau city",
      title: "address info",
    },
    {
      icon: <MailIcon />,
      des: "info@kynguyen.edu.vn",
      title: "mail info",
    },
    {
      icon: <PhoneCall />,
      des: "09232323232",
      title: "phone number",
    },
  ];
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex  flex-col justify-end gap-10 ">
            <h2>LIÊN HỆ</h2>
            <Breadcrumb child={<Link to={USER_ROUTES.CONTACT}>Liên hệ</Link>} />
          </div>
          <ImageContainer src="/home/carousel1.jpg" />
        </div>
        <div className="grid grid-cols-3">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-center items-center shadow bg-gray-200 py-8 px-4"
            >
              <div className="text-secondary">

              {contact.icon}
              </div>
              <p className="text-gray-700 uppercase">{contact.title}</p>
              <p className="text-gray-700 text-xs text-center">{contact.des}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
