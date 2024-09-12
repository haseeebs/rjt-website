import { Link } from 'react-router-dom';
import { MadinahImage } from '../assets/images';
import { MoveRight } from 'lucide-react';
import SimpleState from './SimpleState';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pt-20 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-lime-950 sm:text-6xl">
                  Stress-Free Umrah Led by Knowledgeable Aalim
                </h1>
                <p className="mt-6 text-lg leading-8 text-lime-900">
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
                <div className="px-2 pt-2 h-[20rem] lg:h-[32rem]">
                  <img src={MadinahImage} alt="" className='h-full w-full object-cover rounded-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimpleState />

      </div>
    </div>
  )
}

export default Hero
