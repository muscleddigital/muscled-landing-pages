import React from "react";


export default function TableOfContext() {
  const [list, setList] = React.useState<boolean>(true);
  const listData = [
    {
      title: "What does our PPC Management Service Offer?",
      link: "javascript:void(0);",
    },
    {
      title: "How do We Go About Our PPC Management Service?",
      link: "javascript:void(0);",
    },
    {
      title: "Why choose the MUSCLED PPC Management Service?",
      link: "javascript:void(0);",
    },
    {
      title:
        "How could Muscled Digital Agency help my business through their PPC Management Service?",
      link: "javascript:void(0);",
    },
    {
      title: "FAQs",
      link: "javascript:void(0);",
    },
    {
      title: "How Do I Get Started With SEO Audit Services?",
      link: "javascript:void(0);",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-end lg:mt-0 mt-12">
      <div
        className={`bg-[#3E5661] lg:max-w-[440px] w-full p-5 cursor-pointer ${
          list ? `rounded-t-lg  ` : `rounded-lg  `
        }`}
        onClick={() => setList(!list)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <svg
                width={26}
                height={20}
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.1429C0 18.721 1.29323 20 2.88889 20H23.1111C24.7045 20 26 18.721 26 17.1429V2.85714C26 1.28125 24.7045 -4.76837e-07 23.1111 -4.76837e-07H2.88889C1.29323 -4.76837e-07 0 1.28125 0 2.85714V17.1429ZM7.22222 10C7.22222 10.7902 6.57674 11.4286 5.77778 11.4286C4.97882 11.4286 4.33333 10.7902 4.33333 10C4.33333 9.20982 4.97882 8.57143 5.77778 8.57143C6.57674 8.57143 7.22222 9.20982 7.22222 10ZM7.22222 14.2857C7.22222 15.0759 6.57674 15.7143 5.77778 15.7143C4.97882 15.7143 4.33333 15.0759 4.33333 14.2857C4.33333 13.4955 4.97882 12.8571 5.77778 12.8571C6.57674 12.8571 7.22222 13.4955 7.22222 14.2857ZM7.22222 5.71429C7.22222 6.50446 6.57674 7.14286 5.77778 7.14286C4.97882 7.14286 4.33333 6.50446 4.33333 5.71429C4.33333 4.92411 4.97882 4.28571 5.77778 4.28571C6.57674 4.28571 7.22222 4.92411 7.22222 5.71429ZM10.1111 15.3571C9.51076 15.3571 9.02778 14.8795 9.02778 14.2857C9.02778 13.692 9.51076 13.2143 10.1111 13.2143H20.2222C20.8226 13.2143 21.3056 13.692 21.3056 14.2857C21.3056 14.8795 20.8226 15.3571 20.2222 15.3571H10.1111ZM10.1111 11.0714C9.51076 11.0714 9.02778 10.5937 9.02778 10C9.02778 9.40625 9.51076 8.92857 10.1111 8.92857H20.2222C20.8226 8.92857 21.3056 9.40625 21.3056 10C21.3056 10.5937 20.8226 11.0714 20.2222 11.0714H10.1111ZM10.1111 6.78571C9.51076 6.78571 9.02778 6.30804 9.02778 5.71429C9.02778 5.12054 9.51076 4.64286 10.1111 4.64286H20.2222C20.8226 4.64286 21.3056 5.12054 21.3056 5.71429C21.3056 6.30804 20.8226 6.78571 20.2222 6.78571H10.1111Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="md:text-xl text-lg font-bold md:leading-[30px] leading-loose text-white ml-[10px]">
              Table of contents
            </p>
          </div>
          <svg
            width={18}
            height={10}
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              list
                ? `transform rotate-0 translate duration-300 ease-in-out`
                : `translate transform rotate-180 duration-300 ease-in-out`
            }
          >
            <g clipPath="url(#clip0_5_1614)">
              <path
                d="M17.5842 9.61836C17.3309 9.86273 16.9875 10 16.6294 10C16.2713 10 15.9278 9.86273 15.6746 9.61836L8.98944 3.16623L2.30433 9.61836C2.04962 9.8558 1.70847 9.98718 1.35436 9.98421C1.00026 9.98124 0.661531 9.84416 0.411132 9.60249C0.160734 9.36081 0.0187015 9.03389 0.0156245 8.69213C0.0125474 8.35036 0.148673 8.0211 0.394682 7.77527L8.03462 0.401581C8.28788 0.15722 8.63133 0.0199447 8.98944 0.0199447C9.34755 0.0199447 9.691 0.15722 9.94426 0.401581L17.5842 7.77527C17.8374 8.0197 17.9796 8.35118 17.9796 8.69682C17.9796 9.04245 17.8374 9.37393 17.5842 9.61836V9.61836Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_1614">
                <rect
                  width={10}
                  height={18}
                  fill="white"
                  transform="translate(0 10) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className={`bg-white  ${
          list ? `h-[490px]` : `h-0`
        }  lg:max-w-[440px] rounded-b-lg duration-300 ease-in-out overflow-hidden`}
      >
        <ul className="md:text-xl text-lg md:leading-[30px] underline text-[#5F27BD] pl-10 py-[10px] pr-5 list-disc  space-y-5">
          {listData.map((i,index) => {
            return (
              <li key={`${index}-list-data`}>
                <a href={i.link}>{i.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
