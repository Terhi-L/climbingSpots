import { FC } from "react";
import { ILocation } from "../interfaces";

type Locationprops = {
  locations: ILocation[];
};

const Location: FC<Locationprops> = ({ locations }) => {

  return (
    <>
     {locations.map((x) => (
        <p key={x.id}>
          {x.name}, {x.country}
        </p>
      ))}
      {locations.map((x) => (
        <section key={x.id}>
          <h4>
            {x.name}, {x.country}
          </h4>
          <h5>Description:</h5>
          <p>{x.description}</p>
          <p>Recommended book: {x.recommendedBook}</p>
          <p>Favourite route: {x.favoriteRoute}</p>
        </section>
      ))}
    </>
  );
};

export default Location;
