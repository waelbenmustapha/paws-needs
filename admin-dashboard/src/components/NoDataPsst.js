import React from "react";
import eyes from "../assets/images/eyes.png";
import { useAppContext } from "../Context/AppContext";
import { classNames } from "./shared/Utils";
function NoDataPsst({ mainText, secondText, hasBackground }) {
  const context = useAppContext();
  return (
    <div
      className={classNames(
        "flex-1 flex flex-col 1sm:flex-col w-full min-h-[300px] px-4 1sm:px-6 md:px-10 py-5 justify-center items-center rounded-[10px] shadow-dark",
        hasBackground ? "bg-white bg-gradient-orange-to-transparent" : ""
      )}
    >
      <div className="flex flex-row">
        <p className="text-[#CFD4D7] font-bold text-[24px] mr-[10px]">Psst..</p>
        <img src={eyes} alt="eyes" />
      </div>
      <p
        className="font-bold text-[24px] text-center"
        style={{ color: context.mainColor }}
      >
        {mainText}
      </p>
      <p className="font-bold text-[16px] text-center text-main-text">
        {secondText}
      </p>
    </div>
  );
}

export default NoDataPsst;
