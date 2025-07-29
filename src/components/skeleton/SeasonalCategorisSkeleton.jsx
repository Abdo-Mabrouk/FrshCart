

function SeasonalCategorisSkeleton() {
  return (
    <div className="my-10 container animate-pulse">
      <div className="h-8 w-48 bg-gray-300 rounded mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card relative overflow-hidden group">
            <div className="w-full h-66 bg-gray-200 rounded-lg" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-300 font-bold text-2xl text-white w-3/4 py-6 text-center rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonalCategorisSkeleton
