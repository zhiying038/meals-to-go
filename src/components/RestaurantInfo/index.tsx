import React from "react";
import { Text, View, Image } from "react-native";
import classnames from "classnames";
import { tw } from "config/tailwind";
import { Props } from "./props";

const RestaurantInfoComponent: React.FC<Props> = (props) => {
  const { restaurant, className } = props;
  const { name, photos } = restaurant || {};

  return (
    <View style={tw(classnames("bg-white px-4 pt-4", className))}>
      <Image source={{ uri: photos?.[0] }} style={[tw("p-4 h-40")]} />
      <Text style={tw("py-2 text-primary")}>{name}</Text>
    </View>
  );
};

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
