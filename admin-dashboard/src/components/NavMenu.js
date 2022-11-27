import { useRef } from "react";
import { useOnClickOutside } from "../hooks";
import { Link } from "react-router-dom";

function NavMenu({ display, setVisible, title, items }) {
  // close modal on clicking outside
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setVisible(false));

  const menuStyle = `
  text-base
  z-[100]
  min-w-[150px]
  lg:min-w-[180px] 
  min-h-[150px]
  absolute 
  top-[55px] 
  right-[-10px]
  py-[5px] 
  px-[10px]
  lg:py-[10px] 
  lg:px-[20px] 
  bg-white 
  rounded-[10px] 
  duration-500 
  shadow-dark
  before:bg-white 
  before:absolute 
  content-[''] 
  before:w-[20px] 
  before:h-[20px] 
  before:top-[-5px] 
  before:right-[18px] 
  before:rotate-45`;

  return (
    <div
      ref={wrapperRef}
      style={{ display: !display ? "none" : "" }}
      className={menuStyle}
    >
      <h3 className="w-full pt-[5px] lg:pt-[10px] pb-[15px] lg:pb-[20px] text-main-text text-tiny lg:text-lg text-center font-bold">
        {title}
      </h3>
      <ul>
        {items &&
          items.map((el, index) => (
            <li
              onClick={el.onClick}
              key={index}
              className="w-full flex justify-center border-t-1 border-color"
            >
              <Link
                to={el.url}
                className="block text-xxs lg:text-base w-full h-full py-[5px] lg:py-[10px] text-main-text bg-white hover:bg-input-background"
              >
                {el.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NavMenu;
