import { Button } from "../ui/button";
import { Container } from "../ui/container";

export const CTASection = () => {
  return (
    <div className="w-full bg-secondary text-white py-6 ">
      <Container className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
        <p className="italic text-center">
          Cần hỗ trợ? Chúng tôi luôn sẵn sàng lắng nghe, đồng hành cùng bạn trên
          từng bước đường!
        </p>
        <Button className=" rounded text-white bg-primary/70 px-6">
          Gọi tư vấn
        </Button>
      </Container>
    </div>
  );
};
