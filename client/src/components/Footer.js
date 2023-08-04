import React from 'react'
import { Fb, Email, Insta, Tweet } from '../assets/svg'
import { Disclosure } from "@headlessui/react";
import { ChevronDownWhite } from '../assets/svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Footer() {
    return (
        <div className='pt-[72px] lg:pb-[82px] pb-[52px] lg:px-[52px] px-5 bg-[#4B0158]'>
            <div className='w-[100%] lg:flex flex-col lg:flex-row justify-between hidden border-b border-b-white pb-16'>
                <div className='lg:w-[50%]'>
                    <LazyLoadImage className='w-[94px]' src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/logo-web-white%201.png?alt=media&token=d92c09e7-3876-4a41-969a-364c45e70480&_gl=1*wmhvgn*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjA2MzU0Ni40OS4xLjE2ODYwNjM2MTcuMC4wLjA." alt="" />
                    <h1 className='font-medium font-inter text-white text-base mt-4 mb-6 lg:w-[60%] w-[100%]'>A luxury brand hair shop that offers high-quality hair extensions and wigs for all hair types and styles.</h1>
                    <div className='flex items-center gap-4'>
                        <LazyLoadImage src={Fb} alt="" />
                        <LazyLoadImage src={Insta} alt="" />
                        <LazyLoadImage src={Tweet} alt="" />
                        <LazyLoadImage src={Email} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between lg:w-[50%] mt-10 lg:mt-0'>
                    <div>
                        <h1 className='font-inter font-extrabold text-white text-xl mb-4'>Shop</h1>
                        <p className='font-inter text-white text-sm mb-3'>My account</p>
                        <p className='font-inter text-white text-sm mb-3'>Login</p>
                        <p className='font-inter text-white text-sm mb-3'>Wishlist</p>
                        <p className='font-inter text-white text-sm mb-10'>Cart</p>
                    </div>
                    <div>
                        <h1 className='font-inter font-extrabold text-white text-xl mb-4'>Information</h1>
                        <p className='font-inter text-white text-sm mb-3'>Shipping Policy</p>
                        <p className='font-inter text-white text-sm mb-3'>Returns and Refunds</p>
                        <p className='font-inter text-white text-sm mb-10'>Frequently asked</p>
                    </div>
                    <div>
                        <h1 className='font-inter font-extrabold text-white text-xl mb-4'>Company</h1>
                        <p className='font-inter text-white text-sm mb-3'>About us</p>
                        <p className='font-inter text-white text-sm mb-3'>Privacy Policy</p>
                        <p className='font-inter text-white text-sm mb-3'>Terms & Conditions</p>
                        <p className='font-inter text-white text-sm mb-3'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div>
                    <LazyLoadImage className='w-[94px]' src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/logo-web-white%201.png?alt=media&token=d92c09e7-3876-4a41-969a-364c45e70480&_gl=1*wmhvgn*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjA2MzU0Ni40OS4xLjE2ODYwNjM2MTcuMC4wLjA." alt="" />
                    <h1 className='font-medium font-inter text-white text-[0.875rem] mt-4 mb-6 lg:w-[60%] w-[100%]'>A luxury brand hair shop that offers high-quality hair extensions and wigs for all hair types and styles.</h1>
                </div>
                <div className="border-b border-b-white mb-5 p-3">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className=" w-[100%] flex items-center justify-between font-inter font-extrabold text-xl text-white">
                                    <span>Shop</span>
                                    <div className={open ? "rotate-180 transform rounded-lg flex items-center justify-center" : "rounded-lg flex items-center justify-center"}>
                                        <LazyLoadImage src={ChevronDownWhite} alt="" className='w-[1.25rem] h-[1.25rem]' />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="w-[75%] mt-[13px] font-poppins text-[13px] text-[#828282]">
                                    <p className='font-inter text-white text-sm mb-3'>My account</p>
                                    <p className='font-inter text-white text-sm mb-3'>Login</p>
                                    <p className='font-inter text-white text-sm mb-3'>Wishlist</p>
                                    <p className='font-inter text-white text-sm mb-10'>Cart</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="border-b border-b-white mb-5 p-3">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className=" w-[100%] flex items-center justify-between font-inter font-extrabold text-xl text-white">
                                    <span>Information</span>
                                    <div className={open ? "rotate-180 transform rounded-lg flex items-center justify-center" : "rounded-lg flex items-center justify-center"}>
                                        <LazyLoadImage src={ChevronDownWhite} alt="" className='w-[1.25rem] h-[1.25rem]' />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="w-[75%] mt-[13px] font-poppins text-[13px] text-[#828282]">
                                    <p className='font-inter text-white text-sm mb-3'>Shipping Policy</p>
                                    <p className='font-inter text-white text-sm mb-3'>Returns and Refunds</p>
                                    <p className='font-inter text-white text-sm mb-10'>Frequently asked</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="border-b border-b-white mb-5 p-3">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className=" w-[100%] flex items-center justify-between font-inter font-extrabold text-xl text-white">
                                    <span>Company</span>
                                    <div className={open ? "rotate-180 transform rounded-lg flex items-center justify-center" : "rounded-lg flex items-center justify-center"}>
                                        <LazyLoadImage src={ChevronDownWhite} alt="" className='w-[1.25rem] h-[1.25rem]' />
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="w-[75%] mt-[13px] font-poppins text-[13px] text-[#828282]">
                                    <p className='font-inter text-white text-sm mb-3'>About us</p>
                                    <p className='font-inter text-white text-sm mb-3'>Privacy Policy</p>
                                    <p className='font-inter text-white text-sm mb-3'>Terms & Conditions</p>
                                    <p className='font-inter text-white text-sm mb-3'>Contact Us</p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className='flex items-center gap-4 mt-10 mb-14 justify-center'>
                    <LazyLoadImage src={Fb} alt="" />
                    <LazyLoadImage src={Insta} alt="" />
                    <LazyLoadImage src={Tweet} alt="" />
                    <LazyLoadImage src={Email} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Footer