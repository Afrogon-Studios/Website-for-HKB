import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const shopCatalogData = [
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog1.png?alt=media&token=a2795d1d-e658-43e3-9e4f-09e7fcbb020f",
        title: "Royal Collection"
    },
    {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog2.png?alt=media&token=1e2e5963-5c82-40e5-af4b-85509f43c4e3",
        title: "Luxury Collection"
    },
    {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog3.png?alt=media&token=26b7ab05-5f32-4cff-aff5-00e9096c58cd",
        title: "Donor Collection"
    },
    {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog4.png?alt=media&token=5349a573-d6b1-4491-8222-adb9b1787b76",
        title: "Corporate Collection"
    },
    {
        id: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog5.png?alt=media&token=66572e63-8d78-4d91-bfc6-37cf8ad40075",
        title: "Everyday Collection"
    },
    {
        id: 6,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog6.png?alt=media&token=0094707a-a608-47e6-ab1d-9cf2b7ab2628",
        title: "Boogie Collection"
    },
    {
        id: 7,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog7.png?alt=media&token=4d25d66e-f216-40c5-afa2-1444c1ebc3d6",
        title: "Collection Name"
    },
    {
        id: 8,
        img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/catalog8.png?alt=media&token=314f4f88-f823-45ee-98ae-5d9afd94c4dc",
        title: "Collection Name"
    },
]

function ShopCatalog() {
    return (
        <div className='lg:px-[3.25rem] mb-[6.50rem]'>
            <div>
                <h1 className='font-space font-medium lg:text-[3.375rem] text-[1.75rem] text-center lg:my-10 my-5'>CATALOGUE</h1>
                <div className='grid lg:grid-cols-4 gap-[2rem] justify-items-center'>
                    {shopCatalogData.map(data => (
                        <Link key={data.id}  to="/collection">
                            <div className='lg:w-[20.75rem] w-[22rem]'>
                                <LazyLoadImage src={data.img} alt="" />
                                <p className='font-space font-medium lg:text-[2rem] text-[1.25rem] text-[#4B0150]'>{data.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopCatalog