import React, { useState, createContext, useEffect } from "react";
import { RestaurantInfoProps } from "components/RestaurantInfo";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "services/restaurant.service";

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

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

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
