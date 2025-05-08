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