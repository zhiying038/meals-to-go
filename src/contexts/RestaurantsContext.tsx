import React from "react";
import { RestaurantInfoProps } from "components/RestaurantInfo";

export type ContextProps = {
  restaurant: RestaurantInfoProps[];
};

export const RestaurantsContext = React.createContext<ContextProps>(null);

export const RestaurantsContextProvider = (props) => {
  const { children } = props;

  return (
    <RestaurantsContext.Provider
      value={{
        restaurant: [
          {
            name: "Some Restaurant",
            photos: [
              "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
            ],
            address: "100 Some random street",
            isOpen: true,
            rating: 3,
            isClosedTemporarily: false,
          },
        ],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
