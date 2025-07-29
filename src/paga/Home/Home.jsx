import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Subscribe from "../../components/Subscribe/Subscribe";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

function Home() {
    return (
        <>
        <PagaMetadata title="FreshCart/Home"/>
            <HomeSlider/>
            <HomeFeatures/>
            <HomeCategories/>
            <HomeDeals/>
            <HomeFeaturedProducts/>
            <Subscribe/>
        </>
    )
}

export default Home





