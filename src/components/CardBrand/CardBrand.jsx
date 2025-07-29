import { Link } from "react-router";

function CardBrand({details}) {
    return (
        <>
        <div className=" border-2 rounded-lg bg-white border-gray-200 p-4 space-y-3 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-fit mx-auto ">
                <img src={details.image} alt={details.name} />
            </div>
            <p className="name text-black font-semibold text-center">{details.name}</p>
            <div className="flex justify-between items-center">
                <Link className="w-full" to={`/specificProductBrands/${details._id}`}>
                <button className=" btn bg-green-500 text-white  w-full">View</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default CardBrand
