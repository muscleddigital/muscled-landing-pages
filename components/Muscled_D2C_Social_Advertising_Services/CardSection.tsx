import React from "react";
import IconItem from "./IconItem";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { Section } from "../../components/Fawwaz/Sections";
import { GrStar } from "react-icons/gr";
// import star from "../assets/Star_2.png";
// import star1 from "../assets/logo";
// import star2 from "components/assets/Star_3.png";
import { FaCheckCircle } from "react-icons/fa";

import { cardData } from "../../components/utils/muscled-d2c-constants";

const CardSection = () => {
  return (
    <Section>
      <h2 className="text-4xl text-center mt-10 mb-14">
        Explore Direct-to-Consumer Social Service Programs.
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-between w-[1240px]">
        {cardData &&
          cardData.map((cardItem, index) => 
              <div key={`${index}-${cardItem?.title}`} className="rounded-sm border-[1px] border-[#000000]/[0.7] border-solid max-w-[400px] w-full bg-[#FFFFFF]">
                <CardHeader
                  title={cardItem?.title}
                  rate={cardItem?.rate}
                  description={cardItem?.description}
                  type={cardItem?.type}
                >
                  {cardItem?.type === "premium" && (
                    <div className="flex">
                      <GrStar
                        size={35}
                        fill={"#4b4848"}
                        className="ml-[10px]"
                      />
                      <GrStar
                        size={35}
                        fill={"#4b4848"}
                        className="ml-[10px]"
                      />
                    </div>
                  )}
                  {cardItem?.type === "ultimate" && (
                    <div className="flex">
                      <GrStar
                        size={35}
                        fill={"#322e2e"}
                        className="ml-[10px]"
                      />
                      <GrStar
                        size={35}
                        fill={"#322e2e"}
                        className="ml-[10px]"
                      />
                      <GrStar
                        size={35}
                        fill={"#322e2e"}
                        className="ml-[10px]"
                      />
                    </div>
                  )}
                  {cardItem.type === undefined && (
                    <GrStar size={35} fill={"#7f7c7c"} />
                  )}
                </CardHeader>
                <CardContent className="space-y-11">
                  {cardItem &&
                    cardItem.iconItems.map(
                      (item, i) => (
                        <IconItem
                          key={`childitem-${i}`}
                          icon={<FaCheckCircle size={24} />}
                          title={item?.iconTitle}
                          className={item?.class}
                        />
                      )
                    )}
                </CardContent>
                <CardFooter
                  isFooterDescription={cardItem?.isFooterDescription}
                  footerDescition={cardItem?.footerDescition}
                  buttonLabel={cardItem?.buttonLabel}
                />
              </div>
            )}
      </div>
    </Section>
  );
};

export default CardSection;
