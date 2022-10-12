import React,{FC} from 'react';
import ReactPlayerModal from "../../ReactPlayerModal";
import SeoVideoThumbnail from "../../assets/SeoVideoThumbnail.png"; 


let PlayIcon=()=>{
    return <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_131_382)">
    <path d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z" fill="white"/>
    <path d="M12.542 10.11C12.7056 10.0257 12.8892 9.98827 13.0727 10.0017C13.2562 10.0151 13.4324 10.0789 13.582 10.186L20.582 15.186C20.7116 15.2785 20.8173 15.4006 20.8902 15.5422C20.9631 15.6838 21.0011 15.8407 21.0011 16C21.0011 16.1592 20.9631 16.3162 20.8902 16.4578C20.8173 16.5993 20.7116 16.7215 20.582 16.814L13.582 21.814C13.4325 21.921 13.2563 21.9847 13.0729 21.9981C12.8895 22.0115 12.706 21.9741 12.5425 21.89C12.379 21.8058 12.2418 21.6783 12.1461 21.5212C12.0504 21.3642 11.9999 21.1839 12 21V11C11.9998 10.8161 12.0503 10.6358 12.1459 10.4788C12.2415 10.3218 12.3786 10.1942 12.542 10.11Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_131_382">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
}

const SeoLeadGenVideoPlayer:FC = () => {
  return (
    <ReactPlayerModal Icon={PlayIcon}
    width={"291px"}
    height={"210px"}
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    thumbnail={SeoVideoThumbnail.src}
    rounded="rounded-0"
    />
  )
}

export default SeoLeadGenVideoPlayer