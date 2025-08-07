import { USER_ROUTES } from "@/constants/constants";
import { UserLayout } from "@/layout/UserLayout";
import { AboutPage } from "@/page/about/AboutPage";
import { ContactPage } from "@/page/contact/ContactPage";
import { CoursePage } from "@/page/course/CoursePage";
import { HomePage } from "@/page/HomePage";
import { MediaPage } from "@/page/media/MediaPage";
import { type RouteObject } from "react-router-dom";

export const userRoutes: RouteObject = {
  path: "/",
  element: <UserLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: USER_ROUTES.ABOUT, element: <AboutPage /> },
    { path: USER_ROUTES.CONTACT, element: <ContactPage /> },
    { path: USER_ROUTES.MEDIA, element: <MediaPage /> },
    { path: USER_ROUTES.COURSE, element: <CoursePage /> },
  ],
};
