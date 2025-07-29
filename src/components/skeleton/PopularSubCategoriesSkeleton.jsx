

function PopularSubCategoriesSkeleton() {
    return (
        <div className="con container animate-pulse">
            <div className="h-8 w-48 bg-gray-300 rounded mb-4" />
            <div className="all-card my-10 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 xl:grid-cols-6 gap-5">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="card bg-white shadow flex justify-center items-center gap-5 flex-col border-2 border-gray-200 p-5 rounded-lg overflow-hidden">
                        <div className="size-12 rounded-full flex justify-center items-center bg-gray-200">
                            <div className="h-6 w-6 bg-gray-300 rounded-full" />
                        </div>
                        <div className="h-4 w-20 bg-gray-200 rounded mt-2" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularSubCategoriesSkeleton
