import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
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
  TableCellsIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

// Common components and data
const quickActions = {
  owner: [
    { label: 'New Order', icon: ShoppingBagIcon },
    { label: 'Sync Menu', icon: ChartBarIcon },
    { label: 'Add Staff', icon: UserGroupIcon },
    { label: 'Inventory', icon: CurrencyRupeeIcon },
  ],
  manager: [
    { label: 'New Order', icon: ShoppingBagIcon },
    { label: 'Update Menu', icon: ChartBarIcon },
    { label: 'Staff Schedule', icon: UserGroupIcon },
    { label: 'Inventory', icon: CurrencyRupeeIcon },
  ],
  frontdesk: [
    { label: 'New Order', icon: ShoppingBagIcon },
    { label: 'Add Table', icon: TableCellsIcon },
    { label: 'Add Reservation', icon: ClockIcon },
    { label: 'View Orders', icon: ClipboardDocumentListIcon },
  ],
  kitchen: [
    { label: 'View Orders', icon: ClipboardDocumentListIcon },
    { label: 'Update Stock', icon: CurrencyRupeeIcon },
    { label: 'Mark Out-of-Stock', icon: ShoppingBagIcon },
  ],
  supplier: [
    { label: 'New PO', icon: ShoppingBagIcon },
    { label: 'View Schedule', icon: ClockIcon },
    { label: 'Update Stock', icon: CurrencyRupeeIcon },
  ],
  delivery: [
    { label: 'View Orders', icon: ClipboardDocumentListIcon },
    { label: 'Update Status', icon: TruckIcon },
    { label: 'View Performance', icon: ChartBarIcon },
  ],
}

