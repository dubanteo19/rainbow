import { ImageContainer } from "@/components/common/ImageContainer";

export const IntroductionSection = () => {
  return (
    <div className="py-5">
      <div className="flex justify-between  items-end ">
        <div>
          <h2 className="text-xl md:text-2xl">Welcome to RAINBOW CENTER</h2>
          <h3 className="text-sm text-gray-500">
            Platinum Partner of British Council Vietnam
          </h3>
        </div>
        <ImageContainer
          src="/logo.jpg"
          className="hidden md:block w-[100px] bg-red-500"
        />
      </div>
      <p className="mt-10 text-sm text-gray-600">
        Thành lập tại thành phố Vũng Tàu từ năm 2011, Anh ngữ quốc tế Kỳ Nguyên
        – Premier Vietnam đã trở thành đơn vị tiên phong, mang đến môi trường
        học tập tiện nghi, năng động và sáng tạo cho học viên ở mọi lứa tuổi.
        Chúng tôi tự hào là đối tác chính thức của Hội đồng Anh Việt Nam
        (British Council), IDP, IIG, Cambrigde English VN120, nơi đào tạo và tổ
        chức các kỳ thi quốc tế như IELTS, STARTERS, MOVERS, FLYERS, KET, PET và
        FCE đạt tiêu chuẩn cao nhất tại Vũng Tàu.
        <br />
        Tiếp nối thành công này, Abis English Academy tại Vinhomes Grand Park
        cam kết sẽ tạo nên một môi trường học tập lý tưởng, giúp các bạn trẻ
        phát triển toàn diện kỹ năng tiếng Anh. Từ giao tiếp hàng ngày đến chinh
        phục các kỳ thi quốc tế, Abis sẽ là người đồng hành đáng tin cậy. Với
        đội ngũ giáo viên giàu kinh nghiệm hàng đầu Thành phố Hồ Chí Minh cùng
        chương trình học phong phú và cơ sở vật chất hiện đại, Abis luôn bên
        cạnh bạn trên hành trình chinh phục tiếng Anh.
        <br />
        Abis sẽ khai trương vào Tháng 09 Năm 2024; Trung tâm sở hữu diện tích
        mặt bằng rộng rãi và thiết kế ấn tượng nhất khu vực. Thông qua quy trình
        giảng dạy và chăm sóc học viên chuyên nghiệp, chúng tôi hứa hẹn mang đến
        cho học viên một trải nghiệm học tập đẳng cấp, giúp phát triển toàn diện
        kỹ năng ngôn ngữ của bạn.
      </p>
    </div>
  );
};
