import { FC } from "react";
import { ILocation } from "../interfaces";
import "./Body.css";
import { Weather } from "./Weather";

type Locationprops = {
  locations: ILocation[];
};

const Location: FC<Locationprops> = ({ locations }) => {
  return (
    <>
      {locations.map((x) => (
        <a href={`/#${x.id}`} key={x.id} className="jumpToLocation">
          {x.name}, {x.country}
          <br/>
        </a>
      ))}
      {locations.map((x) => (
        <section className="locationBox" key={x.id} id={`${x.id}`}>
          <div className="locationBox__text">
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
          <Weather locations={x}/>
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
