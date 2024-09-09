import { BadgePercent, MessageSquare, Shield, Users } from 'lucide-react';
import CTA from '../components/CTA';
import FeatureGrid from '../components/FeatureGrid';
import PackagesTable from '../components/PackagesTable';
import { MadinahImage } from '../assets/images';

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

<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={MadinahImage}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          
      <FeatureGrid features={features} />
        </div>
      </div>
    </div>
      
      {/* Hero Section */}
      <div className="">
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

      {/* CTA Section */}
      <CTA />

      {/* Testimonials Preview */}

    </div>
  );
};

export default UmrahPackage;