import { cn } from "@/lib/utils";
import type { FC } from "react";

interface ImageContainerProps {
  src: string;
  className?: string;
}
export const ImageContainer: FC<ImageContainerProps> = ({ src, className }) => {
  return (
    <div className={cn("w-full h-auto overflow-hidden ", className)}>
      <img className="w-full h-full object-cover" src={src} />
    </div>
  );
};
