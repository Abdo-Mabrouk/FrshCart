

function FeaturedCategorySkeleton() {
    return (
        <div className="container my-10 animate-pulse">
            <div className="grid grid-cols-2 items-center gap-10">
                <div className="space-y-3 col-span-2 lg:col-span-1">
                    <div className="h-5 w-32 bg-gray-300 rounded" />
                    <div className="h-8 w-64 bg-gray-200 rounded" />
                    <div className="h-4 w-80 bg-gray-100 rounded" />
                    <ul className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="h-4 w-4 bg-gray-300 rounded-full" />
                                <div className="h-4 w-40 bg-gray-200 rounded" />
                            </li>
                        ))}
                    </ul>
                    <div className="h-10 w-40 bg-gray-300 rounded my-5" />
                </div>
                <div className="space-y-3 col-span-2 lg:col-span-1 flex justify-center">
                    <div className="h-60 w-60 bg-gray-200 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategorySkeleton
