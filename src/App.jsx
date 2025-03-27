import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contect'
import Journey from './Pages/Jurny'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
      </div>
     
    </>
  )
}

export default App
