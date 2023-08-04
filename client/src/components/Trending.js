import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Trending() {
  return (
    <div className="py-10 lg:px-20 px-5">
      <div className="grid lg:grid-cols-[600px_minmax(324px,_1fr)] grid-cols-1 px-auto">
        <div className="lg:my-auto">
          <p className="font-inter font-semibold uppercase text-base text-black mb-2 text-center lg:text-left">Trending</p>
          <h1 className="font-space font-medium text-[54px] text-[#4B0158] leading-none lg:w-[70%] mb-6 text-center lg:text-left">Made from the finest materials</h1>
          <p className="font-inter text-lg text-[#3E3E59] lg:w-[75%] text-center lg:text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <button className="bg-white font-space font-medium text-[22px] text-[#4B0158] flex items-center justify-center mt-7 gap-1 w-[185px] h-[46px] mx-auto lg:mx-0 mb-10">
            See Collection{" "}
            <LazyLoadImage
              src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-right-purple.png?alt=media&token=6da6f376-ce0d-4fe2-be27-41dc82903ad1&_gl=1*gn9ilg*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDMwOTEuMC4wLjA."
              alt=""
              className="w-[28px] mt-1"
            />
          </button>
        </div>
        <div className="relative">
          <LazyLoadImage
            delayTime={0}
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/trending%201.png?alt=media&token=e9e07a50-e548-428f-967d-66a7342e045f&_gl=1*xv6ovh*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDEzNzMuMC4wLjA."
            alt=""
            className="lg:w-[570px] h-[570px] lg:ml-48"
          />
          <LazyLoadImage
            delayTime={0}
            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/trending%202.png?alt=media&token=dabfb75b-ae9e-4b83-a6d5-49c06947b18a&_gl=1*rz7mpc*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg0MDU5Ni40Mi4xLjE2ODU4NDEzOTcuMC4wLjA."
            alt=""
            className="lg:w-[337px] w-[200px] absolute lg:top-[38%] bottom-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Trending;
