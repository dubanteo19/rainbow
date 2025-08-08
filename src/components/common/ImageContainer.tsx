import { cn } from "@/lib/utils";
import type { FC } from "react";

interface ImageContainerProps {
  src: string;
  className?: string;
  lazy?: boolean;
}
export const ImageContainer: FC<ImageContainerProps> = ({
  src,
  className,
  lazy = true,
}) => {
  return (
    <div className={cn("w-full h-auto overflow-hidden ", className)}>
      <img
        className="w-full h-full object-cover"
        loading={lazy ? "lazy" : "eager"}
        src={src}
      />
    </div>
  );
};
