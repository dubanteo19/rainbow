import type { PROGRAM_ID } from "@/type/program";

export const USER_ROUTES = Object.freeze({
  HOME: "/",
  CONTACT: "/contact",
  MEDIA: "/media",
  ABOUT: "/about",
  COURSE: "/course",
  COURSE_YOUNG: "/course/young-course",
  COURSE_TEEN: "/course/teen-course",
  COURSE_PRIVATE: "/course/private-course",
});
export const programTitles: Record<PROGRAM_ID, string> = {
  teens: "Chương trình Thiếu niên (12 – 18 tuổi)",
  "private-online": "Lớp kèm / Học online",
  "young-learners": "Chương trình Thiếu nhi (5 – 11 tuổi)",
};
export const ADDRESS = "17 ô 2/52 ấp Hải Tân, xã Phước Hải, TP. HCM";
export const PHONE = "0888 77 1986";
export const EMAIL = "surihuynh012@gmail.com";
export const FANPAGE_URL =
  "https://www.facebook.com/rainbowenglishcentre.trungtamngoainguphuochai";
