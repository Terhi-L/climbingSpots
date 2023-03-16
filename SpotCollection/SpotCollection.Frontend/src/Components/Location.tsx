import { FC } from "react";
import { ILocation } from "../api";

type Locationprops = {
  locations: ILocation[];
};

const Location: FC<Locationprops> = ({ locations }) => {
  /*     Location: Location can be hidden to view others
   */
  return (
    <>
      <h3>Locations:</h3>
      {locations.map((x) => (
        <p key={x.id}>
          {x.name}, {x.country}
        </p>
      ))}
      <h4>Location Lofoten:</h4>
      {locations.find((x) => x.id == 1)?.name},{" "}
      {locations.find((x) => x.id == 1)?.country}
      <br />
      <br />
      {locations.find((x) => x.id == 1)?.description.split("Recommended")[0]}
      <br />
      <br />
      {
        locations
          .find((x) => x.id == 1)
          ?.description.split("pros!")[1]
          .split("Type")[0]
      }
      <br />
      <br />
      {locations.find((x) => x.id == 1)?.description.split("months.")[1]}
      <br />
      <br />
      Favorite route: {locations.find((x) => x.id == 1)?.favoriteRoute}
      <br />
    </>
  );
};

export default Location;
