

function CardWishlistSkeleton() {
    return (
        <div className="border-t-2 border-gray-200 py-2 flex flex-col md:flex-row gap-5 items-center justify-between animate-pulse">
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
    );
}

export default CardWishlistSkeleton
