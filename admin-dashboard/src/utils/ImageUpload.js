import React, { useRef, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { ReactComponent as Upload } from "../assets/svg/upload.svg";
import checked from "../assets/images/checked.png";
import { useAppContext } from "../Context/AppContext";

function ImageUpload({ setData, data, image }) {
  const [loading, setLoading] = useState(false);
  const hiddeninput = useRef(null);
  const context = useAppContext();
  function uploadimg(files) {
    const formData = new FormData();
    setLoading(true);
    formData.append("file", files[0]);
    formData.append("upload_preset", "nehtah");
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        console.log(res.data.url);
        setData({ ...data, image: res.data.url });
        setLoading(false);
      })
      .catch((err) => {
        alert("error");
        setLoading(false);
      });
  }

  return (
    <div
      style={{ boxShadow: "0px 4px 40px 0px rgba(15, 40, 55, 0.1)" }}
      className="w-[245px] flex items-center justify-center self-center mt-[10px] rounded-[8px]  h-[105px] bg-[#fff]"
    >
      {loading === false ? (
        <span
          className="flex flex-col items-center  hover:cursor-pointer"
          onClick={() => {
            hiddeninput.current.click();
          }}
        >
          <Upload
            className="h-[26px] w-[26px]"
            style={{ color: context.mainColor }}
          />
          <p className="text-[10px] text-[#9FA9AF]">Upload Symbol</p>
          {image.length > 0 && (
            <img
              className="h-[15px] w-[15px] mt-[10px]"
              src={checked}
              alt="upload"
            />
          )}
          <input
            ref={hiddeninput}
            style={{ display: "none" }}
            type="file"
            onChange={(e) => {
              uploadimg(e.target.files);
            }}
          />
        </span>
      ) : (
        <Oval heigth="40" width="40" color="grey" ariaLabel="loading" />
      )}
    </div>
  );
}
export default ImageUpload;
