import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("max-w-6xl  px-4 md:px-[100px] mx-auto", className)}>
      {children}
    </div>
  );
};
