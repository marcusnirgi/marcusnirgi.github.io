import type { IconType } from "react-icons";
import { LuMail, LuCake, LuMapPin } from "react-icons/lu";

export type ProfileDetails = {
  icon: IconType;
  label: string;
  value: string;
};

export const profileTraits: ProfileDetails[] = [
  {
    icon: LuMail,
    label: "EMAIL",
    value: "marcusnirgi@gmail.com",
  },
  {
    icon: LuMapPin,
    label: "LOCATION",
    value: "Harjumaa, Estonia",
  },
  {
    icon: LuCake,
    label: "BIRTHDAY",
    value: "October 3, 2004",
  },
];
