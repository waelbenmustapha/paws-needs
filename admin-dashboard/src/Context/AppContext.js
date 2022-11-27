import React, { createContext, useContext, useEffect, useState } from "react";
import ModalCongrats from "../components/ModalCongrats";
import congratsImage from "../assets/images/congrats.png";
import { data } from "autoprefixer";

export const StateContext = createContext();

export function useAppContext() {
  return useContext(StateContext);
}

const AppContext = ({ children }) => {
  const [mainColor, setMainColor] = useState("#EB5A3C");
  const [secondaryColor, setSecondaryColor] = useState("#FBDED8");
  const [shadowColor, setShadowColor] = useState("rgba(235, 90, 60, 0.5)");
  const [showPopUp, setshowPopUp] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [badgesView, setBadgesView] = useState("list");
  const [showSearch, setShowSearch] = useState(false);
  function setAndShowModalData(data) {
    setModalData({ ...data });
  }
  useEffect(() => {
    modalData && setshowPopUp(true);
  }, [modalData]);

  function changeColor(mainColor, secondaryColor, shadowColor) {
    setMainColor(mainColor);
    setSecondaryColor(secondaryColor);
    setShadowColor(shadowColor);
  }

  return (
    <StateContext.Provider
      value={{
        mainColor,
        secondaryColor,
        shadowColor,
        showSearch,setShowSearch,
        changeColor,
        setAndShowModalData,
        badgesView,
        setBadgesView,
      }}
    >
      {children}
      {modalData && (
        <ModalCongrats
          showModal={showPopUp}
          setShowModal={setshowPopUp}
          congratsImage={modalData.image}
          title={modalData.title}
          subtitle={modalData.subtitle}
          description={modalData.description}
        />
      )}
    </StateContext.Provider>
  );
};

export default AppContext;
