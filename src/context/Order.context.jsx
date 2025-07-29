import { createContext, useEffect, useState } from "react";
import {
  getCartItems,
} from "../services/ProductsServices";


export const OrderContext = createContext(null);

export default function OrderProvider({ children }) {
    const [ordertInfo, setordertInfo] = useState(null);
    const [isLoding, setisLoding] = useState(true);
    
    async function handelGetAllOrders({id}) {
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
        <OrderContext.Provider value={{}}>
        {children}
        </OrderContext.Provider>
    );
}
