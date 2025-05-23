import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Card } from '@/components/ui/card'

const roles = [
  {
    key: 'owner',
    label: 'Owner/Admin',
    desc: 'Full access to all features and analytics.',
    icon: '👑',
    bgColor: 'bg-amber-50',
    iconColor: 'bg-amber-100',
    borderColor: 'border-amber-200',
  },
  {
    key: 'manager',
    label: 'Manager',
    desc: 'Manage orders, inventory, staff, and menu.',
    icon: '🧑‍💼',
    bgColor: 'bg-blue-50',
    iconColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    key: 'frontdesk',
    label: 'Frontdesk',
    desc: 'Table management, reservations, walk-ins.',
    icon: '💁‍♂️',
    bgColor: 'bg-green-50',
    iconColor: 'bg-green-100',
    borderColor: 'border-green-200',
  },
  {
    key: 'kitchen',
    label: 'Kitchen',
    desc: 'Live orders, preparation, inventory alerts.',
    icon: '👨‍🍳',
    bgColor: 'bg-red-50',
    iconColor: 'bg-red-100',
    borderColor: 'border-red-200',
  },
  {
    key: 'supplier',
    label: 'Supplier',
    desc: 'Purchase orders, delivery schedules.',
    icon: '🚚',
    bgColor: 'bg-purple-50',
    iconColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
  },
  {
    key: 'delivery',
    label: 'Delivery Agent',
    desc: 'Assigned deliveries, live order status.',
    icon: '🛵',
    bgColor: 'bg-teal-50',
    iconColor: 'bg-teal-100',
    borderColor: 'border-teal-200',
  },
]

export default function RoleSelect() {
  const { selectRole } = useAuth()
  const navigate = useNavigate()

  const handleSelect = (role) => {
    selectRole(role)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Orange Header Section */}
      <div className="bg-swiggy-orange py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
              alt="Swiggy Logo"
              className="h-16 md:h-20"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Role
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your role to access the features and tools designed specifically for your responsibilities
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card
                key={role.key}
                className={`group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 ${role.borderColor} ${role.bgColor}`}
                onClick={() => handleSelect(role.key)}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${role.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{role.icon}</span>
                  </div>
                  
                  {/* Role Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {role.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {role.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Indicator */}
                <div className="h-1 w-full bg-swiggy-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Card>
            ))}
          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <a
              href="/login"
              className="inline-flex items-center text-swiggy-orange hover:text-swiggy-orange-dark font-medium space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 