import React, { useState } from "react";
import { locationRequest, locationTransform } from "services/location.service";

export type ContextProps = {
  isLoading: boolean;
  location: string;
  error: string;
  onSearchQuery: (value: string) => void;
  keyword: string;
};

export const LocationContext = React.createContext<ContextProps>(null);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [location, setLocation] = useState(null);

  const onSearchQuery = (searchWord: string) => {
    setIsLoading(true);
    setKeyword(searchWord);

    if (!searchWord.length) {
      return;
    }

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
