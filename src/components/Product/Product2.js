"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import DownloadCatelog from "../Home/DownloadCatelog";
import { products } from "@/utils/constant";
export const UpArrowIcon = () => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
          fill="#0F0F0F"
        />
      </g>
    </svg>
  );
};
export const DownArrowIcon = () => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
          fill="#0F0F0F"
        />
      </g>
    </svg>
  );
};
const Product2 = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const sizeOptions = [
    "200 X 300 MM",
    "200 X 600 MM",
    "200 X 900 MM",
    "200 X 1200 MM",
    "250 X 375 MM",
    "250 X 400 MM",
    "250 X 450 MM",
    "250 X 600 MM",
    "300 X 300 MM",
    "300 X 450 MM",
    "300 X 600 MM",
    "300 X 750 MM",
    "300 X 900 MM",
    "300 X 1200 MM",
    "300 X 1830 MM",
    "400 X 800 MM",
    "600 X 600 MM",
    "600 X 1200 MM",
    "800 X 800 MM",
    "800 X 1200 MM",
    "800 X 1600 MM",
    "800 X 2400 MM",
    "800 X 3000 MM",
    "800 X 3200 MM",
    "900 X 1830 MM",
    "1000 X 1000 MM",
    "1200 X 1200 MM",
    "1200 X 1600 MM",
    "1200 X 1800 MM",
    "1200 X 2400 MM",
    "1200 X 2600 MM",
    "1200 X 2800 MM",
    "1200 X 3200 MM",
    "1600 X 3200 MM",
    "1800 X 3600 MM",
  ];
  const typeOptions = [
    "High Glossy",
    "Matt",
    "Super High Glossy",
    "Wall",
    "GVT/PGVT",
    "Slab",
    "Square Size",
    "Slabs",
    "Big Sizes",
  ];

  const toggleSizeDropdown = () => {
    setIsSizeOpen(!isSizeOpen);
  };

  const toggleTypeDropdown = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  // **Filter Logic:**
  const filteredProducts = products.filter((product) => {
    const sizeMatch = selectedSize ? product.size === selectedSize : true;
    const typeMatch = selectedType ? product.type === selectedType : true;
    return sizeMatch && typeMatch;
  });
  const currentYear = new Date().getFullYear();
  return (
    <Container className="pt-20">
      <Row>
        <h2 className="hidden"> Collection of {currentYear} </h2>
        <Col md={12} lg={6} xl={4}>
          <p className="font-ivarRegular xl:text-[100px] md:text-90 text-60 xl:leading-[110px] md:leading-[95px] leading-[66px] uppercase">
            Collection of {currentYear}
          </p>
        </Col>
      </Row>
      <div className="xl:px-40 lg:px-10 md:py-5 py-2">
        <Row className="gap-y-3">
          <Col md={6}>
            {/* Size Filter Dropdown */}
            <div className="relative">
              <select
                className="border w-full p-2.5 rounded-full pl-5 pr-10 appearance-none"
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value);
                  setIsSizeOpen(false); // Close dropdown on selection
                }}
                onClick={toggleSizeDropdown} // Toggle open/close on click
              >
                <option value="">All Sizes</option>
                {sizeOptions.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {/* Custom Arrow */}
              <span className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                {isSizeOpen ? <UpArrowIcon /> : <DownArrowIcon />}
              </span>
            </div>
          </Col>

          <Col md={6}>
            {/* Type Filter Dropdown */}
            <div className="relative">
              <select
                className="border w-full p-2.5 rounded-full pl-5 pr-10 appearance-none"
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setIsTypeOpen(false); // Close dropdown on selection
                }}
                onClick={toggleTypeDropdown} // Toggle open/close on click
              >
                <option value="">All Types</option>
                {typeOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {/* Custom Arrow */}
              <span className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                {isTypeOpen ? <UpArrowIcon /> : <DownArrowIcon />}
              </span>
            </div>
          </Col>
        </Row>
        <Row className={`mt-5`}>
          {filteredProducts?.length ? (
            filteredProducts?.map((i, index) => (
              <Col
                lg={6}
                key={index + 1}
                className={`${
                  filteredProducts.length - 2 === index ||
                  filteredProducts.length - 1 === index
                    ? "mb-0"
                    : "xl:mb-40 lg:mb-20 mb-10"
                }`}
              >
                <div className="xl:h-[285px] lg:h-[230px] md:h-[390px] h-[199px] relative rounded-xl mb-3">
                  <Image
                    src={i?.bigImage}
                    fill
                    className="object-cover rounded-xl"
                    alt={`${i?.title} Image`}
                    title={i?.title}
                  />
                </div>
                <Row>
                  <Col xs={8} md={8} lg={6} xl={5}>
                    <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
                      {i?.title}
                    </p>
                    <p className="text-2xl font-ivarRegular uppercase">
                      {i?.size}
                    </p>
                    <p className="text-xl font-gt-reguler uppercase">
                      {i?.type}
                    </p>
                  </Col>
                  <Col xs={4} md={4} lg={6} xl={7}>
                    <div className="xl:h-[150px] md:h-[100px] h-[50px] relative">
                      <Image
                        src={i?.smallImage}
                        fill
                        className="object-cover rounded-xl"
                        alt="Product Image"
                        title="Product Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            ))
          ) : (
            <p className="text-center font-semibold text-lg line-clamp-2 text-[#C8222E]">
              Products are currently out of stock!
            </p>
          )}
        </Row>
      </div>
      <DownloadCatelog />
    </Container>
  );
};

export default Product2;
