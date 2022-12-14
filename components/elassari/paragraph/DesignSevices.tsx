import React from "react";
import { Card } from "../../Fawwaz/Card";
import { Section } from "../../Fawwaz/Sections";
import ReactPlayerModal from "../../ReactPlayerModal";
import Image_14 from "../../assets/image-14.png";
import Buttons from "../Buttons";
import playIcon from "../playIconPartner";
import webDesign from "../../../public/webDesign.png";

const DesignSevices = () => {
  return (
    <Section className="flex flex-wrap md:flex-nowrap  gap-24 pt-3 mt-1 md:justify-center xl:justify-start bg-[#F5F5F5]">
      <div className="max-w-[652px] h-[280px]">
        <p className="text-xl ">
          Your website is the first point of contact customers have with your
          company in the modern digital environment.
        </p>
        <p className="mt-8 text-xl">
          Because of this, web design accounts for about 95% of a user's first
          impression. Web Design Services can significantly affect your
          company's bottom line for the same reason.
        </p>
        <p className="mt-8 text-xl">
          For this reason, more businesses are not just reviewing the layout of
          their websites, but also teaming up with Muscled, a web design company
          that has helped its clients generate more than $3 billion in income
          over the course of its 25+ years in business and billions of data
          points.
        </p>
        <p className="mt-8 text-xl">
          With more than 50 web design awards under our belts, we are convinced
          that we can create a custom website that generates sales for your
          particular company. With MarketingCloudFX, you will have the platform
          for tracking (and accelerating) the return on investment of your new
          site (ROI).
        </p>
      </div>

      <div>
        <ReactPlayerModal
          thumbnail={webDesign.src}
          url="https://www.youtube.com/embed/D0UnqGm_miA"
          Icon={playIcon}
          width={"480px"}
          height={"280px"}
          thumbnailGradient="linear-gradient(to right, rgba(196, 0, 0, 0.26),rgba(196, 0, 0, 0.26))"
        />

        <Card className="bg-black/60 flex flex-col w-[480px] h-[270px] mt-4 mx-auto md:mx-0 rounded-md">
          <h4 className="p-6 pb-0 text-white text-[25px]">
            Looking for custom plans and pricing? Request a proposal to receive
            yours.
          </h4>
          <div className="flex flex-row justify-between pl-6 ">
            <Buttons
              className="px-5 py-4 font-sans font-semibold text-[16px] mt-7"
              bgColor="bg-white"
              color="text-black"
              onClick={() => console.log("get free proposal")}
            >
              Get Free Proposal
            </Buttons>
            <div className="-mt-5">
              <img src={Image_14.src} alt={"image-14"} />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default DesignSevices;
