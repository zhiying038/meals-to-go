import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { tw } from "config/tailwind";
import { LocationContext } from "contexts/LocationContext";

const SearchComponent: React.FC = () => {
  const { keyword, onSearchQuery } = useContext(LocationContext);
  const [searchText, setSearchText] = useState<string>(keyword);

  return (
    <View style={tw("p-4")}>
      <Searchbar
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

export const Search = SearchComponent;
export default Search;
