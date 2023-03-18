import { FC, SyntheticEvent, useEffect, useState } from "react";
import { IDelete, ILocation } from "../interfaces";

type removeLocationProps = {
  deleteLocation: (loc: IDelete) => void;
  locations: ILocation[];
};

const RemoveLocation: FC<removeLocationProps> = ({ deleteLocation, locations }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const removeLocation = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      name: { value: string };
    };

    if (target.name.value === "" || target.id.value == null) {
      setError(true);
      const timer = setTimeout(() => {
        setError(false);
      }, 2500);
      return () => clearTimeout(timer);
    }

    const removeSetup: IDelete = {
      id: target.id.value,
      name: target.name.value
    };

    deleteLocation(removeSetup);
    setSuccess(true);
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <form onSubmit={removeLocation}>
        <label>Id of Location:</label>
        <input type="text" name="id" list="suggestions"></input>
        <datalist id="suggestions">
          {locations.map((x) => (
            <option key={x.id} value={`${x.name}: ${x.id}`}></option>
          ))}
        </datalist>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <input className="submitButton" type="submit"></input>
      </form>
      {success && <p>✅ Success!</p>}
      {error && <p className="error">Name and Id are required</p>}
    </>
  );
};

export default RemoveLocation;
