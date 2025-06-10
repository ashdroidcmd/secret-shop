import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Header/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
