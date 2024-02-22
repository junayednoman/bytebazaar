import SectionTitle from "../components/SectionTitle";
import monitor from "../assets/product1-7-600x479.png"
import mobile from "../assets/684-×-547-piksel-600x480.png"
import gaming from "../assets/product2-4-600x480.png"
import FeaturedCategoryCard from "../components/FeaturedCategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const FeaturedCategories = () => {
    const featuredCategories = [
        { id: 1, heading: 'Monitor', img: monitor },
        { id: 2, heading: 'Mobile', img: mobile },
        { id: 3, heading: 'Monitor', img: monitor },
        { id: 4, heading: 'gaming', img: gaming },
        { id: 5, heading: 'Mobile', img: mobile },
        { id: 6, heading: 'gaming', img: gaming },
        { id: 7, heading: 'Mobile', img: mobile },
        { id: 8, heading: 'Monitor', img: monitor },
        { id: 9, heading: 'gaming', img: gaming },
        { id: 10, heading: 'Mobile', img: mobile },
    ]
    return (
        <div className="md:mt-12 mt-8">
            <SectionTitle text='popular categories'></SectionTitle>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 2300,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0:{
                        slidesPerView: 2,
                        spaceBetween: 20, 
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}

            >

                {
                    featuredCategories.map(category =>
                        <SwiperSlide key={category?.id}>
                            <FeaturedCategoryCard heading={category?.heading} img={category?.img}></FeaturedCategoryCard>
                        </SwiperSlide>
                    )
                }
            </Swiper>


            {/* <div className="grid grid-cols-8 gap-4"> */}

            {/* {
                    featuredCategories.map(category =>
                        <FeaturedCategoryCard key={category?.id} heading={category?.heading} img={category?.img}></FeaturedCategoryCard>
                    )
                } */}
            {/* </div> */}
        </div >
    );
};

export default FeaturedCategories;