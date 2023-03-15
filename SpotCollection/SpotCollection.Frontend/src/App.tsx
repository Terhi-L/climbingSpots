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
          return (`${x.name}, ${x.country}`);
        })}
        <br/>
        <br/>
        {location.find(x => x.id == 1)?.description}
      </p>
      <br />
    </>
  );
}

export default App;
