import { Link } from 'react-router-dom';
import { MakkahImage } from '../assets/images';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pt-20 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Stress-Free Umrah Led by Knowledgeable Aalim
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Complete Care, Peaceful Travel, and Trusted Guidance for Your Umrah Journey — Backed by Over 10 Years of Experience.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/umrah-packages"
                    className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold hover:bg-opacity-90 transition text-white shadow-sm flex-shrink-0"
                  >
                    View Packages
                  </Link>
                  <Link
                    to="/customize-package"
                    className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Customize Your Package
                    <MoveRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl bg-lime-500">
              <div className="bg-lime-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-900 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="px-2 pt-2 h-[32rem]">
                  <img src={MakkahImage} alt="" className='h-full w-full object-cover rounded-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">1,000+</h3>
              <p className="text-gray-600">Satisfied Pilgrims</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero