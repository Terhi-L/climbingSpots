import { FC, SyntheticEvent, useState } from "react";
import { IBook, IDescription, IImage, ILocation, IRoute } from "../interfaces";

type modifyProps = {
  addDescription: (desc: IDescription) => void;
  addBook: (book: IBook) => void;
  addRoute: (book: IRoute) => void;
  addImage: (book: IImage) => void;
  locations: ILocation[];
};

const ModifyLocation: FC<modifyProps> = ({
  addDescription,
  addBook,
  addRoute,
  addImage,
  locations,
}) => {
  const [descSuccess, setDescSuccess] = useState<boolean>(false);
  const [bookSuccess, setBookSuccess] = useState<boolean>(false);
  const [imageSuccess, setImageSuccess] = useState<boolean>(false);
  const [routeSuccess, setRouteSuccess] = useState<boolean>(false);
  const [descError, setDescError] = useState<boolean>(false);
  const [bookError, setBookError] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [routeError, setRouteError] = useState<boolean>(false);

  const addDesc = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      name: { value: string };
      description: { value: string };
    };

    const newDesc: IDescription = {
      id: target.id.value,
      name: target.name.value,
      description: target.description.value,
    };

    if (target.name.value === "" || target.description.value === "") {
      setDescError(true);
      const timer = setTimeout(() => {
        setDescError(false);
      }, 2500);
      return () => clearTimeout(timer);
    }

    addDescription(newDesc);
    setDescSuccess(true);
    const timer = setTimeout(() => {
      setDescSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  const addNewBook = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      name: { value: string };
      recommendedBook: { value: string };
    };

    const newBook: IBook = {
      id: target.id.value,
      name: target.name.value,
      recommendedBook: target.recommendedBook.value,
    };

    if (target.name.value === "" || target.recommendedBook.value === "") {
      setBookError(true);
      const timer = setTimeout(() => {
        setBookError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    addBook(newBook);
    setBookSuccess(true);
    const timer = setTimeout(() => {
      setBookSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  const addNewRoute = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      name: { value: string };
      favoriteRoute: { value: string };
    };

    const newRoute: IRoute = {
      id: target.id.value,
      name: target.name.value,
      favoriteRoute: target.favoriteRoute.value,
    };

    if (target.name.value === "" || target.favoriteRoute.value === "") {
      setRouteError(true);
      const timer = setTimeout(() => {
        setRouteError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    addRoute(newRoute);
    setRouteSuccess(true);
    const timer = setTimeout(() => {
      setRouteSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  const addNewImage = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      name: { value: string };
      image: { value: string };
    };

    const newImage: IImage = {
      id: target.id.value,
      name: target.name.value,
      image: target.image.value,
    };

    if (target.name.value === "" || target.image.value === "") {
      setImageError(true);
      const timer = setTimeout(() => {
        setImageError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    addImage(newImage);
    setImageSuccess(true);
    const timer = setTimeout(() => {
      setImageSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <h3>Add a description:</h3>
      <form onSubmit={addDesc}>
        <label>Id of Location:</label>
        <input type="text" name="id" list="suggestions"></input>
        <datalist id="suggestions">
          {locations.map((x) => (
            <option key={x.id} value={`${x.name}: ${x.id}`}></option>
          ))}
        </datalist>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Description:</label>
        <input type="text" name="description"></input>
        <input className="submitButton" type="submit"></input>
      </form>
      {descSuccess && <p>✅ Success!</p>}
      {descError && (
        <p className="error">
          All fields are required - and make sure the Id is a number.
        </p>
      )}

      <h3>Recommend a book:</h3>
      <form onSubmit={addNewBook}>
        <label>Id of Location:</label>
        <input type="text" name="id" list="suggestions"></input>
        <datalist id="suggestions">
          {locations.map((x) => (
            <option key={x.id} value={`${x.name}: ${x.id}`}></option>
          ))}
        </datalist>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Book to recommend:</label>
        <input type="text" name="recommendedBook"></input>
        <input className="submitButton" type="submit"></input>
      </form>
      {bookSuccess && <p>✅ Success!</p>}
      {bookError && (
        <p className="error">
          All fields are required - and make sure the Id is a number.
        </p>
      )}

      <h3>Your favourite climbing route:</h3>
      <form onSubmit={addNewRoute}>
        <label>Id of Location:</label>
        <input type="text" name="id" list="suggestions"></input>
        <datalist id="suggestions">
          {locations.map((x) => (
            <option key={x.id} value={`${x.name}: ${x.id}`}></option>
          ))}
        </datalist>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Your best crag:</label>
        <input type="text" name="favoriteRoute"></input>
        <input className="submitButton" type="submit"></input>
      </form>
      {routeSuccess && <p>✅ Success!</p>}
      {routeError && (
        <p className="error">
          All fields are required - and make sure the Id is a number.
        </p>
      )}

      <h3>Add/change image:</h3>
      <form onSubmit={addNewImage}>
        <label>Id of Location:</label>
        <input type="text" name="id" list="suggestions"></input>
        <datalist id="suggestions">
          {locations.map((x) => (
            <option key={x.id} value={`${x.name}: ${x.id}`}></option>
          ))}
        </datalist>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Image to Add:</label>
        <input type="text" name="image"></input>
        <input className="submitButton" type="submit"></input>
      </form>
      {imageSuccess && <p>✅ Success!</p>}
      {imageError && (
        <p className="error">
          All fields are required - and make sure the Id is a number.
        </p>
      )}
    </>
  );
};

export default ModifyLocation;
