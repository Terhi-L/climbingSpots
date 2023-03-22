import { FC, useRef, useState } from "react";
import { Location } from "./Location";
import { ILocation } from "../interfaces";
import "./Body.css";

type Locationprops = {
  locations: ILocation[];
};

export const Gallery: FC<Locationprops> = ({ locations }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newLocations, setNewLocations] = useState<ILocation[]>([]);
  const [showSelection, setShowSelection] = useState<boolean>(false);

  const selection = () => {
    const inputVal = inputRef.current?.value;
    if (inputVal === "All") {
      setShowSelection(false);
      return;
    }

    locations.map((x) => {
      if (x.name === inputVal) {
        setNewLocations([x]);
      }
    });
    setShowSelection(true);
  };

  return (
    <section className="bodyText">
      <p>Search by location:</p>
      <input
        list="suggestions"
        type="Search"
        placeholder="Click for options"
        ref={inputRef}
      ></input>
      <datalist id="suggestions">
        <option key={0} value="All"></option>
        {locations.map((x) => (
          <option key={x.id} value={x.name}></option>
        ))}
      </datalist>
      <button onClick={selection}>Search</button>

      <h3>Locations:</h3>
      {showSelection && <Location locations={newLocations} />}
      {!showSelection && <Location locations={locations} />}
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
    </section>
  );
};

