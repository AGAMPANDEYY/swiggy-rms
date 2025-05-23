import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const favoriteItems = [
  {
    name: 'Watermelon Juice',
    sales: 2441,
    percent: 75,
    img: 'https://images.unsplash.com/photo-1582719478185-73d4b4a1eb4c?w=60&h=60&fit=crop',
    rating: 4.8,
    reviews: 64,
  },
  {
    name: 'Mozzarella Pizza',
    sales: 3515,
    percent: 85,
    img: 'https://images.unsplash.com/photo-1601924582975-4cc5c2339fbd?w=60&h=60&fit=crop',
    rating: 4.7,
    reviews: 54,
  },
  {
    name: 'Spicy Pizza',
    sales: 2441,
    percent: 52,
    img: 'https://images.unsplash.com/photo-1594007654729-e4b9d6837f7d?w=60&h=60&fit=crop',
    rating: 4.6,
    reviews: 44,
  },
]

const trendingMenus = [
  { name: 'Spaghetti Italiano', price: '$5.6', orders: 89, img: 'data:image/jpeg;base64,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' },
  { name: 'Watermelon Juice', price: '$5.6', orders: 82, img: 'https://images.unsplash.com/photo-1582719478185-73d4b4a1eb4c?w=60&h=60&fit=crop' },
  { name: 'Chicken Curry', price: '$5.6', orders: 80, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=60&h=60&fit=crop' },
  { name: 'Pizza With Garlic', price: '$5.6', orders: 78, img: 'https://images.unsplash.com/photo-1601924582975-4cc5c2339fbd?w=60&h=60&fit=crop' },
  { name: 'Tuno Soup', price: '$5.6', orders: 76, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=60&h=60&fit=crop' },
]

const mostSellingItems = [
  { name: 'Spaghetti Italiano', price: '$12.56', serve: '4 Person', time: '26mins', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=60&h=60&fit=crop' },
  { name: 'Kids Pizza', price: '$5.67', serve: '2 Person', time: '24mins', img: 'https://images.unsplash.com/photo-1601924582975-4cc5c2339fbd?w=60&h=60&fit=crop' },
  { name: 'Pizza with Kemangi Leaf', price: '$11.21', serve: '4 Person', time: '26mins', img: 'https://images.unsplash.com/photo-1594007654729-e4b9d6837f7d?w=60&h=60&fit=crop' },
  { name: 'Tuno Soup', price: '$8.15', serve: '4 Person', time: '24mins', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=60&h=60&fit=crop' },
  { name: 'Watermelon Juice', price: '$5.6', serve: '4 Person', time: '26mins', img: 'https://images.unsplash.com/photo-1582719478185-73d4b4a1eb4c?w=60&h=60&fit=crop' },
]

const chartOrders = [60, 80, 40, 90, 70, 100, 80, 120, 90, 110, 80, 130]

function SimpleLineChart({ data }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / (max - min)) * 80 - 10}`).join(' ')
  return (
    <svg viewBox="0 0 100 100" className="w-full h-24">
      <polyline
        fill="none"
        stroke="#f472b6"
        strokeWidth="3"
        points={points}
      />
    </svg>
  )
}

function RatingStars({ rating }) {
  return (
    <div className="flex text-yellow-500 text-xs">
      {[...Array(Math.round(rating))].map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  )
}

export default function Analytics() {
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('Weekly')

  return (
    <div className="min-h-screen bg-swiggy-gray p-6 md:p-10">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-swiggy-orange">Analytics</h1>
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 md:mt-0 px-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Most Favorites Items */}
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Most Favorite Items</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {favoriteItems
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 bg-gradient-to-r from-orange-100 to-orange-200 p-4 rounded-xl"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 truncate text-sm">{item.name}</h3>
                    <RatingStars rating={item.rating} />
                    <p className="text-xs text-gray-500">
                      {item.sales} Sales • {item.reviews} Reviews
                    </p>
                    <div className="w-full bg-orange-200 h-2 rounded-full mt-2">
                      <div
                        className="h-2 bg-orange-500 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-orange-600">{item.percent}%</span>
                </div>
              ))}
          </div>
        </div>

        {/* Trending Menus */}
        <div className="bg-white shadow rounded-2xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Trending Menus</h2>
          <div className="space-y-3">
            {trendingMenus.map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="text-lg font-bold text-swiggy-orange">#{i + 1}</span>
                <img src={item.img} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm truncate">{item.name}</div>
                  <div className="text-xs text-gray-400">Order {item.orders}x</div>
                </div>
                <div className="font-semibold text-swiggy-orange">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Selling Items */}
        <div className="rounded-2xl bg-white shadow p-6 flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Most Selling Items</h2>
          <div className="space-y-3">
            {mostSellingItems.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <img src={item.img} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm truncate">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.serve} • {item.time}</div>
                </div>
                <div className="font-semibold text-swiggy-orange">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Orders */}
        <div className="bg-white shadow rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-700">Order Trends</h2>
            <div className="flex gap-2">
              {['Monthly', 'Weekly', 'Today'].map((t) => (
                <button
                  key={t}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${tab === t ? 'bg-swiggy-orange text-white' : 'bg-gray-100 text-gray-500'}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="text-2xl font-bold mb-2">257K | 1,245 Avg. Sales per day</div>
          <SimpleLineChart data={chartOrders} />
        </div>
      </div>
    </div>
  )
}