import BannerSmallCard from "../components/BannerSmallCard";


const GridPromo2 = () => {
    const highlights = ["IPHONE 14 PRO MAX", "IPHONE 15 PRO MAX"]
    return (
        <div className="md:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-6 gap-y-5">
            <div className="lg:col-span-2 col-span-2">
                <BannerSmallCard HeadingText="Lorem ipsum dolor sit amet consectetur adipisicing elit.​" label="IPHONE 14 PRO MAX" labelBg="red" link="/" bg={'/product-banners-h-150-15.png'} ></BannerSmallCard>
            </div>
            <div className="lg:col-span-1 col-span-2">
                <BannerSmallCard HeadingText="Smart Phones​" highlights={highlights} bg={'/slider-1.png'} color="white"></BannerSmallCard>
            </div>
        </div>
    );
};

export default GridPromo2;