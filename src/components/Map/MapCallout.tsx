import React from "react";
import { CompactRestaurantInfo } from "components/CompactRestaurantInfo";
import { RestaurantInfoProps } from "components/RestaurantInfo";

type Props = {
  restaurant: RestaurantInfoProps;
};

const MapCalloutComponent: React.FC<Props> = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};

export default MapCalloutComponent;
