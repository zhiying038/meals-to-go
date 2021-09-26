import React, { useContext } from "react";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfo } from "components/RestaurantInfo";
import { Search } from "components/Search";
import { tw } from "config/tailwind";
import { RestaurantsContext } from "contexts/RestaurantsContext";

const RestaurantsScreen: React.FC = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

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

      <Search />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <View style={tw("mb-4")}>
              <RestaurantInfo restaurant={item} />
            </View>
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
