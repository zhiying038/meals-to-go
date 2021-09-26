import React from "react";
import { SafeAreaView } from "react-native";
import { RestaurantInfo } from "components/RestaurantInfo";
import { Props } from "./Props";

const RestaurantDetailScreen: React.FC<Props> = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeAreaView>
      <RestaurantInfo restaurant={restaurant} />
    </SafeAreaView>
  );
};

export const RestaurantDetail = RestaurantDetailScreen;
export default RestaurantDetail;
