import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SEO } from "@/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <SEO title="Hello World" />
      <div>Hello World</div>
    </ChakraProvider>
  </React.StrictMode>,
);
