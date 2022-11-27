import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppContext } from "../../../Context/AppContext";
import SuccessNotif from "../../../components/SuccessNotif";

function EditNotifications() {
  const context = useAppContext();

  // success message
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  //close message after 10 second
  useEffect(() => {
    const timeout = setTimeout(function () {
      isMessageVisible && setIsMessageVisible(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isMessageVisible]);

  // submit changes
  async function handleSubmit() {
    await axios
      .put("https://reqres.in/api/users/", user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsMessageVisible(true);
        } else {
          console.log(res);
          toast.error("something went wrong!");
        }
      })
      .catch((err) => toast.error("something went wrong!"));
  }

  // data
  const [user, setUser] = useState({});

  function getUser() {
    axios
      .get("https://mocki.io/v1/ca1bba06-d9e2-44c9-b451-19562571ecda")
      .then((res) => setUser(res.data));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full h-full bg-white overflow-auto p-[40px]">
      <div>
        <ToastContainer />
      </div>
      {isMessageVisible && (
        <SuccessNotif
          setIsMessageVisible={setIsMessageVisible}
          message="Your preferences have been updated successfully!"
        />
      )}
      <p className="font-bold text-[24px] maxPhone:text-[16px] maxSmallPhone:text-[13px] text-main-text mb-[35px]">
        Notifications
      </p>
      <p className="font-bold text-[16px] maxPhone:text-[11px] maxSmallPhone:text-[11px] text-main-text mb-[20px]">
        Types of Notification
      </p>

      <div>
        <div className="flex flex-col gap-[20px] mb-[40px] ">
          <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px]  justify-between items-center">
            <p className="text-[14px] maxPhone:text-[11px] maxSmallPhone:text-[11px] text-main-text">
              Receive notifications about new events
            </p>
            <div className="flex flex-row items-center gap-[2px]">
              <Switch
                className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
                activeBoxShadow={""}
                uncheckedIcon={false}
                onColor={"#F9F9F9"}
                offColor={"#F9F9F9"}
                checkedIcon={false}
                offHandleColor={"#DE4949"}
                onHandleColor={"#9BC368"}
                checked={user.notifnewevents}
                onChange={(e) => setUser({ ...user, notifnewevents: e })}
              />
              {user.notifnewevents ? (
                <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                  Enabled
                </p>
              ) : (
                <p className="text-[14px] text-[#DE4949]">Disabled</p>
              )}
            </div>
          </div>
          <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px] justify-between items-center">
            <p className="text-[14px] maxPhone:text-[11px] text-main-text">
              Receive notifications when you earn a new badge
            </p>
            <div className="flex flex-row  items-center gap-[2px]">
              <Switch
                className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
                activeBoxShadow={""}
                uncheckedIcon={false}
                onColor={"#F9F9F9"}
                offColor={"#F9F9F9"}
                checkedIcon={false}
                offHandleColor={"#DE4949"}
                onHandleColor={"#9BC368"}
                checked={user.notifearnbadge}
                onChange={(e) => setUser({ ...user, notifearnbadge: e })}
              />
              {user.notifearnbadge ? (
                <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                  Enabled
                </p>
              ) : (
                <p className="text-[14px] maxPhone:text-[11px] text-[#DE4949]">
                  Disabled
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px] justify-between items-center">
            <p className="text-[14px] maxPhone:text-[11px] text-main-text">
              Receive notifications when a new reward is released
            </p>
            <div className="flex flex-row items-center gap-[2px]">
              <Switch
                className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
                activeBoxShadow={""}
                uncheckedIcon={false}
                onColor={"#F9F9F9"}
                offColor={"#F9F9F9"}
                checkedIcon={false}
                offHandleColor={"#DE4949"}
                onHandleColor={"#9BC368"}
                checked={user.notifrewardrelease}
                onChange={(e) => setUser({ ...user, notifrewardrelease: e })}
              />
              {user.notifrewardrelease ? (
                <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                  Enabled
                </p>
              ) : (
                <p className="text-[14px] maxPhone:text-[11px] text-[#DE4949]">
                  Disabled
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px] justify-between items-center">
            <p className="text-[14px] maxPhone:text-[11px] text-main-text">
              Receive notifications about redeeming your points
            </p>
            <div className="flex flex-row items-center gap-[2px]">
              <Switch
                className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
                activeBoxShadow={""}
                uncheckedIcon={false}
                onColor={"#F9F9F9"}
                offColor={"#F9F9F9"}
                checkedIcon={false}
                offHandleColor={"#DE4949"}
                onHandleColor={"#9BC368"}
                checked={user.notifredeempoints}
                onChange={(e) => setUser({ ...user, notifredeempoints: e })}
              />
              {user.notifredeempoints ? (
                <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                  Enabled
                </p>
              ) : (
                <p className="text-[14px] maxPhone:text-[11px] text-[#DE4949]">
                  Disabled
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px] justify-between items-center">
            <p className="text-[14px] maxPhone:text-[11px] text-main-text">
              Receive notifications about how to earn more points
            </p>
            <div className="flex flex-row items-center gap-[2px]">
              <Switch
                className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
                activeBoxShadow={""}
                uncheckedIcon={false}
                onColor={"#F9F9F9"}
                offColor={"#F9F9F9"}
                checkedIcon={false}
                offHandleColor={"#DE4949"}
                onHandleColor={"#9BC368"}
                checked={user.notifearnpoints}
                onChange={(e) => setUser({ ...user, notifearnpoints: e })}
              />
              {user.notifearnpoints ? (
                <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                  Enabled
                </p>
              ) : (
                <p className="text-[14px] maxPhone:text-[11px] text-[#DE4949]">
                  Disabled
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] mb-[30px] border-devider-color border-b-1"></div>
        <div className="flex flex-row maxPhone:flex-col maxPhone:w-full maxPhone:items-start w-full lg:w-[600px] justify-between items-center">
          <p className="text-[14px] maxPhone:text-[11px] text-main-text">
            Turn off all notifications
          </p>
          <div className="flex flex-row items-center gap-[2px]">
            <Switch
              className="border-1 maxPhone:scale-75 border-[#CFD4D7]"
              activeBoxShadow={""}
              uncheckedIcon={false}
              onColor={"#F9F9F9"}
              offColor={"#F9F9F9"}
              checkedIcon={false}
              offHandleColor={"#DE4949"}
              onHandleColor={"#9BC368"}
              checked={user.notifdisableall}
              onChange={(e) => setUser({ ...user, notifdisableall: e })}
            />
            {user.notifdisableall ? (
              <p className="text-[14px] maxPhone:text-[11px] text-[#9BC368]">
                Enabled
              </p>
            ) : (
              <p className="text-[14px] maxPhone:text-[11px] text-[#DE4949]">
                Disabled
              </p>
            )}
          </div>
        </div>
        {/*********  form buttons ***** */}
        <div className="flex flex-row flex-wrap gap-[8px] mt-[60px]">
          <Link
            to={"/home/user-profile"}
            style={{
              borderColor: context.mainColor,
              color: context.mainColor,
            }}
            className="h-[38px] px-8 text-xs font-bold flex items-center justify-center rounded-[4px] border-[2px] whitespace-nowrap outline-none"
          >
            Cancel
          </Link>
          <button
            onClick={() => {
              handleSubmit();
            }}
            style={{
              backgroundColor: context.mainColor,
            }}
            className="h-[38px] px-5 text-xs font-bold rounded-[4px] text-white whitespace-nowrap outline-none"
          >
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditNotifications;
