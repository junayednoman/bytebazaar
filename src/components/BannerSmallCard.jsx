import Btn from "./Btn";
import { FaCheck } from "react-icons/fa6";


const BannerSmallCard = ({ productName, HeadingText, bg, link, text, color, label, labelBg, highlights }) => {
    return (
        <div className="bg-center bg-cover bg-no-repeat h-full rounded-md xl:p-8 p-6 pb-9 w-full" style={{ backgroundImage: `url(${bg})`, color: color ? color : '' }}>
            {
                label &&
                <span className="px-4 py-[6px] rounded-full" style={{ backgroundColor: labelBg ? labelBg : '' }}>{label}</span>
            }
            {
                productName &&
                <p className="capitalize text-[15px] mb-[6px]" style={{ color: color ? color : '' }}>{productName}</p>
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
                <p style={{ color: color ? color : '' }} className="lg:mt-5 md:mt-2 lg:mb-10 mb-7 xl:pr-20 md:text-base text-sm">{text}</p>
            }
            {
                link &&
                <Btn text="see more products" link={link}></Btn>
            }

        </div >
    );
};

export default BannerSmallCard;