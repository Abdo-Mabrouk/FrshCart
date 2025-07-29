

function CheckoutSkeleton() {
    return (
        <div className="container my-10 animate-pulse">
            <div className="h-8 w-48 bg-gray-300 rounded mb-6" />
            <div className="grid grid-cols-3 gap-20 justify-center mt-5">
                <div className="col-span-3 lg:col-span-2 space-y-10">
                    <div className="bg-white p-5 rounded-xl space-y-6 shadow-lg">
                        <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
                        <div className="flex flex-col gap-4">
                            <div className="h-10 w-full bg-gray-100 rounded" />
                            <div className="h-10 w-full bg-gray-100 rounded" />
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-xl space-y-6 shadow-lg">
                        <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
                        <div className="h-10 w-full bg-gray-100 rounded mb-2" />
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="h-10 w-full bg-gray-100 rounded" />
                            <div className="h-10 w-full bg-gray-100 rounded" />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <div className="bg-white p-5 space-y-5 rounded-lg shadow-lg border-2 border-gray-200">
                        <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
                        <div className="space-y-2 max-h-40 overflow-auto">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="card border-2 my-2 border-gray-300 rounded-md p-2 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="size-10 bg-gray-200 rounded-md" />
                                        <div className="data text-sm">
                                            <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                                            <div className="h-3 w-16 bg-gray-100 rounded" />
                                        </div>
                                    </div>
                                    <div className="h-4 w-12 bg-gray-200 rounded" />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-3 border-t-2 border-gray-400 py-5">
                            <div className="h-4 w-full bg-gray-200 rounded" />
                            <div className="h-4 w-full bg-gray-200 rounded" />
                            <div className="h-4 w-full bg-gray-200 rounded" />
                            <div className="h-5 w-full bg-gray-300 rounded mt-3" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-10 w-full bg-green-200 rounded" />
                            <div className="h-10 w-full bg-gray-100 rounded" />
                        </div>
                        <div className="text-gray-400 space-y-3 mt-4">
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                            <div className="h-3 w-40 bg-gray-100 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSkeleton
