"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BiHotel } from "react-icons/bi";
import { GiShop, GiWindmill } from "react-icons/gi";
import { TbBottle, TbBuildingArch } from "react-icons/tb";

import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Restaurants",
    icon: BiHotel,
    description: "This property is close to the Restaurants!",
  },
  {
    label: "Hotel",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Clubs",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Bars",
    icon: TbBottle,
    description: "This property is in the countryside!",
  },
  {
    label: "Shopping Center",
    icon: TbBuildingArch,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Shops",
    icon: GiShop,
    description: "This property is on an island!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
