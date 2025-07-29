import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardCart from "../../components/CardCart/CardCart";
import { faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CarContext } from "../../context/cart.context";
import ingNoProduct from "../../assets/no_product.svg";
import { Link } from "react-router";
import CartSkeleton from "../../components/skeleton/CartSkeleton";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

function Cart() {
    const { cartInfo,isLoding } = useContext(CarContext);
    if (isLoding) {
        return <CartSkeleton/>
    }
    
    const {numOfCartItems , data}= cartInfo;
    const {products , totalCartPrice}= data;

    
    
    return (
        <>
        <PagaMetadata title="FreshCart/cart"/>
        <div className=" container grid grid-cols-3  gap-5 py-10 ">
            <div className="col-span-3 h-fit max-h-screen overflow-auto bg-white lg:col-span-2 p-5 rounded-lg shadow-lg border-2 border-gray-200 ">
                <div className="pb-5">
                    <h2 className=" text-black font-semibold mb-2">Shopping Cart</h2>
                    {products.length > 0 ? <p className="text-gray-400 text-sm">{numOfCartItems} Items in your cart</p> : ""}
                    
                </div>
                <div className="all-cardes">
                    {products.length > 0 ? products.map((p)=>(<CardCart key={p._id} detals={p}/> )):
                    <div className="">
                        <img className="w-1/2 mx-auto" src={ingNoProduct} alt="" />
                        <p className="my-10 text-center">There are no products in the product cart</p>
                        <p className="my-10 text-center">You can continue the Shopping from <Link to={"/"} className="text-green-500">here</Link></p>
                    </div>
                    }
                </div>
            </div>
            <div className="col-span-3 bg-white lg:col-span-1 p-5 space-y-10 rounded-lg shadow-lg border-2 border-gray-200">
            <h2 className=" text-black font-semibold ">Order Summrey</h2>
            <div className=" space-y-3">
                <p className=" text-gray-500 flex justify-between items-center"> Subtotal ({numOfCartItems} items) <span className="text-black font-semibold"> {totalCartPrice} EGP</span></p>
                <p className=" text-gray-500 flex justify-between items-center"> Shipping <span className="text-green-500 font-semibold"> {products.length > 0 ? 70 : 0 }  EGP</span></p>
                <p className=" text-gray-500 flex justify-between items-center"> Tax (14%) <span className="text-black font-semibold">{Math.trunc(totalCartPrice *0.14)} EGP</span></p>
                <p className=" text-black font-bold flex justify-between items-center pt-3 border-t-2 border-gray-200 "> Total <span className="text-black font-bold">{Math.trunc(totalCartPrice + (products.length > 0 ? 70 : 0) + totalCartPrice *0.14 )} EGP</span></p>
            </div>
            <div className=" space-y-3 *:block">
                <Link to={"/checkout"} className=""><button className="btn bg-green-600 hover:bg-green-800 text-white w-full"> Proceed to Checkout</button></Link>
                <Link to={"/"}><button className="btn bg-transparent border-2 border-gray-200 hover:bg-gray-200 text-black w-full"> Continue Shopping</button></Link>
            </div>
                <ul className="space-y-3 *:border-3 *:rounded-md *:p-2 *:flex *:gap-4 *:w-full">
                    <li className="bg-gray-200 border-gray-400">
                        <div className="icon  text-xl flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faTruckFast} className="text-green-500" />
                        </div>
                        <div className="data">
                        <h3 className="text-black font-semibold ">Fast Delivery</h3>
                        <p className="text-sm text-gray-500">
                            Your Order qualifies fore free delivery. Estimated delivery: 2-3 business days
                        </p>
                        </div>
                    </li>
                    <li className="bg-green-200/50 border-green-400">
                        <div className="icon text-xl flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-green-500" />
                        </div>
                        <div className="data">
                        <h3 className="text-black font-semibold ">Secure paymernt</h3>
                        <p className="text-sm text-gray-500">
                            Your payment informathion is protected with 256-bit SSL encryption
                        </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Cart;
