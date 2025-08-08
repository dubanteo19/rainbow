import { Container } from "@/components/ui/container";
import type { Quote } from "@/type/quote";
import type { FC } from "react";

export const QuoteSection: FC<Quote> = ({ quote, subquote, author }) => {
  return (
    <div className="w-full bg-secondary">
      <Container>
        <div className=" flex items-center justify-center py-8">
          <blockquote className="text-center text-white text-base md:text-xl ">
            {quote}
            {subquote && (
              <blockquote className="text-xs md:text-sm text-gray-100 italic mt-4 md:mt-2">
                {subquote}
              </blockquote>
            )}
            {author && (
              <div>
                <br />
                <cite className="block mt-2 text-sm text-white/80">
                  – {author}
                </cite>
              </div>
            )}
          </blockquote>
        </div>
      </Container>
    </div>
  );
};
