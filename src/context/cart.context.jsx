import { createContext, useEffect, useState } from "react";
import {
  addProductToCart,
  getCartItems,
  removeItemsFromCart,
  updateQuantityCart,
} from "../services/ProductsServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const CarContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartInfo, setcartInfo] = useState(null);
    const [isLoding, setisLoding] = useState(true);
    
    async function handelAddPrudoctToCart({ id }) {
    try {
        setisLoding(true);
        const resonse = await addProductToCart({ id });
        if (resonse.success) {
        setisLoding(false);
        toast.success(resonse.data.message);
        setcartInfo(resonse.data);
        handelCartItems()
        }
    } catch (error) {
        setisLoding(false);
        toast.error(error);
    }
    }
    async function handelCartItems() {
    try {
        setisLoding(true);
        const resonse = await getCartItems();
        if (resonse.success) {
        setisLoding(false);
        setcartInfo(resonse.data);
        }
    } catch (error) {
        setisLoding(false);
    }
    }
    useEffect(() => {
    handelCartItems();
    }, []);

    async function handelremoveItemsFromCart({id}) {
        try {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor:"#d33",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#333446",
            confirmButtonText: "Delete",
        })
        if (result.isConfirmed) {
        const toastId= toast.loading("we are deleting cart items")
        const response = await removeItemsFromCart({id});
        if (response.success) {
        setcartInfo(response.data);
        }
        toast.dismiss(toastId)
        toast.success("Your file has been deleted.")
        }
        } catch (error) {
            Swal.fire({
            title: "Deleted!",
            text: `${error}`,
            icon: "error",
        });
        }
    }
    async function handelUpdateQouantity({id,count}) {
        try {
        const toastId= toast.loading("Updating Product Quantity")
        const resonse = await updateQuantityCart({id,count});
        if (resonse.success) {
            toast.dismiss(toastId)
            setcartInfo(resonse.data);
        }
        } catch (error) {
            Swal.fire({
            title: "Deleted!",
            text: `${error}`,
            icon: "error",
        });
        }
    }






    return (
        <CarContext.Provider value={{ cartInfo ,setcartInfo, isLoding, handelAddPrudoctToCart ,handelremoveItemsFromCart,handelUpdateQouantity}}>
        {children}
        </CarContext.Provider>
    );
}
