import { Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/Home"

// components
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}
