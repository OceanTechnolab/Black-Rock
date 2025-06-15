"use client";
import { EyeIcon } from "@/utils/icon";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseURL } from "../../../utils/config";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import { motion } from "framer-motion";
import "../../../styles/product-card.css";

const currentYear = new Date().getFullYear();

// Reusable GvtPgvts Component
const GvtPgvt = ({ href, mainImage, altMain, titleMain, closeupImage, altCloseup, titleCloseup, label }) => (
  <Col lg={6} className="mb-10 container px-3 md:px-0">
    <motion.div
      initial={{ x: href.includes("ceramic") ? "-100%" : "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="h-[390px] image-container relative rounded-xl mb-3">
        <a href={href}>
          <Image
            src={mainImage}
            fill
            className="object-cover rounded-xl drop-shadow-lg bob-animation"
            alt={altMain}
            title={titleMain}
          />
          <div className="overlay"></div>
        </a>
      </div>
      <Row>
        <Col xs={8} md={8} lg={6} xl={5}>
          <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
            {label}
          </p>
        </Col>
        <Col xs={4} md={4} lg={6} xl={7}>
          <div className="xl:h-[150px] md:h-[100px] h-[50px] relative">
            <Image
              src={closeupImage}
              fill
              className="object-cover rounded-xl drop-shadow-lg bob-animation"
              alt={altCloseup}
              title={titleCloseup}
            />
          </div>
        </Col>
      </Row>
    </motion.div>
  </Col>
);

// Function to render all products
const GvtPgvts = ({ products }) => (
  <Row className="mt-1 xl:px-[20rem] lg:px-10 md:py-5 py-2">
    {products.map((product, index) => (
      <GvtPgvt
        key={index}
        href={product.href}
        mainImage={product.mainImage}
        altMain={product.altMain}
        titleMain={product.titleMain}
        closeupImage={product.closeupImage}
        altCloseup={product.altCloseup}
        titleCloseup={product.titleCloseup}
        label={product.label}
      />
    ))}
  </Row>
);

const page = () => {
  const products = [
    {
      href: "/products/GvtPgvt/ceramic/",
      mainImage: "/GvtPgvt-ceramic/200X300MM/ELEVATION1_200X300MM_2004.jpg",
      altMain: "Ceramic Body Tiles - Elevation Design",
      titleMain: "Ceramic Body Tiles - Elevation Design",
      closeupImage: "/GvtPgvt-ceramic/200X300MM/ELEVATION2_200X300MM_2004_TILES.jpg",
      altCloseup: "Ceramic Body Tiles - Closeup",
      titleCloseup: "Ceramic Body Tiles - Closeup",
      label: "Ceramic Body Tiles",
    },
    {
      href: "/products/GVT-PGVT/porcelain",
      mainImage: "/GvtPgvt-porcelain/BLACKROCK-300X600MM- MASTER-Mockup.jpg",
      altMain: "Porcelain Body Tiles - Mockup Design",
      titleMain: "Porcelain Body Tiles - Mockup Design",
      closeupImage: "/GvtPgvt-porcelain/BLACKROCK-300X600MM- MASTER-Tiles.jpg",
      altCloseup: "Porcelain Body Tiles - Closeup",
      titleCloseup: "Porcelain Body Tiles - Closeup",
      label: "Porcelain Body Tiles",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <h2 className="hidden">GvtPgvt Collection of {currentYear}</h2>
          <Col md={12}>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-ivarRegular uppercase xl:text-60 lg:text-[49px] md:text-60 text-[38px] xl:leading-[66px] lg:leading-[60px] md:leading-[66px] leading-[42px]"
            >
              <p>GvtPgvt Collection of {currentYear}</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <GvtPgvts products={products} />
    </>
  );
};

export default page;

// Metadata for SEO
export const metadata = {
  title: "Discover the Exclusive GvtPgvt Collection at Blackrock",
  description: `Explore Blackrock Porcelano’s GvtPgvt Collection featuring a variety of designs and finishes, including Glossy, Matte, and High-Glossy tiles. Perfect for enhancing your GvtPgvts with style and durability.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/GvtPgvt-collection`,
  },
};
