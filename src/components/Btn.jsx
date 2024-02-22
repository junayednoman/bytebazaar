import { Link } from "react-router-dom";

const Btn = ({ text, link, fullWidth }) => {
    return (
        <Link to={link} className="bg-primaryColor text-white px-6 py-3 rounded-md text-[15px] hover:bg-[#011962] duration-200 inline-block text-center" style={{ width: fullWidth ? "100%" : '' }}>
            <button className="capitalize text-center">{text}</button>
        </Link>
    );
};

export default Btn;