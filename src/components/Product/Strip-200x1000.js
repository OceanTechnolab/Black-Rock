"use client";
import React from "react";
import Image from "next/image";
import Product1 from "@/components/Product/WallCollection";
import Product2 from "@/components/Product/Product2";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { DownloadIcon, EyeIcon } from "@/utils/icon"; 
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

      <Container className="">
                <Row>
                  <Col xs={12}>
                    <h2 className="mt-0 font-ivarRegular uppercase md:mb-6">
                      200 X 1000 MM
                    </h2>
                  </Col>
                </Row>
                <Row className="">
                  <Col
                    lg={6}
                    className="mb-10 container"
                  >
                    <div className="h-[390px] relative rounded-xl mb-3">
                      <Image
                        src={`${baseURL}cs2.webp`}
                        fill
                        className="object-cover rounded-xl drop-shadow-lg"
                        alt="Image"
                        title="Image"
                      />
                    </div>
                    <Row>
                      <Col xs={4} md={4} lg={4} xl={4} className="">
                        <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
                          Title
                        </p>
                        {/* href={`${baseURL}NAME.pdf`} */}
                        <a href='#' className="" 
                          // target="_blank" //Enable this for opening in new tab
                          >
                          <div className="circle-animation  w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer" role="button" // For accessibility 
                          >
                            <div className="absolute inset-0 flex justify-center items-center">
                              <div>
                                <span className="flex justify-center mb-2">
                                  <EyeIcon />
                                </span>
                                <p className="font-gt-regular text-12 mb-0 text-black">View</p>
                              </div>
                            </div>
                          </div>
                        </a>  
                        {/* <p className="text-2xl font-ivarRegular uppercase">600 X 1200 MM</p>
                        <p className="text-xl font-gt-reguler uppercase">Glossy</p> */}
                      </Col>
                      <Col xs={8} md={8} lg={8} xl={8}>
                        <div className="xl:h-[150px] md:h-[100px] h-[150px] relative">
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
                        <Image
                          src={`${baseURL}cs2.webp`}
                          fill
                          className="object-cover rounded-xl drop-shadow-lg"
                          alt="Image"
                          title="Image"
                        />
                    </div>
                    <Row>
                      <Col xs={4} md={4} lg={4} xl={4}>
                        <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
                        Title
                        </p>
                        {/* href={`${baseURL}NAME.pdf`} */}
                        <a href='#' className="" 
                          // target="_blank" //Enable this for opening in new tab
                          >
                          <div className="circle-animation  w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer" role="button" // For accessibility 
                          >
                            <div className="absolute inset-0 flex justify-center items-center">
                              <div>
                                <span className="flex justify-center mb-2">
                                  <EyeIcon />
                                </span>
                                <p className="font-gt-regular text-12 mb-0 text-black">View</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* <p className="text-2xl font-ivarRegular uppercase">600 X 1200 MM</p>
                        <p className="text-xl font-gt-reguler uppercase">Glossy</p> */}
                      </Col>
                      <Col xs={8} md={8} lg={8} xl={8}>
                        <div className="xl:h-[150px] md:h-[100px] h-[150px] relative">
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

              

            </Container>
            
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
