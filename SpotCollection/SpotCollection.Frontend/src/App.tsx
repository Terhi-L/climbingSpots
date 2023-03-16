import { useEffect, useState } from "react";
import "./App.css";
import { getLocations, ILocation } from "./api";

function App() {
  const [location, setLocation] = useState<ILocation[]>([]);

  const fetchData = async () => {
    const locations = await getLocations();
    setLocation(locations);
    console.log(locations);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>
        {location.map((x) => {
          return `${x.name}, ${x.country}`;
        })}
        <br />
        <br />
        {location.find((x) => x.id == 1)?.description.split("Recommended")[0]}
        <br />
        <br />
        {
          location
            .find((x) => x.id == 1)
            ?.description.split("pros!")[1]
            .split("Type")[0]
        }
        <br />
        <br />
        {location.find((x) => x.id == 1)?.description.split("months.")[1]}
        <br />
        <br />
        Favorite route: {location.find((x) => x.id == 1)?.favoriteRoute}
      </p>
      <br />
    </>
  );
}

export default App;
