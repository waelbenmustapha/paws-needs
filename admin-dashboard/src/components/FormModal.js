import { useRef } from "react";
import { useOnClickOutside } from "../hooks";

export default function FormModal({ children, showModal, setShowModal }) {
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowModal(false));

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex bg-modal-bg overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div ref={wrapperRef} className="relative w-[590px]  my-6 mx-auto">
              {/*content*/}
              <div className="border-0 p-[60px] rounded-[10px] shadow-dark-2 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
