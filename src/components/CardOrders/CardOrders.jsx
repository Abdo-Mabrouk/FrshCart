import { faArrowRotateRight, faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import imgg from "../../assets/Men's Fashion.jpg"

function CardOrders() {
    return (
        <>
            <div className=" rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row md:space-y-0  justify-between items-center bg-gray-200 p-4 border-b-2 border-gray-300">
                    <div className="data space-y-2">
                        <h2 className="flex items-center gap-5 text-black font-semibold">order #gfgf154 <span className="bg-green-100 px-2 py-1 rounded-sm text-green-500">delivered</span></h2>
                        <p className="text-gray-400">placed on june 15,2023</p>
                    </div>
                    <div className="flex items-center gap-5 *:font-semibold">
                        <p className="text-green-500"><span><FontAwesomeIcon icon={faArrowRotateRight}/></span> reorder</p>
                        <p><span><FontAwesomeIcon icon={faEye}/></span> view details</p>
                    </div>
                </div>
                <div className="p-2 flex flex-col gap-5 md:flex-row justify-between items-center">
                    <div className="immmg flex gap-3 overflow-auto ">
                        <div className="img1 relative size-18 rounded-sm overflow-hidden">
                            <img className="" src={imgg} alt="" />
                            <span className="absolute block end-0 top-0 size-6 rounded-lg text-center bg-black text-white">1</span>
                        </div>
                        <div className="img1 relative size-18 rounded-sm overflow-hidden">
                            <img className="" src={imgg} alt="" />
                            <span className="absolute block end-0 top-0 size-6 rounded-lg text-center bg-black text-white">2</span>
                        </div>
                        <div className="img1 relative size-18 rounded-sm overflow-hidden">
                            <img className="" src={imgg} alt="" />
                            <span className="absolute block end-0 top-0 size-6 rounded-lg text-center bg-black text-white">3</span>
                        </div>
                    </div>
                    <div className=" flex items-center gap-10">
                        <div className="">
                            <p className="text-gray-400 text-sm"> items</p>
                            <p className="text-black font-semibold">4 items</p>
                        </div>
                        <div className="">
                            <p className="text-gray-400 text-sm"> tota amount</p>
                            <p className="text-black font-semibold">32.97 EGP</p>
                        </div>
                        <div className="">
                            <p className="text-gray-400 text-sm"> delivered to</p>
                            <p className="text-black font-semibold">home address</p>
                        </div>
                    </div>
                    <div className=" flex flex-row md:flex-col gap-3">
                        <button className="btn bg-green-500 text-white text-sm hover:bg-green-700"> track order</button>
                        <button className="btn"> cansel order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOrders
