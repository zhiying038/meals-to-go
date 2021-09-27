import React, { createContext, useState, useEffect } from "react";
import filter from "lodash/filter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Props = {
  favourites: any[];
  addToFavourites: (value: any) => void;
  removeFromFavourites: (value: any) => void;
};

export const FavouriteContext = createContext<Props>(null);

export const FavouriteContextProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const onSaveFavourite = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("favourites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const onLoadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onAdd = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const onRemove = (restaurant) => {
    const newFavourites = filter(
      favourites,
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    onLoadFavourites();
  }, []);

  useEffect(() => {
    onSaveFavourite(favourites);
  }, [favourites]);

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourites: onAdd,
        removeFromFavourites: onRemove,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
