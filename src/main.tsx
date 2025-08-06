import Layout from "./components/Layout"; // your Layout component (the one you just shared)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";import { HashRouter, Route, Routes } from "react-router-dom"; // ✅ Already imported as Router, but let's make it clearer
import App from "./App";
import ContactForm from "./components/ContactForm";
import ErrorPage from "./components/ErrorPage";
import Projects from "./components/Projects";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<App />} index />
          <Route element={<ContactForm />} path="/contact" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<ErrorPage />} path="*" />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
