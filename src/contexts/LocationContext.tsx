import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "services/location.service";

export type ContextProps = {
  isLoading: boolean;
  location: { lat: number; lng: number; viewport: any };
  error: string;
  onSearchQuery: (value: string) => void;
  keyword: string;
};

export const LocationContext = React.createContext<ContextProps>(null);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("San Francisco");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [location, setLocation] = useState(null);

  const onSearchQuery = (searchWord: string) => {
    setIsLoading(true);
    setKeyword(searchWord);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        onSearchQuery,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
