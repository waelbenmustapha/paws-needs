import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import PawAndText from "../../../components/PawAndText";
import SearchAndFilter from "../../../components/SearchAndFilter";
import ServiceCard from "../../../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([
    {
      name: "Vet Appointment",
      available: 5,
      image:
        "https://i.postimg.cc/SN7MCvSR/Close-up-on-veterinarian-taking-care-of-dog.png",
      location: "Dubai",
    },
    {
      name: "Pet Transport",
      available: 6,
      image:
        "https://i.postimg.cc/KcrZcSc9/haircuting-process-small-dog-sits-table-dog-with-professional-2.png",
      location: "Dubai",
    },
    {
      name: "Pet Training",
      available: 10,
      image:
        "https://i.postimg.cc/vH0b9rVf/haircuting-process-small-dog-sits-table-dog-with-professional-1.png",
      location: "Dubai",
    },
    {
      name: "Dog Walking",
      available: 5,
      image:
        "https://i.postimg.cc/cL6ZcvRj/haircuting-process-small-dog-sits-table-dog-with-professional-1-1.png",
      location: "Dubai",
    },
    {
      name: "Pet Boarding",
      available: 8,
      image:
        "https://i.postimg.cc/VLfzdGdz/haircuting-process-small-dog-sits-table-dog-with-professional-1-2.png",
      location: "Dubai",
    },
    {
      name: "Pet Grooming",
      available: 17,
      image:
        "https://i.postimg.cc/D0gFxsYV/haircuting-process-small-dog-sits-table-dog-with-professional-1-3.png",
      location: "Dubai",
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="white" />
      <PawAndText
        title={"Services"}
        Component={() => {
          return <></>;
        }}
      />
      <View style={{ marginBottom: 30 }}></View>
      <SearchAndFilter placeholder={"Search for a service"} />
      <ScrollView contentContainerStyle={styles.servicescont}>
        {services.map((el, index) => (
          <ServiceCard service={el} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  servicescont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default Services;
