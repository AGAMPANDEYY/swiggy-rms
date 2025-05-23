import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  UserGroupIcon,
  ChartBarIcon,
  SwatchIcon,
  CreditCardIcon,
  DocumentTextIcon,
  TableCellsIcon,
  BookOpenIcon,
  UsersIcon,
  DeviceTabletIcon,
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'

const navigationConfig = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, roles: ['owner', 'manager', 'frontdesk', 'kitchen', 'supplier', 'delivery'] },
  { name: 'POS', href: '/pos', icon: CreditCardIcon, roles: ['owner', 'manager', 'frontdesk'] },
  { name: 'KDS', href: '/kds', icon: DeviceTabletIcon, roles: ['owner', 'manager', 'kitchen'] },
  { name: 'Orders', href: '/orders', icon: ShoppingBagIcon, roles: ['owner', 'manager', 'frontdesk', 'kitchen'] },
  { name: 'Menu', href: '/menu', icon: ClipboardDocumentListIcon, roles: ['owner', 'manager'] },
  { name: 'Recipes', href: '/recipes', icon: BookOpenIcon, roles: ['owner', 'manager', 'kitchen'] },
  { name: 'Tables', href: '/tables', icon: TableCellsIcon, roles: ['owner', 'manager', 'frontdesk'] },
  { name: 'Inventory', href: '/inventory', icon: CubeIcon, roles: ['owner', 'manager', 'kitchen'] },
  { name: 'Staff', href: '/staff', icon: UsersIcon, roles: ['owner', 'manager'] },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, roles: ['owner', 'manager'] },
  { name: 'Financials', href: '/financials', icon: DocumentTextIcon, roles: ['owner', 'manager'] },
  { name: 'CRM', href: '/crm', icon: UserGroupIcon, roles: ['owner', 'manager'] },
  { name: 'Swiggy', href: '/swiggy', icon: SwatchIcon, roles: ['owner', 'manager', 'kitchen', 'frontdesk'] },
]

const swiggyLogoWithText = 'https://pawealth.in/wp-content/uploads/2019/08/Swiggy-startup-growth-story.png' // Use a hosted version of the provided image

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation()
  const { role } = useAuth()
  const navigation = navigationConfig.filter(item => !role || item.roles.includes(role))

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-20" onClick={() => setIsOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white border-r border-swiggy-border shadow-xl">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pt-8 pb-4">
            <div className="flex flex-shrink-0 items-center px-6 mb-8">
              <img
                className="h-12 w-auto"
                src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
                alt="Swiggy Logo"
              />
            </div>
            <nav className="mt-2 flex-1 space-y-2 px-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-swiggy-orange/10 text-swiggy-orange border-l-4 border-swiggy-orange shadow'
                        : 'text-swiggy-black hover:bg-swiggy-orange/5 hover:text-swiggy-orange'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon
                      className={`h-6 w-6 flex-shrink-0 ${
                        isActive ? 'text-swiggy-orange' : 'text-gray-400 group-hover:text-swiggy-orange'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white border-r border-swiggy-border shadow-xl">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
            <div className="flex flex-shrink-0 items-center px-6 mb-8">
              <img
                className="h-12 w-auto"
                src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
                alt="Swiggy Logo"
              />
            </div>
            <nav className="mt-2 flex-1 space-y-2 px-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-swiggy-orange/10 text-swiggy-orange border-l-4 border-swiggy-orange shadow'
                        : 'text-swiggy-black hover:bg-swiggy-orange/5 hover:text-swiggy-orange'
                    }`}
                  >
                    <item.icon
                      className={`h-6 w-6 flex-shrink-0 ${
                        isActive ? 'text-swiggy-orange' : 'text-gray-400 group-hover:text-swiggy-orange'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
} 