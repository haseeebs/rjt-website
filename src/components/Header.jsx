import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { Logo, MakkahImage } from '../assets/images'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const publicNavigation = [
  { name: 'Umrah Packages', to: '/umrah-packages' },
  { name: 'Customize Package', to: '/customize-package' },
]

const protectedNavigation = [
  { name: 'Create New Hotel', to: '/create-hotel' },
  { name: 'Create New Package', to: '/create-package' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.userData);

  // Combine navigation items based on auth status
  const navigationItems = authStatus
    ? [...publicNavigation, ...protectedNavigation]
    : [...publicNavigation, { name: 'Login', to: '/login' }];

  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 h-16">
            <span className="sr-only">Riyazul Jannah tour and travels</span>
            <img src={Logo} className='h-full w-full object-cover' alt="Riyazul Jannah tour and travels logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => (
            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-lime-950">
              {item.name}
            </Link>
          ))}
          {authStatus && <Logout />}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={MakkahImage} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                {authStatus && <Logout />}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header