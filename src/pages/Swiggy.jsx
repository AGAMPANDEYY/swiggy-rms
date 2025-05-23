import { useState } from 'react'
import {
  StarIcon,
  ChartBarIcon,
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  ClockIcon,
  UserGroupIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const restaurantProfile = {
  name: 'Spice Garden',
  rating: 4.5,
  totalRatings: 1250,
  deliveryTime: '30-35 min',
  minOrder: '₹100',
  deliveryFee: '₹40',
  address: '123, Main Street, Mumbai',
  phone: '+91 98765 43210',
  website: 'www.spicegarden.com',
  cuisine: ['North Indian', 'Chinese', 'Fast Food'],
  highlights: ['Pure Veg', 'Best Seller', 'Popular'],
  openingHours: {
    monday: '10:00 AM - 11:00 PM',
    tuesday: '10:00 AM - 11:00 PM',
    wednesday: '10:00 AM - 11:00 PM',
    thursday: '10:00 AM - 11:00 PM',
    friday: '10:00 AM - 11:00 PM',
    saturday: '10:00 AM - 11:00 PM',
    sunday: '10:00 AM - 11:00 PM',
  },
}

const performanceMetrics = [
  {
    name: 'Average Rating',
    value: '4.5',
    change: '+0.2',
    changeType: 'increase',
    icon: StarIcon,
  },
  {
    name: 'Order Acceptance Rate',
    value: '98%',
    change: '+2%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Average Delivery Time',
    value: '32 min',
    change: '-3 min',
    changeType: 'decrease',
    icon: ClockIcon,
  },
  {
    name: 'Customer Retention',
    value: '85%',
    change: '+5%',
    changeType: 'increase',
    icon: UserGroupIcon,
  },
]

const recentReviews = [
  {
    id: 1,
    customer: 'Rahul Sharma',
    rating: 5,
    comment: 'Amazing food and quick delivery! The butter chicken was perfect.',
    time: '2 days ago',
    orderItems: ['Butter Chicken', 'Naan', 'Coke'],
  },
  {
    id: 2,
    customer: 'Priya Patel',
    rating: 4,
    comment: 'Good food but delivery was a bit late. Will order again.',
    time: '3 days ago',
    orderItems: ['Paneer Butter Masala', 'Jeera Rice'],
  },
  {
    id: 3,
    customer: 'Amit Kumar',
    rating: 5,
    comment: 'Best biryani in town! Packaging was excellent.',
    time: '4 days ago',
    orderItems: ['Chicken Biryani', 'Raita'],
  },
]

const popularItems = [
  {
    name: 'Butter Chicken',
    orders: 234,
    rating: 4.8,
    price: '₹350',
    image: 'https://example.com/butter-chicken.jpg',
  },
  {
    name: 'Paneer Butter Masala',
    orders: 198,
    rating: 4.7,
    price: '₹320',
    image: 'https://example.com/paneer-butter-masala.jpg',
  },
  {
    name: 'Veg Biryani',
    orders: 156,
    rating: 4.6,
    price: '₹280',
    image: 'https://example.com/veg-biryani.jpg',
  },
]

export default function Swiggy() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div>
      {/* Restaurant Profile Header */}
      <div className="bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {restaurantProfile.name}
              </h1>
              <div className="mt-1 flex items-center space-x-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {restaurantProfile.rating} ({restaurantProfile.totalRatings} ratings)
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {restaurantProfile.deliveryTime} delivery
                </span>
                <span className="text-sm text-gray-600">
                  Min. ₹{restaurantProfile.minOrder}
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                <GlobeAltIcon className="mr-2 h-5 w-5" />
                View on Swiggy
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ChartBarIcon className="mr-2 h-5 w-5" />
                Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <div
            key={metric.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <metric.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {metric.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {metric.value}
              </p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  metric.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {metric.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Restaurant Details and Reviews */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Restaurant Details */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Restaurant Details
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-500">{restaurantProfile.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-500">{restaurantProfile.phone}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Cuisine</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {restaurantProfile.cuisine.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Highlights</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {restaurantProfile.highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Recent Reviews
            </h3>
            <div className="mt-6 space-y-6">
              {recentReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        {review.customer}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{review.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">Ordered: {review.orderItems.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Items */}
      <div className="mt-8">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Popular Items
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {popularItems.map((item) => (
                <div
                  key={item.name}
                  className="relative rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {item.orders} orders
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 