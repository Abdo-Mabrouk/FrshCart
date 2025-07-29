


function HomeDealsSkeleton() {
    return (
        <section className="">
            <div className="container animate-pulse">
                <div className="flex justify-between items-center py-8">
                    <div className="space-y-3">
                        <div className="h-8 w-48 bg-gray-300 rounded" />
                        <div className="h-4 w-56 bg-gray-200 rounded" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="h-6 w-32 bg-gray-200 rounded" />
                        <div className="h-6 w-6 bg-gray-300 rounded-full" />
                    </div>
                </div>
                <div className="allCardes grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="p-4 rounded-xl shadow-md flex flex-col items-center gap-3 bg-white">
                            <div className="h-32 w-full bg-gray-200 rounded-lg mb-3" />
                            <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
                            <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                            <div className="flex gap-2 w-full justify-center">
                                <div className="h-4 w-10 bg-gray-300 rounded" />
                                <div className="h-4 w-8 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeDealsSkeleton
