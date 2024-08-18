import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  )
}

export default App