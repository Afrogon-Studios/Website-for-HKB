import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Star from "../assets/svg/Star Icon.svg";
import ShoppingBag from "../assets/svg/shopping bag.svg"
import Calendar from "../assets/svg/calendar.svg"
import Truck from "../assets/svg/Truck.svg"
import MasterCard from "../assets/svg/Mastercard.svg"
import Verve from "../assets/svg/Verve.svg"
import Visa from "../assets/svg/visa-logo.svg"
import Add from "../assets/svg/Add.svg"
import Minus from "../assets/svg/Minus.svg"
import Arrow from "../assets/svg/arrow-right.svg"
import Upload from "../assets/svg/upload folder.svg"

const reviews = [
    {
        id: 1,
        name: "Stella Njoku",
        date: "July 30, 2023",
        verified: true,
        stars: 1,
        heading: "LOVELY HAIR WITH GOOD TEXTURE",
        desc: "The quality is exceptional, and it blends seamlessly with my natural hair. The entire process, from ordering to delivery, was smooth and hassle-free. Highly recommended!"
    },
    {
        id: 2,
        name: "Stella Njoku",
        date: "July 30, 2023",
        verified: true,
        stars: 2,
        heading: "LOVELY HAIR WITH GOOD TEXTURE",
        desc: "The quality is exceptional, and it blends seamlessly with my natural hair. The entire process, from ordering to delivery, was smooth and hassle-free. Highly recommended!"
    },
    {
        id: 3,
        name: "Stella Njoku",
        date: "July 30, 2023",
        verified: false,
        stars: 3,
        heading: "LOVELY HAIR WITH GOOD TEXTURE",
        desc: "The quality is exceptional, and it blends seamlessly with my natural hair. The entire process, from ordering to delivery, was smooth and hassle-free. Highly recommended!"
    },
    {
        id: 4,
        name: "Stella Njoku",
        date: "July 30, 2023",
        verified: true,
        stars: 4,
        heading: "LOVELY HAIR WITH GOOD TEXTURE",
        desc: "The quality is exceptional, and it blends seamlessly with my natural hair. The entire process, from ordering to delivery, was smooth and hassle-free. Highly recommended!"
    },
    {
        id: 5,
        name: "Stella Njoku",
        date: "July 30, 2023",
        verified: false,
        stars: 5,
        heading: "LOVELY HAIR WITH GOOD TEXTURE",
        desc: "The quality is exceptional, and it blends seamlessly with my natural hair. The entire process, from ordering to delivery, was smooth and hassle-free. Highly recommended!"
    },
]

