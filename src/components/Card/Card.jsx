import { faEye } from "@fortawesome/free-regular-svg-icons";
import {  faCodeCompare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { calcDiscount } from "../../utils/Password-strength";
import Reating from "../Reating/Reating";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../context/cart.context";
import { WishlistContext } from "../../context/wishlistContext";

export default function Card({ details }) {
    const {handelAddPrudoctToCart } = useContext(CarContext)
    const { WishlistPoduct,handeladdProductToWishlist } = useContext(WishlistContext);
    const [isInWishlist, setIsInWishlist] = useState(false);
    useEffect(() => {
    if (WishlistPoduct?.data?.some((item) => item._id === details._id)) {
        setIsInWishlist(true);
    } else {
        setIsInWishlist(false);
    }
    }, [WishlistPoduct, details._id]);

    return (
        <>
        <div className="card h-[450px] bg-white overflow-hidden relative px-3 shadow-lg rounded-lg space-y-4">
            <Link to={`/Products/${details._id}`}>
            <img
                className=" h-60 mx-auto"
                src={details.imageCover}
                alt={details.title}
            />
            </Link>
            <div className="dataa py-3 space-y-2">
                <p className="text-gray-500 text-sm line-clamp-1">{details.category?.name}</p>
                <p className="text-black font-semibold line-clamp-2">
                    <Link to={`/Products/${details._id}`}>
                    {details.title}
                    </Link>
                </p>
                <div className="icon flex gap-1.5 items-center">
                    <Reating reting={details.ratingsAverage} />
                    <p className="text-sm text-gray-500">{details.ratingsAverage} ({details.ratingsQuantity})</p>
                </div>
            </div>

            <div className="footarCard flex gap-1.5 items-center justify-between">
            <p className="text-green-500 font-bold flex items-center gap-3">
                {details.priceAfterDiscount ?details.priceAfterDiscount : details.price} EGP{" "}
                {details.priceAfterDiscount&& <span className="text-sm line-through text-gray-300">{details.price}  EGP</span>}
            </p>
            <button onClick={()=>{handelAddPrudoctToCart({id: details._id})}} className="size-8 cursor-pointer rounded-full bg-green-500 hover:bg-green-600 text-white font-bold flex justify-center items-center">
                <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
            <div className="actions flex flex-col justify-center items-center gap-1.5 absolute end-2 top-10 bg-white border-2 border-gray-200 px-1.5 py-1 rounded-md *:hover:text-green-500 *:text-gray-500 font-bold *:cursor-pointer">
            <button
            onClick={() => handeladdProductToWishlist({ id: details._id })}
            className="text-xl p-2 transition-colors duration-300"
            >
            <FontAwesomeIcon
                icon={isInWishlist ?faHeartSolid: faHeartRegular }
                className={isInWishlist ? "text-green-500" : "text-gray-500"}
            />
            </button>
                <button><FontAwesomeIcon icon={faCodeCompare}/></button>
                <button><Link to={`/Products/${details._id}`}><FontAwesomeIcon icon={faEye}/></Link></button>
            </div>
            {details.priceAfterDiscount && <div className=" absolute start-4 top-4 bg-red-700  px-2 py-1 rounded-md text-white *:cursor-pointer">
                - {calcDiscount({ price: details.price, priceAfterDiscount: details.priceAfterDiscount })} %
            </div>}
        </div>
        </>
    );
}
