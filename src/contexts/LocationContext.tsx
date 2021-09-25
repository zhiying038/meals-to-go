import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "services/location.service";

export type ContextProps = {
  isLoading: boolean;
  location: string;
  error: string;
  onSearchQuery: (value: string) => void;
  keyword: string;
};

export const LocationContext = React.createContext(null);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("san francisco");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [location, setLocation] = useState(null);

  const onSearchQuery = (searchWord = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchWord);
    locationRequest(searchWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearchQuery();
  }, []);

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
