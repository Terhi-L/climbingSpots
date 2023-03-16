import { FC, SyntheticEvent } from "react";
import { IBook, IDescription, IImage, IRoute } from "../api";

type modifyProps = {
  addDescription: (desc: IDescription) => void;
  addBook: (book: IBook) => void;
  addRoute: (book: IRoute) => void;
  addImage: (book: IImage) => void;
};

const ModifyLocation: FC<modifyProps> = ({ addDescription, addBook, addRoute, addImage }) => {
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
    addDescription(newDesc);
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
    addBook(newBook);
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
    addRoute(newRoute);
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
    addImage(newImage);
  };

  return (
    <>
      <h3>Add a description:</h3>
      <form onSubmit={addDesc}>
        <label>Id of Location:</label>
        <input type="text" name="id"></input>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Description:</label>
        <input type="text" name="description"></input>
        <input type="submit"></input>
      </form>

      <h3>Recommend a book:</h3>
      <form onSubmit={addNewBook}>
        <label>Id of Location:</label>
        <input type="text" name="id"></input>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Book to recommend:</label>
        <input type="text" name="recommendedBook"></input>
        <input type="submit"></input>
      </form>

      <h3>Your favourite climbing route:</h3>
      <form onSubmit={addNewRoute}>
        <label>Id of Location:</label>
        <input type="text" name="id"></input>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Book to recommend:</label>
        <input type="text" name="favoriteRoute"></input>
        <input type="submit"></input>
      </form>

      <h3>Add/change image:</h3>
      <form onSubmit={addNewImage}>
        <label>Id of Location:</label>
        <input type="text" name="id"></input>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Book to recommend:</label>
        <input type="text" name="image"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default ModifyLocation;
