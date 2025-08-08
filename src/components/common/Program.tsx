import type { Program } from "@/type/program";
import { CheckCircle } from "lucide-react";
import type { FC } from "react";

export const ProgramSection: FC<Program> = (program) => {
  return (
    <div className="mt-7 text-sm text-gray-500 space-y-4">
      <h2 className=" text-center">NỘI DUNG CHƯƠNG TRÌNH</h2>
      <p className="font-semibold">Đối tượng học viên</p>
      <p>{program?.targetAudience}</p>
      <p className="font-semibold">Mục tiêu chương trình</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        {program?.objectives.map((object, index) => (
          <li className="flex items-start gap-2" key={index}>
            <span className="mt-1 size-2 rounded-full bg-primary shrink-0"></span>
            <span>{object}</span>
          </li>
        ))}
      </ul>
      <p className="font-semibold">Điểm nổi bật của chương trình</p>
      <ul className=" space-y-2 pl-4 bg-primary/20 shadow rounded-2xl p-4">
        {program?.features.map((feature, index) => (
          <li
            className="flex items-start text-gray-800 text-[15px] gap-2"
            key={index}
          >
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
