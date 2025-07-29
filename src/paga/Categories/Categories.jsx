import FeaturedCategory from "../../components/FeaturedCategory/FeaturedCategory";
import PopularSubCategories from "../../components/PopularSubCategories/PopularSubCategories";
import SeasonalCategoris from "../../components/SeasonalCategoris/SeasonalCategoris";
import ShopbyCategory from "../../components/ShopbyCategory/ShopbyCategory";
import Subscribe from "../../components/Subscribe/Subscribe";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

function Categories() {

    return (
        <>
        <PagaMetadata title="FreshCart/Categories"/>
            <ShopbyCategory/>
            <PopularSubCategories/>
            <FeaturedCategory/>
            <SeasonalCategoris/>
            <Subscribe/>
        </>
    );
}

export default Categories;
