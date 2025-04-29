import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

export default function App() {
  return (
    <div className='w-svw h-svh flex flex-col'>
      {/* NavBar */}
      <NavBar/>

      {/* Displays */}
      <div className='flex-1 overflow-auto'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  )
}
