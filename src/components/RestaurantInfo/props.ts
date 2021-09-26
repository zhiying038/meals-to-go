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
  geometry: GeometryProps;
};

export type GeometryProps = {
  location: Coordinates;
  viewport: { northeast: Coordinates; southwest: Coordinates };
};

export type Coordinates = {
  lat: number;
  lng: number;
};
