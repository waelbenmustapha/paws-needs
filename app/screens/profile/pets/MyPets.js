import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGetUserPets } from "../../../apis/pets/useGetUserPets";
import { useAuth } from "../../../context/AuthProvider";
import { useFocusEffect } from "@react-navigation/native";

const MyPets = ({ navigation }) => {
  const auth = useAuth();

  const id = auth.getAsyncUserId();

  const { data, isLoading, isError, isRefetching, refetch } =
    useGetUserPets(id);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.row}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={styles.icon}
            name="arrowleft"
            size={24}
            color={Colors.PRIMARY}
          />
          <Text style={styles.navText}>My Pets</Text>
        </View>
      </View>
      {isRefetching && <Text>Refetching</Text>}
      {data.data.map((el) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("editpet", { pet: el })}
          style={{
            backgroundColor: Colors.SECONDARY2,
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}
          key={el._id}
        >
          <Text>{el.name}</Text>
        </TouchableOpacity>
        ))}
      <TouchableOpacity
        onPress={() => navigation.navigate("addpet")}
        style={{
          backgroundColor: Colors.SECONDARY2,
          margin: 10,
          marginTop: 50,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>ADD PET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    includeFontPadding: false,
    color: Colors.TEXT,
  },
  icon: { paddingVertical: 5, paddingRight: 10 },
});

export default MyPets;
