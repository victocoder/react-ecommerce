import React from 'react'
import { weOffer } from '../utils/constants'
import MainTitle from './ui/MainTitle'

const WhatWeOffer = () => {
  return (
    <div className='py-8'>
        <MainTitle title="What we offer" className="pt-4 pb-16" />
         <div className='max-w-[900px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6'>
            {
            weOffer.map((offer)=>(
                <div className='bg-white shadow-md p-4 rounded place-items-center space-y-4'>
                    <img src={offer.img} alt="" />
                    <h3 htmlFor="" className='text-blue-0 font-body'>{offer.title}</h3>
                    <p htmlFor="" className='max-w-[200px] text-sm font-lato text-blue-0/30 text-center'>{offer.description}</p>
                </div>
            ))
            }
         </div>
    </div>
  )
}

export default WhatWeOffer
