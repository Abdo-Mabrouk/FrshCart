import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faRotateRight,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reating from "../Reating/Reating";
import { calcDiscount } from "../../utils/Password-strength";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import { CarContext } from "../../context/cart.context";
import { WishlistContext } from "../../context/wishlistContext";

function Productdata({ ProductInfo }) {
  const {handelAddPrudoctToCart} = useContext(CarContext)
  const { handeladdProductToWishlist } = useContext(WishlistContext);
  const isExistInCart = cartItems.find(
    (ProductInfo) => _id === product.product._id
  );
      

  return (
    <>
    <div className="grid grid-cols-3 py-5 gap-5 ">
      <div className="col-span-3 lg:col-span-1">
        <ReactImageGallery
          showNav={false}
          showPlayButton={false}
          items={ProductInfo.images.map((imeg) => {
            return {
              original: imeg,
              thumbnail: imeg,
            };
          })}
        />
      </div>
      <div className="col-span-3 lg:col-span-2 p-5 space-y-4">
        <div className="flex justify-between items-center">
          <p
            className={`${
              ProductInfo.quantity > 0
                ? "bg-green-200 text-green-400"
                : "bg-red-200 text-red-400"
            } " py-1 px-2 font-semibold rounded-md"`}
          >
            {ProductInfo.quantity > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <div className="icone flex gap-2 items-center *:hover:text-green-400 *:cursor-pointer">
            <FontAwesomeIcon icon={faShareNodes} />
            <button onClick={()=>{handeladdProductToWishlist({id: ProductInfo._id})}}><FontAwesomeIcon icon={faHeart} /></button>
            
          </div>
        </div>
        <div className="space-y-5 border-b-2 border-gray-100 pb-6">
          <h1 className="name text-black text-xl font-semibold">
            {ProductInfo.title}
          </h1>
          <div className="icon flex gap-3 items-center">
            <Reating reting={ProductInfo.ratingsAverage} />
            <p className="text-sm text-gray-500">
              {" "}
              {ProductInfo.ratingsAverage} ({ProductInfo.ratingsQuantity}{" "}
              Reviews)
            </p>
          </div>
          <div className=" flex items-center gap-3 ">
            <p className="text-black text-xl font-semibold">
              {" "}
              {ProductInfo.priceAfterDiscount || ProductInfo.price} EGP{" "}
            </p>
            {ProductInfo.priceAfterDiscount ? (
              <>
                <p>
                  <del>{ProductInfo.price}</del>
                </p>
                <p className=" p-0.5 text-sm text-red-500 bg-red-200 rounded-md">
                  save -{" "}
                  {calcDiscount({
                    price: ProductInfo.price,
                    priceAfterDiscount: ProductInfo.priceAfterDiscount,
                  })}{" "}
                  %{" "}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="descrb">
          <p className="text-sm text-gray-400"> {ProductInfo.description} </p>
        </div>
        <div className="quantity flex items-center gap-5">
          <p>quantity:</p>
          <div className="flex items-center gap-5 px-2 py-1 border-2 rounded-sm border-gray-200">
            <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
            <p className="num">1</p>
            <FontAwesomeIcon icon={faPlus} className=" cursor-pointer" />
          </div>
          <p>Only {ProductInfo.quantity} items left in stock</p>
        </div>
        <div className="button py-5 flex gap-5 *:cursor-pointer *:flex *:justify-center *:items-center *:w-full *:gap-2">
          <button onClick={()=>{handelAddPrudoctToCart({id: ProductInfo._id})}} className="btn bg-green-600 text-white hover:bg-green-700">
            <FontAwesomeIcon icon={faCartShopping} /> <span>Add to Cart</span>
          </button>
          <button className="btn bg-white border-2 border-gray-200 hover:bg-gray-200">
            Buy Now
          </button>
        </div>
        <ul className=" *:bg-white flex flex-col gap-5 md:flex-row justify-around items-center *:border-3 *:border-gray-200 *:p-2 *:rounded-md  *:flex *:gap-4">
          <li className="">
            <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faTruckFast} className="text-green-500" />
            </div>
            <div className="data">
              <h3 className="text-black font-semibold ">Fast Delivery</h3>
              <p className="text-sm text-gray-500">
                Orders shipping on orders over $50
              </p>
            </div>
          </li>
          <li className="">
            <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                icon={faRotateRight}
                className="text-green-500"
              />
            </div>
            <div className="data">
              <h3 className="text-black font-semibold ">30 Days Return</h3>
              <p className="text-sm text-gray-500">
                Satisfaction guaranteed or money back
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
      
    </>
  );
}

export default Productdata;
