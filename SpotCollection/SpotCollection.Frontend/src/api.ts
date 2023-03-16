export interface ILocation {
  id: number;
  name: string;
  country: string;
  description: string;
  recommendedBook: string;
  image: string;
  favoriteRoute: string;
}

export const getLocations = async () => {
  const locations : ILocation[] = await fetch("http://localhost:5080/api/Locations")
    .then((response) => response.json())
    .then(data => data);
  return locations;
};

/* export const addLocations = async () => {
  const locations : ILocation[] = await fetch("http://localhost:5080/api/Locations")
    .then((response) => response.json())
    .then(data => data);
  return locations;
};

 */