function DashboardLayout({ children, role, stats, title, subtitle }) {
  const [selectedStat, setSelectedStat] = useState(null)
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-swiggy-gray">
      {/* Hero Section */}
      <div className="relative bg-swiggy-orange pb-32 pt-10 px-4 md:px-12 rounded-b-3xl shadow-lg mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy Logo" className="h-10 w-10 rounded-full bg-white p-1" />
              <span className="text-white text-2xl font-bold tracking-tight">{title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Welcome{user ? `, ${user}` : ''}!<br />
              <span className="font-bold">{subtitle}</span>
            </h1>
            <p className="text-lg text-orange-100 max-w-xl">
              {role === 'owner' && "All your orders, menu, staff, and analytics in one place. Quick actions below help you get started!"}
              {role === 'manager' && "Manage your restaurant operations efficiently. Quick actions below help you get started!"}
              {role === 'frontdesk' && "Handle customer orders and reservations smoothly. Quick actions below help you get started!"}
              {role === 'kitchen' && "Track and manage food preparation efficiently. Quick actions below help you get started!"}
              {role === 'supplier' && "Manage your supply chain and deliveries effectively. Quick actions below help you get started!"}
              {role === 'delivery' && "Track and manage your deliveries efficiently. Quick actions below help you get started!"}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {quickActions[role]?.map((action) => (
                <Button key={action.label} className="flex items-center gap-2 text-base font-semibold shadow-md" variant="primary">
                  <action.icon className="h-5 w-5" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="hidden md:block absolute -right-8 -top-10 z-10">
            <img 
              src="https://cdn.prod.website-files.com/65f2fadd2ed24c2442ad10ba/65fea553a11db0de2d1cb80b_mobile-apps-for-meal-prep-industry.webp" 
              alt="Food Visual" 
              className="h-[400px] w-auto object-contain transform -rotate-6"
            />
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
      <div className="max-w-7xl mx-auto pt-12 pb-12 px-4 md:px-6">
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
        {children}
      </div>
    </div>
  )
}

function OwnerDashboard() {
  const stats = [
    {
      name: 'Total Revenue',
      value: '₹2,50,000',
      change: '+12.5%',
      changeType: 'increase',
      icon: CurrencyRupeeIcon,
    },
    {
      name: 'Total Orders',
      value: '2,345',
      change: '+8.2%',
      changeType: 'increase',
      icon: ShoppingBagIcon,
    },
    {
      name: 'New Customers',
      value: '320',
      change: '+15.8%',
      changeType: 'increase',
      icon: UserGroupIcon,
    },
    {
      name: 'Active Staff',
      value: '18',
      change: '+5.2%',
      changeType: 'increase',
      icon: UserGroupIcon,
    },
  ]

  return (
    <DashboardLayout
      role="owner"
      stats={stats}
      title="Owner Dashboard"
      subtitle="Manage your restaurant like a pro."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Staff Overview */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Staff Overview</h3>
            <Button variant="secondary" className="text-xs">View Staff</Button>
          </div>
          <div className="text-gray-500 text-sm">18 active, 2 on leave, 1 new joiner</div>
        </Card>

        {/* Menu Management */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Menu Management</h3>
            <Button variant="secondary" className="text-xs">Go to Menu</Button>
          </div>
          <div className="text-gray-500 text-sm">Update items, prices, and availability</div>
        </Card>

        {/* Swiggy Integration */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Swiggy Integration</h3>
            <Button variant="secondary" className="text-xs">View Analytics</Button>
          </div>
          <div className="text-gray-500 text-sm">Orders: 156 | Revenue: ₹45,600 | Menu Synced</div>
        </Card>

        {/* Settings */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Settings & User Management</h3>
            <Button variant="secondary" className="text-xs">Manage Settings</Button>
          </div>
          <div className="text-gray-500 text-sm">Manage users, permissions, and restaurant settings</div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function ManagerDashboard() {
  const stats = [
    {
      name: 'Live Orders',
      value: '12',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Tables Occupied',
      value: '9/12',
      icon: TableCellsIcon,
    },
    {
      name: 'Staff Active',
      value: '8',
      icon: UserGroupIcon,
    },
    {
      name: 'Low Stock Items',
      value: '3',
      icon: CurrencyRupeeIcon,
    },
  ]

  return (
    <DashboardLayout
      role="manager"
      stats={stats}
      title="Manager Dashboard"
      subtitle="Manage your restaurant operations efficiently."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Live Orders */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Live Orders</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="space-y-2">
            {[
              { id: 'ORD-101', type: 'Dine-in', status: 'Preparing', table: 5, total: '₹850' },
              { id: 'ORD-102', type: 'Swiggy', status: 'Ready', table: null, total: '₹420' },
              { id: 'ORD-103', type: 'Takeaway', status: 'Preparing', table: null, total: '₹300' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between text-sm border-b last:border-0 py-2">
                <span className="font-medium text-swiggy-orange">{order.id}</span>
                <span>{order.type}</span>
                <span>{order.status}</span>
                <span>{order.table ? `Table ${order.table}` : '-'}</span>
                <span>{order.total}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Inventory Status */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Inventory Status</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { item: 'Chicken', qty: 5, unit: 'kg', alert: true },
              { item: 'Paneer', qty: 12, unit: 'kg', alert: false },
              { item: 'Rice', qty: 2, unit: 'kg', alert: true },
            ].map((inv) => (
              <div key={inv.item} className={`text-sm ${inv.alert ? 'text-red-500 font-semibold' : 'text-gray-600'}`}>
                {inv.item}: {inv.qty} {inv.unit} {inv.alert && '(Low!)'}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function FrontdeskDashboard() {
  const stats = [
    {
      name: 'Active Tables',
      value: '7/12',
      icon: TableCellsIcon,
    },
    {
      name: 'Total Guests',
      value: '28',
      icon: UserGroupIcon,
    },
    {
      name: 'Reservations',
      value: '5',
      icon: ClockIcon,
    },
    {
      name: 'Walk-ins',
      value: '3',
      icon: UserGroupIcon,
    },
  ]

  return (
    <DashboardLayout
      role="frontdesk"
      stats={stats}
      title="Frontdesk Dashboard"
      subtitle="Handle customer orders and reservations smoothly."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Table Management */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Table Management</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { number: 1, status: 'Occupied', guests: 4 },
              { number: 2, status: 'Available', guests: 0 },
              { number: 3, status: 'Reserved', guests: 0 },
              { number: 4, status: 'Occupied', guests: 2 },
              { number: 5, status: 'Available', guests: 0 },
            ].map((table) => (
              <div
                key={table.number}
                className={`text-sm px-2 py-1 rounded ${
                  table.status === 'Occupied'
                    ? 'bg-orange-100 text-swiggy-orange'
                    : table.status === 'Reserved'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Table {table.number}: {table.status} {table.guests ? `(${table.guests} guests)` : ''}
              </div>
            ))}
          </div>
        </Card>

        {/* Reservations */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Today's Reservations</h3>
            <Button variant="secondary" className="text-xs">Add New</Button>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Rahul Sharma', time: '7:00 PM', table: 3 },
              { name: 'Priya Patel', time: '8:30 PM', table: 6 },
            ].map((r, i) => (
              <div key={i} className="text-sm text-gray-600">
                {r.name} - {r.time} (Table {r.table})
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function KitchenDashboard() {
  const stats = [
    {
      name: 'Active Orders',
      value: '8',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Ready for Pickup',
      value: '3',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'Low Stock Items',
      value: '2',
      icon: CurrencyRupeeIcon,
    },
  ]

  return (
    <DashboardLayout
      role="kitchen"
      stats={stats}
      title="Kitchen Dashboard"
      subtitle="Track and manage food preparation efficiently."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Live Order Queue */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Live Order Queue</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="space-y-2">
            {[
              { id: 'ORD-201', items: ['Paneer Tikka', 'Naan'], status: 'Preparing', channel: 'Dine-in' },
              { id: 'ORD-202', items: ['Chicken Biryani'], status: 'Ready', channel: 'Swiggy' },
              { id: 'ORD-203', items: ['Veg Burger', 'Fries'], status: 'Preparing', channel: 'Takeaway' },
            ].map((order) => (
              <div key={order.id} className="flex flex-col md:flex-row md:items-center md:justify-between text-sm border-b last:border-0 py-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-swiggy-orange">{order.id}</span>
                  <span className="text-xs text-gray-500">({order.channel})</span>
                </div>
                <div className="flex-1 text-gray-700">{order.items.join(', ')}</div>
                <div className={`font-semibold ${order.status === 'Ready' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {order.status}
                </div>
                <Button className="text-xs px-2 py-1 ml-2">
                  {order.status === 'Ready' ? 'Mark Delivered' : 'Mark Ready'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Inventory Alerts */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Inventory Alerts</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { item: 'Chicken', qty: 3, unit: 'kg' },
              { item: 'Rice', qty: 1, unit: 'kg' },
            ].map((inv) => (
              <div key={inv.item} className="text-sm text-red-500 font-semibold">
                {inv.item}: {inv.qty} {inv.unit} (Low!)
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function SupplierDashboard() {
  const stats = [
    {
      name: 'Pending Orders',
      value: '3',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Today Deliveries',
      value: '2',
      icon: TruckIcon,
    },
    {
      name: 'On-Time Rate',
      value: '96%',
      icon: ClockIcon,
    },
  ]

  return (
    <DashboardLayout
      role="supplier"
      stats={stats}
      title="Supplier Dashboard"
      subtitle="Manage your supply chain and deliveries effectively."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Pending Purchase Orders */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Pending Purchase Orders</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="space-y-2">
            {[
              { id: 'PO-301', item: 'Chicken', qty: 10, unit: 'kg', status: 'Pending', eta: 'Tomorrow' },
              { id: 'PO-302', item: 'Paneer', qty: 5, unit: 'kg', status: 'Delivered', eta: 'Today' },
              { id: 'PO-303', item: 'Rice', qty: 20, unit: 'kg', status: 'Pending', eta: '2 days' },
            ].filter(po => po.status === 'Pending').map((po) => (
              <div key={po.id} className="flex items-center justify-between text-sm border-b last:border-0 py-2">
                <span className="font-medium text-swiggy-orange">{po.id}</span>
                <span>{po.item}</span>
                <span>{po.qty} {po.unit}</span>
                <span className="text-gray-500">ETA: {po.eta}</span>
                <Button className="text-xs px-2 py-1">Mark Received</Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Delivery Schedule */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Delivery Schedule</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="space-y-2">
            {[
              { date: 'Today', items: ['Paneer', 'Spices'] },
              { date: 'Tomorrow', items: ['Chicken', 'Oil'] },
            ].map((d, i) => (
              <div key={i} className="text-sm text-gray-600">
                {d.date}: {d.items.join(', ')}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

function DeliveryDashboard() {
  const stats = [
    {
      name: 'Assigned Orders',
      value: '2',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Delivered Today',
      value: '18',
      icon: TruckIcon,
    },
    {
      name: 'On-Time Rate',
      value: '94%',
      icon: ClockIcon,
    },
  ]

  return (
    <DashboardLayout
      role="delivery"
      stats={stats}
      title="Delivery Dashboard"
      subtitle="Track and manage your deliveries efficiently."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Assigned Deliveries */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Assigned Deliveries</h3>
            <Button variant="secondary" className="text-xs">View All</Button>
          </div>
          <div className="space-y-2">
            {[
              { id: 'ORD-401', customer: 'Rahul Sharma', address: '123 Main St', status: 'Picked Up', eta: '10 min', amount: '₹450' },
              { id: 'ORD-402', customer: 'Priya Patel', address: '456 Park Ave', status: 'Assigned', eta: '20 min', amount: '₹320' },
            ].map((order) => (
              <div key={order.id} className="flex flex-col md:flex-row md:items-center md:justify-between text-sm border-b last:border-0 py-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-swiggy-orange">{order.id}</span>
                  <span className="text-xs text-gray-500">({order.amount})</span>
                </div>
                <div className="flex-1 text-gray-700">{order.customer} - {order.address}</div>
                <div className={`font-semibold ${order.status === 'Picked Up' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {order.status}
                </div>
                <span className="ml-2 text-xs text-gray-500">ETA: {order.eta}</span>
                <Button className="text-xs px-2 py-1 ml-2">
                  {order.status === 'Picked Up' ? 'Mark Delivered' : 'Mark Picked Up'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-swiggy-black">Performance Metrics</h3>
            <Button variant="secondary" className="text-xs">View Details</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Delivered Today', value: '18' },
              { label: 'On-Time Rate', value: '94%' },
              { label: 'Avg. Time', value: '28 min' },
              { label: 'Rating', value: '4.7' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-lg bg-swiggy-card p-4 border border-swiggy-border">
                <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                <p className="mt-1 text-xl font-semibold text-swiggy-black">{metric.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function RoleDashboardRouter() {
  const { role } = useAuth()
  switch (role) {
    case 'owner':
      return <OwnerDashboard />
    case 'manager':
      return <ManagerDashboard />
    case 'frontdesk':
      return <FrontdeskDashboard />
    case 'kitchen':
      return <KitchenDashboard />
    case 'supplier':
      return <SupplierDashboard />
    case 'delivery':
      return <DeliveryDashboard />
    default:
      return <div className="p-8 text-center text-swiggy-orange">No dashboard available for this role.</div>
  }
} 