
import { AppBar, Badge, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types"
import Container from "../components/Container";
import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";



const Header = () => {
    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 0,
            border: `2px solid #fff`,
            background: "#2252D1",
            padding: '0 4px',
        },
    }));

    return (
        <>
            <HideOnScroll className="shadow-none">
                <AppBar className="p-0 shadow-none text-borderColor">
                    <Toolbar className="bg-white shadow-none">
                        <div className="w-full pt-7 border-b-borderColor border-b text-textColor">
                            {/* header top */}
                            <Container>
                                <div className="flex gap-x-5 justify-between flex-wrap items-center">
                                    <div className=" md:order-1 order-1">
                                        <a href="/">
                                            <h4 className="md:text-4xl text-[28px] font-bold"><span className="text-[#2252D1]">Byte</span>Bazaar</h4>
                                        </a>
                                    </div>
                                    <div className="lg:w-[450px] md:w-[320px] md:order-2 order-3 md:mt-0 mt-4 w-full">
                                        <form className="flex items-center">
                                            <input className="border-2 border-r-0 w-full rounded-tl-md rounded-bl-md py-[10px] pl-5 focus:outline-[#2252D1]" type="text" placeholder="Search Product " />
                                            <button className="bg-[#2252D1] px-4 border-2 border-[#2252D1] py-[10px] rounded-tr-md rounded-br-md">
                                                <IoSearch className="text-white text-2xl"></IoSearch>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="flex items-center gap-x-5 md:order-3 order-2 md:mr-0 mr-3">
                                        <VscAccount className="text-2xl text-[#333333]"></VscAccount>
                                        <StyledBadge badgeContent={4} color="primary">
                                            <LuHeart className="text-[25px] text-[#333333]" />
                                        </StyledBadge>
                                        <StyledBadge badgeContent={3} color="primary">
                                            <IoCartOutline className="text-[27px] text-[#333333]"></IoCartOutline>
                                        </StyledBadge>
                                    </div>
                                </div>
                            </Container>
                            <div className="w-full h-[1px] bg-borderColor md:mt-7 mt-5"></div>
                            {/* header bottom */}

                            <Container>
                                <div className="flex items-center justify-between gap-8">
                                    <div className="flex justify-between items-center gap-14 text-white px-4 py-[14px] bg-[#2251CF] cursor-pointer">
                                        <p className="text-white uppercase text-sm font-medium">Categories</p>
                                        <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                                    </div>
                                    <div className="">
                                        <div className="items-center gap-5 md:flex hidden ml-auto">
                                            {
                                                menuItems.map(item =>
                                                    <Link className="uppercase text-sm font-medium" key={item.text}>{item.text}</Link>
                                                )
                                            }
                                        </div>
                                        <div className="md:hidden block">
                                            <a><HiBars3 className="text-4xl"></HiBars3></a>
                                        </div>
                                    </div>
                                    <div className="justify-end items-center gap-5 uppercase ml-auto text-[12px] font-medium lg:flex hidden">
                                        <Link to={"/"} className="text-colorGreen">new arrivals</Link>
                                        <Link to={"/"} className="text-primaryColor">super deals</Link>
                                        <Link to={"/"} className="text-colorRed">hot sales</Link>
                                        <Link to={"/"} className="xl:block hidden">outlet</Link>
                                    </div>
                                </div>
                            </Container>

                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    );

};

export default Header;
const menuItems = [
    { text: "home", url: "/" },
    { text: "shop", url: "/" },
    { text: "add product", url: "/" },
    { text: "my cart", url: "/" },
    { text: "blog", url: "/" },
    { text: "contact", url: "/" },
]