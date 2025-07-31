import { ImageContainer } from "@/components/common/ImageContainer";
import { Facebook } from "@/components/icons/facebook";
import { USER_ROUTES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  MailIcon,
  Menu as MenuIcon,
  PhoneCall,
  SearchIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "KHÓA HỌC", href: USER_ROUTES.COVER_LETTER },
  { name: "GIỚI THIỆU", href: USER_ROUTES.RESUME },
  { name: "TIN TỨC", href: USER_ROUTES.REFERENCE_LETTER },
  { name: "LIÊN HỆ", href: USER_ROUTES.CERTIFICATE },
];
const ContactBar = () => {
  return (
    <div className="flex justify-end gap-5 text-sm py-1">
      <div className="inline-flex font-bold text-gray-700 items-center gap-2 ">
        <PhoneCall className="text-primary" size={16} />
        <span>0925 821 477</span>
      </div>
      <div className="inline-flex font-bold text-gray-700 items-center gap-2">
        <MailIcon className="text-primary" size={16} />
        <span>dubanteo2003@gmail.com</span>
      </div>
      <div className="inline-flex font-bold text-gray-700 items-center gap-2">
        <Facebook className="text-primary" />
        <span>Rainbow English Center </span>
      </div>
    </div>
  );
};
export const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={"w-full z-50  transition-transform duration-300 "}>
      <div className=" bg-primary h-[4px] -mx-50 "></div>
      <ContactBar />
      <div className="  px-4  py-4 flex  justify-between w-full items-end ">
        <ImageContainer src="/logo.jpg" className="w-[50px]" />
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex gap-8 font-bold    text-gray-700 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "hover:text-primary transition-colors duration-200 ",
                  pathname.substring(1).startsWith(item.href) && "text-primary",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <nav>
            <SearchIcon className="hover:text-primary" />
          </nav>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-md border-t "
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors duration-200 font-bold"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
