import Container from "../components/Container";
import useContextInfo from "../custom hooks/useContextInfo";
import Banner from "../sections/Banner";
import DiscountedProduct from "../sections/DiscountedProduct";
import FeaturedCategories from "../sections/FeaturedCategories";
import FeaturedProducts from "../sections/FeaturedProducts";
import Features from "../sections/Features";
import GridPromo from "../sections/GridPromo";
import GridPromo2 from "../sections/GridPromo2";
import Review from "../sections/Review";

const Home = () => {
    const { user } = useContextInfo();
    console.log(user);
    return (
        <div className="md:mt-32 mt-44">
            <Container>
                <Banner></Banner>
                <FeaturedCategories></FeaturedCategories>
                <GridPromo></GridPromo>
                <FeaturedProducts></FeaturedProducts>
                <GridPromo2></GridPromo2>
                <DiscountedProduct></DiscountedProduct>
                <Review></Review>
                <Features></Features>
            </Container>
        </div>
    );
};

export default Home;