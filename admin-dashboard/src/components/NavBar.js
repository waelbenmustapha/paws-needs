import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svg/search-line.svg";
import { ReactComponent as Hamburger } from "../assets/svg/align-left.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/svg/ArrowDown.svg";
import avatar from "../assets/images/avatar.png";
import { useAppContext } from "../Context/AppContext";
import { useAuth } from "../Context/AuthContext";
import NavMenu from "./NavMenu";
import MainSearchComponent from "./search/MainSearchComponent";

const NavButton = ({ icon, color, isUnread, dotColor }) => (
  <div className="flex justify-center content-center">
    <div
      onClick={() => {}}
      style={{ color }}
      className="relative cursor-pointer text-xl border-none outline-none rounded-full mr-3"
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

const NavBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const context = useAppContext();
  const auth = useAuth();
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const [notifMenuActive, setNotifMenuActive] = useState(false);
  const [messagesMenuActive, setMessagesMenuActive] = useState(false);
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <div className="md:flex hidden flex-nowrap justify-between h-[55px]  lg:h-[86px] border-devider-color border-b-1 pl-6 pr-6 relative">
        <div className="flex flex-nowrap items-center">
          <MainSearchComponent
            showSearch={context.showSearch}
            setShowSearch={context.setShowSearch}
            keyword={keyword}
          />

          <NavButton
            title="Search"
            color={context.mainColor}
            icon={
              <SearchIcon className="relative w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]" />
            }
          />
          <input
            className="text-[10px] lg:text-xs 2lg:text-tiny xl:text-base border-none outline-none w-[150px] lg:w-[320px] h-full bg-transparent"
            type="text"
            onClick={(e) => {
              if (e.target.value.length > 0) context.setShowSearch(true);
            }}
            onChange={(e) => {
              setKeyword(e.target.value);
              if (e.target.value.length === 0) {
                context.setShowSearch(false);
              } else {
                context.setShowSearch(true);
              }
            }}
            placeholder="Search for users or rewards"
          />
        </div>
        <div className="flex flex-nowrap justify-center content-center my-auto mx-0">
          
         
          <div className="relative flex items-center justify-center my-auto mx-0 select-none">
            <div
              onClick={() => {
                if (profileMenuActive) {
                  setNotifMenuActive(false);
                  setMessagesMenuActive(false);
                  setProfileMenuActive(false);
                } else {
                  setProfileMenuActive(true);
                  setNotifMenuActive(false);
                  setMessagesMenuActive(false);
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
                { name: "Profile", url: "/home", onClick: () => {} },
                { name: "Settings", url: "/home", onClick: () => {} },
                {
                  name: "Logout",
                  url: "/sign-in",
                  onClick: () => auth.logout(),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="md:hidden sticky shadow-[0px_4px_16px_rgba(0,0,0,0.1)] px-[30px] z-50 h-[100px] bg-white top-0 w-full flex justify-between items-center">
        <div className="flex  flex-row gap-[10px]">
          <img
            className="rounded-full w-[40px] h-[40px]"
            src={avatar}
            alt="user-profile"
          />
          <div>
            <p className="text-[14px] text-main-text ">Mohamed Ahmed</p>
            <p className="text-[12px] text-main-text/50 ">
              MohAhm.99@gmail.com
            </p>
          </div>
        </div>
        <Hamburger
          className="text-main-text"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        />
      </div>
    </>
  );
};

export default NavBar;
