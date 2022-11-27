import React from "react";

function InputTopLabel({ type, id, label, value, onChange, placeholder }) {
  return (
    <div className="relative text-base">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        autoComplete="off"
        id={id}
        value={value}
        onChange={onChange}
        className="block px-[14px] mt-[12px] w-full h-[50px] text-[#87949B] bg-white rounded-[2px] border-1 appearance-none focus:outline-none focus:ring-0 peer border-[#87949B] "
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputTopLabel;
