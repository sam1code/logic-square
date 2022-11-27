import { cafes, places } from "./data";

export const getCafesByQuery = (query: string) => {
  let result: {
    name: string;
    street_no: string;
    locality: string;
    postal_code: string;
    lat: string;
    long: string;
  }[] = [];
  cafes.forEach((cafe) => {
    if (cafe.name.toLowerCase().includes(query.toLowerCase())) {
      places.forEach((place) => {
        if (cafe.place_id === place.id) {
          result.push({
            name: cafe.name,
            street_no: place.street_no,
            locality: place.locality,
            postal_code: place.postal_code,
            lat: place.lat,
            long: place.long,
          });
        }
      });
    }
  });
  return result;
};
