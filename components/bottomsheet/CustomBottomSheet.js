import React, { useMemo, useRef, useEffect, useCallback } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const CustomBottomSheet = ({
  bottomSheetOpen,
  setBottomSheetOpen,
  children,
}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%", "70%"], []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
    setBottomSheetOpen(true);
    console.log("bottom sheet opened");
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
    setBottomSheetOpen(false);
    console.log("bottom sheet closed");
  };

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      closeBottomSheet();
    }
  }, []);

  useEffect(() => {
    if (bottomSheetOpen === true) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [bottomSheetOpen]);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
      onClose={() => {
        closeBottomSheet();
      }}
    >
      {children}
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;
