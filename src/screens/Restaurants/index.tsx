import React, { useState } from "react";
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "components/RestaurantInfo";
import { tw } from "config/tailwind";

const RestaurantsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

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
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
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
