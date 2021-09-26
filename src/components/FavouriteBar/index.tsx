import React from "react";
import { TouchableOpacity, View, ScrollView, Text } from "react-native";
import map from "lodash/map";
import CompactRestaurantInfo from "components/CompactRestaurantInfo";
import { tw } from "config/tailwind";
import { Props } from "./props";

const FavouriteBarComponent: React.FC<Props> = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <View style={tw("p-4")}>
      <Text style={tw("font-bold text-lg")}>Favourites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {map(favourites, (restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("restaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const FavouriteBar = FavouriteBarComponent;
export default FavouriteBar;
