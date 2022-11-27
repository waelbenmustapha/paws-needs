import { useRef } from "react";
import { useOnClickOutside } from "../hooks";

function Dropdown({
  isOpen,
  setIsOpen,
  minWidth,
  minHeight,
  top,
  right,
  left,
  bottom,
  items,
}) {
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  if (isOpen) {
    return (
      <div
        ref={wrapperRef}
        style={{
          minWidth: minWidth,
          minHeight: minHeight,
          top: top,
          right: right,
          left: left,
          bottom: bottom,
        }}
        className="absolute bg-white shadow-dark rounded-[4px]"
      >
        {items.map((el, index) => {
          return (
            <div
              key={index}
              style={
                index == 0
                  ? { borderTop: "none" }
                  : { borderTop: "1px solid rgb(207 212 215)" }
              }
              className="px-4 py-2 w-full text-center hover:bg-input-background cursor-pointer"
            >
              <span className="text-xs">{el}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return;
  }
}

export default Dropdown;
