import { useState } from 'react'
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

const staff = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Chef',
    email: 'rajesh.kumar@restaurant.com',
    phone: '+91 98765 43210',
    joiningDate: '2023-01-15',
    salary: '₹45,000',
    status: 'Active',
    schedule: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Off',
      sunday: 'Off',
    },
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Server',
    email: 'priya.sharma@restaurant.com',
    phone: '+91 98765 43211',
    joiningDate: '2023-03-20',
    salary: '₹25,000',
    status: 'Active',
    schedule: {
      monday: '12:00 PM - 9:00 PM',
      tuesday: '12:00 PM - 9:00 PM',
      wednesday: 'Off',
      thursday: '12:00 PM - 9:00 PM',
      friday: '12:00 PM - 9:00 PM',
      saturday: '12:00 PM - 9:00 PM',
      sunday: '12:00 PM - 9:00 PM',
    },
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Kitchen Helper',
    email: 'amit.patel@restaurant.com',
    phone: '+91 98765 43212',
    joiningDate: '2023-06-10',
    salary: '₹20,000',
    status: 'On Leave',
    schedule: {
      monday: '8:00 AM - 4:00 PM',
      tuesday: '8:00 AM - 4:00 PM',
      wednesday: '8:00 AM - 4:00 PM',
      thursday: '8:00 AM - 4:00 PM',
      friday: '8:00 AM - 4:00 PM',
      saturday: 'Off',
      sunday: 'Off',
    },
  },
]

const roles = ['Chef', 'Server', 'Kitchen Helper', 'Manager', 'Cashier']

export default function Staff() {
  const [selectedStaff, setSelectedStaff] = useState(null)
  const [selectedRole, setSelectedRole] = useState('All')

  const filteredStaff =
    selectedRole === 'All'
      ? staff
      : staff.filter((employee) => employee.role === selectedRole)

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Staff</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your restaurant's staff and their schedules.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Staff
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a role
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="All">All Roles</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setSelectedRole('All')}
                className={`
                  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                  ${
                    selectedRole === 'All'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }
                `}
              >
                All Roles
              </button>
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                    ${
                      selectedRole === role
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }
                  `}
                >
                  {role}
                </button>
              ))}
            </nav>
          </div>
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Contact
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
                      Schedule
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
                  {filteredStaff.map((employee) => (
                    <tr
                      key={employee.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedStaff(employee)}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <UserCircleIcon
                              className="h-10 w-10 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {employee.name}
                            </div>
                            <div className="text-gray-500">{employee.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {employee.role}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {employee.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                            employee.status === 'Active'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-yellow-50 text-yellow-700'
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          type="button"
                          className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
                        >
                          <ClockIcon
                            className="mr-1.5 h-5 w-5"
                            aria-hidden="true"
                          />
                          View Schedule
                        </button>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
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

      {/* Edit Staff Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setSelectedStaff(null)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Edit Staff Member
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
                          defaultValue={selectedStaff.name}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedStaff.role}
                        >
                          {roles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedStaff.email}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedStaff.phone}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="salary"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Salary
                        </label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedStaff.salary}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="status"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={selectedStaff.status}
                        >
                          <option value="Active">Active</option>
                          <option value="On Leave">On Leave</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  onClick={() => setSelectedStaff(null)}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                  onClick={() => setSelectedStaff(null)}
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