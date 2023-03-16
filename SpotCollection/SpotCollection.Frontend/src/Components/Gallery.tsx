import { FC, useRef, useState } from "react";
import Location from "./Location";
import { ILocation } from "../interfaces";

type Locationprops = {
  locations: ILocation[];
};

const Gallery: FC<Locationprops> = ({ locations }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newLocations, setNewLocations] = useState<ILocation[]>(locations);
  /*     Gallery: Lists all locations of country
   */
  const selection = () => {
    const inputVal = inputRef.current?.value;
    locations.map((x) => {
      if (x.name === inputVal) {
        setNewLocations([x]);
      }
    });
  };

  return (
    <main>
      <input
        list="suggestions"
        type="Search"
        placeholder="Search locations"
        ref={inputRef}
      ></input>
      <datalist id="suggestions">
        {locations.map((x) => (
          <option key={x.id} value={x.name}></option>
        ))}
      </datalist>
      <button onClick={selection}></button>

      <h3>Locations:</h3>
      <Location locations={newLocations} />
      <br />
      <br />
      {/*  {
        locations
          .find((x) => x.id === 1)
          ?.description.split("pros!")[1]
          .split("Type")[0]
      }
      <br />
      <br />
      {locations.find((x) => x.id === 1)?.description.split("months.")[1]}
      <br />
      <br />
      Favorite route: {locations.find((x) => x.id == 1)?.favoriteRoute} */}
      <br />
    </main>
  );
};

export default Gallery;