function DescComp() {
    const [descRow, setDescRew] = useState(0)
    const [writeReview, setWriteReview] = useState(false)
    return (
        <div className='lg:px-[7.5rem] pt-[3.25rem]'>
            <div className='grid lg:grid-cols-2 lg:gap-[5.12rem]'>
                <div className='flex flex-col'>
                    <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed' alt='' className='lg:w-[35.875rem] w-[21.4375rem] lg:h-[47.8125rem] h-[28.5625rem] mx-auto' />
                    <div className='flex items-center gap-[1.19rem] mt-[0.94rem] mx-auto'>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed' alt='' className='lg:w-[8rem] w-[4.75rem] lg:h-[10.6875rem] h-[6.375rem]' />
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed' alt='' className='lg:w-[8rem] w-[4.75rem] lg:h-[10.6875rem] h-[6.375rem]' />
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed' alt='' className='lg:w-[8rem] w-[4.75rem] lg:h-[10.6875rem] h-[6.375rem]' />
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed' alt='' className='lg:w-[8rem] w-[4.75rem] lg:h-[10.6875rem] h-[6.375rem]' />
                    </div>
                </div>
                <div className='pt-[1.25rem] lg:pt-0 mx-[1rem]'>
                    <p className='font-inter text-[0.75rem] text-[#605F5F]'>Home {'>'} Shop {'>'} Straight Collection</p>
                    <h1 className='font-space font-medium text-[2.125rem] text-[#121212] mt-[0.5rem] mb-[0.75rem]'>Product Name</h1>
                    <p className='font-inter text-[0.875rem] text-[#3E3E59] lg:w-[75%]'>Introducing our stunning long black hair for sale. This lustrous and luxurious hair is perfect for those seeking a sleek and sophisticated look. Its rich black color and length make it a versatile choice for any occasion. Don't miss out on this gorgeous addition to your hairstyle collection!</p>
                    <div className='flex items-center gap-[0.5rem] mt-[0.75rem]'>
                        <div className='flex items-center'>
                            <LazyLoadImage src={Star} />
                            <LazyLoadImage src={Star} />
                            <LazyLoadImage src={Star} />
                            <LazyLoadImage src={Star} />
                            <LazyLoadImage src={Star} />
                        </div>
                        <p className='font-inter text-[0.75rem] text-[#605F5F]'>39 Reviews</p>
                    </div>
                    <div className='flex items-center mt-[1rem] gap-[0.75rem]'>
                        <p className='font-inter text-[1.625rem] font-semibold text-[#121212]'>N59,500.00</p>
                        <p className='font-inter text-[1rem] text-[#A7A7A7] line-through'>N70,000.00</p>
                    </div>
                    <div className='flex items-center gap-[0.5rem] mt-[1rem]'>
                        <LazyLoadImage src={ShoppingBag} />
                        <p className='font-inter text-[1rem] text-[#121212]'>Few units available</p>
                    </div>
                    <div className='border-t mt-[1.5rem] pt-[1.5rem] border-[#EAEAEA]'>
                        <p className='font-inter text-[#605F5F] text-[0.75rem] font-semibold'>Length</p>
                        <div className='flex flex-wrap lg:w-[60%] items-center gap-[1rem] mt-[0.75rem]'>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>10"</p>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>12"</p>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>14"</p>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>16"</p>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>18"</p>
                            <p className='px-[0.94rem] py-[0.25rem] border font-inter text-[0.875rem] text-[#121212] rounded-[0.25rem] border-[#CBCBCB]'>20"</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[3rem]'>
                        <div className='flex bg-[#F5F5F5] justify-between items-center px-[1rem] py-[0.75rem] lg:w-[70%]'>
                            <button>
                                <LazyLoadImage src={Minus} />
                            </button>
                            <p className='font-inter text-[1rem] font-semibold text-[#121212]'>1</p>
                            <button>
                                <LazyLoadImage src={Add} />
                            </button>
                        </div>
                        <button className='bg-[#4B0150] text-white font-space font-medium text-[1.125rem] lg:w-[70%] mt-[1rem] py-[0.62rem]'>Add to Cart</button>
                    </div>
                    <div className='mt-[1.5rem] border-t border-b border-[#EAEAEA] py-[1.5rem]'>
                        <div className='flex items-center gap-[0.5rem] mb-[1rem]'>
                            <LazyLoadImage src={Calendar} />
                            <p className='font-inter text-[1rem] font-semibold text-[#121212]'>Delivery: <span className='font-normal text-[#605F5F]'>5 - 7 Days</span></p>
                        </div>
                        <div className='flex items-center gap-[0.5rem]'>
                            <LazyLoadImage src={Truck} />
                            <p className='font-inter text-[1rem] font-semibold text-[#121212]'>Shipping: <span className='font-normal text-[#605F5F]'>Free for orders above N350,000</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col py-[1.5rem] gap-[1rem]">
                        <p className='font-inter text-[0.875rem] text-[#454545]'>Guaranteed & secure checkout</p>
                        <div className='flex items-center gap-[1.43rem]'>
                            <LazyLoadImage src={MasterCard} />
                            <LazyLoadImage src={Visa} />
                            <LazyLoadImage src={Verve} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[3.25rem] py-[3.25rem] mx-[1rem] lg:mx-0'>
                <div className='flex items-center gap-[5rem] border-b border-[#EAEAEA]'>
                    <p onClick={() => setDescRew(0)} className={`font-space text-[1.25rem] pb-[0.5rem] font-medium cursor-pointer ${descRow === 0 ? "text-[#121212 ] border-b border-black" : "text-[#807E7E]"}`}>Description</p>
                    <p onClick={() => setDescRew(1)} className={`font-space text-[1.25rem] pb-[0.5rem] font-medium cursor-pointer ${descRow === 1 ? "text-[#121212 ] border-b border-black" : "text-[#807E7E]"}`}>Reviews (39)</p>
                </div>
                {descRow === 0 &&
                    <div className='mt-[2rem]'>
                        <p className='font-inter text-[1.125rem] text-[#3E3E59] mb-[2rem] lg:w-[70%]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint non providen.</p>
                        <ul className='list-disc font-inter text-[1.125rem] text-[#3E3E59] flex flex-col gap-[0.75rem] ml-5'>
                            <li>Length: 10” - 20”</li>
                            <li>Weight: 200g</li>
                            <li>Colour: Natural Black</li>
                        </ul>
                    </div>
                }
                {descRow === 1 && <div className='mt-[2rem]'>
                    <h1 className='font-space text-[2.125rem] font-medium text-[#121212]'>Customer reviews</h1>
                    <div className='flex justify-between flex-col lg:flex-row lg:items-end mt-[1.25rem] border-b border-b-[#CBCBCB] pb-[2rem]'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <div className='flex items-center'>
                                <LazyLoadImage src={Star} />
                                <LazyLoadImage src={Star} />
                                <LazyLoadImage src={Star} />
                                <LazyLoadImage src={Star} />
                                <LazyLoadImage src={Star} />
                            </div>
                            <p className='font-inter text-[1.25rem] font-bold text-[#EDAB15]'>4.7<span className='text-[0.75rem] font-medium text-[#605F5F]'>(Based on 39 reviews)</span></p>

                        </div>
                        <button onClick={() => setWriteReview(!writeReview)} className='border-[2px] border-[#121212] mt-[1.5rem] w-[40%] lg:w-[15%] lg:mt-0 px-[1.5rem] py-[0.5625rem] font-space text-[1rem] font-medium text-[#121212]'>Write review</button>
                    </div>
                    {writeReview && <div className='mt-5 border border-[#CBCBCB] p-[1.5rem] rounded-[0.375rem]'>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-[2rem] gap-[1rem]'>
                            <div className='flex flex-col gap-[0.5rem]'>
                                <label htmlFor="" className='font-inter text-[1rem] font-semibold text-[#3E3E59]'>Name</label>
                                <input placeholder='Enter your name' className='border border-[#CBCBCB] px-[1rem] py-[0.5rem] rounded-[0.375rem] outline-none font-inter' type="text" />
                            </div>
                            <div className='flex flex-col gap-[0.5rem]'>
                                <label htmlFor="" className='font-inter text-[1rem] font-semibold text-[#3E3E59]'>Email</label>
                                <input placeholder='mary@example.com' className='border border-[#CBCBCB] px-[1rem] py-[0.5rem] rounded-[0.375rem] outline-none font-inter' type="text" />
                            </div>
                            <div className='flex flex-col gap-[0.5rem]'>
                                <label htmlFor="" className='font-inter text-[1rem] font-semibold text-[#3E3E59]'>Rating</label>
                                <div className='flex items-center'>
                                    <LazyLoadImage src={Star} />
                                    <LazyLoadImage src={Star} />
                                    <LazyLoadImage src={Star} />
                                    <LazyLoadImage src={Star} />
                                    <LazyLoadImage src={Star} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-[2rem] gap-[0.5rem]'>
                            <label htmlFor="" className='font-inter text-[1rem] font-semibold text-[#3E3E59]'>Title of review</label>
                            <input placeholder='Give your review a title' className='border border-[#CBCBCB] px-[1rem] py-[0.5rem] rounded-[0.375rem] outline-none font-inter' type="text" />
                        </div>
                        <div className='flex flex-col mt-[2rem] gap-[0.5rem]'>
                            <label htmlFor="" className='font-inter text-[1rem] font-semibold text-[#3E3E59]'>Describe your experience</label>
                            <textarea placeholder='Yeah, we want to hear the gist!' className='border border-[#CBCBCB] px-[1rem] py-[0.5rem] rounded-[0.375rem] outline-none font-inter' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-[0.75rem] mt-[1.5rem]'>
                            <button className='flex gap-[0.25rem] items-center border border-[#4B0150] px-[1.62rem] py-[0.62rem] rounded-[0.25rem]'>
                                <LazyLoadImage src={Upload} />
                                <p className='font-space text-[#4B0150] font-medium text-[1.125rem]'>Add photos</p>
                            </button>
                            <button className='flex gap-[0.25rem] items-center bg-[#4B0150] border border-[#4B0150] px-[1.62rem] py-[0.62rem] rounded-[0.25rem]'>
                                <LazyLoadImage src={Arrow} />
                                <p className='font-space text-white font-medium text-[1.125rem]'>Submit</p>
                            </button>
                        </div>
                    </div>}
                    <div className='mt-[2rem]'>
                        {reviews.map(review => (
                            <div key={review.id} className='border-b border-b-[#CBCBCB] py-[2rem]'>
                                <div className='flex items-center justify-between mb-[0.5rem]'>
                                    <div className='flex items-center gap-[0.75rem]'>
                                        <h1 className='font-inter text-[#000] font-semibold text-[1.125rem]'>{review.name}</h1>
                                        <p className='font-inter italic text-[0.875rem] font-medium text-[#EDAB15]'>{review.verified ? "Verified Buyer" : "Unverified Buyer"}</p>
                                    </div>
                                    <p className='font-inter text-[#807E7E] text-[0.875rem]'>{review.date}</p>
                                </div>
                                <div className='mb-[0.75rem]'>
                                    {review.stars === 1 ? <div><LazyLoadImage src={Star} /></div> : review.stars === 2 ? <div className='flex items-center'><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /></div> : review.stars === 3 ? <div className='flex items-center'><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /></div> : review.stars === 4 ? <div className='flex items-center'><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /></div> : <div className='flex items-center'><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /><LazyLoadImage src={Star} /></div>}
                                </div>
                                <h1 className='font-inter text-[#3E3E59] font-bold text-[1.125rem] mb-[0.75rem]'>{review.heading}</h1>
                                <p className='font-inter text-[#3E3E59] text-[1.125rem]'>{review.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
            <div className='py-[3.25rem] mx-[1rem] lg:mx-0'>
                <h1 className='font-space text-[1.625rem] font-medium text-[#121212] mb-[2rem]'>You may also like</h1>
                <div className='flex items-center gap-[2.88rem] overflow-x-scroll no-scrollbar'>
                    <div className='shrink-0'>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat1.png?alt=media&token=d5381e82-3223-4c9e-a9ca-05921b9a71c3' className='w-[15.125rem] h-[20.125rem]' />
                        <h1 className='font-space text-[1rem] font-medium text-[#121212] mt-[0.75rem] mb-[0.25rem]'>Product Name</h1>
                        <p className='font-inter text-[0.875rem] font-semibold text-[#121212]'>N56,000</p>
                    </div>
                    <div className='shrink-0'>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat1.png?alt=media&token=d5381e82-3223-4c9e-a9ca-05921b9a71c3' className='w-[15.125rem] h-[20.125rem]' />
                        <h1 className='font-space text-[1rem] font-medium text-[#121212] mt-[0.75rem] mb-[0.25rem]'>Product Name</h1>
                        <p className='font-inter text-[0.875rem] font-semibold text-[#121212]'>N56,000</p>
                    </div>
                    <div className='shrink-0'>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat1.png?alt=media&token=d5381e82-3223-4c9e-a9ca-05921b9a71c3' className='w-[15.125rem] h-[20.125rem]' />
                        <h1 className='font-space text-[1rem] font-medium text-[#121212] mt-[0.75rem] mb-[0.25rem]'>Product Name</h1>
                        <p className='font-inter text-[0.875rem] font-semibold text-[#121212]'>N56,000</p>
                    </div>
                    <div className='shrink-0'>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat1.png?alt=media&token=d5381e82-3223-4c9e-a9ca-05921b9a71c3' className='w-[15.125rem] h-[20.125rem]' />
                        <h1 className='font-space text-[1rem] font-medium text-[#121212] mt-[0.75rem] mb-[0.25rem]'>Product Name</h1>
                        <p className='font-inter text-[0.875rem] font-semibold text-[#121212]'>N56,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescComp