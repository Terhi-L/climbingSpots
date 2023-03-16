import { FC, useState } from "react";
import { IDescription, ILocation } from "../api";
import AddLocation from "./AddLocation";
import Location from "./Location";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import App from "../App";
import ModifyLocation from "./ModifyLocation";

type addLocationProps = {
  addLocation: (loc: Partial<ILocation>) => void;
  addDescription: (desc: IDescription) => void;
  locations: ILocation[];
};

const Header: FC<addLocationProps> = ({ addLocation, addDescription, locations }) => {
  const [display, setDisplay] = useState<boolean>(true);
  const postData = async (addedLocation: Partial<ILocation>) => {
    addLocation(addedLocation);
  };

  const putDesc = async (desc: IDescription) => {
    addLocation(desc);
  };

  const displayLocations = () => {
    setDisplay(!display);
  };

  return (
    <>
      <h1>Favourite Climbing Spots -Collection</h1>
      <p>
        A collection of favorite climbing spots along with a collection of
        favorite wall at each location.
        <br />
        Add yours in and let's share our best tips!
      </p>
      <nav>
        <BrowserRouter>
          {display && (
            <Link to="/addlocation" onClick={displayLocations}>
              Add a location
            </Link>
          )}
          <br />
          {display && (
            <Link to="/modifylocation" onClick={displayLocations}>
              Modify a location
            </Link>
          )}
          {!display && (
            <Link to="/" onClick={displayLocations}>
              Hide form
            </Link>
          )}
          <Routes>
            <Route
              path="/addlocation"
              element={<AddLocation location={postData} />}
            />
            <Route path="/modifylocation" element={<ModifyLocation addDescription={putDesc}/>} />
            <Route path="/" element={<Outlet />} />
          </Routes>
        </BrowserRouter>
      </nav>
      {display && <Location locations={locations} />}
    </>
  );
};

export default Header;
