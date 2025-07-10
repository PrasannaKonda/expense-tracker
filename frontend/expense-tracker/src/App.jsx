import React,{lazy,Suspense} from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
//import Home from './pages/Dashboard/Home'
const Home = lazy(()=>import('./pages/Dashboard/Home'))
//import Income from './pages/Dashboard/Income'
const Income = lazy(()=>import('./pages/Dashboard/Income'))
//import Expense from './pages/Dashboard/Expense'
const Expense = lazy(()=>import('./pages/Dashboard/Expense'))
import {UserProvider} from './context/UserContext'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <UserProvider>
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          {/* <Route path='/dashboard' element={<Home />} /> */}
          <Route path='/dashboard' element={<Suspense fallback={<div>Loading Dashboard...</div>}><Home /></Suspense>} />
          {/* <Route path='/income' element={<Income />} /> */}
          <Route path='/income' element={<Suspense fallback={<div>Loading Income...</div>}><Income /></Suspense>} />
          {/* <Route path='/expense' element={<Expense />} /> */}
          <Route path='/expense' element={<Suspense fallback={<div>Loading Expense...</div>}><Expense /></Suspense>} />
        </Routes>
      </Router>
    </div>
    <Toaster 
      toastOptions={{
        className:"",
        style:{
          fontSize:'13px'
        },
      }}
    />
    </UserProvider>
  )
}

export default App

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  // redirected to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to='/dashboard' />
  ) : (
    <Navigate to='/login' />
  );
}