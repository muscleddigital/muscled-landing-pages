import React from "react";
// import Icon from "../../assets/landingPageSVG/Icons";
import ExtractRoutes from "@/components/ExtractRoutes";
import HeroCards from "./HeroCards";

function Hero() {
	// const cardData = [
	// 	{
	// 		icon: "funnel",
	// 		pTag: "Access the data-fueled plans behind",
	// 		numbers: "$3,021,182,299",
	// 		subHeading: "IN CLIENT REVENUE",
	// 	},
	// 	{
	// 		icon: "people",
	// 		pTag: "Use the expert-led tactics behind",
	// 		numbers: "7,839,684",
	// 		subHeading: "IN LEADS FOR OUR CLIENTS",
	// 	},
	// 	{
	// 		icon: "trophy",
	// 		pTag: "Unlock do-it-for-me marketing with",
	// 		numbers: "450",
	// 		subHeading: "DIGITAL MARKETING EXPERTS",
	// 	},
	// 	{
	// 		icon: "roi",
	// 		pTag: "Accelerate ROI with",
	// 		numbers: "1+ BILLION",
	// 		subHeading: "DATA POINTS FROM MARKETINGCLOUDFX",
	// 	},
	// ];
	return (
		<div className="bg-black bg-opacity-70">
			<div className="xl:py-[100px] md:py-20 py-4  px-5 md:px-10 lg:px-20 xl:px-4 mx-auto container  xl:flex items-center justify-between">
				<div className="max-w-[720px]">
				<ExtractRoutes />
					<h1 className="lg:text-6xl md:text-5xl text-2xl xl:text-left text-center font-bold lg:leading-[72.8px] text-white mt-[30px]">
						Ecommerce PPC <br /> Management Services: <br />
						Give your ROAS a Workout!
					</h1>
					<p className="md:text-xl text-lg  xl:text-left text-center lg:leading-[30px] text-white mt-5">
						People are now shopping online, and pay-per-click (PPC) ads can help
						you catch up. Muscled PPC Management Services will allow your store
						to use Google and Bing to get traffic and make sales. Why not see
						how much we can help you by requesting a free ecommerce PPC proposal
						today?{" "}
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
				<HeroCards className="space-y-[10px] xm:mt-0 mt-12 xl:ml-[84px]"/>
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
