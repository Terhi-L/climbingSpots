import { FC, useState } from "react";
import { IBook, IDescription, IImage, ILocation, IRoute } from "../interfaces";
import AddLocation from "./AddLocation";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import ModifyLocation from "./ModifyLocation";
import Gallery from "./Gallery";
import "./Body.css";
import romsdal from "../images/romsdal.jpeg";

type addLocationProps = {
  addLocation: (loc: Partial<ILocation>) => void;
  addDescription: (desc: IDescription) => void;
  addBook: (book: IBook) => void;
  addRoute: (book: IRoute) => void;
  addImage: (book: IImage) => void;
  locations: ILocation[];
};

const Header: FC<addLocationProps> = ({
  addLocation,
  addDescription,
  addBook,
  addRoute,
  addImage,
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

  const displayLocations = () => {
    setDisplay(!display);
  };

  return (
    <>
      <header>
        <img src={romsdal} alt="" />
        <section className="besideImage">
          <h1>Favourite Climbing Spots -Collection</h1>
          <p className="headerDescription">
            A collection of favorite climbing spots along with a collection of
            favorite wall at each location.
            <br />
            Add yours in and let's share our best tips!
          </p>
        </section>
      </header>
      <main>
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
              <Route path="/" element={<Outlet />} />
            </Routes>
          </BrowserRouter>
        </nav>
        {display && <Gallery locations={locations} />}
      </main>
    </>
  );
};

export default Header;
