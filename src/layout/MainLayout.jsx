import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
