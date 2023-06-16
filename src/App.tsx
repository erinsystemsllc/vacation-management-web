import { Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/Home"

// components
import Navbar from "./components/Navbar"
import { Box } from "@chakra-ui/react"

export default function App() {
  return (
    <Box w="100vw" h="100vh" overflow="hidden">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Box>
  )
}
