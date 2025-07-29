import { createContext, useEffect, useState } from "react";
import {  getSubCategoriess } from "../services/ProductsServices";

export const SubCategoriesContext = createContext(null);

export default function SubCategoriestProvider({ children }) {
    const [SubCategoriesPorduct, setSubCategoriesPorduct] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function handelGetProductSubCategories() {
        try {
            setisLoding(true);
            const resonse = await getSubCategoriess();
            if (resonse.success) {
            setisLoding(false);
            setSubCategoriesPorduct(resonse.data);
            }      
            
        } catch (error) {
            setisLoding(false);
        }
    }
        useEffect(() => {
        handelGetProductSubCategories();
    }, []);
    return (
        <SubCategoriesContext.Provider value={{SubCategoriesPorduct,isLoding}}>
        {children}
        </SubCategoriesContext.Provider>
    );
}
