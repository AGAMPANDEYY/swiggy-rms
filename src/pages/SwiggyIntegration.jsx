import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import {
  ArrowPathIcon,
  ChartBarIcon,
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

const swiggyStats = [
  {
    name: 'Swiggy Orders',
    value: '156',
    change: '+12.5%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Swiggy Revenue',
    value: '₹45,600',
    change: '+8.2%',
    changeType: 'increase',
    icon: CurrencyRupeeIcon,
  },
  {
    name: 'Avg. Delivery Time',
    value: '32 min',
    change: '-2.3%',
    changeType: 'decrease',
    icon: ClockIcon,
  },
  {
    name: 'Menu Sync Status',
    value: 'Synced',
    change: '2 min ago',
    changeType: 'neutral',
    icon: CheckCircleIcon,
  },
]

const recentSwiggyOrders = [
  {
    id: 'SWG-001',
    customer: 'Rahul Sharma',
    items: 3,
    total: '₹450',
    status: 'Preparing',
    time: '5 min ago',
    deliveryAddress: '123, Main Street, Mumbai',
  },
  {
    id: 'SWG-002',
    customer: 'Priya Patel',
    items: 2,
    total: '₹320',
    status: 'Ready for Pickup',
    time: '12 min ago',
    deliveryAddress: '456, Park Avenue, Mumbai',
  },
  {
    id: 'SWG-003',
    customer: 'Amit Kumar',
    items: 4,
    total: '₹680',
    status: 'Out for Delivery',
    time: '15 min ago',
    deliveryAddress: '789, Lake View, Mumbai',
  },
]

const menuSyncStatus = [
  {
    category: 'Starters',
    items: 12,
    lastSynced: '2 min ago',
    status: 'Synced',
  },
  {
    category: 'Main Course',
    items: 24,
    lastSynced: '2 min ago',
    status: 'Synced',
  },
  {
    category: 'Beverages',
    items: 8,
    lastSynced: '5 min ago',
    status: 'Synced',
  },
  {
    category: 'Desserts',
    items: 6,
    lastSynced: '2 min ago',
    status: 'Synced',
  },
]

export default function SwiggyIntegration() {
  const [isSyncing, setIsSyncing] = useState(false)
  const { role } = useAuth()

  const handleSync = () => {
    setIsSyncing(true)
    setTimeout(() => setIsSyncing(false), 2000)
  }

  // Role-based feature flags
  const isAdmin = role === 'owner' || role === 'manager'
  const isKitchen = role === 'kitchen'
  const isFrontdesk = role === 'frontdesk'
  const isSupplierOrDelivery = role === 'supplier' || role === 'delivery'

  if (isSupplierOrDelivery) {
    return (
      <div className="p-8 text-center text-swiggy-orange">
        No Swiggy integration features available for your role.
      </div>
    )
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Swiggy Integration
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            {isAdmin && 'Manage your Swiggy orders, menu synchronization, and delivery analytics.'}
            {isKitchen && 'View and manage live Swiggy orders and mark items out-of-stock.'}
            {isFrontdesk && 'View Swiggy order queue and live dining status.'}
          </p>
        </div>
        {isAdmin && (
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none space-x-4">
            <button
              type="button"
              onClick={handleSync}
              disabled={isSyncing}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <ArrowPathIcon
                className={`mr-2 h-5 w-5 ${isSyncing ? 'animate-spin' : ''}`}
              />
              {isSyncing ? 'Syncing...' : 'Sync Now'}
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ChartBarIcon className="mr-2 h-5 w-5" />
              View Analytics
            </button>
          </div>
        )}
      </div>

      {/* Stats for Admin/Manager */}
      {isAdmin && (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {swiggyStats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : stat.changeType === 'decrease'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>
      )}

      {/* Live Orders for Admin/Manager/Kitchen/Frontdesk */}
      {(isAdmin || isKitchen || isFrontdesk) && (
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Swiggy Orders */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Recent Swiggy Orders
              </h3>
              <div className="mt-6 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            Order ID
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Customer
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentSwiggyOrders.map((order) => (
                          <tr key={order.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                              {order.id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {order.customer}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span
                                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                                  order.status === 'Preparing'
                                    ? 'bg-yellow-50 text-yellow-700'
                                    : order.status === 'Ready for Pickup'
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'bg-green-50 text-green-700'
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {order.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Sync Status for Admin/Manager */}
          {isAdmin && (
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Menu Sync Status
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Items
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Last Synced
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {menuSyncStatus.map((category) => (
                            <tr key={category.category}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {category.category}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {category.items}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {category.lastSynced}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                                  <CheckCircleIcon className="mr-1 h-4 w-4" />
                                  {category.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Actions for Admin/Manager */}
      {isAdmin && (
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">Update Menu</button>
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">Update Prices</button>
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">Sync Menu</button>
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">Promotions</button>
        </div>
      )}

      {/* Kitchen Quick Actions */}
      {isKitchen && (
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">Mark Item Out-of-Stock</button>
          <button className="bg-swiggy-orange text-white rounded-md px-4 py-2 font-semibold hover:bg-orange-600 transition">View Inventory</button>
        </div>
      )}

      {/* Live Dining Status for Admin/Manager/Frontdesk */}
      {(isAdmin || isFrontdesk) && (
        <div className="mt-8">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Live Dining Status
              </h3>
              <div className="mt-4 text-gray-600 text-sm">Guests: <span className="font-bold text-swiggy-orange">32</span> | Tables: 10/12 occupied</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 