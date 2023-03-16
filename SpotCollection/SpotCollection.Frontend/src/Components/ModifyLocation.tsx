import { FC, SyntheticEvent } from "react";
import { IDescription } from "../api";

type modifyProps = {
  addDescription: (desc: IDescription) => void;
};

const ModifyLocation: FC<modifyProps> = ({ addDescription }) => {
  const addLocation = (e: SyntheticEvent) => {
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

    console.log(newDesc);
    addDescription(newDesc);
  };

  return (
    <>
      <form onSubmit={addLocation}>
        <label>Id of Location:</label>
        <input type="text" name="id"></input>
        <label>Name of Location:</label>
        <input type="text" name="name"></input>
        <label>Description:</label>
        <input type="text" name="description"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default ModifyLocation;
