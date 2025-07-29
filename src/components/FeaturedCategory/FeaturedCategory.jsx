import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img from"../../assets/home-slider.png"
import { useContext } from "react";
import { SubCategoriesContext } from "../../context/PopularSubCategories.context";
import FeaturedCategorySkeleton from "../skeleton/FeaturedCategorySkeleton";

function FeaturedCategory() {
        const { isLoding } = useContext(SubCategoriesContext);
            if (isLoding ) {
        return <FeaturedCategorySkeleton />;
    }
    
    return (
        <>
            <div className=" container my-10">
                <div className=" grid grid-cols-2 items-center gap-10">
                    <div className=" space-y-3 col-span-2 lg:col-span-1">
                        <h2 className="text-green-500">Featured Category</h2>
                        <p className="text-2xl font-bold text-black">Organic Fruits & Vegetables</p>
                        <p className="text-gray-400">Discover our wide range of certified organic produce, sourced from local farms and delivered fresh to your doorstep.</p>
                        <ul className="space-y-3 *:flex *:items-center *:gap-3 *:text-black">
                            <li><span className="text-green-500"><FontAwesomeIcon icon={faCheck} /></span> 100% Certified Organic</li>
                            <li><span className="text-green-500"><FontAwesomeIcon icon={faCheck} /></span>Locally Sourced When Available</li>
                            <li><span className="text-green-500"><FontAwesomeIcon icon={faCheck} /></span>No Pesticides or Harmful Chemicals</li>
                        </ul>
                        <button className="btn bg-green-500 hover:bg-green-700 text-white block my-5">Explore Category</button>
                    </div>
                    <div className=" space-y-3 col-span-2 lg:col-span-1">
                        <img src={img} alt="img dor vegatables" className="ru rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCategory
