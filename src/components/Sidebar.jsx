// Sidebar.jsx
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
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Orders', href: '/orders', icon: ShoppingBagIcon },
  { name: 'Menu', href: '/menu', icon: ClipboardDocumentListIcon },
  { name: 'Inventory', href: '/inventory', icon: CubeIcon },
  { name: 'Staff', href: '/staff', icon: UserGroupIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Swiggy', href: '/swiggy', icon: SwatchIcon },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav className="mt-5 flex-1 space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon
                  className={`mr-3 h-6 w-6 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
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
  )
}
