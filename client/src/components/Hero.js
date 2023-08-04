import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Hero() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <LazyLoadImage
          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/Paste%20image.png?alt=media&token=09a1256b-9fb9-4dcf-935f-f2f03fd77ef2"
          alt=""
          className="lg:w-[50%]"
        />
        <div className="bg-[#4B0150] lg:w-[50%] lg:pl-[82px] lg:pt-[207px] py-10 flex flex-col items-center lg:block">
          <h1 className="text-white font-space font-medium lg:text-[54px] text-[35px] lg:w-[70%] text-center lg:text-left">
            Your Journey to Gorgeous Hair Begins Here
          </h1>
          <p className="font-inter lg:text-lg text-white mt-2">
            Let Us Make Your Hair Dreams a Reality
          </p>
          <button className="bg-white font-space font-medium text-base flex items-center justify-center mt-7 gap-1 w-[178px] h-[46px]">
            See Collection{" "}
            <LazyLoadImage
              src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-right.png?alt=media&token=69a1f238-9792-4096-b2d8-27def5e097ac"
              alt=""
              className="w-[20px] mt-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
