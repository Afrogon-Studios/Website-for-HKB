import React from 'react'
import { Phone, Truck, Lock } from '../assets/svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Content() {
  return (
    <div className='flex justify-center py-10'>
        <div className='flex flex-col lg:flex-row items-center mx-auto'>
            <div className='flex gap-4 items-start px-20 py-10'>
               <LazyLoadImage src={Truck} alt="" />
               <div>
                <h1 className='font-space font-medium text-lg text-[#121212]'>Free Shipping</h1>
                <p className='font-inter text-sm text-[#807E7E]'>Orders above $500</p>
               </div>
            </div>
            <div className='flex gap-4 items-start lg:border-x-2 border-y-2 lg:border-y-0 border-[#EAEAEA] px-20 py-10'>
               <LazyLoadImage src={Phone} alt="" />
               <div>
                <h1 className='font-space font-medium text-lg text-[#121212]'>Premium Support</h1>
                <p className='font-inter text-sm text-[#807E7E]'>Phone and email support</p>
               </div>
            </div>
            <div className='flex gap-4 items-start px-20 py-10'>
               <LazyLoadImage src={Lock} alt="" />
               <div>
                <h1 className='font-space font-medium text-lg text-[#121212]'>Secure Payments</h1>
                <p className='font-inter text-sm text-[#807E7E]'>Secured by Paystack</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Content