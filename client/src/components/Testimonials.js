import React from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperNav } from "./SwiperNav";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const testimonialData = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/testimonial%20image%201.png?alt=media&token=99269b76-0058-4d42-b089-59018d89d833&_gl=1*1gncef3*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg3NjE5NS40NS4xLjE2ODU4NzYyNzguMC4wLjA.",
    name: "Jane Clare",
    stars: 1,
    productName: "Product Name",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  exercitation ullamco ❤️.”",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/testimonial%20image%202.png?alt=media&token=a154f353-b52a-4939-abf5-b9e61e292a3e&_gl=1*1co3jnx*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg3NjE5NS40NS4xLjE2ODU4NzY1NzAuMC4wLjA.",
    name: "Lucy George",
    stars: 2,
    productName: "Product Name",
    review:
      "“unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis .”",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/testimonial%20image%203.png?alt=media&token=206cea83-1a1a-4eec-9a82-ce19cac2d778&_gl=1*cvpodj*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg3NjE5NS40NS4xLjE2ODU4NzcyNzYuMC4wLjA.",
    name: "Amanda  Dozie",
    stars: 3,
    productName: "Product Name",
    review:
      "“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni do.”",
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/testimonial%20image%203.png?alt=media&token=206cea83-1a1a-4eec-9a82-ce19cac2d778&_gl=1*cvpodj*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg3NjE5NS40NS4xLjE2ODU4NzcyNzYuMC4wLjA.",
    name: "Amanda  Dozie",
    stars: 4,
    productName: "Product Name",
    review:
      "“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni do.”",
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/testimonial%20image%203.png?alt=media&token=206cea83-1a1a-4eec-9a82-ce19cac2d778&_gl=1*cvpodj*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg3NjE5NS40NS4xLjE2ODU4NzcyNzYuMC4wLjA.",
    name: "Amanda  Dozie",
    stars: 5,
    productName: "Product Name",
    review:
      "“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni do.”",
  },
];

function Testimonials() {
  return (
    <div className="py-20 lg:px-20 hidden lg:block">
      <div>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="relative"
        >
          <div className="absolute top-0 flex items-center justify-between w-[100%]">
            <h1 className="font-space font-medium text-[40px] text-[#4B0158]">
              Customer Love
            </h1>
            <SwiperNav />
          </div>
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="shadow-md p-10 rounded-lg py-10 mt-20">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <LazyLoadImage src={testimonial.img} alt="" className="w-[60px]" />
                  <div>
                    <p className="mb-1 font-space font-medium text-lg text-[#121212]">
                      {testimonial.name}
                    </p>
                    <div>
                      {testimonial.stars === 1 ? (
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                      ) : testimonial.stars === 2 ? (
                        <div className="flex items-center gap-[2px]">
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                        </div>
                      ) : testimonial.stars === 3 ? (
                        <div className="flex items-center gap-[2px]">
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                        </div>
                      ) : testimonial.stars === 4 ? (
                        <div className="flex items-center gap-[2px]">
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                          <LazyLoadImage
                            src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                            alt=""
                            className="w-[16px]"
                          />
                        </div>
                      ) : <div className="flex items-center gap-[2px]">
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                        <LazyLoadImage
                          src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/star%20(1).png?alt=media&token=53ad4238-1153-4131-a72d-f4a01acb06bc&_gl=1*1t3r0i4*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5MTk1NS40Ny4xLjE2ODU4OTE5OTAuMC4wLjA."
                          alt=""
                          className="w-[16px]"
                        />
                      </div>}
                    </div>
                  </div>
                </div>
                <h1 className="mb-2 font-inter text-base text-[#807E7E]">
                  {testimonial.productName}
                </h1>
                <p className="font-inter text-base text-[#3E3E59]">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
