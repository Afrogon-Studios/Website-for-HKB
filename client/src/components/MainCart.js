import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Trash from "../assets/svg/trash.svg"
import Add from "../assets/svg/Add.svg"
import Minus from "../assets/svg/Minus.svg"
import { Dialog } from '@headlessui/react'
import Close from "../assets/svg/close.svg"
import ArrowRight from "../assets/svg/arrow-right purple.svg"

const cartItems = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed",
    name: "Product Name",
    length: 12,
    weight: 200,
    price: "45000"
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed",
    name: "Product Name",
    length: 12,
    weight: 200,
    price: "45000"
  },
]

const recentData = [
  {
    id: "1",
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat1.png?alt=media&token=d5381e82-3223-4c9e-a9ca-05921b9a71c3",
    name: "Product Name",
    newPrice: "76.00",
    oldPrice: "130.00",
  },
  {
    id: "2",
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat2.png?alt=media&token=16131d7b-bd95-4eca-a1f0-0d17fb046f73",
    name: "Product Name",
    newPrice: "86.00",
    oldPrice: "130.00",
  },
  {
    id: "3",
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat3.png?alt=media&token=463127db-8b75-44a4-bbf1-9169ab2307e0",
    name: "Product Name",
    newPrice: "84.00",
    oldPrice: "130.00",
  },
  {
    id: "4",
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat4.png?alt=media&token=7b73fb25-6bf3-4cf5-9f70-735b064f1ff5",
    name: "Product Name",
    newPrice: "66.00",
    oldPrice: "130.00",
  },
]

