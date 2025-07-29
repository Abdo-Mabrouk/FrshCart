
function HomeFeaturedProductsSkeleton() {
    return (
        <div className="container my-10 animate-pulse">
            <div className="my-5">
                <div className="h-8 w-48 bg-gray-300 rounded" />
            </div>
            <div className="allCardes grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="card h-[450px] bg-white overflow-hidden relative px-3 shadow-lg rounded-lg space-y-4">
                        <div className="h-60 w-full bg-gray-200 rounded-lg mb-2" />
                        <div className="py-3 space-y-2">
                            <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                            <div className="h-5 w-40 bg-gray-300 rounded mb-1" />
                            <div className="flex gap-2 items-center mt-2">
                                <div className="h-4 w-12 bg-gray-300 rounded" />
                                <div className="h-3 w-16 bg-gray-200 rounded" />
                            </div>
                        </div>
                        <div className="footarCard flex gap-1.5 items-center justify-between">
                            <div className="h-5 w-24 bg-gray-200 rounded" />
                            <div className="h-8 w-8 bg-gray-300 rounded-full" />
                        </div>
                        <div className="actions flex flex-col justify-center items-center gap-1.5 absolute end-2 top-10 bg-white border-2 border-gray-200 px-1.5 py-1 rounded-md">
                            <div className="h-8 w-8 bg-gray-200 rounded-full" />
                            <div className="h-8 w-8 bg-gray-200 rounded-full" />
                            <div className="h-8 w-8 bg-gray-200 rounded-full" />
                        </div>
                        <div className="absolute start-4 top-4 bg-gray-300 px-6 py-2 rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeFeaturedProductsSkeleton
