import { useState } from "react"
import ProductDetailsTabs from "./ProductDetailsTabs";
import ReviewsTabs from "./ReviewsTabs";
import ShippingTabs from "./ShippingTabs";

function ProductInfoTaps({ProductInfo}) {

    const [isActiveTabs,setisActiveTabs] = useState("Details")

    function getActiveTab() {
        switch (isActiveTabs) {
            case "Details":
                return <ProductDetailsTabs ProductInfo={ProductInfo} />
            case "Reviews":
                return <ReviewsTabs ProductInfo={ProductInfo}/>
            case "Shipping":
                return <ShippingTabs/>
            default:
                return <ProductDetailsTabs/>;
        }
        
    }
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden px-5">
                <div className="flex gap-5 border-b-2 border-gray-200 w-full">
                    <button onClick={()=>setisActiveTabs("Details")} className={`"btn px-6 py-4 font-medium text-gray-600  border-green-600 bg-transparent rounded-none" ${isActiveTabs ==="Details" && "text-green-600 border-b-2"} `}> Product Details</button>
                    <button onClick={()=>setisActiveTabs("Reviews")} className={`"btn px-6 py-4 font-medium text-gray-600  border-green-600 bg-transparent rounded-none" ${isActiveTabs ==="Reviews" && "text-green-600 border-b-2"} `}> Reviews ({ProductInfo.ratingsQuantity}) </button>
                    <button onClick={()=>setisActiveTabs("Shipping")} className={`"btn px-6 py-4 font-medium text-gray-600  border-green-600 bg-transparent rounded-none" ${isActiveTabs ==="Shipping" && "text-green-600 border-b-2"} `}> Shipping & Rerurns </button>
                </div>
                <div className="py-6">
                    {getActiveTab()}
                </div>
            </div>
        </>
    )
}

export default ProductInfoTaps
