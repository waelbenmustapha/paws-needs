import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import PawAndText from "../../components/PawAndText";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/Colors";
import Cart from "./Cart";
import Completed from "./Completed";
import { useNavigation } from "@react-navigation/native";

const SearchBtn = ({ navigation }) => {
  return <Ionicons name="search-outline" size={28} color={"#000000"} />;
};

const Orders = () => {
  const navigation = useNavigation();
  const [navActive, setNavActive] = useState("cart");

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <PawAndText
          title={"My Orders"}
          Component={SearchBtn}
          navigation={navigation}
        />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => setNavActive("cart")}
            style={{
              width: "50%",
              height: 40,
              borderBottomWidth: navActive == "cart" ? 4 : 2,
              borderBottomColor:
                navActive == "cart" ? Colors.PRIMARY : "#EEEEEE",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: navActive == "cart" ? Colors.PRIMARY : "#9E9E9E",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Cart
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setNavActive("completed")}
            style={{
              width: "50%",
              height: 40,
              borderBottomWidth: navActive == "completed" ? 4 : 2,
              borderBottomColor:
                navActive == "completed" ? Colors.PRIMARY : "#EEEEEE",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: navActive == "completed" ? Colors.PRIMARY : "#9E9E9E",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Completed
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {navActive === "cart" ? (
          <Cart navigation={navigation} />
        ) : (
          <Completed navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: "#ffffff",
  },
});

export default Orders;
