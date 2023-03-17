import { FC } from "react";
import { ILocation } from "../interfaces";
import "./Body.css";

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
        <section className="locationBox" key={x.id}>
          <div>
          <h4 className="locationHeader">
            {x.name}, {x.country}
          </h4>
          <p>
            {" "}
            <span className="title">Description:</span>
            <br />
            <br />
            {x.description}
          </p>
          <p>
            <span className="title">Recommended book:</span> {x.recommendedBook}
          </p>
          <p>
            <span className="title">Favourite route:</span> {x.favoriteRoute}
          </p>
          </div>
          <div className="imgBorder">
          <img className={x.name} src={x.image} alt="" />
          </div>
        </section>
      ))}
    </>
  );
};

export default Location;
