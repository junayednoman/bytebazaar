import { Link } from "react-router-dom";
import facebookImg from "../assets/facebook.png"
import googleImg from "../assets/google.png"
import linkedinImg from "../assets/linkedin.png"
import twitterImg from "../assets/twitter.png"

const SocialLogin = ({ link, text }) => {
    return (
        <div className="mt-8">
            <div className="divider">OR</div>
            <div className="flex items-center gap-5 justify-center mt-9">
                <img className="max-w-[35px] cursor-pointer" src={facebookImg}></img>
                <img className="max-w-[35px] cursor-pointer" src={googleImg}></img>
                <img className="max-w-[35px] cursor-pointer" src={linkedinImg}></img>
                <img className="max-w-[35px] cursor-pointer" src={twitterImg}></img>
            </div>

            <p className="text-sm text-center mt-10">Don't have an account ? <Link className="text-primaryColor font-medium underline uppercase" to={link}>{text}</Link></p>
        </div>
    );
};

export default SocialLogin;