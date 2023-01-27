import React from "react";
import QuestionCard from "./QuestionCard";

export default function FAQ() {
  const questionCardData = [
    {
      question: "What are ecommerce PPC services?",
      answer:
        " Ecommerce PPC services are for advertising on pay-per-click ad networks, like Google Ads, Bing, Microsoft Advertising, Facebook, and many more. You are to expect the development, management, and monitoring of your ad campaigns.",
      height: "2xl:h-[140px] md:h-[190px] sm:h-[234px]",
    },
    {
      question: "How much do ecommerce PPC services cost?",
      answer:
        "Typically, ecommerce PPC plans cost $400 to $5000, it could also be 10 to 20% of your monthly ad spend. The price varies, depending on several factors like your intended ad spend or the PPC agency’s pricing.",
      height: "2xl:h-[110px] md:h-[160px] sm:h-[203px]",
    },
  ];
  return (
    <>
      <h2 className="md:text-4xl text-2xl font-bold md:leading-[52px] leading-[52px] text-black text-opacity-80 mt-[120px]">
        FAQs about ecommerce PPC management services.
      </h2>
      <div className="space-y-5 mt-5">
        {questionCardData.map((i, index) => {
          return (
            <QuestionCard
              key={`${index}-question`}
              question={i.question}
              ptag={i.answer}
              height={i.height}
            />
          );
        })}
      </div>
    </>
  );
}
