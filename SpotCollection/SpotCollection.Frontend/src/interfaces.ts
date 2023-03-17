export interface ILocation {
    id: number;
    name: string;
    country: string;
    closestCity: string;
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
  
  export interface IImage {
    id: number;
    name: string;
    image: string;
  }
  
  export interface IBook {
    id: number;
    name: string;
    recommendedBook: string;
  }
  
  export interface IRoute {
    id: number;
    name: string;
    favoriteRoute: string;
  }