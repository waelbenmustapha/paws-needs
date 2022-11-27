import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUsers from "../../components/NavBarUsers";

function HomePage() {
  return (
    <div className="min-h-screen realtive before:z-[-1] before:top-0 before:left-0 before:content-[''] before:w-full before:h-full before:fixed before:bg-background-image-two before:bg-cover before:bg-no-repeat ">
      <NavBarUsers />
      <Outlet />
    </div>
  );
}

export default HomePage;
