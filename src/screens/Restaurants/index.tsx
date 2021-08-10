import React, { useState } from "react";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "components/RestaurantInfo";

const RestaurantsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const onChangeSearch = (query: string) => {
    setSearchText(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          value={searchText}
          onChange={(e) => onChangeSearch(e.nativeEvent.text)}
          placeholder="Search..."
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});

export const Restaurants = RestaurantsScreen;
export default Restaurants;
