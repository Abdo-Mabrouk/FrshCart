import { createContext, useEffect, useState } from "react";
import { getAllCategory } from "../services/categoryServices";


export const CategoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
    const [Products, setProducts] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function apiCategory(prams="") {
        try {
        setisLoding(true);
        const response = await getAllCategory(prams);
        if (response.success) {
            setisLoding(false);
            setProducts(response.data.data);
        }
        } catch (error) {
        setisLoding(false);
        console.error(error);
        }
    }

    useEffect(() => {
        apiCategory();
    }, []);

    return (
        <CategoriesContext.Provider value={{ Products, isLoding,apiCategory }}>
        {children}
        </CategoriesContext.Provider>
    );
}
