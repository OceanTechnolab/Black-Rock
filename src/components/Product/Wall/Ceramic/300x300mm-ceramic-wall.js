"use client";
import { DownloadIcon, EyeIcon } from "@/utils/icon"; 
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseURL } from "../../../../utils/config";import "./ceramic.css";


// Main Component
const Catalogue2 = () => {
  return (
    <>
      <Container className="mb-16">
          <Row>
            <Col xs={12}>
              <h2 className="mt-2 text-50 leading-[66px] font-ivarRegular uppercase md:mb-6">
                300 X 300 MM
              </h2>
            </Col>
          </Row>
           <Row className="">
                    <Col lg={6} className="mb-10 container">
                      <div className="h-[390px] relative rounded-xl mb-3 image-container">
                        <div className="image-container-inner">
                          <Image
                            src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_1058.jpg"
                            fill
                            className="object-cover rounded-xl drop-shadow-lg image-1"
                            alt="Body Elevation"
                            title="Body Elevation"
                          />
                          <Image
                            src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_1058 TILES.jpg"
                            fill
                            className="object-cover rounded-xl drop-shadow-lg image-2"
                            alt="Product Image"
                            title="Product Image"
                          />
                        </div>
                      </div>
                      <Row>
                        <Col xs={4} md={4} lg={4} xl={4} className="">
                          <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
                          ORDINARY
                          </p>
                          <a
                            // href={`${baseURL}elevation-200x300mm-digital-blackrock.pdf`}
                            href ="#"
                            className=""
                            target="_blank" //Enable this for opening in new tab
                          >
                            <div
                              className="circle-animation  w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer"
                              role="button" // For accessibility
                            >
                              <div className="absolute inset-0 flex justify-center items-center">
                                <div>
                                  <span className="flex justify-center mb-2">
                                    <EyeIcon />
                                  </span>
                                  <p className="font-gt-regular text-12 mb-0 text-black">
                                    View
                                  </p>
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
                              src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_1058 TILES.jpg"
                              fill
                              className="object-cover rounded-xl drop-shadow-lg bob-animation"
                              alt="Product Image"
                              title="Product Image"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6} className="mb-10 container">
                      <div className="h-[390px] relative rounded-xl mb-3 image-container">
                        <div className="image-container-inner">
                          <Image
                            src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_2018.jpg"
                            fill
                            className="object-cover rounded-xl drop-shadow-lg image-1"
                            alt="Body Ordinary"
                            title="Body Ordinary"
                          />
                          <Image
                            src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_2018 TILES.jpg"
                            fill
                            className="object-cover rounded-xl drop-shadow-lg image-2"
                            alt="Product Image"
                            title="Product Image"
                          />
                        </div>
                      </div>
                      <Row>
                        <Col xs={4} md={4} lg={4} xl={4}>
                          <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
                            ORDINARY
                          </p>
                          <a
                            // href={`${baseURL}ordinary-200x300mm-blackrock.pdf`}
                            href="#"
                            className=""
                            target="_blank" //Enable this for opening in new tab
                          >
                            <div
                              className="circle-animation  w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer"
                              role="button" // For accessibility
                            >
                              <div className="absolute inset-0 flex justify-center items-center">
                                <div>
                                  <span className="flex justify-center mb-2">
                                    <EyeIcon />
                                  </span>
                                  <p className="font-gt-regular text-12 mb-0 text-black">
                                    View
                                  </p>
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
                              src="\wall-ceramic\300X300MM\ORDINARY 300X300MM_2018 TILES.jpg"
                              fill
                              className="object-cover rounded-xl drop-shadow-lg bob-animation"
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

export default Catalogue2;
