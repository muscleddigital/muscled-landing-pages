import React from "react";
import Hero from "./Hero/Hero";
import OurPartner from "./OurPartner/OurPartner";
import Pricing from "./PricingPlan/Pricing";
import Testimonial from "./Testimonail/Testimonial";
import PromotionalSection from "./PromotionalSection/PromotionalSection";
import GuideDetails from "./GuideDetails/GuideDetails";
import Faq from "./FAQ/FAQ";
import TableOfContext from "./TableOfContext/TableOfContext";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      <Testimonial />
      <PromotionalSection />
      <div className="mt-[120px] mx-auto lg:px-20 md:px-12 px-4 lg:flex items-start">
        <div className="lg:w-[60%]">
          <GuideDetails />
          <Faq />
        </div>
        <div className="lg:w-[40%]">
          <TableOfContext />
        </div>
      </div>
    </>
  );
}
