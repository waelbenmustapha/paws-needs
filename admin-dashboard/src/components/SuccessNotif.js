import React from "react";
import { ReactComponent as CheckCircle } from "../assets/svg/check-circle.svg";
import { ReactComponent as XIcon } from "../assets/svg/x.svg";

function SuccessNotif({ message, setIsMessageVisible }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between text-green bg-green/20 rounded-[4px] px-4 py-2 mb-10">
        <div className="flex flex-row items-center">
          <CheckCircle className="w-[20px] h-[20px] mr-4" />
          <span className="font-bold text-xxs md:text-xs lg:text-tiny">
            {message}
          </span>
        </div>
        <XIcon
          onClick={() => setIsMessageVisible(false)}
          className="w-[20px] h-[20px] ml-4 cursor-pointer hover:bg-green/20"
        />
      </div>
    </>
  );
}

export default SuccessNotif;
