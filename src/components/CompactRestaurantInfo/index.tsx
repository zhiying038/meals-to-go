import React from "react";
import { View, Image, Text, Platform } from "react-native";
import WebView from "react-native-webview";
import { RestaurantInfoProps } from "components/RestaurantInfo";
import { tw } from "config/tailwind";

type Props = {
  restaurant: RestaurantInfoProps;
};

const isAndroid = Platform.OS === "android";

const CompactInfoComponent: React.FC<Props> = ({ restaurant }) => {
  return (
    <View style={tw("max-w-xs items-center p-4")}>
      {!isAndroid ? (
        <Image
          style={tw("h-24 w-32 rounded-xl")}
          source={{ uri: restaurant.photos[0] }}
        />
      ) : (
        <WebView
          style={tw("h-24 w-32 rounded-xl")}
          source={{ uri: restaurant.photos[0] }}
        />
      )}
      <Text style={tw("text-center mt-2")} numberOfLines={3}>
        {restaurant.name}
      </Text>
    </View>
  );
};

export const CompactRestaurantInfo = CompactInfoComponent;
export default CompactRestaurantInfo;
