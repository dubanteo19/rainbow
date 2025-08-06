import { USER_ROUTES } from "@/constants/constants";
import { UserLayout } from "@/layout/UserLayout";
import { CoverLetterPage } from "@/page/CoverLetterPage";
import { HomePage } from "@/page/HomePage";
import { PhilosophyPage } from "@/page/PhilosophyPage";
import { ProjectsPage } from "@/page/ProjectsPage";
import { ReferenceLetterPage } from "@/page/ReferenceLetterPage";
import { ResumePage } from "@/page/ResumePage";
import { type RouteObject } from "react-router-dom";

export const userRoutes: RouteObject = {
  path: "/",
  element: <UserLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: USER_ROUTES.RESUME, element: <ResumePage /> },
    { path: USER_ROUTES.PHILOSOPHY, element: <PhilosophyPage /> },
    { path: USER_ROUTES.COVER_LETTER, element: <CoverLetterPage /> },
    { path: USER_ROUTES.REFERENCE_LETTER, element: <ReferenceLetterPage /> },
    { path: USER_ROUTES.PROJECTS, element: <ProjectsPage /> },
  ],
};
