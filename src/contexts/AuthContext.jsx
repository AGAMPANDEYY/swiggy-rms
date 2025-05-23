import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedRole = localStorage.getItem('role')
    if (storedUser) setUser(storedUser)
    if (storedRole) setRole(storedRole)
  }, [])

  const login = (username) => {
    setUser(username)
    localStorage.setItem('user', username)
  }

  const selectRole = (role) => {
    setRole(role)
    localStorage.setItem('role', role)
  }

  const logout = () => {
    setUser(null)
    setRole(null)
    localStorage.removeItem('user')
    localStorage.removeItem('role')
  }

  return (
    <AuthContext.Provider value={{ user, role, login, selectRole, logout }}>
      {children}
    </AuthContext.Provider>
  )
} 