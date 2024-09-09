import { BadgePercent, MessageSquare, Shield, Users } from 'lucide-react';
import CTA from '../components/CTA';
import PackagesTable from '../components/PackagesTable';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Book Your Umrah Package Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Simple and affordable packages with complete support from start to finish
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="border-green-100">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Umrah Packages
          </h2>
          <p className="mt-4 text-gray-600">
            Everything included: Hotel, Flights, Visa, and Transport
          </p>
        </div>

        <PackagesTable />
      </div>

      {/* Help Section */}
      <CTA />

      {/* Testimonials Preview */}

    </div>
  );
};

export default UmrahPackage;