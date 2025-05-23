import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim()) {
      setError('Please enter your username')
      return
    }
    login(username)
    navigate('/select-role')
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-swiggy-orange clip-path-diagonal hidden lg:block" />
      
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 bg-white relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <img
              src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
              alt="Swiggy Logo"
              className="h-20 md:h-24 mx-auto mb-8 transform hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-3xl font-bold text-swiggy-black mb-2">Welcome back!</h1>
            <p className="text-gray-500">Sign in to manage your restaurant</p>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full text-base py-3 hover:scale-[1.02] transform transition-transform duration-200">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-swiggy-orange hover:text-swiggy-orange-dark transition-colors">
                Forgot your password?
              </a>
            </div>
          </Card>

          <p className="text-center mt-8 text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="text-swiggy-orange hover:text-swiggy-orange-dark font-medium transition-colors">
              Contact Swiggy Support
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Image and Text */}
      <div className="hidden lg:flex lg:w-[55%] items-center justify-center p-12 relative z-10">
        <div className="max-w-2xl text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-swiggy-orange/20 rounded-[2.5rem] rotate-6 transform" />
            <img
              src="https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg"
              alt="Restaurant Management"
              className="w-full max-w-xl mx-auto rounded-[2rem] shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Manage Your Restaurant Like Never Before
          </h2>
          <p className="text-white/90 text-lg max-w-md mx-auto leading-relaxed">
            Access all your orders, menu, staff, and analytics in one place with our powerful dashboard
          </p>
        </div>
      </div>

      {/* Mobile Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-swiggy-orange/10 to-transparent lg:hidden" />
    </div>
  )
}

// Add this to your global CSS or tailwind.config.js
// .clip-path-diagonal {
//   clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
// } 