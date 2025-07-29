import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NotfoundImg from "../../assets/not-found.svg"
import Subscribe from "../../components/Subscribe/Subscribe"
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
export default function Notfound() {
    return (
        <>
        <div className="f w-full mt-20 flex justify-center items-center flex-col">
            <img className="w-1/4" src={NotfoundImg} alt="" />
            <p className="my-10 text-2xl font-bold">Oops! This page not found </p>
            <div className="flex items-center gap-5 my-5">
                <Link to={"/"}><button className="btn flex items-center justify-center gap-4 bg-green-500 text-white text-xl "><span><FontAwesomeIcon icon={faHome}/></span> Back to Home</button></Link>
                <button className="btn flex items-center justify-center gap-4  text-green-500 bg-white border-2 border-gray-300 text-xl "><span><FontAwesomeIcon icon={faSearch}/></span> Search to products</button>
            </div>
        </div>
        <Subscribe/>
        </>
        
    )
}
