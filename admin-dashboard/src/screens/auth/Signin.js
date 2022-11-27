import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GroupColors } from "../../assets/svg/Group-colors.svg";
import { ReactComponent as LoginIcon } from "../../assets/svg/Login-icon.svg";
import logo from "../../assets/images/Logo.png";
import InputText from "../../components/InputText";

import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

function Signin() {
  const navigate = useNavigate();
  const [email, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const handleLogin = async () => {
    if (email.length > 0 && pwd.length > 0) {
      axios
        .post("https://authmockk.herokuapp.com/login", {
          email: email,
          password: pwd,
        })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data.token);
            auth.login(response.data.token);
            navigate("/dashboard/home");
          } else {
            setErrMsg("wrong informations");
          }
        })
        .catch(function (e) {
          setErrMsg("please verfiy you data");
        });
    } else {
      setErrMsg("please fill all the input");
    }
  };

  const auth = useAuth();

  return (
    <div className="flex flex-row flex-nowrap bg-white min-h-screen h-full relative">
      <div className="hidden md:block md:w-[53%] justify-start items-start bg-background-content-image bg-no-repeat bg-cover">
        <div className="h-full bg-side-group-colors bg-repeat-y w-[180px]"></div>
      </div>
      <div className="w-[100%] md:w-[47%] relative p-16">
        <div className="w-[45px] h-[45px] absolute top-0 right-4">
          <GroupColors className="w-full h-full" />
        </div>
        <div className="bg-bottom-group-colors bg-repeat-x w-full h-[20px] absolute bottom-0 right-0"></div>
        <div className="relative flex flex-col justify-center h-full w-fit">
          <img src={logo} alt="logo" className="w-[200px] h-[77px] mb-[50px]" />
          <h3 className="text-primary-one text-3xl font-bold">
            Management System
          </h3>
          <p className="text-primary-four text-2xl font-bold mb-[20px]">
            Admin Login
          </p>
          <form className="flex flex-col">
            <div className="w-[100%] max-w-[365px] h-[50px] mb-[20px]">
              <InputText
                type="email"
                labelText="Email"
                onChange={(e) => setUser(e.target.value)}
                id="email"
              />
            </div>
            <div className="w-[100%] max-w-[365px] h-[50px] mb-[20px]">
              <InputText
                type="password"
                labelText="Password"
                onChange={(e) => setPwd(e.target.value)}
                id="password"
              />
            </div>
            <p className="w-full text-end text-primary-one text-tiny mb-[40px]">
              Forgot Password?
            </p>
            <button
              onClick={(e) => {
                handleLogin();
                e.preventDefault();
              }}
              className="flex flex-row flex-nowrap justify-center items-center font-bold text-center text-base bg-primary-one text-white outline-none border-none shadow-orange-shadow w-[100%] max-w-[365px] h-[50px] rounded-[10px]"
            >
              <LoginIcon className="mr-3" />
              <span>Login</span>
            </button>
          </form>
          {errMsg && (
            <p className="text-center text-[#ff0000]" aria-live="assertive">
              {errMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
