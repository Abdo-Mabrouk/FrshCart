import {
    faHeadset,
    faRotateRight,
    faShieldHalved,
    faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeFeatures() {
    return (
    <>
        <ul className="container p-5 *:bg-white *:border-3 *:border-gray-200 *:rounded-md *:p-2 *:flex *:gap-4 grid grid-cols-12 *:col-span-12 *:md:col-span-6 *:lg:col-span-3 gap-10 py-10">
            <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faTruckFast} className="text-green-500" />
                </div>
                <div className="data">
                <h3 className="text-black font-semibold ">Fast Delivery</h3>
                <p className="text-sm text-gray-500">
                    Orders $50 or more
                </p>
                </div>
            </li>
            <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faRotateRight} className="text-green-500" />
                </div>
                <div className="data">
                <h3 className="text-black font-semibold ">
                    30 Days Return
                </h3>
                <p className="text-sm text-gray-500">
                    Satisfaction guaranteed
                </p>
                </div>
            </li>
            <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faShieldHalved} className="text-green-500" />
                </div>
                <div className="data">
                <h3 className="text-black font-semibold ">Secure paymernt</h3>
                <p className="text-sm text-gray-500">
                    100% protected checkout
                </p>
                </div>
            </li>
            <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faHeadset}  className="text-green-500" />
                </div>
                <div className="data">
                <h3 className="text-black font-semibold ">24/7 Support</h3>
                <p className="text-sm text-gray-500">
                    ready to help anytime
                </p>
                </div>
            </li>
        </ul>
    </>
    );
}

export default HomeFeatures;
