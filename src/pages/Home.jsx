import Container from "../components/Container";
import Banner from "../sections/Banner";
import FeaturedCategories from "../sections/FeaturedCategories";
import FeaturedProducts from "../sections/FeaturedProducts";
import GridPromo from "../sections/GridPromo";

const Home = () => {
    return (
        <div className="md:mt-32 mt-44">
            <Container>
                <Banner></Banner>
                <FeaturedCategories></FeaturedCategories>
                <GridPromo></GridPromo>
                <FeaturedProducts></FeaturedProducts>
                <GridPromo></GridPromo>
            </Container>
        </div>
    );
};

export default Home;