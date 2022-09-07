import React, { FC } from "react";

import { SVGProps } from "types/types";

const Star: FC<SVGProps> = ({ className, opacity }) => {
  return (
    <svg
      className={className}
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
        fillOpacity={`${opacity ? opacity : "0.7"}`}
      />
    </svg>
  );
};

export default Star;
