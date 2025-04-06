interface IParkings {
  image: string;
  name: string;
  numberOfPlaces: number;
  openingTime: string;
  closingTime: string;
  pricePerHour: number;
}

export const parkings: IParkings[] = [
  {
    image: "/assets/parkingplace.png",
    name: "Split Riva",
    numberOfPlaces: 200,
    openingTime: "06:00",
    closingTime: "23:00",
    pricePerHour: 5,
  },
  {
    image: "/assets/parkingplace.png",
    name: "Split Gripe",
    numberOfPlaces: 120,
    openingTime: "06:00",
    closingTime: "22:00",
    pricePerHour: 3,
  },
  {
    image: "/assets/parkingplace.png",
    name: "Split Lora",
    numberOfPlaces: 270,
    openingTime: "08:00",
    closingTime: "21:00",
    pricePerHour: 3,
  },
];
