import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App