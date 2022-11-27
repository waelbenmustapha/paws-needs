import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppContext } from "../../../Context/AppContext";
import SuccessNotif from "../../../components/SuccessNotif";
import InputTopLabel from "../../../components/InputTopLabel";

function EditPassword() {
  const context = useAppContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    if (
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (newPassword === confirmPassword) {
        await axios
          .put("https://reqres.in/api/users/", {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          })
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
        toast.error("password confirmation wrong");
      }
    } else {
      toast.error("please fill all the input!");
    }
  }

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
      <p className="text-2xl font-bold mb-10">Change Password</p>
      <div>
        <div className="max-w-[300px] mt-[40px]">
          <InputTopLabel
            type="text"
            id="oldpassword"
            label="Enter Your Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
          />
        </div>
        {/***** devider ***** */}
        <div className="w-full mt-[40px] border-b-1 border-devider-color"></div>
        <div className="max-w-[300px] mt-[40px]">
          <InputTopLabel
            type="text"
            id="newpassword"
            label="Enter Your New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>
        <div className="max-w-[300px] mt-[40px]">
          <InputTopLabel
            type="text"
            id="confirmpassword"
            label="Re-Enter Your New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
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
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPassword;
