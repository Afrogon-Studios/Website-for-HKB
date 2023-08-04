import {useSwiper} from "swiper/react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const SwiperNav = () => {
    const swiper = useSwiper()

    return (
        <div className="flex items-center gap-3">
            <button onClick={() => swiper.slidePrev()} className="bg-[#F5F5F5] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                <LazyLoadImage 
                className="w-[80%]" 
                src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-prev.png?alt=media&token=fa44ea06-f78e-4441-bfd3-a4ee04dd7d97&_gl=1*1mpaft0*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5OTIzOS40OC4xLjE2ODU4OTk2NzcuMC4wLjA." alt="" />
            </button>
            <button onClick={() => swiper.slideNext()} className="bg-[#F5F5F5] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                <LazyLoadImage
                className="w-[80%]" 
                src="https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/arrow-next.png?alt=media&token=d59272ae-fb97-444e-8535-1240f9a0b8d2&_gl=1*9p7w65*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NTg5OTIzOS40OC4xLjE2ODU4OTk3MDMuMC4wLjA." alt="" />
            </button>
        </div>
    )
}