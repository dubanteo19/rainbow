import type { Program } from "@/type/program";

export const programs: Program[] = [
  {
    id: "young-learners",
    targetAudience:
      "Trẻ từ 5 đến 11 tuổi, mới bắt đầu hoặc đã học tiếng Anh ở mức cơ bản. Phù hợp với phụ huynh muốn con phát triển ngôn ngữ sớm, hình thành nền tảng tiếng Anh vững chắc.",
    objectives: [
      "Tăng vốn từ vựng và phát âm chuẩn ngay từ giai đoạn đầu, giúp trẻ tránh thói quen phát âm sai.",
      "Phát triển đồng đều 4 kỹ năng Nghe – Nói – Đọc – Viết, đặc biệt là phản xạ nghe nói tự nhiên.",
      "Hình thành tư duy ngôn ngữ trực tiếp (nghĩ bằng tiếng Anh thay vì dịch từ tiếng Việt).",
      "Rèn luyện sự tự tin khi giao tiếp qua các hoạt động nhóm, đóng vai, kể chuyện.",
      "Khơi gợi niềm yêu thích học tiếng Anh, biến việc học thành trải nghiệm thú vị chứ không áp lực.",
    ],
    features: [
      "Giáo trình chuẩn quốc tế Cambridge kết hợp giáo cụ trực quan, video, trò chơi tương tác.",
      'Lớp học thiết kế theo hình thức "Học mà chơi – Chơi mà học", giúp trẻ tiếp thu tự nhiên.',
      "Giáo viên có kinh nghiệm, biết cách khơi gợi hứng thú và tương tác với từng độ tuổi.",
      "Mỗi buổi học kết hợp cả phần ôn tập kiến thức cũ và giới thiệu kiến thức mới, đảm bảo trẻ ghi nhớ lâu.",
      "Có bài tập về nhà và báo cáo tiến bộ hàng tháng để phụ huynh nắm rõ sự tiến triển của con.",
      "Đánh giá bằng nhiều hình thức: kiểm tra định kỳ, hoạt động thực hành, mini project.",
    ],
  },
  {
    id: "teens",
    targetAudience:
      "Học sinh THCS và THPT muốn nâng cao tiếng Anh để phục vụ học tập, thi cử hoặc chuẩn bị du học. Phù hợp cho học viên mong muốn phát triển khả năng giao tiếp và kỹ năng tư duy bằng tiếng Anh.",
    objectives: [
      "Ôn luyện và đạt điểm cao trong các kỳ thi chứng chỉ quốc tế Cambridge: Starters, Movers, Flyers, KET, PET.",
      "Mở rộng vốn từ và ngữ pháp nâng cao, phục vụ cho cả học thuật và giao tiếp.",
      "Phát triển tư duy phản biện, khả năng lập luận và trình bày ý tưởng mạch lạc bằng tiếng Anh.",
      "Rèn luyện kỹ năng viết học thuật: viết đoạn văn, luận ngắn, thư và email chuyên nghiệp.",
      "Xây dựng sự tự tin khi thuyết trình, tranh luận, chuẩn bị tốt cho môi trường học tập và làm việc quốc tế.",
    ],
    features: [
      "Giáo trình kết hợp Cambridge và tài liệu thực tế như bài báo, podcast, video phỏng vấn.",
      "Áp dụng phương pháp học qua dự án (Project-based learning) để học viên vận dụng tiếng Anh trong các đề tài khoa học, xã hội, công nghệ.",
      "Lớp học chú trọng tương tác và thảo luận nhóm, giúp học viên luyện phản xạ nói nhanh và chính xác.",
      "Có các buổi English Debate Club, Presentation Day để rèn kỹ năng hùng biện.",
      "Giáo viên vừa đóng vai trò giảng dạy vừa là mentor, giúp học viên định hướng mục tiêu dài hạn.",
      "Hệ thống kiểm tra định kỳ kết hợp Mock Test theo format thi thật, đảm bảo học viên sẵn sàng khi đi thi.",
    ],
  },
  {
    id: "private-online",
    targetAudience:
      "Học viên bận rộn, ở xa hoặc muốn được học theo lộ trình riêng. Phù hợp cho cả trẻ em, thanh thiếu niên từ cơ bản đến nâng cao.",
    objectives: [
      "Cá nhân hóa lộ trình học theo mục tiêu: giao tiếp, luyện thi IELTS.",
      "Tập trung cải thiện điểm yếu cá nhân thay vì học chung chung theo giáo trình cố định.",
      "Giúp học viên tiến bộ nhanh hơn trong thời gian ngắn nhờ 1 kèm 1 hoặc nhóm nhỏ.",
    ],
    features: [
      "Lịch học linh hoạt theo thời gian rảnh của học viên.",
      "Nội dung học dựa trên trình độ, mục tiêu, sở thích và thời hạn mong muốn.",
      "Có thể lựa chọn học trực tiếp tại trung tâm hoặc online qua Zoom/Google Meet với đầy đủ tài liệu điện tử.",
      "Giáo viên theo sát từng buổi, đưa feedback cá nhân hóa ngay sau buổi học.",
      "Sử dụng nhiều tài liệu: giáo trình quốc tế, tài liệu chuyên ngành, video thực tế, podcast, tài liệu luyện thi.",
    ],
  },
];
