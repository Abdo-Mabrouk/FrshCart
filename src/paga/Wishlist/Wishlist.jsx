import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardWishlist from "../../components/CardWishlist/CardWishlist.jsx";
import { WishlistContext } from "../../context/wishlistContext.jsx";
import { useContext } from "react";
import ingNoProduct from "../../assets/no_product.svg";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import WishlistSkeleton from "../../components/skeleton/WishlistSkeleton.jsx";
import PagaMetadata from "../PagaMetadata/PagaMetadata.jsx";



function Wishlist() {
        const { WishlistPoduct,isLoding,handelremoveِAllItemsFromWishlist } = useContext(WishlistContext);
        if (isLoding) {
            return <WishlistSkeleton/>
        }
        
    return (
        <>
        <PagaMetadata title="FreshCart/Wishlist"/>
        <div className=" container grid grid-cols-3  gap-5 py-10 ">
            <div className="col-span-3 bg-white h-fit max-h-[925px]  overflow-auto lg:col-span-2 p-5 rounded-lg shadow-lg border-2 border-gray-200 ">
                <div className="pb-5">
                    <h2 className=" text-black font-semibold mb-2">Wishlist</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400 text-sm">{WishlistPoduct.count} Items in your cart</p>
                    <div className="*:flex *:items-center *:gap-2 flex gap-5 items-center">
                        <button onClick={handelremoveِAllItemsFromWishlist}  className="text-xl btn bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-500"><span><FontAwesomeIcon icon={faTrash} /></span> clear All</button>
                    </div>
                    </div>
                </div>
                <div className="all-cardes">
                    {WishlistPoduct.data.length > 0 ? WishlistPoduct.data.map((p)=>(<CardWishlist key={p._id} details={p}/> )):
                    <div className="">
                        <img className="w-1/2 mx-auto" src={ingNoProduct} alt="" />
                        <p className="my-10 text-center">There are no products in the Wishlist</p>
                        <p className="my-10 text-center">You can continue the Shopping from <Link to={"/"} className="text-green-500">here</Link></p>
                    </div>
                    }
                </div>
            </div>
            <div className="col-span-3 lg:col-span-1  space-y-10  ">
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <h2 className=" text-black font-semibold text-2xl ">Create New Wishlist</h2>
                    <p className="">Wishlist Name</p>
                    <input type="text" className="form-control placeholder:text-black" placeholder="e.g., Holiday Shopping" />
                    <p className="text-black font-semibold text-2xl">Privacy </p>
                    <div className="font-semibold space-x-2 ">
                        <input type="radio" name="Privacy" id="public" value={"public"} />
                        <label htmlFor="public">public</label>
                        <input type="radio" name="Privacy" id="Private" value={"Private"} />
                        <label htmlFor="Private">Private</label>
                    </div>
                </div>
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <h2 className=" text-black font-semibold text-2xl ">My Wishlist</h2>
                    <ul className="space-y-3">
                        <li className="py-2 border-b-2 border-gray-200 flex justify-between items-center">
                            <div className="space-y-3">
                                <h2 className="text-black font-semibold text-xl">Default Wishlist</h2>
                                <p className=" text-gray-400">12 items</p>
                            </div>
                            <p className="text-green-500 cursor-pointer text-xl font-semibold">View</p>
                        </li>
                        <li className="py-2 border-b-2 border-gray-200 flex justify-between items-center">
                            <div className="space-y-3">
                                <h2 className="text-black font-semibold text-xl">Birthday Ideas</h2>
                                <p className=" text-gray-400">8 items</p>
                            </div>
                            <p className="text-green-500 cursor-pointer text-xl font-semibold">View</p>
                        </li>
                        <li className="py-2  flex justify-between items-center">
                            <div className="space-y-3">
                                <h2 className="text-black font-semibold text-xl">Weekly Groceries</h2>
                                <p className=" text-gray-400">15 items</p>
                            </div>
                            <p className="text-green-500 cursor-pointer text-xl font-semibold">View</p>
                        </li>
                    </ul>
                </div>
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <h2 className=" text-black font-semibold text-2xl ">Share Your Wishlist</h2>
                    <p className="text-gray-400">Share your Wishlist with friends and family</p>
                    <div className="font-semibold  flex *:w-full gap-5">
                        <button className="btn bg-blue-600 hover:bg-blue-800 flex justify-center items-center gap-3 text-white"><span><FontAwesomeIcon icon={faFacebookF}/></span>Facebook</button>
                        <button className="btn bg-cyan-600 hover:bg-cyan-800 flex justify-center items-center gap-3 text-white"><span><FontAwesomeIcon icon={faTwitter}/></span>Twitter</button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Wishlist;
