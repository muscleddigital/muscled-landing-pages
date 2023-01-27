import React from "react";
import Banner from "./Banner";
import { Section } from "../Fawwaz/Sections";
import cardBgImage from "../assets/card_bg_3.jpg";
import ReactPlayerModal from "../ReactPlayerModal";

export type PromotionSectionProps = {
  videoUrl?: string;
};

const PromotionSection = (props: PromotionSectionProps) => {
  return (
    <div className="bg-[#C400001A] px-[100px] py-[80px]">
      <Section className="flex">
        <div className="flex-1">
          <p className="leading-[52px] font-bold text-[40px]">
            Ecommerce SEO Services That Just Supercharges Sales
          </p>
          <p className="mt-[30px] leading-[30px] text-[20px]">
            SEO has been one of the most effective ways to drive traffic up, but
            SEO can also be used to boost sales.
            <br />
            <br /> With a client retention rate of ##%, along with a client
            recommendation score that flies over the industry average by ###%,
            we’re the ecommerce SEO agency for businesses worldwide. <br />
            <br /> Partner with Muscled for ecommerce SEO to unlock: <br />
            <br />
            <ul>
              <li> A do-it-all solution to ecommerce SEO</li>
              <li>
                A wide range of skillsets, including SEO, copywriting,
                development, and design
              </li>
              <li>
                “MuscledSoftware”, a platform that leverages IBM Watson, Google
                AI, and billions of data points to provide instant
                recommendations for driving revenue. Bonus: “MuscledSoftware”
                will track and measure your ROI, too.
              </li>
              <li>
                A custom strategy tailored to your business, industry, and
                goals.
              </li>
            </ul>
            <br />
            Your website will rank higher in search results for the terms used
            by your target audience thanks to our award-winning ecommerce SEO
            services and team, which will increase qualified visitors,
            conversions, and revenue.
            <br />
            <br /> With the help of our ecommerce digital marketing agency, you
            can now begin expanding your online business. Contact us right away
            to discuss our SEO services for e-commerce websites with a
            strategist in person.
          </p>
        </div>
        <div className="flex-shrink-0 w-[440px] ml-10">
          <Banner
            bgImageSrc={cardBgImage.src}
            buttonText="Request a Proposal"
            text="Looking for custom plans and pricing? Request a proposal to receive yours."
          />
          <div className="mt-10 z-[999] relative">
            <ReactPlayerModal
              width="440px"
              height="325px"
              url={props.videoUrl || ""}
              Icon={() => (
                <svg
                  className="cursor-pointer"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.6 0H2.4C1.0725 0 0 1.0725 0 2.4V57.6C0 58.9275 1.0725 60 2.4 60H57.6C58.9275 60 60 58.9275 60 57.6V2.4C60 1.0725 58.9275 0 57.6 0ZM39.7275 30.66L24.7725 42.42C24.2175 42.855 23.4 42.465 23.4 41.76V18.2475C23.4 17.5425 24.2175 17.145 24.7725 17.5875L39.7275 29.34C39.8274 29.4186 39.9081 29.5189 39.9636 29.6332C40.0191 29.7475 40.0479 29.8729 40.0479 30C40.0479 30.1271 40.0191 30.2525 39.9636 30.3668C39.9081 30.4811 39.8274 30.5814 39.7275 30.66Z"
                    fill="black"
                    fillOpacity="0.05"
                  />
                  <path
                    d="M39.7275 30.66L24.7725 42.42C24.2175 42.855 23.4 42.465 23.4 41.76V18.2475C23.4 17.5425 24.2175 17.145 24.7725 17.5875L39.7275 29.34C39.8274 29.4186 39.9081 29.5189 39.9636 29.6332C40.0191 29.7475 40.0479 29.8729 40.0479 30C40.0479 30.1271 40.0191 30.2525 39.9636 30.3668C39.9081 30.4811 39.8274 30.5814 39.7275 30.66Z"
                    fill="white"
                  />
                </svg>
              )}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PromotionSection;
