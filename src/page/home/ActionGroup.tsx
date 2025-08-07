import { ZaloIcon } from "@/components/icons/zalo";
import { ArrowUp, Phone } from "lucide-react";

export const ActionGroup = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed bottom-8 right-6 flex flex-col gap-4">
      <div
        className="text-primary flex justify-center transition-all cursor-pointer
        items-center p-3 border-2 rounded-full border-primary hover:rotate-150"
      >
        <a href="tel:+84888771986" target="_blank">
          <Phone size={30} />
        </a>
      </div>
      <div
        className="text-primary flex justify-center transition-all cursor-pointer
        items-center p-2 border-2 rounded-full border-primary hover:scale-110"
      >
        <a href="https://zalo.me/0888771986" target="_blank">
          <ZaloIcon className="w-[40px] h-[40px]" />
        </a>
      </div>
      <div
        onClick={scrollToTop}
        className="text-white bg-primary flex justify-center transition-all cursor-pointer
        items-center p-3 border-2 rounded-full border-primary hover:scale-110"
      >
        <ArrowUp size={30} />
      </div>
    </div>
  );
};
