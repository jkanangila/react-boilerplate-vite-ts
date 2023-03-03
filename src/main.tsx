import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { SEO } from "@/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <SEO title="Hello World" />
      <div>Hello World</div>
    </>
  </React.StrictMode>,
);
