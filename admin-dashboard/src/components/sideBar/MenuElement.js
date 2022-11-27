import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function MenuElement({ Icon, to, name }) {
  const context = useAppContext();
  const location = useLocation();
  var isActive = location.pathname===("/dashboard/" + to);
  if (
    (location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/") &&
    to === "home"
  ) {
    isActive = true;
  }


  /************* background color *************** */
  function getColor() {
    // Outrageous Orange
    if (isActive && context.mainColor === "#EB5A3C") {
      return "#EB5A3C";
    }

    if (!isActive && context.mainColor === "#EB5A3C") {
      return "#87949b";
    }

  }

  /*************** tickets number color **************/
  

  return (
    <div className="flex flex-row items-center pr-4">
      <div
        style={{
          backgroundColor: isActive ? getColor() : "transparent",
          boxShadow: `-4px 0px 24px 4px ${context.mainColor}`,
        }}
        className={
          "w-[2px] md:w-[4px] lg:w-[5px] xl:w-[8px] h-full rounded-r-[5px] mr-[14px] lg:mr-[18px] " +
          (isActive ? " block" : " invisible")
        }
      ></div>
      <div className={"flex flex-row items-center "}>
        <Icon
          style={{ color: getColor() }}
          className="w-[18px] h-[18px] xl:w-[22px] xl:h-[22px] mr-[14px] lg:mr-[18px]"
        />
        <Link className="text-main-text text-[14px]" to={to}>
          <span
            style={{ color: getColor() }}
            className={isActive ? "font-bold" : "font-normal"}
          >
            {name}
          </span>
         
        </Link>
      </div>
    </div>
  );
}

export default MenuElement;
