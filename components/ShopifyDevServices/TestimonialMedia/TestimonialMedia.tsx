import React,{FC} from 'react'
import ReactPlayerModal from "../../ReactPlayerModal";

const PlayIcon:FC=()=>{

  return <svg className='hover:cursor-pointer' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M57.6 0H2.4C1.0725 0 0 1.0725 0 2.4V57.6C0 58.9275 1.0725 60 2.4 60H57.6C58.9275 60 60 58.9275 60 57.6V2.4C60 1.0725 58.9275 0 57.6 0ZM39.7275 30.66L24.7725 42.42C24.2175 42.855 23.4 42.465 23.4 41.76V18.2475C23.4 17.5425 24.2175 17.145 24.7725 17.5875L39.7275 29.34C39.8274 29.4186 39.9081 29.5189 39.9636 29.6332C40.0191 29.7475 40.0479 29.8729 40.0479 30C40.0479 30.1271 40.0191 30.2525 39.9636 30.3668C39.9081 30.4811 39.8274 30.5814 39.7275 30.66Z" fill="#C40000"/>
  <path d="M39.7275 30.66L24.7725 42.42C24.2175 42.855 23.4 42.465 23.4 41.76V18.2475C23.4 17.5425 24.2175 17.145 24.7725 17.5875L39.7275 29.34C39.8274 29.4186 39.9081 29.5189 39.9636 29.6332C40.0191 29.7475 40.0479 29.8729 40.0479 30C40.0479 30.1271 40.0191 30.2525 39.9636 30.3668C39.9081 30.4811 39.8274 30.5814 39.7275 30.66Z" fill="white"/>
  </svg>
  

}

const TestimonialMedia:FC = () => {
  return (
    <div>
    <ReactPlayerModal 
    Icon={PlayIcon}
    width="540px"
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
    </div>
  )
}

export default TestimonialMedia