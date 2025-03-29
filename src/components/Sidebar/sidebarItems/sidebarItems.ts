import { CarIcon } from "../../../assets/icons/CarIcon";
import { PersonIcon } from "../../../assets/icons/PersonIcon";
import { JSX } from "react";

interface ISidebarItems {
  Icon: () => JSX.Element;
  url: string;
  name: string;
}

export const sidebarItems: ISidebarItems[] = [
  {
    Icon: PersonIcon,
    url: "/employees",
    name: "Employees",
  },
  {
    Icon: CarIcon,
    url: "/parkings",
    name: "Parkings",
  },
];
