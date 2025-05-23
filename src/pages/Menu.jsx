import { useState } from 'react'
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 1,
    name: 'Starters',
    items: [
      {
        id: 1,
        name: 'Veg Spring Roll',
        description: 'Crispy rolls filled with mixed vegetables',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isVegetarian: true,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in spices and grilled',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isVegetarian: false,
        isAvailable: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Main Course',
    items: [
      {
        id: 3,
        name: 'Butter Chicken',
        description: 'Tender chicken in a rich, creamy tomato gravy',
        price: '₹350',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isVegetarian: false,
        isAvailable: true,
      },
      {
        id: 4,
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese in a rich, creamy tomato gravy',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isVegetarian: true,
        isAvailable: true,
      },
    ],
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Menu</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your restaurant's menu items and categories.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a category
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={selectedCategory.id}
            onChange={(e) =>
              setSelectedCategory(
                categories.find((cat) => cat.id === parseInt(e.target.value))
              )
            }
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                    ${
                      selectedCategory.id === category.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {selectedCategory.items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-48">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <span aria-hidden="true" className="absolute inset-0" />
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="mt-1 flex items-center">
                <span className="text-sm font-medium text-gray-900">
                  {item.price}
                </span>
                <span
                  className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.isVegetarian
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                </span>
                <span
                  className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.isAvailable ? 'Available' : 'Not Available'}
                </span>
              </div>
            </div>
            <div className="flex border-t border-gray-200">
              <button
                type="button"
                className="flex-1 bg-white py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setSelectedItem(item)}
              >
                <PencilIcon className="mx-auto h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Edit</span>
              </button>
              <button
                type="button"
                className="flex-1 border-l border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <TrashIcon className="mx-auto h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Item Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setSelectedItem(null)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Edit Menu Item
                  </h3>
                  <div className="mt-4">
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedItem.name}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedItem.description}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedItem.price}
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="isVegetarian"
                          id="isVegetarian"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={selectedItem.isVegetarian}
                        />
                        <label
                          htmlFor="isVegetarian"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Vegetarian
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="isAvailable"
                          id="isAvailable"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={selectedItem.isAvailable}
                        />
                        <label
                          htmlFor="isAvailable"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Available
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  onClick={() => setSelectedItem(null)}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                  onClick={() => setSelectedItem(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 