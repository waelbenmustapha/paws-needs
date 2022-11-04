import React, { useState } from "react";
import { Image, Pressable } from "react-native";

const Favorite = ({ isWhite }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <Pressable onPress={() => setIsFav(!isFav)}>
      <Image
        style={{ width: 22, height: 22 }}
        source={
          isFav
            ? require("../assets/fav-on.png")
            : isWhite
            ? require("../assets/fav-off-white.png")
            : require("../assets/fav-off.png")
        }
      />
    </Pressable>
  );
};
export default Favorite;
