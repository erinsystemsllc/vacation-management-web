import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// react router dom
import { BrowserRouter } from "react-router-dom";

// css framework
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/themes/theme.ts";

// react query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ReactQueryDevtools/>
      </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
