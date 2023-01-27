import React from 'react';
import PricingCard from '../Card/PricingCard';



const PricingPlan = () => {

    const basicContent = [
            '2 landing page design iterations', 
            '1 multivariate conversion testing iteration',
            'Performance test and conversion reporting'
        ]

    const premiumContent = [
            '2 landing page design iterations',
            '3 multivariate conversion testing iteration',
            'PPC campaign review'
        ]


    return (
        <>
            <div className="pricing-section mb-10">
                <p className='pricing-section-title text-center text-2xl md:text-4xl font-bold leading-normal mb-14'>Explore PPC Landing Page Service Plans</p>
                
                <div className="card-wrapper flex md:flex-row flex-col justify-center items-center">
                    <PricingCard title='DYNAMIC W/ TESTING' rate='$2,400 / page' type='basic' content={basicContent} />
                    <PricingCard title='FULLY OPTIMIZED' rate='$3,200 / page' type='premium' content={premiumContent}/>
                </div>
                

            </div>
        </>
    );
};

export default PricingPlan;