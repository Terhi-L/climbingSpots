import { FC, useState } from "react";
import {
  IBook,
  IDelete,
  IDescription,
  IImage,
  ILocation,
  IRoute,
} from "../interfaces";
import { AddLocation } from "./AddLocation";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { ModifyLocation } from "./ModifyLocation";
import { Gallery } from "./Gallery";
import "./Body.css";
import romsdal from "../images/romsdal.jpeg";
import RemoveLocation from "./RemoveLocation";

type addLocationProps = {
  addLocation: (loc: Partial<ILocation>) => void;
  addDescription: (desc: IDescription) => void;
  addBook: (book: IBook) => void;
  addRoute: (route: IRoute) => void;
  addImage: (image: IImage) => void;
  deleteLocation: (loc: IDelete) => void;
  locations: ILocation[];
};

export const Header: FC<addLocationProps> = ({
  addLocation,
  addDescription,
  addBook,
  addRoute,
  addImage,
  deleteLocation,
  locations,
}) => {
  const [display, setDisplay] = useState<boolean>(true);

  const postData = async (addedLocation: Partial<ILocation>) => {
    addLocation(addedLocation);
  };

  const putDesc = async (desc: IDescription) => {
    addDescription(desc);
  };

  const putBook = async (book: IBook) => {
    addBook(book);
  };

  const putRoute = async (route: IRoute) => {
    addRoute(route);
  };

  const putImage = async (image: IImage) => {
    addImage(image);
  };

  const removeLoc = (removeSetup: IDelete) => {
    deleteLocation(removeSetup);
  };

  const displayLocations = () => {
    setDisplay(!display);
  };

  return (
    <>
      <header>
        <img src={romsdal} alt="" />
        <h1>
          Favourite Climbing Spots
          <br /> -Collection
        </h1>
      </header>
      <main>
        <p className="headerDescription">
          A collection of favorite climbing spots along with a collection of
          favorite wall at each location.
          <br />
          Add yours in and let's share our best tips!
        </p>
        <nav>
          <BrowserRouter>
            {display && (
              <Link
                className="addLink"
                to="/addlocation"
                onClick={displayLocations}
              >
                Add a location
              </Link>
            )}
            <br />
            <br />
            <div className="groupLinks">
              {display && (
                <Link
                  className="addLink"
                  to="/modifylocation"
                  onClick={displayLocations}
                >
                  Modify a location
                </Link>
              )}
              <br />
              <br />
              {display && (
                <Link
                  className="addLink"
                  to="/removelocation"
                  onClick={displayLocations}
                >
                  Remove a location
                </Link>
              )}
              {!display && (
                <Link className="addLink" to="/" onClick={displayLocations}>
                  Hide form
                </Link>
              )}
            </div>
            <Routes>
              <Route
                path="/addlocation"
                element={<AddLocation location={postData} />}
              />
              <Route
                path="/modifylocation"
                element={
                  <ModifyLocation
                    addBook={putBook}
                    addImage={putImage}
                    addRoute={putRoute}
                    addDescription={putDesc}
                    locations={locations}
                  />
                }
              />
              <Route
                path="/removelocation"
                element={
                  <RemoveLocation
                    deleteLocation={removeLoc}
                    locations={locations}
                  />
                }
              />
              <Route path="/" element={<Outlet />} />
            </Routes>
          </BrowserRouter>
        </nav>
        {display && <Gallery locations={locations} />}
      </main>
    </>
  );
};
