import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Pages from './Components/Pages/Pages'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Company from './Components/Company/Company'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App