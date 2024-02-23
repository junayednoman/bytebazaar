import { FaShippingFast } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const Features = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:mt-12 mt-8 lg:gap-5 gap-y-8">
            <div className="flex items-center gap-4">

                <div className="p-3 border-2 border-primaryColor rounded-full flex justify-center items-center">
                    <FaShippingFast className=" text-[28px] text-primaryColor"></FaShippingFast>
                </div>
                <div>
                    <h5 className="capitalize font-medium md:text-xl text-lg text-black">fast shipping</h5>
                    <p className="text-sm mt-1">Free Shipping for orders over $190</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="p-3 border-2 border-primaryColor rounded-full flex justify-center items-center">
                    <BsCurrencyDollar className=" text-[28px] text-primaryColor"></BsCurrencyDollar>
                </div>
                <div>
                    <h5 className="capitalize font-medium md:text-xl text-lg text-black">Money Guarantee</h5>
                    <p className="text-sm mt-1">Within 40 days for an exchange.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="p-3 border-2 border-primaryColor rounded-full flex justify-center items-center">
                    <FaRegCreditCard className=" text-[28px] text-primaryColor"></FaRegCreditCard>
                </div>
                <div>
                    <h5 className="capitalize font-medium md:text-xl text-lg text-black">Flexible Payment</h5>
                    <p className="text-sm mt-1">Pay with Multiple Credit Cards</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="p-3 border-2 border-primaryColor rounded-full flex justify-center items-center">
                    <MdOutlineSupportAgent className=" text-[28px] text-primaryColor"></MdOutlineSupportAgent>
                </div>
                <div>
                    <h5 className="capitalize font-medium md:text-xl text-lg text-black">Online Support</h5>
                    <p className="text-sm mt-1">24 hours a day, 7 days a week</p>
                </div>
            </div>

        </div>
    );
};

export default Features;