import React from "react";
import { classNames } from "../components/shared/Utils";
import { useAppContext } from "../Context/AppContext";

function InputText({ labelText, onChange, id, value, type, err }) {
  const context = useAppContext();
  return (
    <div class="relative">
      <input
        type={type}
        autoComplete="off"
        Onend
        value={value}
        onChange={onChange}
        id={id}
        className={classNames(
          "block px-2 pb-2 pt-4 w-full h-[50px] text-main-text bg-white text-xs rounded-md border-1 appearance-none focus:outline-none focus:ring-0 peer",
          context.mainColor === "#EB5A3C" ? "focus:border-[#EB5A3C]" : "",
          context.mainColor === "#FFB65E" ? "focus:border-[#FFB65E]" : "",
          context.mainColor === "#6E1946" ? "focus:border-[#6E1946]" : "",
          context.mainColor === "#0F2837" ? "focus:border-[#0F2837]" : "",
          err && err ? "border-[#cc0000]" : "border-input-color "
        )}
        placeholder=" "
      />
      <label
        for={id}
        className={classNames(
          "absolute text-xs text-gray-500 cursor-text select-none duration-300 transform -translate-y-4 scale-[.90] top-2 z-10 origin-[0] bg-gradient-label px-1 peer-focus:px-1 text-[#87949B] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[.90] peer-focus:-translate-y-4 left-2",
          context.mainColor === "#EB5A3C" ? "peer-focus:text-[#EB5A3C]" : "",
          context.mainColor === "#FFB65E" ? "peer-focus:text-[#FFB65E]" : "",
          context.mainColor === "#6E1946" ? "peer-focus:text-[#6E1946]" : "",
          context.mainColor === "#0F2837" ? "peer-focus:text-[#0F2837]" : ""
        )}
      >
        {labelText}
      </label>
    </div>
  );
}

export default InputText;
