import React from "react";
import { View, Image, Text, Platform } from "react-native";
import WebView from "react-native-webview";
import { tw } from "config/tailwind";
import { Props } from "./props";

const isAndroid = Platform.OS === "android";

const CompactInfoComponent: React.FC<Props> = ({ restaurant, isMap }) => {
  return (
    <View style={tw("max-w-xs items-center p-4")}>
      {!isAndroid && !isMap ? (
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

CompactInfoComponent.defaultProps = {
  isMap: false,
};

export const CompactRestaurantInfo = CompactInfoComponent;
export default CompactRestaurantInfo;
