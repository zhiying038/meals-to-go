import { ReactNode } from "react";

export type Props = {
  restaurant?: RestaurantProps;
  className?: string;
};

export type RestaurantProps = {
  name: string;
  icon?: ReactNode;
  photos: string[];
  address: string;
  isOpen: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};