import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'

import Login from './pages/Login'
import Register from './pages/Register'
import Adminhome from './pages/Adminhome'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route path= '/home' element={<Home/>}/>
        <Route path='/men' element={<Category/>}/>
        <Route path='/women' element={<Category/>}/>
        <Route path='/kids' element={<Category/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Adminhome' element={<Adminhome/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/success' element={<Success/>}/>

        
      </Routes>
    </>
  )
}

export default App
