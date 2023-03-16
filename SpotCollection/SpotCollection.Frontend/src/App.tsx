import { useEffect, useState } from "react";
import "./App.css";
import {
  addLocation,
  getLocations,
  IDescription,
  ILocation,
  modifyDescription,
} from "./api";
import Header from "./components/Header";

function App() {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const fetchData = async () => {
    const locations = await getLocations();
    setLocations(locations);
    console.log(locations);
  };

  const postData = async (addedLocation: Partial<ILocation>) => {
    const added = await addLocation(addedLocation);
    setLocations([...locations, added]);
  };

  const putDesc = async (desc: IDescription) => {
    const modified = await modifyDescription(desc);
    locations.map((x) => {
      if (x.id === modified.id) {
        x.description = modified.description;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header
        locations={locations}
        addLocation={postData}
        addDescription={putDesc}
      />
    </>
  );
}

export default App;
