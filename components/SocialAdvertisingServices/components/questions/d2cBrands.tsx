import React from 'react'
import List from './list'
import { AdTypes, AdObjectives } from '../../data/questions'

const D2cBrands = () => {
  return (
    <div
      className="space-y-3 md:space-y-6 lg:space-y-9 flex flex-col"
      id="d2cBrands"
    >
      <h3 className="font-bold text-[40px] leading-[52px] text-black-80">
        What Kind of social media ads fit D2C brands?
      </h3>
      <p>For direct to consumer social media ads you can count on:</p>
      <List content={AdTypes} />
      <p>According to your D2C goals you customize the ad objectives to:</p>
      <List content={AdObjectives} />
      <p>
        The choice of your ad type and format can have a huge impact on the
        overall success of your campaigns. If you are unsure how and where to
        start, Muscled is here to help.
      </p>
      <p>
        With our years of experience developing and managing social ad campaigns
        for a great variety of D2C businesses, we know what it takes to achieve
        your social media goals.
      </p>
      <p>
        Contact our social media professionals at{' '}
        <a href="tel:+123456789">XXXXXXXXXXX</a> or hit us up online to learn
        how to expand your D2C brand!
      </p>
    </div>
  )
}
export default D2cBrands
