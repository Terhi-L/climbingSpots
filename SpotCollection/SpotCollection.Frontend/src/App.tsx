import { useEffect, useState } from "react";
import "./App.css";
import {
  addLocation,
  getLocations,
  modifyBook,
  modifyDescription,
  modifyImage,
  modifyRoute,
} from "./api";
import { IBook, IDescription, IImage, ILocation, IRoute } from "./interfaces";
import Header from "./components/Header";

function App() {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const fetchData = async () => {
    const locations = await getLocations();
    setLocations(locations);
  };

  const postData = async (addedLocation: Partial<ILocation>) => {
    const added = await addLocation(addedLocation);
    setLocations([...locations, added]);
  };

  const putDesc = async (desc: IDescription) => {
    const modified = await modifyDescription(desc);
    locations.map((x) => {
      if (x.id === modified.id) {
        x.description = modified.description;
      }
    });
  };

  const putBook = async (book: IBook) => {
    const modified = await modifyBook(book);
    locations.map((x) => {
      if (x.id === modified.id) {
        x.recommendedBook = modified.recommendedBook;
      }
    });
  };

  const putRoute = async (route: IRoute) => {
    const modified = await modifyRoute(route);
    locations.map((x) => {
      if (x.id === modified.id) {
        x.favoriteRoute = modified.favoriteRoute;
      }
    });
  };

  const putImage = async (image: IImage) => {
    const modified = await modifyImage(image);
    locations.map((x) => {
      if (x.id === modified.id) {
        x.image = modified.image;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header
        locations={locations}
        addLocation={postData}
        addDescription={putDesc}
        addBook={putBook}
        addImage={putImage}
        addRoute={putRoute}
      />
    </>
  );
}

export default App;
