import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from "../components/ProductCard";
import Countdown from "react-countdown";
const DiscountedProduct = () => {
    const millisecondsUntilNextJanuary1 = new Date(new Date().getFullYear() + 1, 0, 1) - new Date();


    return (
        <div className="md:mt-12 mt-8">
            <div className="md:flex block justify-between items-center">
                <SectionTitle text="Discounted Products ✨"></SectionTitle>

                <div className="md:mb-0 mb-4 md:flex items-center gap-2 hidden">
                    <p>Discount Ends in: </p>
                    <Countdown className="text-lg font-medium" date={Date.now() + millisecondsUntilNextJanuary1}></Countdown>
                </div>
            </div>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}

            >
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
            </Swiper>
        </div >
    );
};

export default DiscountedProduct;