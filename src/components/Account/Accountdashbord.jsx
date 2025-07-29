import img from "../../assets/undraw_drag.png";
function Accountdashbord() {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <div className=" w-96">
                <img src={img} alt="" />
            </div>
            <div className="text-6xl mb-4 text-gray-400">
                🚧
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Page Under Construction
            </h2>
            <p className="text-gray-500 max-w-md">
                We're working on this page right now. Please check back later or explore other sections of the app.
            </p>
        </div>

        </>
    )
}

export default Accountdashbord
