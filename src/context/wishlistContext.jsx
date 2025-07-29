import { createContext, useEffect, useState } from "react";
import {
  addProductToWishlist,
  getWishlistItems,
  removeItemsFromWishlist,
} from "../services/ProductsServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const WishlistContext = createContext(null);
export default function WishlistProvider({ children }) {
    const [WishlistPoduct, setWishlistPoduct] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function handeladdProductToWishlist({ id }) {
        try {
            setisLoding(true);
            const resonse = await addProductToWishlist({ id });
            if (resonse.success) {
            setisLoding(false);
            toast.success(resonse.data.message);
            setWishlistPoduct(resonse.data);
            handelGetWishlistItemss()
            }
        } catch (error) {
            setisLoding(false);
            toast.error(error);
        }
    }

    
    async function handelGetWishlistItemss() {
    try {
        setisLoding(true);
        const resonse = await getWishlistItems();
        if (resonse.success) {
        setisLoding(false);
        setWishlistPoduct(resonse.data);
        }
    } catch (error) {
        setisLoding(false);
        console.log(error);
    }
    }
    useEffect(() => {
    handelGetWishlistItemss();
    }, []);

        async function handelremoveItemsFromWishlist({id}) {
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
            const response = await removeItemsFromWishlist({id});
            if (response.success) {
            setWishlistPoduct(response.data);
            handelGetWishlistItemss()
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

    async function handelremoveِAllItemsFromWishlist() {
        try {
            const result = await Swal.fire({
            title: "Are you sure?",
            text: "This will remove all items from your wishlist!",
            icon: "warning",
            iconColor: "#d33",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#333446",
            confirmButtonText: "Delete All",
            });

            if (result.isConfirmed) {
            const toastId = toast.loading("Deleting all wishlist items...");
            for (const item of WishlistPoduct.data) {
                await removeItemsFromWishlist({ id: item._id });
            }

            await handelGetWishlistItemss(); 
            toast.dismiss(toastId);
            toast.success("All wishlist items have been deleted.");
            }
        } catch (error) {
            toast.error("Something went wrong while deleting items.");
            console.error(error);
        }
    }

    



    return (
        <WishlistContext.Provider value={{ WishlistPoduct, isLoding,handeladdProductToWishlist,handelGetWishlistItemss, handelremoveItemsFromWishlist,handelremoveِAllItemsFromWishlist}}>
        {children}
        </WishlistContext.Provider>
    );
}
