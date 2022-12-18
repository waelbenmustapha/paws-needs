import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Student } from "../../../assets/svg/student.svg";
import axios from "axios";
import { useAppContext } from "../../../Context/AppContext";
import congratsImage from "../../../assets/images/congrats.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputText from "../../../components/InputText";
import { useCreateUser } from "../../../apis/users/useCreateUser";
import { useUpdateUser } from "../../../apis/users/useUpdateUser";
import { Oval } from "react-loader-spinner";

function EditUser() {
  const context = useAppContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({ ...state });
  const { mutateAsync: fnupdateuser,isLoading } = useUpdateUser(data);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmitUser() {
    if (
      data.email.length > 0 &&
      data.fullname.length > 0
    ) {
      if (!isValidEmail(data.email)) {
        toast.error("please enter a valid email");
      }  else {
        console.log("mrigel");
        fnupdateuser(data).then(() => navigate("/dashboard/users"));
      }
    } else {
      toast.error("please fill all the input");
    }
  }
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className=" relative w-full min-h-screen p-6 2lg:p-14 text-main-text">
      {isLoading&&<div className="centered">
              <Oval
                heigth="120"
                strokeWidth={6}
                width="120"
                color={"#EB5A3C"}
                secondaryColor={"#FFB65E"}
                ariaLabel="loading"
              />
            </div>}
        <p className="text-xs mb-2">
          <Link to={"/dashboard/users"}>Users</Link> &gt;{" "}
          <Link to={"/dashboard/users-add"}>Edit User</Link>
        </p>
        <p className="mb-10 font-bold text-tiny lg:text-2xl">Edit User</p>
       
        <p className="mb-9 text-[#87949B] text-xs lg:text-tiny">
          Fill in the details of the user using the sections below
        </p>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>

        <div className="w-full flex flex-col items-start mb-9">
          <div className="w-[20%]">
            <p className="mb-2 font-bold text-xs lg:text-tiny">User Details</p>
            <p className=" text-[#87949B] text-xxs lg:text-xs">
              Fill in user details such as name and contact info
            </p>
          </div>
          <div className="w-[80%] mt-[25px] ">
            <div className="flex flex-col flex-wrap items-start gap-4 ">
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.fullname}
                  labelText="Full Name"
                  onChange={(e) =>
                    setData({ ...data, fullname: e.target.value })
                  }
                  id="fullname"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="email"
                  labelText="Email"
                  value={data.email}

                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  id="email"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.phoneNumber}

                  labelText="Phone Number"
                  onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                  id="phoneNumber"
                />
              </div>
              <p>Status</p>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
                
                onChange={(e) => setData({ ...data, status: e.target.value })}
              >
                <div>
                  <input
                  defaultChecked={data.status==="active"}
                    type="radio"
                    value="active"
                    name="gender"
                  />{" "}
                  active
                </div>
                <div>
                  <input
                    type="radio"
                    defaultChecked={data.status==="suspended"}

                    value="suspended"
                    name="gender"
                  />{" "}
                  suspended
                </div>
                <div>
                  <input
                    type="radio"
                    defaultChecked={data.status==="blocked"}

                    value="blocked"
                    name="gender"
                  />{" "}
                  blocked
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>
        <div className="w-full flex justify-end items-center">
          <div className="flex flex-row flex-nowrap justify-center items-center">
            <Link
              to={"/dashboard/users"}
              style={{
                border: `2px solid ${context.mainColor}`,
                color: context.mainColor,
              }}
              className="flex flex-row flex-nowrap justify-center items-center rounded-[4px] min-w-[88px] min-h-[33px] px-4 py-2 bg-transparent font-bold text-center text-xxs 2lg:text-xs lg:text-tiny outline-none"
            >
              <span>Cancel</span>
            </Link>
            <button
            disabled={isLoading}
              onClick={() => handleSubmitUser()}
              style={{
                border: `2px solid ${context.mainColor}`,
                backgroundColor: context.mainColor,
              }}
              className="flex flex-row flex-nowrap justify-center items-center rounded-[4px] min-w-[88px] min-h-[33px] px-4 py-2 ml-3 text-white font-bold text-center text-xxs 2lg:text-xs lg:text-tiny outline-none"
            >
              <span>Update User</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;

