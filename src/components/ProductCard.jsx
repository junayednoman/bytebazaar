
import { Link } from "react-router-dom";
import img from "../assets/684-×-547-piksel-600x480.png"
import Btn from "./Btn";

const ProductCard = () => {
    const features = ["5 years guarantee", "free returns", "installment options"]
    return (
        <div className="border rounded-md">
            <div className="flex justify-center items-center p-4 border-b">
                <span className="p-1 px-2 bg-colorGreen rounded-md text-white text-[10px] absolute top-3 left-4 capitalize inline-block">21% off</span>
                <Link to={"/"}>
                    <img src={img} alt="" />
                </Link>
            </div>
            <div className="p-4">
                <h4 className="font-medium capitalize text-lg">IPhone SE 256GB</h4>
                <p className="text-colorRed text-[15px] my-1">$699.99 - $750.54</p>
                <p className="text-colorGreen text-sm mb-1">In Stock</p>
                <div className="mb-3">

                    {
                        features.map(feature => <p key={feature} className="flex items-center gap-1 text-[12px] capitalize">
                            <span>✔</span>
                            <span>{feature}</span>
                        </p>)
                    }

                </div>
                <Btn fullWidth={true} text={'add to cart'}></Btn>
            </div>
        </div>
    );
};

export default ProductCard;