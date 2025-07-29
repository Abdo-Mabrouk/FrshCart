import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBabyCarriage,
  faSpinner,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faList,
  faPerson,
  faPersonDress,
  faPhone,
  faRightToBracket,
  faSearch,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import immeg from "../../assets/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { CarContext } from "../../context/cart.context";

export default function Navbar() {
  const { logOut , token } = useContext(AuthContext);
  const { cartInfo,isLoding } = useContext(CarContext);
  const [menuOpen, setmenuOpen] = useState(false);
  function toggleOpen() {
    setmenuOpen(!menuOpen);
  }
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="topNavbar hidden  lg:flex justify-between items-center py-2 border-b-2 border-gray-200 text-sm">
            <ul className="flex justify-between items-center gap-5">
              <li>
                {" "}
                <FontAwesomeIcon icon={faPhone} />{" "}
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
            </ul>
            <ul className="flex justify-between items-center gap-5">
              <li>
                <Link>Track Order</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <select>
                  <option value="">EGP</option>
                  <option value="">SAR</option>
                  <option value="">AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="AR">العربيه</option>
                  <option value="EN">Englsh</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="maineNavbar flex justify-between items-center py-4">
            <div className="">
              <Link className="text-2xl font-bold text-black">
                <span className="text-green-500">Fresh</span> Cart
              </Link>
            </div>
            <div className="relative hidden  lg:flex">
              <input
                type="search"
                className="form-control min-w-96"
                name=""
                id=""
                placeholder="Search for products..."
              />
              <FontAwesomeIcon
                icon={faSearch}
                className=" absolute top-1/2 -translate-1/2 end-2"
              />
            </div>
            <ul className="ul hidden  lg:flex justify-center items-center gap-5 *:cursor-pointer *:hover:text-green-500 ">
              <li>
                <NavLink
                  to={`/wishlist`}
                  className="flex cursor-pointer flex-col gap-2 justify-center items-center"
                >
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  <span className="text-sm font-normal">Wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`cart`}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <div className="relative">
                  <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                  <span className="a absolute -end-2 top-0 -translate-y-1/2 size-5 flex justify-center items-center rounded-full bg-green-600 text-white text-sm">{isLoding ? <FontAwesomeIcon icon={faSpinner} spin />:cartInfo?.numOfCartItems} </span>
                  </div>
                  <span className="text-sm font-normal">Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/account`}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                  <span className="text-sm font-normal">Account</span>
                </NavLink>
              </li>
              {!token? <>
                            <li>
                <NavLink
                  to={`signUp`}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                  <span className="text-sm font-normal">Sign Up</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`login`}
                  className="flex flex-col gap-2 justify-center items-center"
                >
                  <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
                  <span className="text-sm font-normal">Login</span>
                </NavLink>
              </li>
              </> : <li onClick={logOut} className="flex flex-col gap-2 justify-center items-center">
                <FontAwesomeIcon icon={faRightToBracket} className="text-xl" />
                <span className="text-sm font-normal">Logout</span>
              </li>}
            </ul>
            <button
              onClick={toggleOpen}
              className="btn block lg:hidden bg-green-500 text-white hover:bg-green-700"
            >
              {menuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        <div className="categoryNavbar hidden  lg:block bg-gray-100 py-2">
          <div className="container flex justify-start gap-5 items-center">
            <div className=" relative group ">
              <button className="btn flex justify-center gap-2 bg-green-600 hover:bg-green-800  text-white items-center">
                <FontAwesomeIcon icon={faList} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <menu className="absolute top-10 group-hover:block *:hover:bg-gray-200 min-w-56 bg-white *:py-3 divide-y-2 divide-gray-100 shadow-lg rounded-lg hidden">
                <li>
                  <Link className=" px-3 flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-green-500"
                      fixedWidth
                      icon={faPerson}
                    />{" "}
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className=" px-3 flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-green-500"
                      fixedWidth
                      icon={faPersonDress}
                    />{" "}
                    <span>Women's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className=" px-3 flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-green-500"
                      fixedWidth
                      icon={faBabyCarriage}
                    />{" "}
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link className=" px-3 flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-green-500"
                      fixedWidth
                      icon={faBolt}
                    />{" "}
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link className=" px-3 flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-green-500"
                      fixedWidth
                      icon={faEllipsis}
                    />{" "}
                    <span>View All Cateories</span>
                  </Link>
                </li>
              </menu>
            </div>
            <ul className="ul container flex justify-start gap-5 items-center  *:cursor-pointer *:hover:text-green-500">
              <li>
                <NavLink to={`/home`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/brands`}>Brands</NavLink>
              </li>
              <li>
                <NavLink to={`/categories`}> Categories</NavLink>
              </li>
              <li>
                <NavLink to={`/deals`}>Deals</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* start media navbar */}
        {menuOpen && (
          <>
            <div
              onClick={toggleOpen}
              className="  baground cursor-pointer fixed inset-0 z-30 bg-black/50"
            ></div>
            <div className=" animate-slide-in offcanvas space-y-5 fixed top-0 start-0 w-72 bg-white h-screen z-40 p-5 transition-transform duration-500">
              <div className=" flex justify-between items-center pb-2 border-b-2 border-gray-200 ">
                <img src={immeg} alt="" />
                <button className="btn" onClick={toggleOpen}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="relative">
                <input
                  type="search"
                  className="form-control w-full pl placeholder:text-sm"
                  name=""
                  id=""
                  placeholder="Search for products..."
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className=" absolute top-1/2 -translate-1/2 end-2"
                />
              </div>
              <div className="border-b-2 border-gray-200 pb-5">
                <h2 className="text-black font-bold my-5">Main Menu</h2>
                <ul className="ull *:w-full  flex flex-col justify-start items-start gap-5 *:cursor-pointer *:hover:text-green-500 *:hover:bg-green-100 ">
                  <li>
                    <NavLink
                      to={`/wishlist`}
                      className="flex gap-2 justify-start items-center py-2 px-3 rounded-md"
                    >
                      <FontAwesomeIcon icon={faHeart} className="text-xl" />
                      <span className="text-sm font-normal">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`cart`}
                      className="flex gap-2 justify-start items-center py-2 px-3 rounded-md"
                    >
                      <div className="relative">
                  <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                  <span className="a absolute -end-2 top-0 -translate-y-1/2 size-5 flex justify-center items-center rounded-full bg-green-600 text-white text-sm">{isLoding ? <FontAwesomeIcon icon={faSpinner} spin />:cartInfo.numOfCartItems}</span>
                  </div>
                      <span className="text-sm font-normal">Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account`}
                      className="flex gap-2 justify-start items-center py-2 px-3 rounded-md"
                    >
                      <FontAwesomeIcon icon={faUser} className="text-xl" />
                      <span className="text-sm font-normal">Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-black font-bold my-5">Account</h2>
                <ul className="ull *:w-full  flex flex-col justify-start items-start gap-5 *:cursor-pointer *:hover:text-green-500 *:hover:bg-green-100 ">
                  {!token ? <>
                    <li>
                    <NavLink
                      to={`signUp`}
                      className="flex gap-2 justify-start items-center py-2 px-3 rounded-md"
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                      <span className="text-sm font-normal">Sign Up</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`login`}
                      className="flex gap-2 justify-start items-center py-2 px-3 rounded-md"
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        className="text-xl"
                      />
                      <span className="text-sm font-normal">Login</span>
                    </NavLink>
                  </li>
                  </> : <li onClick={logOut} className="flex gap-2 justify-start items-center py-2 px-3 rounded-md">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="text-xl"
                    />
                    <span className="text-sm font-normal">Logout</span>
                  </li>}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
