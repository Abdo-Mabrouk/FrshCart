 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reating from "../Reating/Reating";
 import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import { CarContext } from "../../context/cart.context";
import Loading from "../../paga/Loading/Loading";
import { Link } from "react-router";

function CardWishlist({details}) {  
    const { handelremoveItemsFromWishlist,isLoding} = useContext(WishlistContext);
    const {handelAddPrudoctToCart } = useContext(CarContext)
    if (isLoding) {
                return <Loading/>
            }
    return (
        <>
        <div className="border-t-2 border-gray-200 py-2 flex flex-col md:flex-row gap-5 items-center justify-between">
            <Link to={`/Products/${details.id}`}>
                        <div className="data flex  gap-5 items-center   ">
            <div className="imge size-20 rounded-md overflow-hidden">
                <img
                className="w-full"
                src={details.imageCover}
                alt={details.title}
                />
            </div>
            <div className="text text-sm space-y-1">
                <h3 className="text-gray-600">{details.title}</h3>
                <h3 className="text-gray-400">{details.category.name}</h3>
                <div className="ruting flex gap-5 items-center">
                <Reating reting={details.ratingsAverage} />
                <p>{details.ratingsAverage}</p>
                </div>
                <p className="text-green-500 font-bold text-xl">{details.priceAfterDiscount ? details.priceAfterDiscount : details.price} EGP</p>
            </div>
            </div>
            </Link>
            <div className="flex gap-5 items-center">
                <button
                onClick={()=>{handelAddPrudoctToCart({id: details._id})}}
                className="btn bg-green-500 text-white hover:bg-green-700">
                    Add To Cart
                </button>
                <button
                onClick={()=>{handelremoveItemsFromWishlist({id: details._id})}}
                className="cursor-pointer">
                <FontAwesomeIcon className="text-red-600" icon={faTrash} />
                </button>
            </div>
        </div>
        </>
    );
}

export default CardWishlist;
