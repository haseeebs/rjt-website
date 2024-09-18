const HeroSkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pt-20 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 mb-6"></div>
                <div className="flex items-center gap-x-6">
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                  <div className="h-10 bg-gray-200 rounded w-48"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl bg-gray-200">
              <div className="bg-gray-200 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="px-2 pt-2 h-[20rem] lg:h-[32rem]">
                  <div className="h-full w-full bg-gray-300 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 h-20 bg-gray-200 rounded"></div>

      </div>
    </div>
  );
};

export default HeroSkeleton;