
// React router dom
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login"

// components
import Navbar from "./components/Navbar";

export default function App() {
  
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === '/login' ? null : <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}
