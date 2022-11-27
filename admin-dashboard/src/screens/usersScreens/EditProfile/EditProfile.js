import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppContext } from "../../../Context/AppContext";
import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
import SuccessNotif from "../../../components/SuccessNotif";
import InputTopLabel from "../../../components/InputTopLabel";

function EditProfile() {
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

  // handle image update
  function handleImageChange(e) {
    if (e.target.files.length > 0) {
      if (
        e.target.files[0].type === "image/png" ||
        e.target.files[0].type === "image/jpeg"
      ) {
        setUser({ ...user, avatar: URL.createObjectURL(e.target.files[0]) });
      } else {
        toast.error("please provide png/jpeg image");
      }
    } else {
      toast.error("please provide an image profile");
    }
  }

  // check email validation
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // submit changes
  async function handleSubmit() {
    if (
      user.firstname &&
      user.firstname.length > 0 &&
      user.lastname &&
      user.lastname.length > 0 &&
      user.email &&
      user.email.length > 0 &&
      user.phone_number &&
      user.phone_number.length > 0 &&
      user.city &&
      user.city.length > 0 &&
      user.persona &&
      user.persona.length > 0
    ) {
      if (isValidEmail(user.email)) {
        if (!isNaN(user.phone_number) && user.phone_number > 8) {
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
        } else {
          toast.error("please verify your phone number");
        }
      } else {
        toast.error("please verify your email");
      }
    } else {
      toast.error("please fill all the input!");
    }
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
    <div className="w-full h-full bg-white overflow-auto p-10">
      <div>
        <ToastContainer />
      </div>
      {isMessageVisible && (
        <SuccessNotif
          setIsMessageVisible={setIsMessageVisible}
          message="Your profile has been updated successfully!"
        />
      )}
      <p className="text-2xl font-bold mb-10">Edit Profile</p>
      <div>
        {/******** image update *************/}
        <div className="relative rounded-full w-[80px] h-[80px] overflow-hidden">
          <label htmlFor="avatar">
            <div className="w-full h-full cursor-pointer bg-[#0F2837]/50 flex items-center justify-center z-[1] absolute">
              <EditIcon className="w-[20px] h-[20px] text-white" />
            </div>
            <img
              className="rounded-full w-full h-full"
              src={user.profile_image}
              alt="user-profile"
            />
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/******** informations *************/}
        <div className="w-[100%] 3lg:w-[50%] h-fit flex flex-row flex-wrap mx-[-14px]">
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="text"
              id="firstname"
              label="First Name"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              placeholder="First Name"
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="text"
              id="lastname"
              label="Last Name"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              placeholder="Last Name"
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="email"
              id="email"
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="tel"
              id="mobilenumber"
              label="Mobile Number"
              value={user.phone_number}
              onChange={(e) =>
                setUser({ ...user, phone_number: e.target.value })
              }
              placeholder="Mobile Number"
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="text"
              id="city"
              label="City"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              placeholder="City"
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[40px] px-[14px]">
            <InputTopLabel
              type="text"
              id="personatype"
              label="Persona Type"
              value={user.persona}
              onChange={(e) => setUser({ ...user, persona: e.target.value })}
              placeholder="Persona Type"
            />
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
