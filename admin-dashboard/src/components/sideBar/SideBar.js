import React, { useRef, useState } from "react";
import { sidebarRoutes } from "../../utils/Routes";
import MenuElement from "./MenuElement";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { classNames } from "../shared/Utils";
import logo from "../../assets/images/Logo.png";
import MenuElementMobile from "./MenuElementMobile";

function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
  const context = useAppContext();
  const [hasNewNotifications, sethasNewNotifications] = useState([
    { name: "Dashboard", count: 0 },
    { name: "Users", count: 0 },
    { name: "Pets", count: 0 },
    { name: "Services", count: 0 },
  ]);

  return (
    <div>
      <div
        style={
          context.mainColor === "#EB5A3C"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: context.mainColor }
        }
        className={classNames(
          "min-h-screen w-[150px] 3lg:w-[170px] fixed top-0  left-0 bottom-0 z-[10] overflow-hidden hidden md:flex flex-col justify-start items-center border-devider-color border-r-1 bg-white"
        )}
      >
        <Link to={"./home"}>
          <div className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[85px] lg:h-[85px] overflow-hidden mt-[10px]">
            <img style={{ height: "100%", width: "100%" }} src={logo} />
          </div>
        </Link>
        <div className="flex flex-col w-full gap-[20px] lg:gap-[28px] mt-[28px] lg:mt-[40px] xl:mt-[60px]">
          {sidebarRoutes.map((el, index) => (
            <MenuElement
              key={index}
              name={el.name}
              to={el.path}
              Icon={el.icon}
            />
          ))}
        </div>
      </div>
      {isSideBarOpen && (
        <div className="flex flex-col justify-between fixed top-0 left-0 mt-[100px] md:hidden z-50 h-[calc(100%-100px)] w-screen  bg-white ">
          <div className="pt-[32px] px-[17px]">
            {sidebarRoutes.map((el, index) => (
              <MenuElementMobile
                setIsSideBarOpen={setIsSideBarOpen}
                hasNewNotifications={hasNewNotifications.find(
                  (obj) => obj.name === el.name
                )}
                key={index}
                name={el.name}
                to={el.path}
                Icon={el.icon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
