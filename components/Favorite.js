import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import FavoriteOffIcon from "../assets/svg/heart-fill.svg";
import FavoriteOutlineIcon from "../assets/svg/heart-outline.svg";
import Colors from "../utils/Colors";

const Favorite = ({ width, height, color, fillColor }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <Pressable onPress={() => setIsFav(!isFav)}>
      {isFav ? (
        <FavoriteOffIcon
          width={width ? width : 24}
          height={height ? height : 24}
          color={fillColor ? fillColor : Colors.RED}
        />
      ) : (
        <FavoriteOutlineIcon
          width={width ? width : 24}
          height={height ? height : 24}
          color={color ? color : "#000"}
        />
      )}
    </Pressable>
  );
};
export default Favorite;
