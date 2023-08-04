import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Abouts() {
    return (
        <div className='p-[52px] flex flex-col gap-[104px]'>
            <div className='flex flex-col lg:flex-row gap-[114px]'>
                <div>
                    <p className='font-inter font-semibold text-base text-[#121212] mb-2'>ABOUT US</p>
                    <h1 className='font-space font-medium text-[40px] text-[#4B0150] w-[90%] mb-6'>Sed ut perspiciatis unde omnis iste natus voluptatem </h1>
                    <p className='font-inter text-lg text-[#3E3E59]'>Our team is dedicated to sourcing the finest quality hair to ensure that our hair looks and feels natural. We believe that everyone deserves beautiful hair, and we are committed to providing luxury hair and other hair options that meet our customers' needs.</p>
                    <p className='font-inter text-lg text-[#3E3E59] mt-10'>Our brand takes pride in being a customer-centric company, which means that we put our customers' needs first. We are committed to providing exceptional customer service, and we strive to build long-lasting relationships with our customers.</p>
                    <button className="bg-white font-space font-medium text-lg text-[#4B0158] flex items-center justify-center mt-6 gap-1 w-[185px] h-[46px] mx-auto lg:mx-0">
                        See Collection{" "}
                        <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-right-purple.png?alt=media&token=6da6f376-ce0d-4fe2-be27-41dc82903ad1&_gl=1*gn9ilg*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDMwOTEuMC4wLjA."
                            alt=""
                            className="w-[24px] mt-1"
                        />
                    </button>
                </div>
                <LazyLoadImage className='w-[652px]' src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/about%20pic%201.png?alt=media&token=f555296c-7d49-4098-882b-5e4722163978&_gl=1*169ek6s*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjMwOTM1OS41MS4xLjE2ODYzMDk1MTkuMC4wLjA." alt="" />
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-[114px]'>
                <LazyLoadImage className='w-[652px]' src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/about%20pic%202.png?alt=media&token=114eb5ea-51dc-4c5b-99af-f64c3614a2c4&_gl=1*1sn1exp*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjMwOTM1OS41MS4xLjE2ODYzMDk4NTYuMC4wLjA." alt="" />
                <div>
                    <p className='font-inter font-semibold text-base text-[#121212] mb-2'>OUR MISSION</p>
                    <h1 className='font-space font-medium text-[40px] text-[#4B0150] w-[90%] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className='font-inter text-lg text-[#3E3E59]'>We understand that choosing the right hair and product can be overwhelming, which is why we are here to assist you with our wide variety of products to choose from. From wigs and extensions to braiding hair and crochet hair, we have everything you need to achieve your desired look.</p>
                    <button className="bg-white font-space font-medium text-lg text-[#4B0158] flex items-center justify-center mt-6 gap-1 w-[185px] h-[46px] mx-auto lg:mx-0">
                        See Collection{" "}
                        <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-right-purple.png?alt=media&token=6da6f376-ce0d-4fe2-be27-41dc82903ad1&_gl=1*gn9ilg*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDMwOTEuMC4wLjA."
                            alt=""
                            className="w-[24px] mt-1"
                        />
                    </button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-[114px]'>
                <div>
                    <p className='font-inter font-semibold text-base text-[#121212] mb-2'>OUR VISION</p>
                    <h1 className='font-space font-medium text-[40px] text-[#4B0150] w-[90%] mb-6'>Sed ut perspiciatis unde omnis iste natus voluptatem </h1>
                    <p className='font-inter text-lg text-[#3E3E59]'>At our brand, we believe that everyone should feel confident and beautiful in their own skin. We hope that our products help you achieve that confidence, and we look forward to being a part of your hair journey. We cannot wait to see how you have a beautiful affair with Hkb Hair.</p>
                    <button className="bg-white font-space font-medium text-lg text-[#4B0158] flex items-center justify-center mt-6 gap-1 w-[185px] h-[46px] mx-auto lg:mx-0">
                        See Collection{" "}
                        <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-right-purple.png?alt=media&token=6da6f376-ce0d-4fe2-be27-41dc82903ad1&_gl=1*gn9ilg*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDMwOTEuMC4wLjA."
                            alt=""
                            className="w-[24px] mt-1"
                        />
                    </button>
                </div>
                <LazyLoadImage className='w-[652px]' src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/about%20pic%203.png?alt=media&token=8b13aade-1062-4afb-bd38-7b08c6e22de1&_gl=1*ar9enm*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjMwOTM1OS41MS4xLjE2ODYzMDk5MTYuMC4wLjA." alt="" />
            </div>
        </div>
    )
}

export default Abouts