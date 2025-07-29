import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductsServices";


export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [Products, setProducts] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function apiProducts() {
        try {
        setisLoding(true);
        const response = await getAllProducts();
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
        apiProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ Products, isLoding }}>
        {children}
        </ProductContext.Provider>
    );
}

// import { useQuery } from "@tanstack/react-query";
//const query = useQuery({ queryKey: ['products'], queryFn: getAllProducts });