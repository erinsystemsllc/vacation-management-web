import { Spinner, Flex } from "@chakra-ui/react";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

// components
import { Box } from "@chakra-ui/react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Info from "./pages/Info";

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
    <Box w="100vw" h="100vh" overflow="hidden">
      {pathname === "/login" ? null : token === null ? null : <Topbar />}
      <Flex w="100%" h="100%">
        <Box>
          {pathname === "/login" ? null : token === null ? null : <Sidebar />}
        </Box>
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
          <Route
            path="/info"
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
                <Info />
              )
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Flex>
    </Box>
  );
}
