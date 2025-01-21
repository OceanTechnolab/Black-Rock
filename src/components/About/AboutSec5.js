"use client";
import { LinesOrangeImageSVG } from "@/utils/icon";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About6 from "../../../image/About/About6.png";
import dynamic from "next/dynamic";

const RandomArcsGlobe = dynamic(() => import("../ui/RandomArcsGlobe"), {
  ssr: false,
});

const content = {
  title: "Globally Trusted, Worldwide Delivery",
  description1: `At Blackrock, we take pride in being a globally recognized leader in tile manufacturing and export. Our luxury tile collections are delivered to over 15 countries, meeting the unique design and quality demands of clients worldwide.`,
  description2: `From residential masterpieces to large-scale commercial projects, we ensure timely and secure delivery of our tiles to any corner of the globe. Our commitment to excellence in every step, from production to export, makes Blackrock the trusted choice for designers, architects, and homeowners internationally.`,
  image: About6, // You can replace this with dynamic imports later
};

const AboutSec5 = () => {
  return (
    <>
      <section className="bg-black-rock-Black md:py-[60px] py-10">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="xl:px-[60px] lg:px-[35px] md:px-[20px]">
                <p className="md:!mb-4 !mb-0 xl:text-90 xl:leading-[99px] lg:text-[80px] lg:leading-[88px] md:text-60 md:leading-[66px] text-28 leading-[30px] text-black-rock-White uppercase font-ivarRegular">
                  {content.title}
                </p>
                <div className="lg:align-middle md:align-middle xs:align-middle">
                  <LinesOrangeImageSVG className="xl:w-[974px] lg:w-[860px] md:w-[700px] 360:w-[320px] w-[222px]" />
                </div>
              </div>
            </Col>
            <Col lg={6} xl={7} className="">
              <RandomArcsGlobe />
            </Col>
            <Col lg={6} xl={5}>
              <div className="xl:mt-24 lg:mt-16 xl:px-[60px] lg:px-[35px] md:px-[20px] text-black-rock-White font-gt-reguler md:text-lg text-sm leading-[22px] lg:text-end md:text-center xs:text-center">
                <p>{content.description1}</p>
                <p className="mt-[50px]">{content.description2}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSec5;
