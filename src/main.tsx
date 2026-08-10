import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Layout from "./docs/Layout";
import Home from "./docs/Home";
import Installation from "./docs/Installation";
import ComponentsIndex from "./docs/ComponentsIndex";
import Dashboard from "./docs/Dashboard";
import ButtonDocs from "./docs/components/button.mdx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/components" element={<ComponentsIndex />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs/components/button" element={<ButtonDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
