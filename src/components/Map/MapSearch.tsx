import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { tw } from "config/tailwind";
import { LocationContext } from "contexts/LocationContext";

const MapSearchComponent: React.FC = () => {
  const { keyword, onSearchQuery } = useContext(LocationContext);
  const [searchText, setSearchText] = useState<string>(keyword);

  useEffect(() => {
    setSearchText(keyword);
  }, [keyword]);

  return (
    <View style={tw("px-4 mt-12 absolute w-full z-50")}>
      <Searchbar
        icon="map"
        value={searchText}
        onSubmitEditing={() => {
          onSearchQuery(searchText);
        }}
        onChangeText={(text) => {
          setSearchText(text);
        }}
        placeholder="Search for a location"
      />
    </View>
  );
};

export const MapSearch = MapSearchComponent;
export default MapSearch;
