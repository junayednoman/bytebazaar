import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import ReviewCard from '../components/ReviewCard';
import SectionTitle from '../components/SectionTitle';

const Review = () => {
    return (
        <div className='md:mt-12 mt-8'>
            <SectionTitle text="product reviews"></SectionTitle>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 2400,
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
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
                <SwiperSlide><ReviewCard></ReviewCard></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;