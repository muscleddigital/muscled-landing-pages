import React from "react";
import { NextPage } from "next";
import { Hero } from "components/Fawwaz/Sections";
import MuscledD2CSVG from "components/assets/svg/MuscledD2CSVG";
import logo1 from "components/assets/logo/logo1.png";
import logo3 from "components/assets/logo/logo3.png";
import logo4 from "components/assets/logo/logo4.png";
import logo5 from "components/assets/logo/logo5.png";
import logo6 from "components/assets/logo/logo6.png";
import logo7 from "components/assets/logo/logo7.png";
import DirectToConsumer from "components/common/DirectToConsumer";
import ReusableTestimonials from "components/common/Testimonials";
import PartnerLogoSection from "components/common/Partner";
import AdditionalSocailMedia from "components/common/AdditionalSocailMedia";
import SocialMediaAdvertising from "components/common/SocialMediaAdvertising";
import CardSection from "components/common/CardSection";
import {
  testimonialData,
  AdditionalSocailMediaMetaData,
} from "components/utils/muscled-d2c-constants";

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      <div className=" bg-black-70 px-3 lg:px-0">
        <Hero
          title="With Muscled D2C Social Advertising Services, you can attract, engage, and sell."
          description="With over 5 billion active users on social media today, social platforms are prime territory for reaching a large direct-to-consumer (D2C) audience. If you sell B2C products, social ads increase your online reach, engage customers, and help you sell, all of which contribute to your bottom line. Continue reading to find out how Muscled fyi, a Meta Business Partner agency, can drive results with our direct-to-consumer social media advertising services!"
          heroSVG={<MuscledD2CSVG className="w-80 lg:w-full" />}
          input
        />
      </div>
      {/* Our partner section */}
      <PartnerLogoSection
        noOfLogos={[logo1, logo3, logo4, logo5, logo6, logo7]}
      />
      {/* Third section */}
      <CardSection />
      {/* Section 4 */}
      <DirectToConsumer />
      {/* Section5 */}
      <ReusableTestimonials testimonialData={testimonialData} />
      {/* Section6 */}
      <AdditionalSocailMedia
        AdditionalSocailMediaMetaData={AdditionalSocailMediaMetaData}
      />
      {/* Section 6 */}
      <SocialMediaAdvertising />
    </div>
  );
};

export default Page;
