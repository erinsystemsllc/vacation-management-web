import { Spinner, Flex } from "@chakra-ui/react";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

export default function App() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/login" ? null : token === null ? null : <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            token === null ? (
              <Flex
                w="100vw"
                h="100vh"
                overflow="hidden"
                justify="center"
                align="center"
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Flex>
            ) : (
              <Home />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
