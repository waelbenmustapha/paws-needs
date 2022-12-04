import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputText from "../../../components/InputText";
import { Oval } from "react-loader-spinner";
import { useCreatePet } from "../../../apis/pets/useCreatePet";

function AddPet() {
  const context = useAppContext();
  const navigate = useNavigate();

  const [data, setData] = useState({ name: "", image: "",type:"",breed:"",userId:"" });
  const { mutateAsync: fnaddPet,isLoading } = useCreatePet();
  
  function handleSubmitUser() {
    console.log(data);
    if (data.name.length > 0 ) {
        fnaddPet(data).then(() => navigate("/dashboard/pets")).catch((err)=>alert("Something is wrong"));
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
          <Link to={"/dashboard/pets"}>Pets</Link> &gt;{" "}
          <Link to={"/dashboard/pet-add"}>Add New Pet</Link>
        </p>
        <p className="mb-10 font-bold text-tiny lg:text-2xl">Add New Pet</p>
        <p className="mb-2 font-bold text-tiny lg:text-base">
          New Pet
        </p>
        <p className="mb-9 text-[#87949B] text-xs lg:text-tiny">
          Fill in the details of the pets using the sections below
        </p>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>

        <div className="w-full flex flex-col items-start mb-9">
          
          <div className="w-[80%] mt-[25px] ">
          <div className="flex flex-col flex-wrap items-start gap-4 ">
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Name"
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                  id="name"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Type"
                  onChange={(e) =>
                    setData({ ...data, type: e.target.value })
                  }
                  id="type"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Breed"
                  onChange={(e) =>
                    setData({ ...data, breed: e.target.value })
                  }
                  id="breed"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="Image"
                  onChange={(e) =>
                    setData({ ...data, image: e.target.value })
                  }
                  id="image"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  labelText="UserId"
                  onChange={(e) =>
                    setData({ ...data, userId: e.target.value })
                  }
                  id="userId"
                />
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
              <span>Create Pet</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPet;
