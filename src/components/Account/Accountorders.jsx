import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardOrders from "../CardOrders/CardOrders"
import { useContext, useEffect, useState } from "react";
import { getCartItems } from "../../services/ProductsServices";
import { CarContext } from "../../context/cart.context";

function Accountorders() {
        const [ordertInfo, setordertInfo] = useState(null);
        const [isLoding, setisLoding] = useState(true);
        const {cartInfo} = useContext(CarContext);
        console.log(cartInfo);
        
        
        async function handelGetAllOrders() {
        try {
            setisLoding(true);
            const resonse = await getCartItems({id});
            if (resonse.success) {
            setisLoding(false);
            setordertInfo(resonse.data);
            }
        } catch (error) {
            setisLoding(false);
        }
        }
        useEffect(() => {
        handelGetAllOrders();
        }, []);
    return (
        <>
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-5">
                <h1 className="text-black font-semibold text-2xl pb-3  relative before:absolute before:w-30 before:bottom-0 before:h-1.5 before:rounded-b-md before:bg-green-500">my orders</h1>
                <div className="flex gap-5 flex-col *:w-full md:flex-row items-center">
                    <select className="btn focus:outline-none">
                        <option value="all">All Orders</option>
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    <div className="relative">
                        <input className="form-control" type="search" placeholder="search Orders....." />
                        <FontAwesomeIcon icon={faSearch} className="absolute end-5 top-1/2 -translate-y-1/2"/>
                    </div>
                </div>
            </div>
            <div className="allCard mt-10 space-y-5">
                <CardOrders/>
                <CardOrders/>
                <CardOrders/>
                <CardOrders/>
                <CardOrders/>
                <CardOrders/>
            </div>
        </>
    )
}

export default Accountorders
