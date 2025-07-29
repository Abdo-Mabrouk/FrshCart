
function DealsSkeleton() {
    return (
        <>
        <section className="my-10">
            <div className="container animate-pulse">
                <div className="flex justify-between items-center py-8">
                    <div className="space-y-3">
                        <div className="h-8 w-48 bg-gray-300 rounded" />
                        <div className="h-4 w-56 bg-gray-200 rounded" />
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
        <div className="container animate-pulse my-10">
            <div className="h-24 w-full bg-gray-200 rounded-lg" />
        </div>
        </>
    );
}

export default DealsSkeleton
