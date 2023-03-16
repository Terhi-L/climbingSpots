import { FC, SyntheticEvent, useState } from "react";
import { ILocation } from "../interfaces";

type addLocationProps = {
  location: (loc: Partial<ILocation>) => void;
};

const AddLocation: FC<addLocationProps> = ({ location }) => {

  const addLocation = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      country: { value: string };
      description: { value: string };
      recommendedBook: { value: string };
      image: { value: string };
      favoriteRoute: { value: string };
    };

    const newLocation: Partial<ILocation> = {
      id: 0,
      name: target.name.value,
      country: target.country.value,
      description: target.description.value,
      recommendedBook: target.recommendedBook.value,
      image: target.image.value,
      favoriteRoute: target.favoriteRoute.value,
    };
    location(newLocation);
  };

  return (
    <>
      <form onSubmit={addLocation}>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Country of location:</label>
        <input type="text" name="country"></input>
        <label>Description:</label>
        <input type="text" name="description"></input>
        <label>Would you like to recommend a book?</label>
        <input type="text" name="recommendedBook"></input>
        <label>Feel free to share an image address:</label>
        <input type="text" name="image"></input>
        <label>What is your favourite climbing route?</label>
        <input type="text" name="favoriteRoute"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default AddLocation;
