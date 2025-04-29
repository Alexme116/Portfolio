import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='relative w-svw h-svh overflow-auto bg-[#0a0413]'>
      {/* NavBar */}
      <NavBar/>

      {/* Displays */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
