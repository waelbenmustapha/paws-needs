import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataVal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("error happend while getting data from asyncstorage err = ");
    console.log(e);
  }
};

export const storeDataObj = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("error happend while getting data from asyncstorage err = ");
    console.log(e);
  }
};

export const getDataVal = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log("error happend while getting data from asyncstorage err = ");
    console.log(e);
  }
};

export const getDataObj = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error happend while getting data from asyncstorage err = ");
    console.log(e);
  }
};