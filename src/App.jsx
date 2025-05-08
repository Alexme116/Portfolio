import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function App() {
  const [language, setLanguage] = useState("EN")

  return (
    <div className='w-svw h-svh flex flex-col'>
      {/* NavBar */}
      <NavBar language={language} setLanguage={setLanguage} />

      {/* Displays */}
      <div className='flex-1 overflow-auto'>
        <Routes>
          <Route path="/" element={<Home language={language} />}/>
          <Route path="/about" element={<About language={language} />}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}
