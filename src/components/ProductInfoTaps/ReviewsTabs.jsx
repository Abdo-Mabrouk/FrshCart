import Reating from "../Reating/Reating"

function ReviewsTabs() {
    return (
        <>
            <div className="flex justify-between items-center pb-5">
                <h2 className="text-black font-semibold ">Customer Reviews</h2>
                <button className="btn bg-green-500 hover:bg-green-800 text-white">Wriht a Review</button>
            </div>
            <div className="border-b-2 border-gray-200 space-y-2 pb-5">
                <div className="rev1 flex gap-3 ">
                <Reating reting={5}  /> <span>5 out of 5</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.</p>
            </div>
            <div className="border-b-2 py-3 border-gray-200 space-y-2 pb-5">
                <div className="rev1 flex gap-3 ">
                <Reating reting={3.8}  /> <span>3.8 out of 5</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, deserunt ea quam autem doloribus nesciunt distinctio iure eveniet modi veniam nam repellat rem voluptas impedit maiores ratione delectus labore mollitia reprehenderit? Sapiente, reiciendis. Natus quisquam aperiam a ex! Modi placeat illum dolorem saepe, laudantium pariatur blanditiis incidunt nemo ab velit.</p>
            </div>
            <div className="border-b-2 py-3 border-gray-200 space-y-2 pb-5">
                <div className="rev1 flex gap-3 ">
                <Reating reting={4.2}  /> <span>4.2 out of 5</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.</p>
            </div>
            
        </>
    )
}

export default ReviewsTabs
