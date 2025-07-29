import { useContext } from "react";
import Card from "../Card/Card";
import { ProductContext } from "../../context/Product.context.jsx";
import HomeFeaturedProductsSkeleton from "../skeleton/HomeFeaturedProductsSkeleton.jsx";

function HomeFeaturedProducts() {
    const {Products,isLoding} = useContext(ProductContext);

        if (isLoding) {
            return <HomeFeaturedProductsSkeleton/>
        }        
    return (
        <>
            <div className="container my-10">
                <div className="my-5">
                        <h2 className="text-2xl font-bold">Featured Products</h2>
                </div>
                <div className="allCardes grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Products.map((p)=>(<Card details={p} key={p._id}/>))}
                </div>
            </div>
        </>
    )
}

export default HomeFeaturedProducts
