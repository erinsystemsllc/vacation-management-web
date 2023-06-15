
// React router dom
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login"

// components
import Navbar from "./components/Navbar";

export default function App() {
  

  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  useEffect(()=>{
    if(token === null){
      navigate('/login')
    }
  }, [token, navigate])

  

  

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
