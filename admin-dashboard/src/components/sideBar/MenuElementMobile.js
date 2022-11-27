import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function MenuElementMobile({ to, name, Icon,hasNewNotifications, setIsSideBarOpen  }) {
  const context = useAppContext();
  const location = useLocation();
    const navigate = useNavigate()
  function getColor() {
    // Outrageous Orange
    if (isActive && context.mainColor === "#EB5A3C") {
      return "#EB5A3C";
    }

    if (!isActive && context.mainColor === "#EB5A3C") {
      return "#87949b";
    }

    // Carrot Orange
    if (isActive && context.mainColor === "#FFB65E") {
      return "rgba(15, 40, 55, 1)";
    }

    if (!isActive && context.mainColor === "#FFB65E") {
      return "rgba(15, 40, 55, 0.5)";
    }

    // Pompadour *** and **** Tangaroa
    if (
      isActive &&
      (context.mainColor === "#6E1946" || context.mainColor === "#0F2837")
    ) {
      return "rgba(255, 255, 255, 1)";
    }

    if (
      !isActive &&
      (context.mainColor === "#6E1946" || context.mainColor === "#0F2837")
    ) {
      return "rgba(255, 255, 255, 0.5)";
    }
  }
  var isActive = location.pathname.startsWith("/dashboard/" + to);
  if (
    (location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/") &&
    to === "home"
  ) {
    isActive = true;
  }
  return (
      <div
      onClick={()=>{navigate(to);setIsSideBarOpen(false)}}
        className="h-[56px] rounded-[4px] w-full flex  px-[15px]  items-center justify-between"
        style={{ backgroundColor: isActive ? context.mainColor : "" }}
      >
        <div className="flex flex-row items-center">
          <Icon
            className={
              "w-[18px] h-[18px] text-main-text mr-[10px]" +
              (isActive ? " text-white" : " text-main-text")
            }
          />
          <div className="text-main-text text-[14px]">
            <span
              className={
                isActive ? "font-bold text-white" : "font-normal text-main-text"
              }
            >
              {name}
            </span>
          </div>
        </div>
        {hasNewNotifications.count!==0?<div className="h-[22px] w-[22px] text-center  rounded-[4px] text-[14px] font-bold " style={{backgroundColor:context.secondaryColor,color:context.mainColor}}><p>{hasNewNotifications.count}</p></div>:null}
      </div>
  );
}

export default MenuElementMobile;
