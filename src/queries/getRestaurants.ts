import map from "lodash/map";
import camelize from "camelize-ts";
import { mocks } from "../services/data";

export const getRestaurants = (location: string) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Failed to find location");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: any) => {
  const mappedResults = map(results, (res) => {
    return {
      ...res,
      isOpen: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

export default { getRestaurants, restaurantsTransform };
