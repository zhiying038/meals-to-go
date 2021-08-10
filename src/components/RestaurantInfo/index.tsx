import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Props } from "./props";

const RestaurantInfoComponent: React.FC<Props> = (props) => {
  const { restaurant } = props;
  const { name, photos } = restaurant || {};

  return (
    <View style={styles.card}>
      <View style={styles.innerCard}>
        <Image source={{ uri: photos?.[0] }} style={styles.image} />
      </View>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: "white",
  },
  image: {
    height: 150,
    padding: 20,
    resizeMode: "stretch",
  },
  innerCard: {
    padding: 15,
  },
  title: {
    padding: 16,
  },
});

RestaurantInfoComponent.defaultProps = {
  restaurant: {
    name: "Some Restaurant",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 Some random street",
    isOpen: true,
    rating: 3,
    isClosedTemporarily: false,
  },
};

export const RestaurantInfo = RestaurantInfoComponent;
export default RestaurantInfo;
