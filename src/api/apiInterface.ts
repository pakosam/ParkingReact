export interface IParkings {
  id: number;
  image?: string;
  name: string;
  numberOfPlaces: number;
  openingTime: string;
  closingTime: string;
  pricePerHour: number;
}

export interface IEmployees {
  id: number;
  image?: string;
  fullName: string;
  birthDate: string;
  parkingId: number;
}

export interface ISignIn {
  username: string;
  password: string;
}

export interface IRegister {
  name: string;
  surname: string;
  birthdate: string;
  username: string;
  password: string;
}

export interface IDelete {
  id: number;
}

export interface IAddParking {
  name: string;
  numberOfPlaces: number;
  openingTime: string;
  closingTime: string;
  pricePerHour: number;
}

export interface IUpdateParking {
  id: number;
  name: string;
  numberOfPlaces: number;
  openingTime: string;
  closingTime: string;
  pricePerHour: number;
}

export interface IAddEmployee {
  name: string;
  surname: string;
  birthdate: string;
  username: string;
  password: string;
}

export interface IUpdateEmployee {
  id: number;
  name: string;
  surname: string;
  birthDate: string;
}