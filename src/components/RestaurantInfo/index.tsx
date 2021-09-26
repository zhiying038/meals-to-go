import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { SvgXml } from "react-native-svg";
import Open from "assets/open";
import { Favourites } from "components/Favourites";
import { tw } from "config/tailwind";
import { Props, RestaurantProps } from "./props";

const RestaurantInfoComponent: React.FC<Props> = ({ restaurant }) => {
  const { name, photos, rating, isClosedTemporarily, isOpen, icon, vicinity } =
    restaurant || {};

  return (
    <Card elevation={5}>
      <View style={tw("p-4")}>
        <View>
          <Favourites restaurant={restaurant} />
          <Image
            source={{ uri: photos?.[0], height: 150 }}
            resizeMode="cover"
          />
        </View>

        <View>
          <Text style={tw("text-primary text-base font-semibold mt-2")}>
            {name}
          </Text>
          <View style={tw("flex-row")}>
            <View style={tw("flex-grow items-start")}>
              <AirbnbRating
                defaultRating={rating}
                showRating={false}
                size={20}
                isDisabled={true}
              />
            </View>

            <View style={tw("justify-end flex-row items-center")}>
              {isClosedTemporarily && (
                <Text style={tw("text-error mr-2 text-xs tracking-tighter")}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              {isOpen && (
                <SvgXml xml={Open} width={20} height={20} style={tw("mr-2")} />
              )}
              <Image source={{ uri: icon, height: 15, width: 15 }} />
            </View>
          </View>
          <Text style={tw("mt-1")}>{vicinity}</Text>
        </View>
      </View>
    </Card>
  );
};

export const RestaurantInfo = RestaurantInfoComponent;
export type RestaurantInfoProps = RestaurantProps;
export default RestaurantInfo;
