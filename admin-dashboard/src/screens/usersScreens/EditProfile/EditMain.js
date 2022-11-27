import { useState } from "react";
import EditNotifications from "./EditNotifications";
import EditPassword from "./EditPassword";
import EditProfile from "./EditProfile";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { ReactComponent as Bell } from "../../../assets/svg/bell.svg";
import { ReactComponent as Unlock } from "../../../assets/svg/unlock.svg";
import { ReactComponent as RightArrow } from "../../../assets/svg/right-arrow.svg";
import { useAppContext } from "../../../Context/AppContext";

function EditMain() {
  const [activePage, setActivePage] = useState("profile");
  const context = useAppContext();

  return (
    <div className="flex flex-row relative h-full">
      <div className="flex flex-col bg-white w-[244px] maxPhone:w-[70px] maxPhone:text-[13px] text-[16px] fixed h-full border-devider-color/50 border-r-1">
        <div className="h-[100px] maxPhone:h-[70px] maxPhone:pr-[10px] maxPhone:pl-[20px]  bg-white items-center  flex justify-between border-b-1 pr-[20px] pl-[40px] border-devider-color/50">
          <div
            onClick={() => setActivePage("profile")}
            className="hover:cursor-pointer flex flex-row items-center gap-[8px] "
          >
            <User
              color={activePage === "profile" ? context.mainColor : "#CFD4D7"}
              className="h-4 w-4 "
            />
            <p
              className="maxPhone:hidden"
              style={{
                color: activePage === "profile" ? "#0F2837" : "#CFD4D7",
              }}
            >
              Edit Profile
            </p>
          </div>
          {activePage === "profile" && <RightArrow color={context.mainColor} />}
        </div>
        <div className="h-[100px]  bg-white items-center maxPhone:pr-[10px] maxPhone:pl-[20px] flex justify-between border-b-1 pr-[20px] pl-[40px] border-devider-color/50">
          <div
            onClick={() => setActivePage("password")}
            className="hover:cursor-pointer flex flex-row items-center gap-[8px] "
          >
            <Unlock
              color={activePage === "password" ? context.mainColor : "#CFD4D7"}
              className="h-4 w-4 "
            />
            <p
              className="maxPhone:hidden"
              style={{
                color: activePage === "password" ? "#0F2837" : "#CFD4D7",
              }}
            >
              Change Password
            </p>
          </div>
          {activePage === "password" && (
            <RightArrow color={context.mainColor} />
          )}
        </div>
        <div className="h-[100px]  bg-white items-center flex justify-between maxPhone:pr-[10px] maxPhone:pl-[20px] border-b-1 pr-[20px] pl-[40px] border-devider-color/50">
          <div
            onClick={() => setActivePage("notifications")}
            className="hover:cursor-pointer flex flex-row items-center gap-[8px] "
          >
            <Bell
              color={
                activePage === "notifications" ? context.mainColor : "#CFD4D7"
              }
              className="h-4 w-4 "
            />
            <p
              className="maxPhone:hidden"
              style={{
                color: activePage === "notifications" ? "#0F2837" : "#CFD4D7",
              }}
            >
              Notifications
            </p>
          </div>
          {activePage === "notifications" && (
            <RightArrow color={context.mainColor} />
          )}
        </div>
      </div>
      <div className="bg-white w-full h-[calc(100vh-55px)] lg:h-[calc(100vh-86px)] maxPhone:ml-[70px] ml-[244px]">
        {activePage === "profile" ? (
          <EditProfile />
        ) : activePage === "password" ? (
          <EditPassword />
        ) : activePage === "notifications" ? (
          <EditNotifications />
        ) : null}
      </div>
    </div>
  );
}

export default EditMain;
