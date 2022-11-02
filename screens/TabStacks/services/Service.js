import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../../components/PawAndText";
import SearchAndFilter from "../../../components/SearchAndFilter";
import Colors from "../../../utils/Colors";
import ServiceCard from "../../../components/ServiceCard";

const Service = ({ route, navigation }) => {
  const service = route.params.service;
  const [services, setServices] = useState([
    {
      name: "Dog walker 1",
      location: "Dubai",
      rating: 4,
      reviews: 210,
      image:
        "https://i.postimg.cc/TPcW3NCM/haircuting-process-small-dog-sits-table-dog-with-professional-1-4.png",
    },
    {
      name: "Dog walker 2",
      location: "Dubai",
      rating: 4.3,
      reviews: 4,
      image:
        "https://i.postimg.cc/JzZk9zXh/haircuting-process-small-dog-sits-table-dog-with-professional-1-5.png",
    },
    {
      name: "Dog walker 3",
      location: "Abu dhabi",
      rating: 3.7,
      reviews: 26,
      image:
        "https://i.postimg.cc/fyydF774/haircuting-process-small-dog-sits-table-dog-with-professional-1-6.png",
    },
    {
      name: "Dog walker 4",
      location: "Dubai",
      rating: 5,
      reviews: 17,
      image: "https://i.postimg.cc/QMDTsZgJ/Mask-group.png",
    },
    {
      name: "Dog walker 5",
      location: "Dubai",
      rating: 3.3,
      reviews: 160,
      image:
        "https://i.postimg.cc/TPcW3NCM/haircuting-process-small-dog-sits-table-dog-with-professional-1-4.png",
    },
    {
      name: "Dog walker 6",
      location: "Dubai",
      rating: 4,
      reviews: 240,
      image:
        "https://i.postimg.cc/JzZk9zXh/haircuting-process-small-dog-sits-table-dog-with-professional-1-5.png",
    },
    {
      name: "Dog walker 7",
      location: "Dubai",
      rating: 4.1,
      reviews: 155,
      image: "https://i.postimg.cc/QMDTsZgJ/Mask-group.png",
    },
  ]);
  const [filters, setFilters] = useState([
    "All",
    "In my area",
    "Used",
    "Liked",
  ]);
  const [selectedFilter, setSelectedFilter] = useState("In my area");
  return (
    <View style={styles.container}>
      <PawAndText title={service.name} Component={() => <></>} />
      <View style={{ marginTop: 30 }}></View>
      <SearchAndFilter placeholder={"Search for a service"} />
      <View
        style={{ height: 85, justifyContent: "center", alignItems: "center" }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        
          contentContainerStyle={{ alignItems: "center" }}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {filters.map((el) => (
            <TouchableOpacity
              onPress={() => setSelectedFilter(el)}
              style={{
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                height: 38,
                marginRight: 25,
                borderRadius: 100,
                justifyContent: "center",
                backgroundColor:
                  selectedFilter === el ? Colors.PRIMARY : Colors.SECONDARY,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                {el}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.servicescontainer}>
        {services.map((el) => (
          <ServiceCard key={el.name} service={el} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    paddingTop: StatusBar.currentHeight+20,

    backgroundColor: "white",
  },
  servicescontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default Service;
