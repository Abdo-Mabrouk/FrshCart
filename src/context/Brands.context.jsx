import { createContext, useEffect, useState } from "react";
import {  getBrandsProducts, getSearchBrandsProducts } from "../services/ProductsServices";

export const BrandsContext = createContext(null);

export default function BrandstProvider({ children }) {
    const [BrandsPorduct, setBrandsPorduct] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function handelGetProductBrands() {
        try {
            setisLoding(true);
            const resonse = await getBrandsProducts();
            if (resonse.success) {
            setisLoding(false);
            setBrandsPorduct(resonse.data);
            }            
        } catch (error) {
            setisLoding(false);
        }
    }
    useEffect(() => {
    handelGetProductBrands();
    }, []);

    async function handelSearchBrandsProducts(Search) {
    try {
        setisLoding(true);
        const resonse = await getSearchBrandsProducts(Search);
        if (resonse.success) {
            const data = resonse.data;
        setisLoding(false);
        setBrandsPorduct(data);
        }            
    } catch (error) {
        setisLoding(false);
    }
}
    return (
        <BrandsContext.Provider value={{BrandsPorduct,isLoding,handelSearchBrandsProducts}}>
        {children}
        </BrandsContext.Provider>
    );
}
