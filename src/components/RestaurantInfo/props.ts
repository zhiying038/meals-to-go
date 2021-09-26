export type Props = {
  restaurant?: RestaurantProps;
  className?: string;
};

export type RestaurantProps = {
  name: string;
  icon: string;
  photos: string[];
  vicinity: string;
  isOpen: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
