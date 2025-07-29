

function CardBrandSkeleton() {
    return (
        <div className="border-2 rounded-lg bg-white border-gray-200 p-4 space-y-3 overflow-hidden animate-pulse">
            <div className="w-fit mx-auto">
                <div className="h-16 w-16 bg-gray-200 rounded-full" />
            </div>
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
            <div className="flex justify-between items-center">
                <div className="h-10 w-full bg-gray-100 rounded" />
            </div>
        </div>
    )
}

export default CardBrandSkeleton
