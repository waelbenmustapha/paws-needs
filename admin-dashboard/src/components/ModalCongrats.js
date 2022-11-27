import { useEffect, useRef } from "react";
import { useAppContext } from "../Context/AppContext";
import { useOnClickOutside } from "../hooks";

export default function ModalCongrats({
  showModal,
  setShowModal,
  congratsImage,
  title,
  subtitle,
  description,
}) {
  const context = useAppContext();
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowModal(false));

  useEffect(() => {
    const timeout = setTimeout(function () {
      console.log("im here");
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
                    src={congratsImage}
                    alt="congrats"
                  />
                </div>
                {/*body*/}
                <div className="relative px-4 py-8 flex-auto text-center">
                  <p className="mb-2 text-green font-bold text-2xl">{title}</p>
                  {subtitle && (
                    <p className="mb-2 text-main-text font-bold text-base">
                      {subtitle}
                    </p>
                  )}
                  {<p className="text-sub-text text-tiny">{description}</p>}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-8 border-t-1 border-solid border-color">
                  <button
                    style={{
                      border: `2px solid ${context.mainColor}`,
                      color: context.mainColor,
                    }}
                    className="flex flex-row flex-nowrap justify-center items-center min-w-[100px] rounded-[4px] p-2 bg-transparent font-bold text-center text-xs lg:text-tiny outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close Message
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
