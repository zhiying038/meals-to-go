import React, { useState, createContext, useEffect, useContext } from "react";
import { RestaurantInfoProps } from "components/RestaurantInfo";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "services/restaurant.service";
import { LocationContext } from "./LocationContext";

export type ContextProps = {
  restaurants: RestaurantInfoProps[];
  isLoading: boolean;
  error?: any;
};

export const RestaurantsContext = createContext<ContextProps>(null);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locate: string) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(locate)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
