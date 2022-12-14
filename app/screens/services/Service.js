import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../components/PawAndText";
import SearchAndFilter from "../../components/SearchAndFilter";
import Colors from "../../utils/Colors";
import ServiceCard from "../../components/ServiceCard";

const Service = ({ route, navigation }) => {
  const service = route.params.service;
  const [services, setServices] = useState([
    {
      name: "Service 1",
      location: "Dubai",
      rating: 4,
      reviews: 210,
      image:
        "https://i.postimg.cc/TPcW3NCM/haircuting-process-small-dog-sits-table-dog-with-professional-1-4.png",
    },
    {
      name: "Service 2",
      location: "Dubai",
      rating: 4.3,
      reviews: 4,
      image:
        "https://i.postimg.cc/JzZk9zXh/haircuting-process-small-dog-sits-table-dog-with-professional-1-5.png",
    },
    {
      name: "Service 3",
      location: "Abu dhabi",
      rating: 3.7,
      reviews: 26,
      image:
        "https://i.postimg.cc/fyydF774/haircuting-process-small-dog-sits-table-dog-with-professional-1-6.png",
    },
    {
      name: "Service 4",
      location: "Dubai",
      rating: 5,
      reviews: 17,
      image: "https://i.postimg.cc/QMDTsZgJ/Mask-group.png",
    },
    {
      name: "Service 5",
      location: "Dubai",
      rating: 3.3,
      reviews: 160,
      image:
        "https://i.postimg.cc/TPcW3NCM/haircuting-process-small-dog-sits-table-dog-with-professional-1-4.png",
    },
    {
      name: "Service 6",
      location: "Dubai",
      rating: 4,
      reviews: 240,
      image:
        "https://i.postimg.cc/JzZk9zXh/haircuting-process-small-dog-sits-table-dog-with-professional-1-5.png",
    },
    {
      name: "Service 7",
      location: "Dubai",
      rating: 4.1,
      reviews: 155,
      image: "https://i.postimg.cc/QMDTsZgJ/Mask-group.png",
    },
  ]);
  const [filters, setFilters] = useState([
    "All",
    "In my area",
    "Usedd",
    "Liksqed",
    "Lidsqked",
    "Liqsked",
  ]);
  const [selectedFilter, setSelectedFilter] = useState("In my area");
  return (
    <View style={styles.container}>
      <PawAndText title={service.name} Component={() => <></>} />
      <View style={{ marginVertical: 20 }}>
        <SearchAndFilter placeholder={"Search for a service"} />
      </View>
      <View style={styles.horizontalscroll}>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((el, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedFilter(el)}
              style={[
                styles.filteritem,

                {
                  backgroundColor:
                    selectedFilter === el ? Colors.PRIMARY : Colors.SECONDARY,
                    marginRight:index===filters.length-1?20:0

                },
              ]}
            >
              <Text style={styles.filteritemtxt}>{el}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.servicescontainer}
      >
        {services.map((el) => (
          <ServiceCard key={el.name} service={el} category={service}/>
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
    paddingTop: StatusBar.currentHeight + 20,

    backgroundColor: "white",
  },
  horizontalscroll: {
    height: 40,
    marginBottom: 10,
    marginHorizontal:-20,
    justifyContent: "center",
    alignItems: "center",
  },
  servicescontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  filteritem: {
    paddingHorizontal: 16,
    marginLeft:20,
    alignItems: "center",
    height: 38,
    
    borderRadius: 100,
    justifyContent: "center",
  },
  filteritemtxt: { color: "white", fontSize: 16, fontWeight: "500" },
});
export default Service;
