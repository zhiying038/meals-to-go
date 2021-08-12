import React, { useState, useContext } from "react";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "components/RestaurantInfo";
import { tw } from "config/tailwind";
import { RestaurantsContext } from "contexts/RestaurantsContext";

const RestaurantsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const restaurantContext = useContext(RestaurantsContext);

  const onChangeSearch = (query: string) => {
    setSearchText(query);
  };

  return (
    <SafeAreaView
      style={[tw("flex-1"), { marginTop: StatusBar.currentHeight }]}
    >
      <View style={tw("p-4")}>
        <Searchbar
          value={searchText}
          onChange={(e) => onChangeSearch(e.nativeEvent.text)}
          placeholder="Search..."
        />
      </View>
      <FlatList
        data={restaurantContext.restaurant}
        renderItem={() => (
          <View style={tw("mb-4")}>
            <RestaurantInfo />
          </View>
        )}
        keyExtractor={(item) => item.name.toString()}
        contentContainerStyle={tw("p-4")}
      />
    </SafeAreaView>
  );
};

export const Restaurants = RestaurantsScreen;
export default Restaurants;
