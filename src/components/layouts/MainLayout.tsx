import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
