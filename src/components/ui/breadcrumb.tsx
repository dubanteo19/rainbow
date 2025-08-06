import { USER_ROUTES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  className?: string;
  child: ReactNode;
}
export const Breadcrumb: FC<BreadcrumbProps> = ({ className, child }) => {
  return (
    <div
      className={cn(
        className,
        "inline-flex gap-2 bg-secondary/80 text-white px-4 py-3",
      )}
    >
      <Link className="text-primary" to={USER_ROUTES.HOME}>
        Trang chủ
      </Link>
      <ChevronRight />
      {child}
    </div>
  );
};
