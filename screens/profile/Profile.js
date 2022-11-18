import React, { useRef, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { useAuth } from "../../context/AuthProvider";
import BottomSheet from "../../components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const auth = useAuth();
  const { height } = useWindowDimensions();
  const bottomSheetRef = useRef();
  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
          Profile
        </Text>
        <View style={{ marginBottom: 20 }}>
          <Button title="Open Bottom Sheet" onPress={() => openBottomSheet()} />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          activeHeight={height * 0.5}
          backgroundColor={"white"}
          backDropColor={"black"}
        />
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("edit-profile");
          }}
        >
          <Text>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("mypets-stack");
          }}
        >
          <Text>My pets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            auth.logout();
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Profile;
