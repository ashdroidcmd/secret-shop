import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
