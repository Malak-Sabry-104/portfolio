import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Layout from "./components/Layout.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<App />} index />
          <Route element={<ContactForm />} path="/contact" />
          <Route element={<ErrorPage />} path="*" />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
