
import { Link } from "react-router-dom";
import img from "../assets/684-×-547-piksel-600x480.png"
import Btn from "./Btn";

const ProductCard = () => {
    return (
        <div className="border rounded-md">
            <div className="flex justify-center items-center p-4 border-b">
                <Link to={"/"}>
                    <img src={img} alt="" />
                </Link>
            </div>
            <div className="p-4">
                <h4 className="font-medium capitalize text-lg">IPhone SE 256GB</h4>
                <p className="text-colorRed text-[15px] my-1">$699.99 - $750.54</p>
                <p className="text-colorGreen text-sm mb-3">In Stock</p>
                <Btn fullWidth={true} text={'add to cart'}></Btn>
            </div>
        </div>
    );
};

export default ProductCard;