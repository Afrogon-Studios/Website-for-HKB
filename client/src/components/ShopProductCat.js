import React from 'react'
import { ChevronDown, Settings } from '../assets/svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const data = [
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
    {
        id: "5",
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat5.png?alt=media&token=1a88b774-117b-4fa0-b330-f7a354f8d4ad",
        name: "Product Name",
        newPrice: "78.00",
        oldPrice: "130.00",
    },
    {
        id: "6",
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat6.png?alt=media&token=cbbba20d-9530-4377-9ae5-7652996113ed",
        name: "Product Name",
        newPrice: "56.00",
        oldPrice: "130.00",
    },
    {
        id: "7",
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat7.png?alt=media&token=aeac4532-f294-499f-b6e1-041c0e989576",
        name: "Product Name",
        newPrice: "128.00",
        oldPrice: "130.00",
    },
    {
        id: "8",
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/product-cat8.png?alt=media&token=234622bc-edc9-4bb2-9b47-c3c859a260fd",
        name: "Product Name",
        newPrice: "76.00",
        oldPrice: "130.00",
    },
];

function ShopProductCat() {
    return (
        <div className="py-10 flex flex-col items-center">
            <div className="flex w-[88%] flex-col md:flex-row items-center justify-between">
                <h1 className='font-inter text-base text-[#605F5F] mb-5 lg:mb-0'>93 products</h1>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <span className='font-space font-medium text-base text-[#121212]'>Filter</span>
                        <LazyLoadImage src={Settings} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-space font-medium text-base text-[#121212]'>Sort by</span>
                        <LazyLoadImage src={ChevronDown} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 py-[52px] px-5">
                {data.map((item) => (
                    <Link key={item.id} to="/description">
                        <div className='relative'>
                            <LazyLoadImage src={item.img} alt="" className="w-[310px]" />
                            <p className="font-space font-medium text-base">{item.name}</p>
                            <p className="font-inter text-sm font-semibold">
                                ${item.newPrice}
                                <span className="text-gray-400 line-through ml-[12px] font-normal">
                                    ${item.oldPrice}
                                </span>
                            </p>
                            <button className='absolute bottom-16 lg:left-[5%] left-[9%] lg:w-[17.375rem] w-[9.1875rem] lg:py-[1rem] py-[0.7rem] bg-white font-space font-medium text-[#121212] text-[1rem]'>Add to cart</button>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default ShopProductCat