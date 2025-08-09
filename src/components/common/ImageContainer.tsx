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
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".avif");
  return (
    <div className={cn("w-full h-auto overflow-hidden ", className)}>
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <img
          className="w-full h-full object-cover"
          loading={lazy ? "lazy" : "eager"}
          src={src}
        />
      </picture>
    </div>
  );
};
