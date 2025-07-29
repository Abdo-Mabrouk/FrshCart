import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import immg from "../../assets/freshcart-logo.svg"
import immg2 from "../../assets/mini-logo.png"
import {  faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router"
function Footar() {
    return (
        <>
            <footer className="bg-white my-10">
                <div className="c container grid grid-cols-5 gap-5 py-10">
                    <div className="lg:col-span-2 md:col-span-6 col-span-12 space-y-5">
                        <img src={immg} alt="" />
                        <p className="text-gray-500 text-md">FreshCart is your one stop destination for fresh groceries, organic produce, and household essentials delivered right to your doorstep.</p>
                        <ul className="flex justify-start items-center gap-5 ">
                            <li><a href="#" className=" size-10 p-5 text-green-600 border-2 border-green-400 rounded-full flex justify-center items-center hover:text-white hover:bg-green-400 hover:transition-colors duration-400"><FontAwesomeIcon icon={faFacebookF} className="text-2xl"/></a></li>
                            <li><a href="#" className=" size-10 p-5 text-green-600 border-2 border-green-400 rounded-full flex justify-center items-center hover:text-white hover:bg-green-400 hover:transition-colors duration-400"><FontAwesomeIcon icon={faTwitter} className="text-2xl"/></a></li>
                            <li><a href="#" className=" size-10 p-5 text-green-600 border-2 border-green-400 rounded-full flex justify-center items-center hover:text-white hover:bg-green-400 hover:transition-colors duration-400"><FontAwesomeIcon icon={faInstagram} className="text-2xl"/></a></li>
                            <li><a href="#" className=" size-10 p-5 text-green-600 border-2 border-green-400 rounded-full flex justify-center items-center hover:text-white hover:bg-green-400 hover:transition-colors duration-400"><FontAwesomeIcon icon={faPinterestP} className="text-2xl"/></a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-1 md:col-span-6 col-span-6 space-y-5">
                        <p className="text-black font-bold text-2xl">Categories</p>
                        <ul className=" space-y-3 *:text-gray-500 *:hover:text-green-600 *:transition-colors *:duration-500">
                            <li><Link >Fruits & Vegetables</Link></li>
                            <li> <Link>Dairy & Eggs</Link> </li>
                            <li> <Link>Bakery & Snacks</Link> </li>
                            <li> <Link>Meat & Seafood</Link> </li>
                            <li> <Link>Beverages</Link> </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-1 md:col-span-6 col-span-6 space-y-5">
                        <p className="text-black font-bold text-2xl">Quick Links</p>
                        <ul className=" space-y-3  *:text-gray-500 *:hover:text-green-600 *:transition-colors *:duration-500">
                            <li><Link> About Us </Link></li>
                            <li><Link>Contact Us </Link></li>
                            <li><Link>Privacy Policy </Link> </li>
                            <li><Link>Terms of Service </Link>  </li>
                            <li><Link> Shipping Policy </Link> </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-1 space-y-5">
                        <p className="text-black font-bold text-2xl">Customer Service</p>
                        <ul className=" space-y-3 *:text-gray-500  *:hover:text-green-600 *:transition-colors *:duration-500">
                            <li><Link>Account</Link> </li>
                            <li><Link>Order History</Link></li>
                            <li><Link>Wishlist</Link></li>
                            <li><Link>Returns & Refunds</Link></li>
                            <li><Link>Help Center</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="c container py-5 border-t-2 border-gray-400/50 flex justify-between items-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
                    <img src={immg2} alt="" className="w-8" />
                </div>
            </footer>
        </>
    )
}

export default Footar
