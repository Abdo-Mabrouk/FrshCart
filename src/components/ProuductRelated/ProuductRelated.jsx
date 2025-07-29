import { useEffect, useState } from "react";
import Loading from "../../paga/Loading/Loading";
import { getAllProducts } from "../../services/ProductsServices";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";

    function ProuductRelated({ ProductInfo }) {
    const [Products, setProducts] = useState(null);
    const [isLoding, setisLoding] = useState(true);

    async function apiProuductRelated() {
        try {
        setisLoding(true);
        const response = await getAllProducts(
            `category[in]=${ProductInfo.category._id}`
        );
        if (response.success) {
            setisLoding(false);
            setProducts(response.data.data);
        }
        } catch (error) {
        setisLoding(false);
        }
    }
    useEffect(() => {
        apiProuductRelated();
    }, []);
    if (isLoding) {
        return <HomeDealsSkeleton />;
    }

    return (
        <>
        <div className="py-10">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your May Also Like</h2>
                <div className=" flex gap-5 *:rounded-full *:hover:bg-green-500 *:hover:text-white">
                    <button className="btn prev-btn "><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button className="btn next-btn"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
            <div>
                <Swiper modules={[Navigation]} slidesPerView={4} loop={true} spaceBetween={20} navigation={{nextEl:".next-btn", prevEl:".prev-btn "}}>
                    {Products.map((p) => (
                    <SwiperSlide className="py-10">
                        <Card details={p} key={p._id} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        </>
    );
}

export default ProuductRelated;
