

function CartSkeleton() {
    return (
        <div className="container grid grid-cols-3 gap-5 py-10 animate-pulse">
            <div className="col-span-3 h-fit max-h-screen overflow-auto bg-white lg:col-span-2 p-5 rounded-lg shadow-lg border-2 border-gray-200">
                <div className="pb-5">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
                <div className="all-cardes space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="border-t-2 border-gray-200 py-2 flex flex-col md:flex-row gap-5 items-center justify-between">
                            <div className="data flex gap-5 items-center w-full md:w-auto">
                                <div className="imge size-14 rounded-md overflow-hidden bg-gray-200">
                                    <div className="w-full h-full bg-gray-300" />
                                </div>
                                <div className="text text-sm space-y-2 w-32">
                                    <div className="h-4 bg-gray-300 rounded w-24" />
                                    <div className="h-3 bg-gray-200 rounded w-16" />
                                    <div className="flex gap-3 items-center mt-2">
                                        <div className="h-4 w-12 bg-gray-300 rounded" />
                                        <div className="h-3 w-6 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center mt-4 md:mt-0">
                                <div className="flex w-fit items-center gap-5 px-2 py-1 border-2 rounded-sm border-gray-200">
                                    <div className="h-6 w-6 bg-gray-300 rounded" />
                                    <div className="h-4 w-6 bg-gray-200 rounded" />
                                    <div className="h-6 w-6 bg-gray-300 rounded" />
                                </div>
                                <div className="h-4 w-16 bg-gray-200 rounded" />
                                <div className="h-6 w-6 bg-gray-300 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3 bg-white lg:col-span-1 p-5 space-y-10 rounded-lg shadow-lg border-2 border-gray-200">
                <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
                <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-5 w-full bg-gray-300 rounded mt-3" />
                </div>
                <div className="space-y-3">
                    <div className="h-10 w-full bg-gray-200 rounded" />
                    <div className="h-10 w-full bg-gray-100 rounded" />
                </div>
                <ul className="space-y-3">
                    <li className="bg-gray-200 border-gray-400 rounded-md p-2 flex gap-4 w-full">
                        <div className="h-10 w-10 bg-gray-300 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded" />
                            <div className="h-3 w-40 bg-gray-200 rounded" />
                        </div>
                    </li>
                    <li className="bg-green-200/50 border-green-400 rounded-md p-2 flex gap-4 w-full">
                        <div className="h-10 w-10 bg-gray-300 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded" />
                            <div className="h-3 w-40 bg-gray-200 rounded" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CartSkeleton
