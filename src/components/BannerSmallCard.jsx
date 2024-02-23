import Btn from "./Btn";
import { FaCheck } from "react-icons/fa6";


const BannerSmallCard = ({ productName, HeadingText, bg, link, text, color, label, highlights }) => {
    return (
        <div className="bg-center bg-cover bg-no-repeat h-full rounded-md xl:p-8 p-6 pb-9 w-full" style={{ backgroundImage: `url(${bg})`, color: color ? color : '' }}>
            {
                label &&
                <span className="text-[12px] font-medium uppercase">{label}</span>
            }
            {
                productName &&
                <p className="capitalize text-[15px] mb-[6px] mt-2" style={{ color: color ? color : '' }}>{productName}</p>
            }
            <h4 className="capitalize text-xl font-bold">{HeadingText}</h4>
            {highlights &&
                <div className="flex items-center gap-5 mt-4">
                    {highlights.map(highlight =>
                        <p className="flex items-center gap-1 my-1 capitalize text-[13px]" style={{ color: color ? color : '' }} key={highlight}>
                            <span><FaCheck></FaCheck></span>
                            <span>{highlight}</span>
                        </p>
                    )}
                </div>
            }
            {
                text &&
                <p style={{ color: color ? color : '' }} className="lg:mt-5 md:mt-2 lg:mb-2 mb-1 xl:pr-20 md:text-base text-sm">{text}</p>
            }
            {
                link &&
                <div className="md:mt-4 mt-2">
                    <Btn text="see more products" link={link}></Btn>
                </div>
            }

        </div >
    );
};

export default BannerSmallCard;