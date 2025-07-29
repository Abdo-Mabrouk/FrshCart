import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import { calcTimeLeft } from "../../utils/Password-strength";
import { ProductContext } from "../../context/Product.context";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";

function HomeDeals() {
        const {Products,isLoding} = useContext(ProductContext);
    
    const [timeLeft,setimeLeft] = useState({hours:0,minutes:0,seconds:0});
    useEffect(()=>{
        const x = setInterval(()=>{
            const newTimeLeft = calcTimeLeft();
            setimeLeft(newTimeLeft)
        },1000);
        return function () {
            clearInterval(x)
        }
    },[])
    if (isLoding) {
        return <HomeDealsSkeleton/>
    }
    const deals = Products.filter((pro)=> pro.priceAfterDiscount).slice(0,4)
    
    return (
        <>
        <section className="">
            <div className="container">
            <div className="flex justify-between items-center py-15">
                <div className="space-y-3">
                <h2 className="text-2xl font-bold">Deals Of The Day</h2>
                <p className=" text-gray-400">
                    Offers end in :
                    <span className="ms-2 p-1 px-2 bg-gray-800 text-white rounded-md">
                    {String(timeLeft.hours).padStart(2,0)}
                    </span> <span className="px-1 text-black rounded-md font-bold text-2xl">:</span> <span className="ms-2 p-1 px-2 bg-gray-800 text-white rounded-md">
                    {String(timeLeft.minutes).padStart(2,0)}
                    </span> <span className="px-1 text-black rounded-md font-bold text-2xl">:</span> <span className="ms-2 p-1 px-2 bg-gray-800 text-white rounded-md">
                    {String(timeLeft.seconds).padStart(2,0)}
                    </span>
                </p>
                </div>
                <Link to={"/deals"} className="flex gap-3 items-center text-green-500 hover:text-green-700 transition-colors duration-500">
                
                <span>View All Deals</span>
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div className="allCardes grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {deals.map((p)=>(<Card details={p} key={p._id}/>))}
            </div>
            </div>
        </section>
        </>
    );
}

export default HomeDeals;
