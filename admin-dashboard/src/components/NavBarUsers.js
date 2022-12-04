import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import jwt_decode from "jwt-decode";

import { useAppContext } from "../Context/AppContext";
import { classNames } from "../components/shared/Utils";
import { ReactComponent as NotificationIcon } from "../assets/svg/Ring.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/svg/ArrowDown.svg";
import logo from "../assets/images/Logo.png";
import avatar from "../assets/images/avatar.png";
import NavMenu from "./NavMenu";

const NavButton = ({ icon, color, isUnread, dotColor }) => (
  <div className="flex justify-center content-center">
    <div
      onClick={() => {}}
      style={{ color }}
      className="relative cursor-pointer text-xl border-none outline-none rounded-full m-2"
    >
      {isUnread && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full w-1 h-1 lg:h-2 lg:w-2 right-0 top-0 z-10"
        />
      )}
      {icon}
    </div>
  </div>
);

function NavBarUsers() {
  const context = useAppContext();
  const auth = useAuth();
  const location = useLocation();
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const [notifMenuActive, setNotifMenuActive] = useState(false);

  const getColor = () => {
    if (context.mainColor === "#EB5A3C") {
      return "before:bg-[#EB5A3C]";
    } else if (context.mainColor === "#FFB65E") {
      return "before:bg-[#FFB65E]";
    } else if (context.mainColor === "#6E1946") {
      return "before:bg-[#6E1946]";
    } else {
      return "before:bg-[#0F2837]";
    }
  };

  const underlineStyle =
    "before:absolute before:bottom-[-4px] before:content-[''] before:w-full before:h-[4px] before:rounded-[1px] " +
    getColor();

  return (
    <div className="sticky top-0 z-[50] flex flex-nowrap justify-between h-[55px] lg:h-[86px] bg-white shadow-dark border-none outline-none pl-6 pr-6">
      <div className="flex flex-row gap-2 sm:gap-4 lg:gap-12 items-center">
        <Link to={"/home"}>
          <img
            src={logo}
            className="w-[50px] h-[20px] sm:w-[65px] sm:h-[30px] md:w-[80px] md:h-[40px]"
            alt="logo"
          />
        </Link>
        <Link
          to={"/home"}
          className={classNames(
            "relative font-bold ml-1 text-main-text text-xxs lg:text-xs 2lg:text-tiny xl:text-base",
            location.pathname.endsWith("/home") ||
              location.pathname.endsWith("/home/user-profile")
              ? underlineStyle
              : ""
          )}
        >
          Dashboard
        </Link>
        <Link
          to={"/home/events"}
          className={classNames(
            "relative font-bold ml-1 text-main-text text-xxs lg:text-xs 2lg:text-tiny xl:text-base",
            location.pathname.endsWith("/home/events") ? underlineStyle : ""
          )}
        >
          Events
        </Link>
        <Link
          to={"/home/support"}
          className={classNames(
            "relative font-bold ml-1 text-main-text text-xxs lg:text-xs 2lg:text-tiny xl:text-base",
            location.pathname.endsWith("/home/support") ? underlineStyle : ""
          )}
        >
          Support
        </Link>
      </div>
      <div className="flex flex-nowrap justify-center content-center my-auto mx-0">
        <div
          className="relative flex items-center justify-center"
          onClick={() => {
            if (notifMenuActive) {
              setNotifMenuActive(false);
              setProfileMenuActive(false);
            } else {
              setNotifMenuActive(true);
              setProfileMenuActive(false);
            }
          }}
        >
          <NavButton
            title="Notification"
            isUnread={true}
            color={"#0F2837"}
            dotColor={context.mainColor}
            icon={
              <NotificationIcon className="relative w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]" />
            }
          />
          <NavMenu
            display={notifMenuActive}
            setVisible={setNotifMenuActive}
            title="Notifications"
          />
        </div>

        <div className="relative flex items-center justify-center my-auto mx-0 select-none">
          <div
            onClick={() => {
              if (profileMenuActive) {
                setNotifMenuActive(false);
                setProfileMenuActive(false);
              } else {
                setProfileMenuActive(true);
                setNotifMenuActive(false);
              }
            }}
            className="flex flex-nowrap justify-center content-center items-center gap-2 cursor-pointer p-1"
          >
            <img
              className="rounded-full w-6 h-6 lg:w-8 lg:h-8"
              src={avatar}
              alt="user-profile"
            />
            <p className="hidden sm:flex flex-nowrap items-center">
              <span className="font-bold text-main-text text-xxs lg:text-xs 2lg:text-tiny xl:text-base">
                Mohammed Abdullah
              </span>
              <ArrowDownIcon
                style={{ color: context.mainColor }}
                className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] lg:w-[10px] lg:h-[8px] ml-[2px] sm:ml-1"
              />
            </p>
          </div>
          <NavMenu
            display={profileMenuActive}
            setVisible={setProfileMenuActive}
            title="Profile"
            items={[
              { name: "Profile", url: "/home/user-profile", onClick: () => {} },
              { name: "Settings", url: "/home", onClick: () => {} },
              { name: "Logout", url: "/sign-in", onClick: () => auth.logout() },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBarUsers;
