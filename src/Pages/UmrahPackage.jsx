import CTA from '../components/CTA';
import PackageComparison from '../components/PackageComparison';
import { Gumbad } from '../assets/images';

const UmrahPackage = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl py-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
        <img
          alt=""
          src={Gumbad}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5"></div>

        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Umrah Packages for Every Budget
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From Economy to 5-Star Luxury, Tailored to Your Comfort & Budget
          </p>
        </div>
      </div>

      <div className="py-10">
        <PackageComparison />
      </div>

      <CTA />
    </div>
  );
};

export default UmrahPackage;