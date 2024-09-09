import { BadgePercent, MessageSquare, Shield, Users } from 'lucide-react';
import CTA from '../components/CTA';
import FeatureGrid from '../components/FeatureGrid';
import PackagesTable from '../components/PackagesTable';
import PackageComparison from '../components/PackageComparison';
import UmrahPackages from '../components/UmrahPackages';

const UmrahPackage = () => {

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "10+ Years Experience",
      description: "Trusted by 1000+ pilgrims since 2014"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Expert Religious Guide",
      description: "Led by an experienced Aalim fluent in Arabic & English"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      title: "WhatsApp Support",
      description: "Quick responses to all your queries on WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen">
      <UmrahPackages />
      {/* Hero Section */}
      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Umrah Packages for Every Budget
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            From Economy to 5-Star Luxury, Tailored to Your Comfort & Budget
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <FeatureGrid features={features} />

      {/* Current Offers Alert */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex justify-center">
          <span className="rounded-full ring-2 ring-inset ring-lime-500">
            <div className='inline-flex items-center gap-x-1.5 px-6 py-4'>
              <BadgePercent color='#65a30d' className='flex-shrink-0' />
              <div className="text-lime-600 text-base font-medium">
                Book now for special December prices
              </div>
            </div>
          </span>
        </div>
      </div>

      {/* Packages Section */}
      <div className="">
        <PackageComparison />
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Testimonials Preview */}

    </div>
  );
};

export default UmrahPackage;