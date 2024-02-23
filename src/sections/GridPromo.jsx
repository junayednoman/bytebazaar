import BannerSmallCard from "../components/BannerSmallCard";

const GridPromo = () => {
    const highlights = ["IPHONE 14 PRO MAX", "IPHONE 15 PRO MAX"]
    return (
        <div className="md:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-6 gap-y-5">
            <div className="lg:col-span-1 md:col-span-2 p-0 m-0 md:block hidden">
                <BannerSmallCard HeadingText="Smart Swatches​" highlights={highlights} bg={'/product2-4-600x480.png'} color="white"></BannerSmallCard>
            </div>
            <BannerSmallCard HeadingText="Trend Hardwares​" highlights={highlights} bg={'/product-banners-h-150-15.png'} ></BannerSmallCard>
            <BannerSmallCard HeadingText="Smart Phones​" highlights={highlights} bg={'/slider-1.png'} color="white"></BannerSmallCard>
        </div>
    );
};

export default GridPromo;