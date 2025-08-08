import { ImageContainer } from "@/components/common/ImageContainer";
import { Facebook } from "@/components/icons/facebook";
import { Container } from "@/components/ui/container";
import { EMAIL, PHONE, USER_ROUTES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ChevronDown,
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
  {
    name: "KHÓA HỌC",
    href: USER_ROUTES.COURSE,
    children: [
      { name: "Chương trình Thiếu nhi", href: USER_ROUTES.COURSE_YOUNG },
      { name: "Chương trình Thiếu niên", href: USER_ROUTES.COURSE_TEEN },
      { name: "Lớp kèm/ Học online", href: USER_ROUTES.COURSE_PRIVATE },
    ],
  },
  { name: "GIỚI THIỆU", href: USER_ROUTES.ABOUT },
  { name: "HÌNH ẢNH", href: USER_ROUTES.MEDIA },
  { name: "LIÊN HỆ", href: USER_ROUTES.CONTACT },
];
const ContactBar = () => {
  return (
    <div className=" justify-end gap-5 text-sm py-1 hidden md:flex">
      <div className="inline-flex font-bold text-gray-700 items-center gap-2 ">
        <PhoneCall className="text-primary" size={16} />
        <span>{PHONE}</span>
      </div>
      <div className="inline-flex font-bold text-gray-700 items-center gap-2">
        <MailIcon className="text-primary" size={16} />
        <span>{EMAIL}</span>
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
      <div className=" bg-primary h-[4px]  "></div>
      <Container>
        <ContactBar />
        <div className="    py-2 flex  justify-between w-full items-center md:items-end ">
          <ImageContainer src="/logo.jpg" className="w-[50px]" />
          <div className="flex gap-4 items-center">
            <nav className="hidden md:flex gap-8 font-bold    text-gray-700 text-sm">
              {navItems.map((item) =>
                item.children && item.children.length > 0 ? (
                  <div key={item.name} className="relative group">
                    <div className="flex items-center">
                      <span className="cursor-pointer hover:text-primary transition-colors duration-200">
                        {item.name}
                      </span>
                      <ChevronDown size={20} className="text-gray-500" />
                    </div>
                    <div className="absolute left-0 top-full pt-4 min-w-[300px] hidden group-hover:block bg-white border rounded shadow-lg">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "hover:text-primary transition-colors duration-200 ",
                      pathname.substring(1).startsWith(item.href) &&
                        "text-primary",
                    )}
                  >
                    {item.name}
                  </a>
                ),
              )}
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
            className="md:hidden bg-white shadow-md border-t"
          >
            <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors duration-200 font-bold block"
                  >
                    {item.name}
                  </a>

                  {item.children && item.children.length > 0 && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </Container>
    </header>
  );
};
