import { useContext } from "react";
import { SubCategoriesContext } from "../../context/PopularSubCategories.context";
import { Link } from "react-router";
import PopularSubCategoriesSkeleton from "../skeleton/PopularSubCategoriesSkeleton";

    function PopularSubCategories() {
    const { SubCategoriesPorduct, isLoding } = useContext(SubCategoriesContext);

    if (isLoding || !SubCategoriesPorduct) {
        return <PopularSubCategoriesSkeleton />;
    }

    const { data } = SubCategoriesPorduct;
    

    return (
        <div className="con container">
        <h2 className="text-2xl text-black font-bold">Popular SubCategories</h2>
        <div className="all-card my-10 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 xl:grid-cols-6 gap-5">
            {data.map((p) => (
            <Link
                to={`/categoriesDetail/${p.category}`}
                key={p._id}
                className=""
            >
                <div className="card bg-white shadow hover:border-green-500 flex justify-center items-center gap-5 flex-col border-2 border-gray-200 p-5 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-500">
                <div className="size-12 rounded-full flex justify-center items-center bg-green-100 text-green-500">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                    </svg>
                </div>
                <p className="text-black font-bold text-sm text-center ">{p.name}</p>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
}

export default PopularSubCategories;
