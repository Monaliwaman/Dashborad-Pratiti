import React from 'react'
import { Redirect } from 'react-router-dom'
import Vendor from '../pages/Vendor'
import Dashboard from '../pages/Dashboard'
import Asset from '../pages/Asset'
import Assignment from '../pages/Assignment'
import Employee from '../pages/Employee'
import User from '../pages/User'
const authProtectedRoutes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/Vendor', component: Vendor },
  { path: '/asset', component: Asset },
  { path: '/employee', component: Employee },
  { path: '/assignment', component: Assignment },
  { path: '/user', component: User },
  { path: '/*', exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: '/*', exact: true, component: () => <Redirect to="/dashboard" /> },
]

export { authProtectedRoutes, publicRoutes }
