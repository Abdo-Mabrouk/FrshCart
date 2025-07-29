
import { useContext } from "react";
import { Link } from "react-router";
import { CategoriesContext } from "../../context/Categories.context";
import HomeCategoriesSkeleton from "../skeleton/HomeCategoriesSkeleton";
function ShopbyCategory() {
    const { Products, isLoding } = useContext(CategoriesContext);    
    if (isLoding) {
        return <HomeCategoriesSkeleton />;
    }
    return (
        <>
        <section className=" my-10">
            <div className="container">
                <div className="lg:flex justify-between items-center space-y-5">
                    <div className="space-y-3 text-center lg:text-start">
                        <h2 className="text-2xl font-bold">Shop by Category</h2>
                        <p className="text-gray-400">Browse our wide selection of fresh products by category</p>
                    </div>
                    <div className=" md:flex justify-center items-center gap-10">
                        <div className=" w-full md:w-fit flex items-center justify-between gap-5">
                            <p>Sort by :</p>
                            <select className="btn focus:outline-none w-70" >
                                <option >Featured</option>
                                <option >Featured</option>
                                <option >Featured</option>
                                <option >Featured</option>
                                <option >Featured</option>
                                <option >Featured</option>
                                <option >Featured</option>
                            </select>
                        </div>
                        <div className="flex justify-center items-center gap-3 *:cursor-pointer my-5 md:my-0">
                        <div className="size-12 bg-green-500 text-white flex justify-center items-center rounded-bl-lg rounded-tl-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div className="size-12 hover:bg-green-500 hover:text-white flex justify-center items-center rounded-br-lg rounded-tr-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
            
            <div className="cursor-pointer grid py-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {Products.map((Catego) => (
                <Link
                    to={`/categoriesDetail/${Catego._id}`}
                    key={Catego._id}
                    className="card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500 flex flex-col items-center gap-3 bg-white"
                >
                    <img
                    src={Catego.image}
                    alt={Catego.name}
                    className="size-16 rounded-full object-cover "
                    />
                    <h3>{Catego.name}</h3>
                </Link>
                ))}
            </div>
            </div>
        </section>
        </>
    );
}

export default ShopbyCategory
