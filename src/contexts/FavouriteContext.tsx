import React, { createContext, useState } from "react";
import filter from "lodash/filter";

export type Props = {
  favourites: any[];
  addToFavourites: (value: any) => void;
  removeFromFavourites: (value: any) => void;
};

export const FavouriteContext = createContext<Props>(null);

export const FavouriteContextProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

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
