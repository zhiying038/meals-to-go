import { ReactNode } from "react";

export type Props = {
  restaurant?: RestaurantProps;
  className?: string;
};

export type RestaurantProps = {
  name: string;
  icon?: ReactNode;
  photos: string[];
  vicinity: string;
  isOpen: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
