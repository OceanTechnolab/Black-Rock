import React from "react";
import Product1 from "@/components/Product/WallCollection";
import Product2 from "@/components/Product/Product2";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import Data from "@/components/Product/Wall/Ceramic/200x300mm-ceramic-wall";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "Products", href: "/products", active: false },
      { label: "Wall", href: "/products/wall", active: false },
      { label: "Ceramic", href: "/products/wall/ceramic", active: false },
      { label: "200 X 300 MM", active: true },
    ]}
  />
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      {/* <div className="container">200 by 300 MM</div> */}
      <Data />

    </>
  );
};

export default page;

export const metadata = {
  title:
    "Explore Glossy, Matte, and High-Glossy Tiles at Blackrock",
  description: `Browse Blackrock Porcelano’s wide selection of tiles, including Glossy, Matt, and High Glossy finishes. Perfect for floors, walls, kitchens, and bathrooms, combining style and durability.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/product`,
  },
};
