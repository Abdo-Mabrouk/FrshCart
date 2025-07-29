import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/footar/Footar.jsx"

function NestedPaga() {
    return (
        <>
            <Navbar/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default NestedPaga
