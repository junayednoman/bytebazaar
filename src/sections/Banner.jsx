import BannerSmallCard from "../components/BannerSmallCard";
import Btn from "../components/Btn";

const Banner = () => {
    return (
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-x-8 gap-y-6">
            <div className="col-span-2 md:px-12 px-7 xl:py-32 md:py-24 py-12 text-white bg-[url(/slider-2.png)] bg-no-repeat bg-center bg-cover rounded-md">
                <span className="uppercase px-5 py-2 bg-colorRed rounded-md text-sm font-medium">from $120</span>
                <h1 className="xl:text-6xl md:text-5xl text-3xl xl:leading-[70px] md:leading-[55px] uppercase mt-7 text-white">New Generation <br /> Smart Headphones</h1>
                <p className="md:text-lg text-base md:mt-7 mt-4 md:mb-12 mb-8 text-white">Headphones are a type of audio equipment that are worn on or over the ears to listen to music, podcasts, audiobooks, and other forms of audio content privately. </p>
                <Btn text="shop now"></Btn>
            </div>
            <div className="col-span-1 flex xl:flex-col md:flex-row flex-col justify-between xl:gap-8 gap-6 min-h-4">
                <BannerSmallCard link={"/"} HeadingText="sale 34% off" text="Headphones are a type of audio equipment that are worn on" bg="/small-1.png" productName="mackbook pro"></BannerSmallCard>
                <BannerSmallCard link={"/"} HeadingText="top selling product" text="Headphones are a type of audio equipment that are worn on" bg="/slider-1.png" productName="iphone 15 max pro" color="white"></BannerSmallCard>
            </div>
        </div>
    );
};

export default Banner;