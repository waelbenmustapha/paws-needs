import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputText from "../../../components/InputText";
import { Oval } from "react-loader-spinner";
import { useCreateAddress } from "../../../apis/addresses/useCreateAddress";
import MapView from "../../../components/MapView";
import { useUpdateAddress } from "../../../apis/addresses/useUpdateAddress";

function EditAddress() {
  const context = useAppContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({ ...state });

  const [marker, setMarker] = useState({
    lat: data.latitude,
    lng: data.longitude,
  });
  const { mutateAsync: fneditPet, isLoading } = useUpdateAddress();

  function handleSubmitUser() {
    if (data.name.length > 0) {
      fneditPet({ ...data, latitude: marker?.lat, longitude: marker?.lng })
        .then(() => navigate("/dashboard/addresses"))
        .catch((err) => alert("Something is wrong"));
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
          <Link to={"/dashboard/addresses"}>Address</Link> &gt;{" "}
          <Link to={"/dashboard/address-add"}>Edit Address</Link>
        </p>
        <p className="mb-10 font-bold text-tiny lg:text-2xl">Edit Address</p>
        <p className="mb-2 font-bold text-tiny lg:text-base">Edit Address</p>
        <p className="mb-9 text-[#87949B] text-xs lg:text-tiny">
          Fill in the details of the Address using the sections below
        </p>
        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>

        <div className="w-full flex flex-col items-start mb-9">
          <div className="w-[80%] mt-[25px] ">
            <div className="flex flex-col flex-wrap items-start gap-4 ">
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.name}
                  labelText="Name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  id="name"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.area}
                  labelText="Area"
                  onChange={(e) => setData({ ...data, area: e.target.value })}
                  id="area"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.street}
                  labelText="Street"
                  onChange={(e) => setData({ ...data, street: e.target.value })}
                  id="street"
                />
              </div>
              <div className="flex-initial min-w-[400px] max-w-[500px] mb-[20px]">
                <InputText
                  type="text"
                  value={data.building}
                  labelText="Building"
                  onChange={(e) =>
                    setData({ ...data, building: e.target.value })
                  }
                  id="building"
                />
              </div>
              <p>Gps Location</p>

              <MapView
                initial={{ lat: data.latitude, lng: data.longitude }}
                marker={marker}
                setMarker={setMarker}
              />
              
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-full h-[1px] mb-9 border-devider-color border-b-1"></div>
        <div className="w-full flex justify-end items-center">
          <div className="flex flex-row flex-nowrap justify-center items-center">
            <Link
              to={"/dashboard/addresses"}
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
              <span>Update Address</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditAddress;
