import { Rating } from "@mui/material";
import img from "../assets/684-×-547-piksel-600x480.png"

const ReviewCard = () => {
    return (
        <div className="border rounded-md ">
            <div className="border-b p-4 space-y-2">
                <h6>Rakibul Islam</h6>
                <Rating name="read-only" value={4} readOnly />
                <p className="text-sm italic mb-2">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis molestias ipsa non optio deleniti minima."</p>
                <span className="text-[12px] uppercase">7 months ago</span>
            </div>
            <div className="p-4 flex items-center gap-2">
                <img className="w-[50px]" src={img} alt="" />
                <p className="capitalize text-sm font-medium">samsung pro max</p>
            </div>
        </div>
    );
};

export default ReviewCard;