import React from "react";
import { FC } from "react";
import { ButtonProps } from "../../types/types";
import { BsArrowRight } from "react-icons/bs";
interface Props {
  arrow: string;
}
const Arrow = ({ arrow }: Props) => {
  if (arrow === "small") {
    return <div className="ml-2">Small</div>;
  }
  if (arrow === "arrowIcon") {
    return (
      <div className="ml-[56px]">
        <BsArrowRight size={16} />
      </div>
    );
  }

  return <div className="ml-2">big</div>;
};

const Button: FC<ButtonProps> = ({
  text,
  arrow,
  rounded,
  shadow,
  outline,
  white,
  violate,
  red,
  className,
}) => {
  return (
    <div>
      <button
        className={` text-white h-full flex justify-center items-center text-md py-2 text-semibold px-5 w-full active:scale-[95%] ${
          rounded ? "rounded-full" : "rounded-md"
        } ${shadow && " shadow-sm"} ${outline && " border-2 border-gray-600"} ${
          violate
            ? "bg-[4E01A9]"
            : red
            ? "bg-red-400"
            : white
            ? "bg-white text-black"
            : "bg-black "
        }${className}`}
      >
        {text}
        {arrow !== undefined ? <Arrow arrow={arrow!} /> : ""}
        {/* <BiRightArrowAlt /> */}
      </button>
    </div>
  );
};

export default Button;

//default button will be black background aand white text, you can over write them by using this props

// red?: boolean [if you choose this props the baackground color will be red and the text color will be white]

// violate?: boolean [if you choose this props the baackground color will be violate and the text color will be white]

// white?: boolean [if you choose this props the baackground color will be white and the text color will be black]

// outline?: boolean
// shadow?: boolean
// rounded?: boolean
// arrow?: string [if you choose this props the you have to give a string value if the string value is "small" then it will show the small arrow otherwise it will show the big arrow]
// text: string [This is the only required props which will define the button text]
