import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Categories() {
  return (
    <div className="lg:py-14 py-7 flex flex-col items-center">
      <div className="flex items-center justify-between md:w-[100%] w-[90%] lg:px-14">
        <h1 className="font-space font-medium text-[#4B0150] md:text-4xl text-2xl">
          Categories
        </h1>
        <p className="py-1 border-b border-[#4B0150] font-space font-medium md:text-lg text-sm cursor-pointer">
          See all categories
        </p>
      </div>
      <div className="flex flex-row w-[95%] gap-16 overflow-x-scroll no-scrollbar mt-8">
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image1.png?alt=media&token=33fb6e54-bd0a-4533-beeb-59c4f67e3612"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Curly Unit</p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image5.png?alt=media&token=a89d46fa-866f-4fea-a0b4-f604b9ce8b2e"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Royal Unit</p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image4.png?alt=media&token=fe116631-ed71-4aa0-8722-d9274e75ebd4"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Luxury Unit</p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image3.png?alt=media&token=defb6eec-bd4f-4f2c-9361-06586c4424de"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Emerald Unit</p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image2.png?alt=media&token=216d0afd-48e5-4b02-821b-ac0c24ab12a7"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Donor Unit</p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <LazyLoadImage
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image1.png?alt=media&token=33fb6e54-bd0a-4533-beeb-59c4f67e3612"
            alt=""
            className="rounded-full w-[196px]"
          />
          <p className="text-center">Brown Love</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
