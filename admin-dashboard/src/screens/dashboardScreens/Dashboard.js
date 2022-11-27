import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sideBar/SideBar";
import { useAppContext } from "../../Context/AppContext";

function Dashboard() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const appContext = useAppContext()
  return (
    <div className="relative flex flex-row w-full">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="w-full md:w-[calc(100%-150px)] 3lg:w-[calc(100%-170px)] md:ml-[150px] 3lg:ml-[170px]  min-h-screen bg-background-image bg-cover bg-fixed bg-no-repeat">
        {/* <div className="absolute z-[-200] w-full h-full bg-background-image bg-cover bg-no-repeat"></div> */}
        {/* <div className="absolute z-[-150] w-full h-[75%] top-0 right-0 bg-circle-top-right bg-cover bg-no-repeat"></div>
        <div className="absolute z-[-150] w-full h-[75%] bottom-0 right-0 bg-circle-bottom-right bg-cover bg-no-repeat"></div>
        <div className="absolute z-[-150] w-full h-[75%] bottom-0 left-0 bg-circle-bottom-left bg-cover bg-no-repeat"></div> */}
        <NavBar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen}/>
        <div  className={appContext.showSearch?"blur-[2px] ":""+"relative"}>
          <Outlet />
          <div className={appContext.showSearch?"bg-[rgba(14,40,55,50%)] opacity-30 absolute top-0 left-0 w-full h-full":" "}></div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
