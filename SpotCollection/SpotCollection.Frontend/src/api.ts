export interface ILocation {
  id: number;
  name: string;
  country: string;
  description: string;
  recommendedBook: string;
  image: string;
  favoriteRoute: string;
}

export interface IDescription {
  id: number;
  name: string;
  description: string;
}

export const getLocations = async () => {
  const locations: ILocation[] = await fetch(
    "http://localhost:5080/api/Locations"
  )
    .then((response) => response.json())
    .then((data) => data);
  return locations;
};

export const addLocation = async (addedLocation: Partial<ILocation>) => {
  const added = await fetch("http://localhost:5080/api/Locations", {
    method: "POST",
    body: JSON.stringify(addedLocation),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyDescription = async (addedDescription: IDescription) => {
  const request = {
    name: addedDescription.name,
    description: addedDescription.description,
  };
  
  const added = await fetch(
    `http://localhost:5080/api/Locations/${addedDescription.id}/description`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyImage = async (addedDescription: IDescription) => {
  const request = {
    name: addedDescription.name,
    description: addedDescription.description,
  };

  const added = await fetch(
    `http://localhost:5080/api/Locations/${addedDescription.id}/description`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyRoute = async (addedDescription: IDescription) => {
  const request = {
    name: addedDescription.name,
    description: addedDescription.description,
  };

  const added = await fetch(
    `http://localhost:5080/api/Locations/${addedDescription.id}/description`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};

export const modifyBook = async (addedDescription: IDescription) => {
  const request = {
    name: addedDescription.name,
    description: addedDescription.description,
  };

  const added = await fetch(
    `http://localhost:5080/api/Locations/${addedDescription.id}/description`,
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return added;
};
