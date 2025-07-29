import { useContext } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import { Link } from "react-router";
import SeasonalCategorisSkeleton from "../skeleton/SeasonalCategorisSkeleton";

function SeasonalCategoris() {
  const { Products, isLoding } = useContext(CategoriesContext);

  if (isLoding) {
    return <SeasonalCategorisSkeleton />;
  }

  const deals = Products.slice(1, 5);
  console.log(deals);

  return (
    <div className="my-10 container">
      <p className="text-black text-2xl font-bold">Seasonal Categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-4">
        {deals.map((p) => (
          <Link to={`/categoriesDetail/${p._id}`} key={p._id}>
            <div className="card relative overflow-hidden group">
              <img
                className="w-full h-66 object-cover"
                src={p.image}
                alt={p.name}
              />
              <p className="absolute -bottom-52 bg-green-500 font-bold text-2xl text-white w-full py-10 text-center group-hover:bottom-0 transition-all duration-700">
                {p.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SeasonalCategoris;
