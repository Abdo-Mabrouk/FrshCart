function ShippingTabs() {
    return (
        <>
        <div className="">
            <h2 className="text-black font-semibold">Shipping & Returns</h2>
        </div>
        <div className="flex justify-between *:w-full">
            <div className="">
            <p className="text-black font-semibold my-3 ">Shipping Information</p>
            <div className=" flex gap-5">
            <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
                <li>Standard:</li>
                <li> Express:</li>
                <li> Free shipping:</li>
            </ul>
            <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
                <li> 3-5 business days ($4.99)</li>
                <li> 1-2 business days ($9.99)</li>
                <li> Orders over $50</li>
            </ul>
            </div>
            </div>
            <div className="">
            <p className="text-black font-semibold my-3 ">Roturn Policy</p>
            <div className=" flex gap-5">
            <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
                <li>Time limit:</li>
                <li> Condition:</li>
                <li> Refund:</li>
            </ul>
            <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
                <li> 30 days</li>
                <li> tinopened original pocitaging</li>
                <li> Full refund available</li>
            </ul>
            </div>
            </div>
        </div>
        
        </>
    );
}

export default ShippingTabs;
