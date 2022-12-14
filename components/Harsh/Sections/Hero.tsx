import React from "react";
import Icon from "../../assets/landingPageSVG/Icons";
import ExtractRoutes from "@/components/ExtractRoutes";
function Hero() {
  const cardData = [
    {
      icon: "funnel",
      pTag: "Access the data-fueled plans behind",
      numbers: "$3,021,182,299",
      subHeading: "IN CLIENT REVENUE",
    },
    {
      icon: "people",
      pTag: "Use the expert-led tactics behind",
      numbers: "7,839,684",
      subHeading: "IN LEADS FOR OUR CLIENTS",
    },
    {
      icon: "trophy",
      pTag: "Unlock do-it-for-me marketing with",
      numbers: "450",
      subHeading: "DIGITAL MARKETING EXPERTS",
    },
    {
      icon: "roi",
      pTag: "Accelerate ROI with",
      numbers: "1+ BILLION",
      subHeading: "DATA POINTS FROM MARKETINGCLOUDFX",
    },
  ];
  return (
    <div className="bg-black bg-opacity-70">
      <div className="xl:py-[65px] md:py-20 py-4  px-5 md:px-10 lg:px-20 xl:px-4  xl:flex items-center justify-center">
        <div className="max-w-[720px]">
          <ExtractRoutes />
          <h1 className="lg:text-6xl md:text-5xl text-2xl xl:text-left text-center font-bold lg:leading-[72.8px] text-white mt-[30px]">
            Website Maintainance, Security, and Support
          </h1>
          <p className="md:text-xl text-lg  xl:text-left text-center lg:leading-[30px] text-white mt-5">
            Muscled is a leading provider of website system maintenance,
            assisting businesses all over the world in optimizing the
            productivity and security of their websites. Whether you need a
            monthly, hourly, or after-hours website maintenance plan, here at
            Muscled we have the experience and expertise your business requires.
          </p>
          <div className="mt-[30px] xl:flex hidden">
            <input
              className="text-xl leading-[30px]  px-5 focus:outline-none py-[15px]  text-black placeholder-text-black placeholder-opacity-50 rounded bg-white max-w-[480px] w-full"
              placeholder="Enter Your Website Link"
            />
            <button className="text-xl whitespace-nowrap font-semibold hover:bg-opacity-70 leading-[30px] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white">
              Send Proposal
            </button>
          </div>
        </div>
        <div className="space-y-[10px] xm:mt-0 mt-12 xl:ml-[84px]">
          {cardData.map((card, index) => {
            return (
              <div
                className="bg-black bg-opacity-80 rounded-sm flex md:flex-row
			   flex-col items-center py-3 pl-3 pr-10"
                key={index}
              >
                <Icon customClasses="md:w-auto md:h-auto" icon={card.icon} />
                <div className="md:ml-1.5 md:mt-0 mt-2 md:gap-y-0 space-y-1">
                  <p className="text-base  md:text-left text-center font-medium leading-[20.8px] text-white">
                    {card.pTag}
                  </p>
                  <p className="md:text-3xl md:text-left text-center text-xl font-bold md:leading-[41.6px] text-white">
                    {card.numbers}
                  </p>
                  <p className="text-base md:text-left text-center font-medium md:leading-[20.8px] text-gray-400 uppercase">
                    {card.subHeading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-[30px] xl:hidden block ">
          <input
            className="text-xl leading-[30px] focus:outline-none py-[15px] px-5 text-black placeholder-text-black placeholder-opacity-50 rounded bg-white xl:max-w-[480px] w-full"
            placeholder="Enter Your Website Link"
          />
          <button className="text-xl xl:mt-0 mt-4 xl:w-auto w-full font-semibold hover:bg-opacity-70 leading-[30px] h-[60px] border border-black px-10 bg-black  rounded text-white">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
