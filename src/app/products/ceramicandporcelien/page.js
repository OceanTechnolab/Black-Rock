import React from "react";
import Product1 from "@/components/Product/Product1";
import Product2 from "@/components/Product/Product2";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";

const Breadcrumb = () => (
  <nav className="container" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/" className="text-gray-700">Home</a></li>
      <li className="breadcrumb-item"><a href="/products" className="text-gray-700">Products</a></li>
      <li className="breadcrumb-item active" aria-current="page">Ceramic and Porcelien</li>
    </ol>
  </nav>
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">Ceramic and Porcelien</div>
      <div className="container"><a href="/products/ceramicandporcelien/200X300MM" className="text-gray-700">200 by 300 MM</a></div>
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
