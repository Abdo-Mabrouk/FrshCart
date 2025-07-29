

function WishlistSkeleton() {
    return (
        <div className="container grid grid-cols-3 gap-5 py-10 animate-pulse">
            <div className="col-span-3 bg-white h-fit max-h-[925px] overflow-auto lg:col-span-2 p-5 rounded-lg shadow-lg border-2 border-gray-200">
                <div className="pb-5">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-2" />
                    <div className="flex justify-between items-center">
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                        <div className="h-8 w-32 bg-gray-100 rounded" />
                    </div>
                </div>
                <div className="all-cardes space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="border-t-2 border-gray-200 py-2 flex flex-col md:flex-row gap-5 items-center justify-between animate-pulse">
                            <div className="data flex gap-5 items-center w-full md:w-auto">
                                <div className="imge size-20 rounded-md overflow-hidden bg-gray-200">
                                    <div className="w-full h-full bg-gray-300" />
                                </div>
                                <div className="text text-sm space-y-2 w-32">
                                    <div className="h-4 bg-gray-300 rounded w-24" />
                                    <div className="h-3 bg-gray-200 rounded w-16" />
                                    <div className="flex gap-3 items-center mt-2">
                                        <div className="h-4 w-12 bg-gray-300 rounded" />
                                        <div className="h-3 w-6 bg-gray-200 rounded" />
                                    </div>
                                    <div className="h-5 w-24 bg-green-200 rounded mt-2" />
                                </div>
                            </div>
                            <div className="flex gap-5 items-center mt-4 md:mt-0">
                                <div className="h-10 w-24 bg-gray-200 rounded" />
                                <div className="h-8 w-8 bg-gray-300 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3 lg:col-span-1 space-y-10">
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-10 w-full bg-gray-100 rounded" />
                    <div className="h-6 w-32 bg-gray-300 rounded mt-4" />
                    <div className="flex gap-2 mt-2">
                        <div className="h-4 w-16 bg-gray-200 rounded" />
                        <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                </div>
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                    <ul className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                            <li key={i} className="py-2 border-b-2 border-gray-200 flex justify-between items-center">
                                <div className="space-y-3">
                                    <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
                                    <div className="h-3 w-16 bg-gray-100 rounded" />
                                </div>
                                <div className="h-6 w-16 bg-green-200 rounded" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="shadow-lg bg-white border-2 border-gray-200 p-5 rounded-lg space-y-5">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-56 bg-gray-200 rounded" />
                    <div className="flex gap-5">
                        <div className="h-10 w-32 bg-blue-200 rounded" />
                        <div className="h-10 w-32 bg-cyan-200 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistSkeleton
