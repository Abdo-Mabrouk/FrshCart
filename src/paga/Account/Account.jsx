import { faFirstOrderAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faBars,
  faCreditCard,
  faGaugeHigh,
  faHeart,
  faLocationDot,
  faStar,
  faUser,
  faUserPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

    function Account() {
    const [menuOpen, setmenuOpen] = useState(false);
    function toggleOpen() {
        setmenuOpen(!menuOpen);
    }
    return (
        <>
        <div className="container">
            <div className="grid grid-cols-7 gap-10 my-10">
                <div className="lg:col-span-2 hidden  lg:grid h-screen bg-white p-5 rounded-lg shadow-lg">
                    <div className="usar flex items-center gap-3">
                    <span className="size-12 flex justify-center items-center bg-green-200 text-green-500 rounded-full ">
                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                    </span>
                    <div className="">
                        <h2 className="text-black text-xl font-semibold">
                        3bdo mabrouk
                        </h2>
                        <p className="text-gray-400 text-sm">3bdomabrouk@gmail.com</p>
                    </div>
                    </div>
                    <ul className="nestedAcount mt-10 space-y-10">
                    <NavLink className="block" to="accountdashbord">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faGaugeHigh} />
                            </span>{" "}
                            dashbord
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountorders">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faFirstOrderAlt} />
                            </span>{" "}
                            orders
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountWishlist">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faHeart} />
                            </span>{" "}
                            Wishlist
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountfavorites">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faStar} />
                            </span>{" "}
                            favorites
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountAddersses">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                            </span>{" "}
                            Addersses
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountPaymentMethods">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faCreditCard} />
                            </span>{" "}
                            payment methods
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountDetails">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faUserPen} />
                            </span>{" "}
                            account details
                        </li>
                        )}
                    </NavLink>
                    <NavLink className="block" to="accountdashbord">
                        {({ isActive }) => (
                        <li
                            className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                            isActive
                                ? "text-green-500"
                                : "text-gray-700 hover:text-green-500"
                            }`}
                        >
                            <span>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </span>{" "}
                            Logout
                        </li>
                        )}
                    </NavLink>
                    </ul>
                </div>
                <div className="col-span-7 lg:col-span-5 bg-white p-5 rounded-lg shadow-lg">
                                    <button
                    onClick={toggleOpen}
                    className="btn my-3 block ms-auto lg:hidden bg-green-500 text-white hover:bg-green-700"
                >
                    {menuOpen ? (
                    <FontAwesomeIcon icon={faXmark} />
                    ) : (
                    <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
                    <Outlet />
                </div>
            </div>
        </div>
        {/* start media Acount */}
        {menuOpen && (
            <>
            <div
                onClick={toggleOpen}
                className="  baground cursor-pointer fixed inset-0 z-30 bg-black/50"
            ></div>
            <div className=" animate-slide-in offcanvas space-y-5 fixed top-0 start-0 w-72 bg-white h-screen z-40 p-5 transition-transform duration-500">
                <div className=" flex justify-between items-center pb-2 border-b-2 border-gray-200 ">
                <button className="btn" onClick={toggleOpen}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                </div>
                <ul className="nestedAcount mt-10 space-y-10">
                <NavLink className="block" to="accountdashbord">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faGaugeHigh} />
                        </span>{" "}
                        dashbord
                    </li>
                    )}
                </NavLink>
                <NavLink className="block" to="accountorders">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faFirstOrderAlt} />
                        </span>{" "}
                        orders
                    </li>
                    )}
                </NavLink>
                <NavLink className="block" to="accountWishlist">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faHeart} />
                        </span>{" "}
                        Wishlist
                    </li>
                    )}
                </NavLink>
                <NavLink className="block" to="accountfavorites">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faStar} />
                        </span>{" "}
                        favorites
                    </li>
                    )}
                </NavLink>
                <NavLink className="block" to="accountAddersses">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        </span>{" "}
                        Addersses
                    </li>
                    )}
                </NavLink>
                <NavLink className="block" to="accountPaymentMethods">
                    {({ isActive }) => (
                    <li
                        className={`flex items-center gap-3 text-xl font-semibold transition-colors duration-300 ${
                        isActive
                            ? "text-green-500"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                    >
                        <span>
                        <FontAwesomeIcon icon={faCreditCard} />
                        </span>{" "}
                        payment methods
                    </li>
                    )}
                </NavLink>
                </ul>
            </div>
            </>
        )}
        </>
    );
}

export default Account;
