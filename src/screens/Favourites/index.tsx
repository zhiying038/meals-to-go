import React, { useContext } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import classnames from "classnames";
import { RestaurantInfo } from "components/RestaurantInfo";
import { FavouriteContext } from "contexts/FavouriteContext";
import { tw } from "config/tailwind";
import { Props } from "./props";

const FavouritesScreen: React.FC<Props> = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);

  return (
    <SafeAreaView
      style={[
        tw(
          classnames("flex-1", {
            "items-center justify-center": favourites.length === 0,
          })
        ),
        { marginTop: StatusBar.currentHeight },
      ]}
    >
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("restaurantDetail", { restaurant: item })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text style={tw("text-center")}>No favourites found</Text>
      )}
    </SafeAreaView>
  );
};

export const Favourites = FavouritesScreen;
export default Favourites;
