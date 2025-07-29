

function ProductDetailsSkeleton() {
    return (
        <div className="container animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="h-80 w-80 bg-gray-200 rounded-lg mb-6" />
                    <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-2" />
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
                    <div className="h-10 w-full bg-gray-200 rounded mb-2" />
                    <div className="h-10 w-full bg-gray-100 rounded mb-2" />
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <div className="h-32 w-32 bg-gray-200 rounded-lg mb-4" />
                        <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
                        <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                        <div className="h-3 w-20 bg-gray-100 rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetailsSkeleton
