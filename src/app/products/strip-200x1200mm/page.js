import React from "react";
import Product1 from "@/components/Product/WallCollection";
import Data from "@/components/Product/Strip-200x1200";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { Col, Container, Row } from "react-bootstrap";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";

const Breadcrumb = () => (
  <nav className="container" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/" className="text-gray-700">Home</a></li>
      <li className="breadcrumb-item"><a href="/products" className="text-gray-700">Products</a></li>
      <li className="breadcrumb-item"><a href="/products/wall" className="text-gray-700">Wall</a></li>
      <li className="breadcrumb-item active" aria-current="page">Strip 200 x 1200 mm</li>
    </ol>
  </nav>
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      <Container>
        <Row className="my-3">
          <h1 className="hidden"> Our Luxury Tiles</h1>
          <Col lg={12} xl={12} className="">
            <p className="font-ivarRegular xl:text-[100px] md:text-[78px]  md:leading-[110px] text-[47px] leading-[57px] uppercase lg:text-start md:text-center xs:text-center mb-0">
              Strip
              <span className=" lg:inline hidden ms-3 font-handestonie xl:text-[130px] text-[100px] xl:leading-[172px] leading-[138px] text-black-rock-Orange  capitalize">
                Body
              </span>
            </p>
            <p className=" mb-0 text-center lg:hidden font-handestonie md:text-[120px] md:leading-[115px] text-70 leading-[70px] text-black-rock-Orange capitalize">
            Body
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="container">Ceramic</div>
      <div className="container"><a href="/products/ceramicandporcelien/200X300MM" className="text-gray-700">200 by 300 MM</a></div> */}
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