function MainCart() {
  const [freeExpress, setFreeExpress] = useState("")
  const [open, setOpen] = useState(false)
  return (
    <div className='lg:px-[7.5rem] pt-[3.25rem]'>
      <h1 className='text-center font-space text-[3.375rem] font-medium text-[#121212]'>Cart</h1>
      <p className='text-center font-inter text-[#605F5F] text-[0.75rem]'>Continue Shopping {'>'}</p>
      <div className='lg:p-[3.25rem] p-[1rem] mt-[3.25rem]'>
        <div className='flex items-center justify-between border-b border-b-[#CBCBCB] pb-[1.5rem]'>
          <p className='font-space text-[#121212] font-medium text-[1rem] w-[30%]'>Product</p>
          <p className='font-space text-[#121212] font-medium text-[1rem] hidden lg:block'>Quantity</p>
          <p className='font-space text-[#121212] font-medium text-[1rem] hidden lg:block'>Price</p>
          <p className='font-space text-[#121212] font-medium text-[1rem] hidden lg:block'>Subtotal</p>
        </div>
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='py-[1.5rem] border-b border-b-[#CBCBCB] flex items-center justify-between'>
              <div className='lg:w-[32%] flex items-center gap-[1rem]'>
                <LazyLoadImage src={item.img} className='w-[4.8125rem] h-[6.375rem]' />
                <div className='flex flex-col gap-[0.5rem]'>
                  <p className='font-inter text-[0.875rem] font-semibold text-[#121212]'>{item.name}</p>
                  <div className='flex items-center gap-0.5 font-inter text-[#605F5F] font-semibold text-[0.75rem]'>
                    <p>Length: <span className='font-normal'>{item.length}"</span></p>
                    <span>,</span>
                    <p>Weight: <span className='font-normal'>{item.weight}g</span></p>
                  </div>
                  <button className='flex items-center gap-[0.25rem]' onClick={() => setOpen(!open)}>
                    <LazyLoadImage src={Trash} />
                    <p className='font-space text-[#605F5F] font-medium text-[0.875rem]'>Remove</p>
                  </button>
                </div>
              </div>
              <div className='items-center hidden lg:flex gap-3 border border-[#CBCBCB] rounded-[0.25rem] px-[0.5rem] py-[0.75rem]'>
                <button>
                  <LazyLoadImage src={Minus} />
                </button>
                <p className='font-inter text-[0.75rem] font-semibold text-[#121212]'>1</p>
                <button>
                  <LazyLoadImage src={Add} />
                </button>
              </div>
              <p className='font-inter text-[1.125rem] text-[#121212] hidden lg:block'>N{item.price}</p>
              <div>
                <p className='font-inter text-[1.125rem] text-[#121212] font-semibold'>N{Number(item.price) * 1}</p>
                <div className='items-center flex mt-3 lg:hidden gap-3 border border-[#CBCBCB] rounded-[0.25rem] px-[0.5rem] py-[0.75rem]'>
                  <button>
                    <LazyLoadImage src={Minus} />
                  </button>
                  <p className='font-inter text-[0.75rem] font-semibold text-[#121212]'>1</p>
                  <button>
                    <LazyLoadImage src={Add} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='lg:p-[3.25rem] flex flex-col lg:flex-row'>
        <div className='mx-5 lg:mx-0'>
          <h1 className='font-space text-[1.375rem] font-medium text-[#121212]'>Have a coupon?</h1>
          <p className='font-inter font-[1rem] text-[#605F5F] mt-[0.44rem]'>Add your code for an instant cart discount</p>
          <div className='flex items-center border border-[#CBCBCB] px-[1rem] rounded-[0.375rem] lg:max-w-max mt-[1rem]'>
            <input placeholder='Input' type="text" className='py-[1rem] px-[0.5rem] outline-none' />
            <button className='font-space text-[1rem] font-medium text-[#4B0150] ml-auto lg:ml-0'>Apply</button>
          </div>
        </div>
        <div className='lg:w-[33.625rem] mx-5 mt-[2.5rem] lg:mt-0 lg:mx-0 p-[1.5rem] border border-[#CBCBCB] rounded-[0.375rem] flex flex-col gap-[1rem]'>
          <h1 className='font-space text-[1.375rem] text-[#121212] font-medium'>Cart summary</h1>
          <div className={`flex items-center border px-[1rem] py-[0.81rem] rounded-[0.25rem] ${freeExpress === "free" ? "border-[#121212]" : "border-[#CBCBCB]"}`}>
            <input onClick={() => setFreeExpress("free")} type="radio" checked={freeExpress === "free" && true} name="" id="free" className='accent-black mt-0.5' />
            <label htmlFor="free" className='ml-[0.75rem]'>Free shipping</label>
            <p className='ml-auto'>N0.00</p>
          </div>
          <div className={`flex items-center border px-[1rem] py-[0.81rem] rounded-[0.25rem] ${freeExpress === "express" ? "border-[#121212]" : "border-[#CBCBCB]"}`}>
            <input onClick={() => setFreeExpress("express")} checked={freeExpress === "express" && true} type="radio" className='accent-black mt-0.5' name="" id="express" />
            <label htmlFor="express" className='ml-[0.75rem]'>Express shipping</label>
            <p className='ml-auto'>+N5000.00</p>
          </div>
          <div className='flex items-center justify-between border-b border-b-[#CBCBCB] py-[0.81rem]'>
            <p>Subtotal</p>
            <p>N103,400.00</p>
          </div>
          <div className='flex items-center justify-between py-[0.81rem]'>
            <p>Total</p>
            <p>N103,400.00</p>
          </div>
          <button className='bg-[#4B0150] text-white font-space font-medium text-[1.125rem] rounded-[0.375rem] py-[0.62rem]'>Checkout</button>
        </div>
      </div>
      <div className='py-[2rem]'>
        <h1 className='text-center font-space text-[2.25rem] text-[#121212]'>Recently Viewed</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 py-[52px] lg:px-0 px-5">
          {recentData.map((item) => (

            <div key={item.id} className='relative'>
              <LazyLoadImage src={item.img} alt="" className="w-[310px]" />
              <p className="font-space font-medium text-base">{item.name}</p>
              <p className="font-inter text-sm font-semibold">
                ${item.newPrice}
                <span className="text-gray-400 line-through ml-[12px] font-normal">
                  ${item.oldPrice}
                </span>
              </p>
              <button className='absolute bottom-16 lg:left-[3%] left-[9%] lg:w-[17.375rem] w-[9.1875rem] lg:py-[1rem] py-[0.7rem] bg-white font-space font-medium text-[#121212] text-[1rem]'>Add to cart</button>
            </div>

          ))}
        </div>
      </div>
      <div className='py-[2rem]'>
        <h1 className='text-center font-space text-[2.25rem] text-[#121212]'>You may also like</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 py-[52px] lg:px-0 px-5">
          {recentData.map((item) => (

            <div key={item.id} className='relative'>
              <LazyLoadImage src={item.img} alt="" className="w-[310px]" />
              <p className="font-space font-medium text-base">{item.name}</p>
              <p className="font-inter text-sm font-semibold">
                ${item.newPrice}
                <span className="text-gray-400 line-through ml-[12px] font-normal">
                  ${item.oldPrice}
                </span>
              </p>
              <button className='absolute bottom-16 lg:left-[3%] left-[9%] lg:w-[17.375rem] w-[9.1875rem] lg:py-[1rem] py-[0.7rem] bg-white font-space font-medium text-[#121212] text-[1rem]'>Add to cart</button>
            </div>

          ))}
        </div>
      </div>
      <Dialog
        style={{ position: "relative", zIndex: 50 }}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <div
          style={{
            background: "black",
            position: "fixed",
            inset: 0,
            opacity: 0.5,

          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            marginTop: "80px",
          }}
        >
          <Dialog.Panel
            // style={{
            //   background:"white",
            //   height: "24.4375rem",
            //   width: "40.75rem",
            //   margin:"auto",
            // }}
            className="bg-white m-auto lg:w-[40.75rem]  w-[90%] p-[2rem]"
          >
            <div className='flex items-center justify-between'>
              <h1 className='font-space lg:text-[2rem] text-[1.625rem] font-medium text-[#121212]'>Remove from cart</h1>
              <LazyLoadImage src={Close} className='cursor-pointer' onClick={() => setOpen(!open)} />
            </div>
            <p className='font-inter lg:text-[1rem] text-[0.875rem] text-[#121212] mt-[1.5rem]'>Do you really want to remove this item from cart?</p>
            <div className='flex flex-col gap-[2rem] mt-[2rem]'>
              <button className='flex items-center border justify-center gap-[0.5rem] py-[1.19rem] rounded-[0.375rem] border-[#4B0150]'>
                <p className='font-space text-[#4B0150] font-medium text-[1.375rem]'>Save to Wishlist</p>
                <LazyLoadImage src={ArrowRight}/>
              </button>
              <button className='border py-[1.19rem] rounded-[0.375rem] bg-[#4B0150] border-[#4B0150] font-space text-white font-medium text-[1.375rem]'>
                Remove Item
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default MainCart