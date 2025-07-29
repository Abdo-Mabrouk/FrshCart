
function Subscribe() {
    return (
        <div className="bg-green-200/50">
            <div className=" container text-center py-20 ">
                <h1 className="text-3xl my-5 text-black font-bold">Subscribe to our Newsletter</h1>
                <p className="text-gray-400">Stay updeat our lastes offers,recipes,and health tips</p>
                <div className=" my-10 max-w-1/2 flex justify-center items-center mx-auto">
                    <input className="p-3 border-2 w-full focus:outline-2 focus:outline-green-500 placeholder:text-black rounded-bl-xl rounded-tl-xl border-gray-200" type="email" placeholder="Your email addredss" />
                    <button className=" btn py-3.5 rounded-none rounded-br-xl rounded-tr-xl bg-green-500 text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
