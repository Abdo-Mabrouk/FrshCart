import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reating from "../Reating/Reating";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CarContext } from "../../context/cart.context";
import { Link } from "react-router";

function CardCart({detals}) {
        const { handelremoveItemsFromCart ,handelUpdateQouantity } = useContext(CarContext);
    console.log(detals);
    
    return (
        <>
        <div className="border-t-2 border-gray-200 py-2 flex flex-col md:flex-row gap-5 items-center justify-between">
            <Link to={`/Products/${detals.product.id}`}>
                        <div className="data flex gap-5 items-center   ">
            <div className="imge size-14 rounded-md overflow-hidden">
                <img
                className="w-full"
                src={detals.product.imageCover}
                alt={detals.product.title}
                />                
            </div>
            <div className="text text-sm space-y-1">
                <h3 className="text-gray-600">{detals.product.title}</h3>
                <h3 className="text-gray-400">{detals.product.category.name}</h3>
                <div className="ruting flex gap-5 items-center">
                <Reating reting={detals.product.ratingsAverage} />
                <p>{detals.product.ratingsAverage}</p>
                </div>
            </div>
            </div>
            </Link>
            <div className="flex gap-5 items-center">
                <div className="flex w-fit items-center  gap-5 px-2 py-1 border-2 rounded-sm border-gray-200">
                    <button onClick={ ()=>{
                        handelUpdateQouantity({id:detals.product._id ,count: detals.count - 1})
                    }}>
                    <FontAwesomeIcon  icon={faMinus} className="cursor-pointer" />
                    </button>
                    <p className="num">{detals.count}</p>
                    <button onClick={ ()=>{
                        handelUpdateQouantity({id:detals.product._id ,count: detals.count + 1})
                    }}>
                    <FontAwesomeIcon  icon={faPlus} className="cursor-pointer" />
                    </button>
                </div>
                <p className="">{detals.price} EGP</p>
                <button onClick={
                    ()=>{handelremoveItemsFromCart({id:detals.product._id})}
                } className="cursor-pointer">
                <FontAwesomeIcon className="text-red-600" icon={faTrash} />
                </button>
            </div>
        </div>
        </>
    );
}

export default CardCart;
