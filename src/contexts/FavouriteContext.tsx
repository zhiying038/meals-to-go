import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "contexts/AuthenticationContext";
import filter from "lodash/filter";

export type Props = {
  favourites: any[];
  addToFavourites: (value: any) => void;
  removeFromFavourites: (value: any) => void;
};

export const FavouriteContext = createContext<Props>(null);

export const FavouriteContextProvider: React.FC = (props) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuth();

  const onSaveFavourite = async (value, uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const onLoadFavourites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`favourites-${uid}`);
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
    if (user) {
      onLoadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      onSaveFavourite(favourites, user.uid);
    }
  }, [favourites, user]);

  const value = {
    favourites,
    addToFavourites: onAdd,
    removeFromFavourites: onRemove,
  };

  return <FavouriteContext.Provider value={value} {...props} />;
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a FavouriteContextProvider");
  }
  return context;
};
