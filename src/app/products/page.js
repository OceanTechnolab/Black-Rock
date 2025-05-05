import React from "react";
import Image from "next/image";
import Wall from "@/components/Product/Wall/Wall";
import Strip from "@/components/Product/Strip";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { Col, Container, Row } from "react-bootstrap";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import BOOK_Big from "../../../image/Product/BOOK MATCH 001_Big.png";
import BOOK_Small from "../../../image/Product/BOOK MATCH 001_Small.png";
import BOOK_Big1 from "../../../image/Product/BOOK MATCH 002_Big.png";
import BOOK_Small1 from "../../../image/Product/BOOK MATCH 002_Small.png";
import { baseURL } from "../../utils/config";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import AllProducts from "@/components/Product/AllProducts";
import WallCollection from "@/components/Product/WallCollection";

// Breadcrumb Component
const Breadcrumb = () => (

  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "Products", href: "/products", active: false },
    ]}
  />
);

const currentYear = new Date().getFullYear();

const page = () => {
  return (
    <>
      <Breadcrumb />
      <WallCollection />
      <AllProducts />
      <hr />
      {/* <Wall />
      <hr />
      <Strip /> */}
    </>
  );
};

export default page;

export const metadata = {
  title: "Explore Glossy, Matte, and High-Glossy Tiles at Blackrock",
  description: `Browse Blackrock Porcelano’s wide selection of tiles, including Glossy, Matt, and High Glossy finishes. Perfect for floors, walls, kitchens, and bathrooms, combining style and durability.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/product`,
  },
};
