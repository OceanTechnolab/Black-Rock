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
import Home2 from "../../../image/Home/home11.jpg";
import Link from "next/link";



const page = () => {
  return (
    <>

      <Row className="mt-1 xl:px-[20rem] lg:px-10 md:py-5 py-2 align-items-center">
        <Col xs={12} md className="flex flex-col items-center">
            <Image
              src={Home2}
              cover
              className="inset-0 flex justify-center items-center object-cover rounded-xl drop-shadow-lg"
              alt="Image"
              title="Image"
            />
        </Col>
        <Col xs={12} md className="flex flex-col items-center">
          {/* <p className="mb-2 font-medium font-gt-bold uppercase">
            GVT/PGVT
          </p> */}
          
            <ul className="p-0 font-ivarRegular text-center pt-2">
              <li><a href="/products/wall-ceramic/200X300MM" className="text-black-rock-Black no-underline hover:underline">200 X 300 MM</a></li>
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">200 X 600 MM</a></li>
            </ul>
        </Col>

        {/* Divider */}
        <Col xs="12" md="auto" className="flex justify-center">
          <div className="md:border-l border-b border-[#464549] md:h-[220px] md:w-0 w-full"></div>
        </Col>

        <Col xs={12} md className="flex flex-col items-center pt-2">
          {/* <p className="mb-2 font-medium font-gt-bold uppercase">
            GVT/PGVT
          </p> */}
          
            <ul className="p-0 font-ivarRegular text-center">
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">250 X 375 MM</a></li>
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">250 X 400 MM</a></li>
            </ul>
        </Col>

        {/* Divider */}
        <Col xs="12" md="auto" className="flex justify-center">
          <div className="md:border-l border-b border-[#464549] md:h-[220px] md:w-0 w-full"></div>
        </Col>

        <Col xs={12} md className="flex flex-col items-center pt-2">
          {/* <p className="mb-2 font-medium font-gt-bold uppercase">
            GVT/PGVT
          </p> */}
          
            <ul className="p-0 font-ivarRegular text-center">
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">300 X 300 MM</a></li>
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">300 X 450 MM</a></li>
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">300 X 600 MM</a></li>
              <li><a href="/products/ceramic/" className="text-black-rock-Black no-underline hover:underline">300 X 750 MM</a></li>
            </ul>
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
