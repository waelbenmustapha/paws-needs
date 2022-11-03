import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../components/PawAndText";
import SearchAndFilter from "../../components/SearchAndFilter";
import ServiceCategoryCard from "../../components/ServiceCategoryCard";

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
      <View style={{ paddingHorizontal: 20 }}>
        <PawAndText
          title={"Services"}
          Component={() => {
            return <></>;
          }}
        />
        <View style={{ marginVertical: 20 }}>
          <SearchAndFilter placeholder={"Search for a service"} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {services.map((el, index) => (
            <ServiceCategoryCard
              width={Dimensions.get("window").width / 2 - 30}
              height={230}
              locationright={20}
              locationtop={20}
              service={el}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: "white",
  },
});
export default Services;
