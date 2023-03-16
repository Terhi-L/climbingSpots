import { useEffect, useState } from "react";
import "./App.css";
import { getLocations, ILocation } from "./api";
import Location from './components/Location';
import Header from './components/Header';
import AddLocation from './components/AddLocation';

function App() {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const fetchData = async () => {
    const locations = await getLocations();
    setLocations(locations);
    console.log(locations);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <AddLocation/>
      <Location locations={locations}/>
    </>
  );
}

export default App;
