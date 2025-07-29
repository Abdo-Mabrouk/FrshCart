

function BrandsSkeleton() {
    return (
        <>
        <div className="text-center my-10 px-5 animate-pulse">
            <div className="h-8 w-60 bg-gray-300 rounded mx-auto mb-3" />
            <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto mt-5" />
            <div className="h-4 w-1/3 bg-gray-200 rounded mx-auto mt-2" />
        </div>
        <div className="container">
            <div className="h-8 w-56 bg-gray-300 rounded mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white py-5 rounded-2xl shadow-md flex flex-col justify-between border-2 border-gray-200 overflow-hidden">
                        <div className="w-1/2 h-24 bg-gray-200 mx-auto rounded-full mb-4" />
                        <div className="p-4">
                            <div className="h-6 w-32 bg-gray-300 rounded mb-2" />
                            <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
                            <div className="flex items-center justify-between mt-3">
                                <div className="h-4 w-20 bg-gray-200 rounded" />
                                <div className="h-8 w-16 bg-gray-100 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="container my-10 flex flex-col md:flex-row gap-5 px-5 justify-between items-center">
            <div className="inp form-control w-full md:w-96">
                <div className="h-10 w-full bg-gray-200 rounded flex items-center px-3" />
            </div>
            <div className="w-full md:w-fit flex items-center justify-between gap-5">
                <div className="h-8 w-24 bg-gray-200 rounded" />
                <div className="h-10 w-40 bg-gray-100 rounded" />
            </div>
        </div>
        <div className="container grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-2 lg:gap-5">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white h-32 rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center">
                    <div className="h-16 w-16 bg-gray-200 rounded-full mb-2" />
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                </div>
            ))}
        </div>
        </>
    );
}

export default BrandsSkeleton
