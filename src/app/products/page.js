import React from "react";
import Image from "next/image";
import WallCollection from "@/components/Product/WallCollection";
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
      <hr />
      <Wall />
      <hr />
      <Strip />
      {/* <Container className="">
            <Row>
              <h2 className="hidden"> Collection of {currentYear} </h2>
              <Col md={12} lg={12} xl={12}>
                <p className="font-ivarRegular xl:text-[100px] md:text-90 text-60 xl:leading-[110px] md:leading-[95px] leading-[66px] uppercase">
                  Collection of {currentYear}
                </p>
              </Col>
            </Row>
      </Container> */}
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
