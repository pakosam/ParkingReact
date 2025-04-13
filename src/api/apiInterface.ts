export interface IParkings {
  image?: string;
  name: string;
  numberOfPlaces: number;
  openingTime: string;
  closingTime: string;
  pricePerHour: number;
}

export interface IEmployees {
  image?: string;
  fullName: string;
  birthDate: string;
  parkingId: number;
}
