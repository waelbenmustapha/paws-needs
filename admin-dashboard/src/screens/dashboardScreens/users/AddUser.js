import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputText from "../../../components/InputText";
import { useCreateUser } from "../../../apis/users/useCreateUser";
import { Oval } from "react-loader-spinner";

function AddUser() {
  const context = useAppContext();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    phoneNumber: "",
  });
  const { mutateAsync: fnadduser, isLoading } = useCreateUser();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmitUser() {
    console.log(data);
    if (
      data.email.length > 0 &&
      data.password.length > 0 &&
      data.fullname.length > 0
    ) {
      if (!isValidEmail(data.email)) {
        toast.error("please enter a valid email");
      } else if (data.password.length < 8) {
        toast.error("password must be longer than 8 characters");
      } else {
        console.log("mrigel");
        fnadduser(data).then(() => navigate("/dashboard/users"));
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
      <div className="w-full min-h-screen p-6 2lg:p-14 text-main-text">
        {isLoading && (
          <div className="centered">
            <Oval
              heigth="120"
              strokeWidth={6}
              width="120"
              color={"#EB5A3C"}
              secondaryColor={"#FFB65E"}
              ariaLabel="loading"
            />
          </div>
        )}
        <p className="text-xs mb-2">
          <Link to={"/dashboard/users"}>Users</Link> &gt;{" "}
          <Link to={"/dashboard/users-add"}>Add New User</Link>
        </p>
        <p className="mb-10 font-bold text-tiny lg:text-2xl">Add New User</p>
        <p className="mb-2 font-bold text-tiny lg:text-base">
          New User Profile
        </p>
        <p className="mb-9 text-[#87949B] text-xs lg:text-tiny">
          Fill in the details of the user using the sections below
        </p>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>

        {/* Form content */}
        <div className="w-full flex flex-col items-start mb-9">
          {/* Form input fields */}
          <div className="w-[80%] mt-[25px] ">
            <div className="flex flex-col flex-wrap items-start gap-4 ">
              {/* Full name input */}
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Full Name"
                  onChange={(e) =>
                    setData({ ...data, fullname: e.target.value })
                  }
                  id="fullname"
                />
              </div>
              {/* Email input */}
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="email"
                  labelText="Email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  id="email"
                />
              </div>
              {/* Password input */}
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="password"
                  labelText="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  id="password"
                />
              </div>
              {/* Phone number input */}
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Phone Number"
                  onChange={(e) =>
                    setData({ ...data, phoneNumber: e.target.value })
                  }
                  id="phoneNumber"
                />
              </div>
            </div>
          </div>
          {/* Button group */}
          <div className="w-full mt-10 flex justify-center">
            {/* Submit button */}
            <button
              className="w-[250px] h-12 rounded-full bg-main-orange-500 text-white text-tiny font-bold shadow-2xl focus:outline-none"
              onClick={handleSubmitUser}
            >
              Create User
            </button>
            {/* Cancel button */}
            <button
              className="w-[250px] h-12 rounded-full bg-white text-main-text text-tiny font-bold shadow-2xl focus:outline-none ml-4"
              onClick={() => navigate("/dashboard/users")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddUser;



