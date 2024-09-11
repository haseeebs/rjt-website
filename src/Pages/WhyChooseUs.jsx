import React, { useState } from 'react';
import { HeartIcon, UsersIcon, MapIcon, ShieldIcon, ChevronRightIcon } from 'lucide-react';

const SpiritualTravelFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: UsersIcon, title: 'Expert Guides', description: 'Our experienced guides ensure a deep, meaningful journey.' },
    { icon: MapIcon, title: 'Curated Itineraries', description: 'Carefully planned routes to maximize your spiritual experience.' },
    { icon: ShieldIcon, title: 'Safe Travel', description: 'Your safety and comfort are our top priorities.' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-lime-200 py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-lime-900 mb-4">
            Why Choose Our Spiritual Travel?
          </h2>
          <p className="text-xl text-lime-700 max-w-2xl mx-auto">
            Embark on transformative journeys that nurture your soul and expand your horizons.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white/80 backdrop-blur-sm border border-lime-200 rounded-3xl flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-lime-200 rounded-full animate-ping opacity-75"></div>
                  <div className="relative bg-lime-100 rounded-full p-4">
                    <HeartIcon className="h-12 w-12 text-lime-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-lime-900 text-center mb-4">98%</h3>
              <p className="text-xl font-medium text-lime-700 text-center mb-6">Customer Satisfaction</p>
              <p className="text-lime-800 text-center">
                We understand the profound nature of spiritual travel. Our dedicated team ensures that your journey is not just a trip, but a life-changing experience.
              </p>
            </div>
            <div className="p-6 bg-lime-50 rounded-b-lg">
              <p className="text-lime-700 font-semibold text-center">Trusted by Thousands</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-lime-200 rounded-3xl col-span-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden ${activeFeature === index ? 'bg-lime-50' : 'bg-white'}`}
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 hover:bg-lime-100"
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center">
                        <feature.icon className="h-6 w-6 mr-3 text-lime-600" />
                        <span className="font-semibold text-lime-900">{feature.title}</span>
                      </div>
                      <ChevronRightIcon
                        className={`h-5 w-5 transition-transform ${
                          activeFeature === index ? 'rotate-90 text-lime-600' : 'text-lime-400'
                        }`}
                      />
                    </button>
                    {activeFeature === index && (
                      <div className="px-4 pb-4 text-lime-700">
                        {feature.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualTravelFeatures;