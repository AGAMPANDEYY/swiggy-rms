import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

const orderStatuses = [
  { id: 'new', label: 'New Orders', color: 'bg-blue-100 text-blue-700' },
  { id: 'preparing', label: 'Preparing', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'ready', label: 'Ready', color: 'bg-green-100 text-green-700' },
  { id: 'completed', label: 'Completed', color: 'bg-gray-100 text-gray-700' },
]

const sampleOrders = [
  {
    id: 'ORD-101',
    items: [
      { name: 'Paneer Tikka', quantity: 2, notes: 'Extra spicy' },
      { name: 'Butter Naan', quantity: 4 },
      { name: 'Jeera Rice', quantity: 1 },
    ],
    type: 'Dine-in',
    table: 5,
    time: '12:30 PM',
    status: 'new',
    timer: '00:00',
  },
  {
    id: 'ORD-102',
    items: [
      { name: 'Chicken Biryani', quantity: 1, notes: 'No onion' },
      { name: 'Raita', quantity: 1 },
    ],
    type: 'Swiggy',
    time: '12:35 PM',
    status: 'preparing',
    timer: '05:30',
  },
  {
    id: 'ORD-103',
    items: [
      { name: 'Veg Burger', quantity: 2 },
      { name: 'French Fries', quantity: 1 },
      { name: 'Coke', quantity: 2 },
    ],
    type: 'Takeaway',
    time: '12:40 PM',
    status: 'ready',
    timer: '08:45',
  },
]

export default function KDS() {
  const [selectedStatus, setSelectedStatus] = useState('new')
  const [orders, setOrders] = useState(sampleOrders)

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new':
        return <BellIcon className="h-5 w-5 text-blue-500" />
      case 'preparing':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />
      case 'ready':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-gray-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-swiggy-gray p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-swiggy-black">Kitchen Display System</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowPathIcon className="h-5 w-5" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {orderStatuses.map(status => (
            <Button
              key={status.id}
              variant={selectedStatus === status.id ? "primary" : "outline"}
              className={`flex items-center gap-2 whitespace-nowrap ${status.color}`}
              onClick={() => setSelectedStatus(status.id)}
            >
              {getStatusIcon(status.id)}
              {status.label}
            </Button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders
            .filter(order => order.status === selectedStatus)
            .map(order => (
              <Card key={order.id} className="overflow-hidden">
                <div className="p-4 border-b border-swiggy-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-swiggy-black">{order.id}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{order.type}</span>
                        {order.table && <span>• Table {order.table}</span>}
                        <span>• {order.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{order.timer}</span>
                      {getStatusIcon(order.status)}
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-sm text-gray-500">× {item.quantity}</span>
                        </div>
                        {item.notes && (
                          <p className="text-sm text-red-500 mt-1">{item.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-swiggy-border bg-gray-50">
                  <div className="flex gap-2">
                    {order.status === 'new' && (
                      <Button
                        className="flex-1"
                        onClick={() => updateOrderStatus(order.id, 'preparing')}
                      >
                        Start Preparing
                      </Button>
                    )}
                    {order.status === 'preparing' && (
                      <Button
                        className="flex-1"
                        onClick={() => updateOrderStatus(order.id, 'ready')}
                      >
                        Mark Ready
                      </Button>
                    )}
                    {order.status === 'ready' && (
                      <Button
                        className="flex-1"
                        onClick={() => updateOrderStatus(order.id, 'completed')}
                      >
                        Complete Order
                      </Button>
                    )}
                    {order.status === 'completed' && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => updateOrderStatus(order.id, 'new')}
                      >
                        Reopen Order
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
} 