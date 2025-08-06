import { ZaloIcon } from "@/components/icons/zalo";
import { ArrowUp, Phone } from "lucide-react";

export const ActionGroup = () => {
  return (
    <div className="fixed bottom-8 right-6 flex flex-col gap-4">
      <div
        className="text-primary flex justify-center transition-all cursor-pointer
        items-center p-3 border-2 rounded-full border-primary hover:rotate-150"
      >
        <Phone size={30} />
      </div>
      <div
        className="text-primary flex justify-center transition-all cursor-pointer
        items-center p-2 border-2 rounded-full border-primary hover:scale-110"
      >
        <ZaloIcon className="w-[40px] h-[40px]" />
      </div>
      <div
        className="text-white bg-primary flex justify-center transition-all cursor-pointer
        items-center p-3 border-2 rounded-full border-primary hover:scale-110"
      >
        <ArrowUp size={30} />
      </div>
    </div>
  );
};
