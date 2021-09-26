import React from "react";
import { Text, View, Image } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import classnames from "classnames";
import { tw } from "config/tailwind";
import { Props, RestaurantProps } from "./props";
import { useStyles } from "./styles";

const RestaurantInfoComponent: React.FC<Props> = (props) => {
  const { restaurant, className } = props;
  const { name, photos, vicinity, rating, isOpen, isClosedTemporarily } =
    restaurant || {};

  const { wrapperShadowStyles, shopClosedStyles } = useStyles();

  return (
    <View
      style={[
        tw(classnames("bg-white p-4", className)),
        wrapperShadowStyles,
        isClosedTemporarily || !isOpen ? shopClosedStyles : null,
      ]}
    >
      <Image source={{ uri: photos?.[0], height: 150 }} resizeMode="cover" />
      <View style={tw("py-2")}>
        <View style={tw("flex-row")}>
          <Text style={tw("text-primary text-base font-semibold flex-grow")}>
            {name}
          </Text>
          <Text
            style={tw(
              `flex-grow-0 text-white text-base px-2 ${
                isOpen && !isClosedTemporarily ? "bg-success" : "bg-error"
              }`
            )}
          >
            {isOpen && !isClosedTemporarily ? "Open" : "Closed"}
          </Text>
        </View>

        <View style={tw("flex-row items-start justify-start")}>
          <AirbnbRating
            defaultRating={rating}
            showRating={false}
            size={20}
            isDisabled={true}
          />
        </View>

        <Text style={tw("text-sm")}>{vicinity}</Text>
      </View>
    </View>
  );
};

export const RestaurantInfo = RestaurantInfoComponent;
export type RestaurantInfoProps = RestaurantProps;
export default RestaurantInfo;
