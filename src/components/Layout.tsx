import NavBar from "./Nav";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
