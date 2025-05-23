import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ClockIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'

const stats = [
  {
    name: 'Total Revenue',
    value: '₹1,25,000',
    change: '+12.5%',
    changeType: 'increase',
    icon: CurrencyRupeeIcon,
  },
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+8.2%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Avg. Order Value',
    value: '₹1,015',
    change: '-2.3%',
    changeType: 'decrease',
    icon: CurrencyRupeeIcon,
  },
  {
    name: 'New Customers',
    value: '156',
    change: '+15.8%',
    changeType: 'increase',
    icon: UserGroupIcon,
  },
]

const quickActions = [
  { label: 'New Order', icon: ShoppingBagIcon },
  { label: 'Sync Menu', icon: ChartBarIcon },
  { label: 'Add Staff', icon: UserGroupIcon },
  { label: 'Inventory', icon: CurrencyRupeeIcon },
]

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Rahul Sharma',
    type: 'Dine-in',
    items: 3,
    total: '₹450',
    status: 'Completed',
    time: '5 min ago',
  },
  {
    id: 'ORD-002',
    customer: 'Priya Patel',
    type: 'Swiggy',
    items: 2,
    total: '₹320',
    status: 'Preparing',
    time: '12 min ago',
  },
  {
    id: 'ORD-003',
    customer: 'Amit Kumar',
    type: 'Takeaway',
    items: 4,
    total: '₹680',
    status: 'Ready',
    time: '15 min ago',
  },
]

const orderTypes = [
  { type: 'Dine-in', count: 45, revenue: '₹54,000' },
  { type: 'Takeaway', count: 28, revenue: '₹23,800' },
  { type: 'Swiggy', count: 15, revenue: '₹14,250' },
]

export default function Dashboard() {
  const [selectedStat, setSelectedStat] = useState(null)
  const { user, role } = useAuth()

  return (
    <div className="min-h-screen bg-swiggy-gray">
      {/* Hero Section */}
      <div className="relative bg-swiggy-orange pb-24 pt-10 px-4 md:px-12 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy Logo" className="h-10 w-10 rounded-full bg-white p-1" />
              <span className="text-white text-2xl font-bold tracking-tight">Swiggy Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Welcome{user ? `, ${user}` : ''}!<br />
              <span className="font-bold">Manage your restaurant like a pro.</span>
            </h1>
            <p className="text-lg text-orange-100 max-w-xl">
              All your orders, menu, staff, and analytics in one place. Quick actions below help you get started!
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {quickActions.map((action) => (
                <Button key={action.label} className="flex items-center gap-2 text-base font-semibold shadow-md" variant="primary">
                  <action.icon className="h-5 w-5" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://cdn.pixabay.com/photo/2017/01/20/15/06/food-1995056_1280.png" alt="Food Visual" className="h-48 w-auto rounded-2xl shadow-xl border-4 border-white object-cover" />
          </div>
        </div>
        {/* Floating Stat Cards */}
        <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-full max-w-5xl flex flex-col sm:flex-row gap-6 justify-center z-10">
          {stats.map((stat) => (
            <Card
              key={stat.name}
              className="flex-1 flex flex-col items-center gap-2 py-6 px-4 bg-white/95 shadow-xl border-0 hover:shadow-2xl cursor-pointer transition-all"
              onClick={() => setSelectedStat(stat)}
              style={{ minWidth: 180 }}
            >
              <span className="inline-flex items-center justify-center rounded-lg bg-swiggy-orange/10 p-3 mb-2">
                <stat.icon className="h-7 w-7 text-swiggy-orange" aria-hidden="true" />
              </span>
              <span className="text-3xl font-extrabold text-swiggy-black">{stat.value}</span>
              <span className="text-base font-medium text-gray-500">{stat.name}</span>
              <span
                className={`flex items-center text-xs font-semibold ${
                  stat.changeType === 'increase'
                    ? 'text-green-600'
                    : stat.changeType === 'decrease'
                    ? 'text-red-600'
                    : 'text-gray-500'
                }`}
              >
                {stat.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                )}
                {stat.change}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-36 pb-12 px-4 md:px-0">
        {selectedStat && (
          <Card className="mb-8">
            <h3 className="text-lg font-semibold text-swiggy-black mb-4">{selectedStat.name} Breakdown</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {Object.entries({
                DineIn: '₹75,000',
                Takeaway: '₹25,000',
                Swiggy: '₹25,000',
              }).map(([type, value]) => (
                <div key={type} className="rounded-lg bg-swiggy-card p-4 border border-swiggy-border">
                  <p className="text-sm font-medium text-gray-500 capitalize">{type}</p>
                  <p className="mt-1 text-xl font-semibold text-swiggy-black">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Orders */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-swiggy-black">Recent Orders</h3>
              <Button variant="secondary" className="text-xs">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="py-2 px-3 text-left font-semibold">Order ID</th>
                    <th className="py-2 px-3 text-left font-semibold">Type</th>
                    <th className="py-2 px-3 text-left font-semibold">Status</th>
                    <th className="py-2 px-3 text-left font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-swiggy-border last:border-0">
                      <td className="py-2 px-3 font-medium text-swiggy-black">{order.id}</td>
                      <td className="py-2 px-3">
                        <span
                          className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ${
                            order.type === 'Dine-in'
                              ? 'bg-blue-50 text-blue-700'
                              : order.type === 'Takeaway'
                              ? 'bg-purple-50 text-purple-700'
                              : 'bg-orange-50 text-orange-700'
                          }`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td className="py-2 px-3">
                        <span
                          className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ${
                            order.status === 'Completed'
                              ? 'bg-green-50 text-green-700'
                              : order.status === 'Preparing'
                              ? 'bg-yellow-50 text-yellow-700'
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-gray-500">{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Quick Links/Shortcuts */}
          <Card className="flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-swiggy-orange/10 to-white border-0">
            <h3 className="text-lg font-semibold text-swiggy-black mb-2">Quick Links</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary">Go to Orders</Button>
              <Button variant="primary">Go to Menu</Button>
              <Button variant="primary">Go to Staff</Button>
              <Button variant="primary">Go to Analytics</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 