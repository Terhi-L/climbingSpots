import { FC } from "react";
import { ILocation } from "../api";

type Locationprops = {
    locations: ILocation[];
}

const Location: FC<Locationprops> = ({locations}) => {
/*     Location: Location can be hidden to view others
 */
return (
    <>
      <p>
        {locations.map((x) => {
          return `${x.name}, ${x.country}`;
        })}
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
      </p>
      <br />
    </>
  );
};

export default Location;
