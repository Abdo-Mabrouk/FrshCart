import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext} from "react"
import { Link } from "react-router"
import { CategoriesContext } from "../../context/Categories.context";
import HomeCategoriesSkeleton from "../skeleton/HomeCategoriesSkeleton";

function HomeCategories() {
    const {Products,isLoding} = useContext(CategoriesContext);

    if (isLoding) {
        return <HomeCategoriesSkeleton/>
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Shop by Category</h2>
                        <Link to={`/categories`} className="flex gap-3 items-center text-green-500 hover:text-green-700 transition-colors duration-500"> <span>View All Categories</span> <FontAwesomeIcon icon={faArrowRight}/> </Link>
                    </div>
                    <div className="cursor-pointer grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {Products.map((Catego)=>(
                            <Link to={`/categoriesDetail/${Catego._id}`} key={Catego._id} className="card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500 flex flex-col items-center gap-3 bg-white">
                                <img src={Catego.image} alt={Catego.name} className="size-16 rounded-full object-cover "/>
                                <h3>{Catego.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCategories
