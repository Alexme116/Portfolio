import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
