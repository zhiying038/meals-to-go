import React, { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FavouriteBar } from "components/FavouriteBar";
import { RestaurantInfo } from "components/RestaurantInfo";
import { Search } from "components/Search";
import { tw } from "config/tailwind";
import { useFavourite } from "contexts/FavouriteContext";
import { useRestaurant } from "contexts/RestaurantsContext";
import { Props } from "./props";

const RestaurantsScreen: React.FC<Props> = ({ navigation }) => {
  const { restaurants, isLoading } = useRestaurant();
  const { favourites } = useFavourite();

  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      {isLoading && (
        <View style={tw("top-2/4 left-2/4 absolute")}>
          <ActivityIndicator
            size={50}
            style={tw("-ml-6")}
            animating
            color={Colors.blue300}
          />
        </View>
      )}

      <Search onToggle={() => setIsToggled(!isToggled)} isToggled={isToggled} />

      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("restaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <View style={tw("mb-4")}>
                <RestaurantInfo restaurant={item} />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name.toString()}
        contentContainerStyle={tw("p-4")}
      />
    </SafeAreaView>
  );
};

export const Restaurants = RestaurantsScreen;
export default Restaurants;
