import React, { FC } from 'react'
import Image from 'next/image'
import { HeroFeatures } from '../component.type'
import img from '../../../../components/assets/SocialAdvertisingServices/icon-sales-funnel 1.png'

const Feature: FC<HeroFeatures> = ({
  topSubHeading,
  heading,
  bottomSubHeading,
  icon,
  className
}) => {
  return (
    <div className="bg-black flex p-2 w-full basis-1/5 xl:basis-1 my-1">
      <div className="flex basis-1/4 justify-center items-center">
        <Image src={icon!} alt="icon" width={80} height={80} />
      </div>
      <div className="flex flex-col basis-3/4 text-white">
        <p className="text-xs">{topSubHeading}</p>
        <h3 className="text-white">{heading}</h3>
        <p className="text-xs text-neutral-400 uppercase">{bottomSubHeading}</p>
      </div>
    </div>
  )
}
export default Feature
