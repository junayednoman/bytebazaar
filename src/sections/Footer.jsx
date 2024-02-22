import Container from "../components/Container";

const Footer = () => {
    return (
        <div className="bg-[#161616] md:mt-12 mt-8">
            <Container>
                <footer className="footer p-10 text-white">
                    <aside>
                        <a href="/">
                            <h4 className="md:text-4xl text-[28px] font-bold text-white"><span className="text-[#2252D1]">Byte</span>Bazaar</h4>
                        </a>
                        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Maxime mollitia, molestiae quas be<br /> vel sint commodi repudiandae</p>
                    </aside>
                    <nav>
                        <h6 className="text-lg text-white">Categories</h6>
                        <a className="link link-hover text-gray-400">Monitor</a>
                        <a className="link link-hover text-gray-400">Moblie</a>
                        <a className="link link-hover text-gray-400">Laptop</a>
                        <a className="link link-hover text-gray-400">Headphone</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg text-white">Company</h6>
                        <a className="link link-hover text-gray-400">About us</a>
                        <a className="link link-hover text-gray-400">Contact</a>
                        <a className="link link-hover text-gray-400">Jobs</a>
                        <a className="link link-hover text-gray-400">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg text-white">Legal</h6>
                        <a className="link link-hover text-gray-400">Terms of use</a>
                        <a className="link link-hover text-gray-400">Privacy policy</a>
                        <a className="link link-hover text-gray-400">Return Policynp</a>
                    </nav>
                </footer>
                <p className="text-gray-400 capitalize text-center md:pb-8 text-sm">Copyright © 2024 - All right reserved by ByteBazaar. Made with love by Junayed Noman.</p>
            </Container>
        </div>
    );
};

export default Footer;