import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { MapSearch, MapCallout } from "components/Map";
import { tw } from "config/tailwind";
import { LocationContext } from "contexts/LocationContext";
import { RestaurantsContext } from "contexts/RestaurantsContext";

const MapScreen: React.FC = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <MapView
        style={tw("h-full w-full")}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};

export const Map = MapScreen;
export default Map;
