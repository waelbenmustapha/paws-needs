import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Student } from "../../../assets/svg/student.svg";
import { useAppContext } from "../../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import congratsImage from "../../../assets/images/congrats.png";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import InputText from "../../../components/InputText";

function EditUser() {
  const context = useAppContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");

  const [data, setData] = useState({ gender, ...state });

  const persona = [
    "Student",
    "Artist",
    "Student1",
    "Student2",
    "Student3",
    "Student4",
    "Student5",
    "Student6",
    "Student7",
    "Student8",
  ];

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmitUser() {
    if (
      data.gender.length > 0 &&
      data.persona.length > 0 &&
      data.points.length > 0 &&
      data.email.length > 0 &&
      data.phone_number.length > 0 &&
      data.name.length > 0
    ) {
      if (isValidEmail(data.email)) {
        if (!isNaN(data.points)) {
          if (!isNaN(data.phone_number) && data.phone_number.length >= 8) {
            await axios
              .put("https://reqres.in/api/users/" + state.id, {
                job: "med",
                name: data.name,
                points: data.points,
                image: data.image,
              })
              .then((res) => {
                if (res.status === 200) {
                  context.setAndShowModalData({
                    title: "User " + state.name + " Edited Successfully!!",
                    subtitle: ``,
                    description: "",
                    image: congratsImage,
                  });
                  navigate("/dashboard/users");
                } else {
                  toast.error("something went wrong!");
                }
              })
              .catch((err) => toast.error("something went wrong!"));
          } else {
            toast.error("phone number must be a number of minimum 8 digits");
          }
        } else {
          toast.error("please enter points as number");
        }
      } else {
        toast.error("please enter a valid email");
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
        <p className="text-xs mb-2">
          <Link to={"/dashboard/users"}>Users</Link> &gt;{" "}
          <span>{state.name}</span>
        </p>
        <p className="mb-10 font-bold text-tiny lg:text-2xl">Edit User</p>
        <p className="mb-2 font-bold text-tiny lg:text-base">
          Edit User Profile
        </p>
        <p className="mb-9 text-[#87949B] text-xs lg:text-tiny">
          Fill in the details of the user using the sections below
        </p>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>
        <div className="w-full flex flex-row items-start mb-9">
          <div className="w-[20%]">
            <p className="mb-2 font-bold text-xs lg:text-tiny">User Persona</p>
            <p className=" text-[#87949B] text-xxs lg:text-xs">
              Select the user’s persona from the provided list
            </p>
          </div>
          <div className="w-[80%] pl-16 flex flex-row flex-wrap gap-4">
            {persona.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setData({ ...data, persona: item });
                }}
                style={{
                  backgroundColor:
                    data.persona === item ? context.mainColor : "white",
                  color: data.persona === item ? "white" : "#0F2837",
                }}
                className="flex flex-row flex-nowrap cursor-pointer rounded-lg shadow-dark-2 w-fit p-6"
              >
                <span className="mr-2">
                  <Student />
                </span>
                <span className="select-none">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>
        <div className="w-full flex flex-row items-start mb-9">
          <div className="w-[20%]">
            <p className="mb-2 font-bold text-xs lg:text-tiny">User Details</p>
            <p className=" text-[#87949B] text-xxs lg:text-xs">
              Fill in user details such as name and contact info
            </p>
          </div>
          <div className="w-[80%] pl-16">
            <div className="flex flex-row flex-wrap gap-4 ">
              <div className="flex-initial min-w-[200px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Full Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  id="fullname"
                />
              </div>
              <div className="flex-initial min-w-[200px] max-w-[500px] mb-[20px]">
                <InputText
                  type="email"
                  labelText="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  id="email"
                />
              </div>
              <div className="flex-initial min-w-[200px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Phone Number"
                  value={data.phone_number}
                  onChange={(e) =>
                    setData({ ...data, phone_number: e.target.value })
                  }
                  id="phone"
                />
              </div>
            </div>
            <div>
              <p className="my-5 font-bold text-xxs lg:text-xs">Gender</p>
              <div className="flex flex-row flex-nowrap justify-start items-center">
                <div
                  onClick={() => {
                    setGender("male");
                    setData({ ...data, gender: "male" });
                  }}
                  style={{
                    backgroundColor:
                      gender === "male" ? context.mainColor : "white",
                    color: gender === "male" ? "white" : "#0F2837",
                  }}
                  className="flex flex-row flex-nowrap justify-center items-center cursor-pointer min-w-[107px] min-h-[50px] rounded-lg p-4 text-white shadow-dark-2 font-bold text-center text-xs lg:text-tiny border-none outline-none"
                >
                  <span className="select-none">Male</span>
                </div>
                <div
                  onClick={() => {
                    setGender("female");
                    setData({ ...data, gender: "female" });
                  }}
                  style={{
                    backgroundColor:
                      gender === "female" ? context.mainColor : "white",
                    color: gender === "female" ? "white" : "#0F2837",
                  }}
                  className="flex flex-row flex-nowrap justify-center items-center cursor-pointer font-bold bg-white border-none outline-none min-w-[107px] min-h-[50px] rounded-lg ml-3 shadow-dark-2 w-fit p-4 text-xs lg:text-tiny"
                >
                  <span className="select-none">Female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>
        <div className="w-full flex flex-row items-start mb-9">
          <div className="w-[20%]">
            <p className="mb-2 font-bold text-xs lg:text-tiny">Points</p>
            <p className=" text-[#87949B] text-xxs lg:text-xs">
              Select the amount of points to be granted to the user
            </p>
          </div>
          <div className="w-[80%] pl-16">
            <div className="max-w-[200px] mb-[20px]">
              <InputText
                type="text"
                labelText="Total initial points"
                value={data.points}
                onChange={(e) => setData({ ...data, points: e.target.value })}
                id="points"
              />
            </div>
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
              onClick={() => handleSubmitUser()}
              style={{
                border: `2px solid ${context.mainColor}`,
                backgroundColor: context.mainColor,
              }}
              className="flex flex-row flex-nowrap justify-center items-center rounded-[4px] min-w-[88px] min-h-[33px] px-4 py-2 ml-3 text-white font-bold text-center text-xxs 2lg:text-xs lg:text-tiny outline-none"
            >
              <span>Edit User</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
