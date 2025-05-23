import { useState } from 'react'
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

const orders = [
  {
    id: 1,
    orderNumber: 'ORD-001',
    customer: 'Rahul Sharma',
    items: [
      { name: 'Butter Chicken', quantity: 1, price: '₹350' },
      { name: 'Naan', quantity: 2, price: '₹60' },
      { name: 'Coke', quantity: 1, price: '₹50' },
    ],
    total: '₹520',
    status: 'Preparing',
    time: '5m ago',
    type: 'Dine-in',
    table: 'T12',
  },
  {
    id: 2,
    orderNumber: 'ORD-002',
    customer: 'Priya Patel',
    items: [
      { name: 'Veg Biryani', quantity: 1, price: '₹250' },
      { name: 'Raita', quantity: 1, price: '₹40' },
    ],
    total: '₹290',
    status: 'Ready for Pickup',
    time: '12m ago',
    type: 'Takeaway',
  },
  {
    id: 3,
    orderNumber: 'ORD-003',
    customer: 'Amit Kumar',
    items: [
      { name: 'Chicken Tikka', quantity: 1, price: '₹300' },
      { name: 'Butter Naan', quantity: 2, price: '₹70' },
      { name: 'Masala Chai', quantity: 2, price: '₹40' },
    ],
    total: '₹450',
    status: 'Delivered',
    time: '25m ago',
    type: 'Delivery',
    address: '123 Main St, City',
  },
]

const statusColors = {
  'Preparing': 'bg-blue-50 text-blue-700',
  'Ready for Pickup': 'bg-yellow-50 text-yellow-700',
  'Delivered': 'bg-green-50 text-green-700',
  'Cancelled': 'bg-red-50 text-red-700',
}

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null)

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all orders including their details and current status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            New Order
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Order
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
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total
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
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {order.orderNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.customer}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.type}
                        {order.table && (
                          <span className="ml-2 text-xs text-gray-400">
                            ({order.table})
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.total}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                            statusColors[order.status]
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.time}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setSelectedOrder(null)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Order Details - {selectedOrder.orderNumber}
                  </h3>
                  <div className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Customer Information
                        </h4>
                        <p className="mt-1 text-sm text-gray-900">
                          {selectedOrder.customer}
                        </p>
                        {selectedOrder.address && (
                          <p className="mt-1 text-sm text-gray-500">
                            {selectedOrder.address}
                          </p>
                        )}
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Order Items
                        </h4>
                        <ul className="mt-2 divide-y divide-gray-200">
                          {selectedOrder.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between py-2"
                            >
                              <div className="flex items-center">
                                <span className="text-sm text-gray-900">
                                  {item.quantity}x {item.name}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between border-t border-gray-200 pt-4">
                        <span className="text-base font-medium text-gray-900">
                          Total
                        </span>
                        <span className="text-base font-medium text-gray-900">
                          {selectedOrder.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  onClick={() => setSelectedOrder(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                >
                  Print Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 