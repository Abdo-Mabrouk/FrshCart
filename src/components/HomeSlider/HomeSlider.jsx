import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay  } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import homeSliderImg from "../../assets/home-slider.png";

function HomeSlider() {
return (
    <>
        <Swiper
        modules={[Navigation, Pagination ,Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
        delay: 5000, 
        disableOnInteraction: false,}}
        >
        <SwiperSlide>
            <div
            className=" bg-cover bg-center"
            style={{ backgroundImage: `url(${homeSliderImg})` }}
            >
            <div className="overlay text-white bg-gradient-to-r from-green-500/95 to-green-500/40 py-30">
                <div className="space-y-5 container">
                <h2 className="text-2xl font-bold">
                    {" "}
                    Fresh products delievered <br /> to your Door
                </h2>
                <p className="">Get 20% off for your first order</p>
                <div className="space-x-5">
                    <button className="btn text-green-600 border-2 border-white bg-white">
                    Shop New
                    </button>
                    <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-600 transition-colors duration-500">
                    Viow All
                    </button>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
            className=" bg-cover bg-center"
            style={{ backgroundImage: `url(${homeSliderImg})` }}
            >
            <div className="overlay text-white bg-gradient-to-r from-green-500/95 to-green-500/40 py-30">
                <div className="space-y-5 container">
                <h2 className="text-2xl font-bold">
                    {" "}
                    Fresh products delievered <br /> to your Door
                </h2>
                <p className="">Get 20% off for your first order</p>
                <div className="space-x-5">
                    <button className="btn text-green-600 border-2 border-white bg-white">
                    Shop New
                    </button>
                    <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-600 transition-colors duration-500">
                    Viow All
                    </button>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
            className=" bg-cover bg-center"
            style={{ backgroundImage: `url(${homeSliderImg})` }}
            >
            <div className="overlay text-white bg-gradient-to-r from-green-500/95 to-green-500/40 py-30">
                <div className="space-y-5 container">
                <h2 className="text-2xl font-bold">
                    {" "}
                    Fresh products delievered <br /> to your Door
                </h2>
                <p className="">Get 20% off for your first order</p>
                <div className="space-x-5">
                    <button className="btn text-green-600 border-2 border-white bg-white">
                    Shop New
                    </button>
                    <button className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-600 transition-colors duration-500">
                    Viow All
                    </button>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        </Swiper>
    </>
);
}

export default HomeSlider;
