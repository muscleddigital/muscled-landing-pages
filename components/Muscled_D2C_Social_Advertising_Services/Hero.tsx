import { FC } from "react";
import ExtractRoutes from "../ExtractRoutes";
import { Section } from "../Fawwaz/Sections";
import { Input } from ".././Fawwaz/Form";
import Button from "../Fawwaz/Button";
import { HeroSectionProps } from "../Fawwaz/component.type";


const Hero: FC<HeroSectionProps> = ({ title, description, heroSVG, input }) => {
  return (
    <Section className="py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
      <div className="max-w-[640px]">
        {/* //? Pagination -- this should be dynamic? */}
        <ExtractRoutes />

        <h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5 w-[720px]">
          {title}
        </h1>

        <p className="text-white-70 leading-8 mb-8 text-[20px] w-[720px]">
          {description}
        </p>

        {input && (
          <div className="flex flex-wrap gap-2">
            <Input
              type="text"
              placeholder="Enter Your Website Link"
              className="text-sm flex-1 md:text-lg"
            />
            <Button bgColor="bg-black" textColor="text-white">
              <span className="text-sm md:text-lg">Send Proposal</span>
            </Button>
          </div>
        )}
      </div>

      <div>{heroSVG}</div>
    </Section>
  );
};

export default Hero;
