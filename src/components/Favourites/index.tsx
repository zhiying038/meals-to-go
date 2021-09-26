import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import find from "lodash/find";
import { tw } from "config/tailwind";
import { FavouriteContext } from "contexts/FavouriteContext";
import { Props } from "./props";

const FavouritesComponent: React.FC<Props> = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const isFavourite = find(favourites, (r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      style={tw("absolute top-6 right-6 z-20")}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

export const Favourites = FavouritesComponent;
export default Favourites;
