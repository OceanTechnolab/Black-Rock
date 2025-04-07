"use client";
import React from "react";
import Image from "next/image";
import Product1 from "@/components/Product/Product1";
import Product2 from "@/components/Product/Product2";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { Col, Container, Row } from "react-bootstrap";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import BOOK_Big from "../../../image/Product/BOOK MATCH 001_Big.png";
import BOOK_Small from "../../../image/Product/BOOK MATCH 001_Small.png";
import BOOK_Big1 from "../../../image/Product/BOOK MATCH 002_Big.png";
import BOOK_Small1 from "../../../image/Product/BOOK MATCH 002_Small.png";
import { baseURL } from "../../utils/config";
import { motion } from "framer-motion";




const Breadcrumb = () => (
  <nav className="container" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item text-black">
        <a href="/" className="text-black-rock-Black no-underline hover:underline">
          Home
        </a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Products
      </li>
    </ol>
  </nav>
);
const currentYear = new Date().getFullYear();

const page = () => {
  return (
    <>
      <Container className="">
            <Row>
              <h2 className="hidden"> Wall Collection of {currentYear} </h2>
              <Col md={12} lg={12} xl={12}>
                {/* <p className="font-ivarRegular xl:text-[100px] md:text-90 text-60 xl:leading-[110px] md:leading-[95px] leading-[66px] uppercase">
                  Wall Collection of {currentYear}
                </p> */}
                <motion.div
                  // ref={textRef}
                  initial={{ opacity: 1, y: 20 }}
                  // animate={isVisibleText ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="font-ivarRegular uppercase xl:text-60 lg:text-[49px] md:text-60 text-[38px] xl:leading-[66px] lg:leading-[60px] md:leading-[66px] leading-[42px] "
                ><p>Wall Collection of {currentYear}</p>
                </motion.div>
              </Col>
            </Row>
      </Container>
      {/* <div className="container">
        <a href="/products/ceramicandporcelien/" className="text-gray-700">
          Wall
        </a>
      </div> */}
      <Row className="mt-1 xl:px-[20rem] lg:px-10 md:py-5 py-2">
        <Col
          lg={6}
          className=" mb-10 container"
        >
          <div className="h-[390px] relative rounded-xl mb-3">
          <a href="/products/wall-ceramic/" className="">
            <Image
              src={`${baseURL}cs2.webp`}
              fill
              className="object-cover rounded-xl drop-shadow-lg"
              alt="Ceramic Body Tiles"
              title="Ceramic Body Tiles"
            /></a>
          </div>
          <Row>
            <Col xs={8} md={8} lg={6} xl={5}>
              <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
              Ceramic Body Tiles
              </p>
              {/* <p className="text-2xl font-ivarRegular uppercase">600 X 1200 MM</p>
              <p className="text-xl font-gt-reguler uppercase">Glossy</p> */}
            </Col>
            <Col xs={4} md={4} lg={6} xl={7}>
              <div className="xl:h-[150px] md:h-[100px] h-[50px] relative">
                <Image
                  src={`${baseURL}cs3.webp`}
                  fill
                  className="object-cover rounded-xl drop-shadow-lg"
                  alt="Product Image"
                  title="Product Image"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          className="mb-10 container"
        >
          <div className="h-[390px] relative rounded-xl mb-3">
            <a href="/products/wall-porcelian/" className="">
              <Image
                src={`${baseURL}cs2.webp`}
                fill
                className="object-cover rounded-xl drop-shadow-lg"
                alt="Porcelain Body Tiles"
                title="Porcelain Body Tiles"
              />
            </a>
          </div>
          <Row>
            <Col xs={8} md={8} lg={6} xl={5}>
              <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
              Porcelain Body Tiles
              </p>
              {/* <p className="text-2xl font-ivarRegular uppercase">600 X 1200 MM</p>
              <p className="text-xl font-gt-reguler uppercase">Glossy</p> */}
            </Col>
            <Col xs={4} md={4} lg={6} xl={7}>
              <div className="xl:h-[150px] md:h-[100px] h-[50px] relative">
                <Image
                  src={`${baseURL}cs3.webp`}
                  fill
                  className="object-cover rounded-xl drop-shadow-lg"
                  alt="Product Image"
                  title="Product Image"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
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
