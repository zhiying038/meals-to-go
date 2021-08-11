import React from "react";
import { Text, View, Image } from "react-native";
import classnames from "classnames";
import { tw } from "config/tailwind";
import { Props } from "./props";
import { useStyles } from "./styles";

const RestaurantInfoComponent: React.FC<Props> = (props) => {
  const { restaurant, className } = props;
  const { name, photos, address } = restaurant || {};

  const { wrapperShadowStyles } = useStyles();

  return (
    <View
      style={[
        tw(classnames("bg-white px-4 pt-4", className)),
        wrapperShadowStyles,
      ]}
    >
      <Image source={{ uri: photos?.[0], height: 150 }} resizeMode="cover" />
      <View style={tw("py-2")}>
        <Text style={tw("text-primary text-base font-semibold")}>{name}</Text>
        <Text style={tw("text-sm")}>{address}</Text>
      </View>
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
