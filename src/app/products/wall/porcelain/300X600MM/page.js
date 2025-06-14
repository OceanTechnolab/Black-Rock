import React from "react";
import Product1 from "@/components/Product/WallCollection";
import Product2 from "@/components/Product/Product2";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import Data from "@/components/Product/Wall/Porcelain/300x600mm-porcelain-wall";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (

  <Breadcrumbs
  items={[
    { label: "Home", href: "/", active: false },
    { label: "Products", active: true },
  ]}
/>
  // <nav className="container" aria-label="breadcrumb">
  //   <ol className="breadcrumb">
  //     <li className="breadcrumb-item"><a href="/" className="text-gray-700">Home</a></li>
  //     <li className="breadcrumb-item"><a href="/products" className="text-gray-700">Products</a></li>
  //     <li className="breadcrumb-item"><a href="/products/wall-porcelain" className="text-gray-700">Wall-porcelain</a></li>
  //     <li className="breadcrumb-item active" aria-current="page">300 X 600 MM</li>
  //   </ol>
  // </nav>
);

const page = () => {
  return (
    <>
      <Breadcrumb />
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
