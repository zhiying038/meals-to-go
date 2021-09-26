import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { tw } from "config/tailwind";
import { LocationContext } from "contexts/LocationContext";
import { Props } from "./props";

const SearchComponent: React.FC<Props> = ({ onToggle, isToggled }) => {
  const { keyword, onSearchQuery } = useContext(LocationContext);
  const [searchText, setSearchText] = useState<string>(keyword);

  useEffect(() => {
    onSearchQuery(searchText);
  }, [searchText]);

  return (
    <View style={tw("p-4")}>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onToggle}
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
