import { useEffect, useRef } from "react";
import { useOnClickOutside } from "../hooks";
import { classNames } from "./shared/Utils";

export default function Modal({
  isBlacklist,
  showModal,
  setShowModal,
  image,
  title,
  subtitle,
  description,
}) {
  // close modal on clicking outside
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowModal(false));

  //close modal after 10 second
  useEffect(() => {
    const timeout = setTimeout(function () {
      showModal && setShowModal(false);
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex bg-modal-bg overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              ref={wrapperRef}
              className="relative max-w-[590px] w-auto my-6 mx-auto"
            >
              <div className="absolute top-0 right-0 left-0 z-10 bg-popup-group-colors bg-repeat-x w-full h-[20px]"></div>
              {/*content*/}
              <div className="border-0 p-8 rounded-b-[10px] shadow-dark-2 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-4 mt-10">
                  <img
                    className="w-[150px] h-[150px]"
                    src={image}
                    alt="congrats"
                  />
                </div>
                {/*body*/}
                <div className="relative px-4 py-8 flex-auto text-center">
                  {isBlacklist ? (
                    <p className="mb-2 text-warning font-bold text-2xl">
                      {title}
                    </p>
                  ) : (
                    <p className="mb-2 text-green font-bold text-2xl">
                      {title}
                    </p>
                  )}
                  <p className="mb-2 text-main-text font-bold text-base">
                    {subtitle}
                  </p>
                  <p className="text-sub-text text-tiny">{description}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-8 border-t-1 border-solid border-color">
                  <button
                    className={classNames(
                      "flex flex-row flex-nowrap justify-center items-center min-w-[100px] rounded-[4px] p-2 bg-transparent font-bold text-center text-xs outline-none focus:outline-none ease-linear transition-all duration-150",
                      isBlacklist
                        ? " border-[2px] border-warning text-warning"
                        : " border-[2px] border-green text-green"
                    )}
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className={classNames(
                      "flex flex-row flex-nowrap justify-center items-center min-w-[100px] ml-4 text-white rounded-[4px] p-2 bg-transparent font-bold text-center text-xs outline-none focus:outline-none ease-linear transition-all duration-150",
                      isBlacklist
                        ? "border-[2px] border-warning  bg-warning"
                        : "border-[2px] border-green  bg-green"
                    )}
                    type="button"
                    onClick={() => {}}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
