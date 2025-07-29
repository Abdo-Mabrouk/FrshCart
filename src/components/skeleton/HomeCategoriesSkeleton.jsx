
function HomeCategoriesSkeleton() {
    return (
        <section>
            <div className="container animate-pulse">
                <div className="flex justify-between items-center mb-2">
                    <div className="h-8 w-48 bg-gray-300 rounded" />
                    <div className="h-6 w-40 bg-gray-200 rounded" />
                </div>
                <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="card p-4 rounded-xl shadow-md flex flex-col items-center gap-3 bg-white">
                            <div className="size-16 rounded-full bg-gray-200 flex items-center justify-center">
                                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                            </div>
                            <div className="h-4 w-20 bg-gray-200 rounded mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeCategoriesSkeleton
