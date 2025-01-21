"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import About4 from "../.../../../../image/About/About4.png";
import About5 from "../.../../../../image/About/About5.png";
const AboutSec4 = () => {
  const aboutSec4Data = {
    mission: {
      title: "Our Mission",
      description:
        "To transform spaces with tiles that inspire, elevate, and endure. We strive to be a brand synonymous with luxury and design excellence, creating lasting value for our clients and partners.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the most trusted name in luxury tiles, setting new standards in design, sustainability, and customer satisfaction.",
    },
    sliderImages: [
      {
        src: About4,
        alt: "image",
      },
    ],
    rangeTitle: "Wide range of sizes",
    rangeImage: {
      src: About5,
      alt: "Home 1",
    },
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 2.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <h3 className="hidden"> {aboutSec4Data.mission.title}</h3>
        <h3 className="hidden"> {aboutSec4Data.vision.title}</h3>
        <h3 className="hidden"> {aboutSec4Data.rangeTitle}</h3>
        <Col lg={4}>
          <div>
            <p className="font-ivarRegular xl:text-90 lg:text-70 md:text-[80px] text-60 xl:leading-[99px] lg:leading-[77px] md:leading-[88px] leading-[66px] uppercase lg:text-start md:text-center xs:text-center lg:px-0 md:px-28 px-10">
              {aboutSec4Data.mission.title}
            </p>
            <p className="font-gt-reguler text-lg leading-[22px] lg:text-start md:text-center xs:text-center lg:px-0 md:px-28 px-2">
              {aboutSec4Data.mission.description}
            </p>
          </div>
        </Col>
        <Col lg={4} className="flex items-center justify-center">
          <div className="lg:w-full lg:h-[2px] w-[2px] h-[200px] bg-black-rock-Grey"></div>
        </Col>
        <Col lg={4}>
          <div className="lg:text-end md:text-center xs:text-center">
            <p className="font-ivarRegular xl:text-90 lg:text-70 md:text-[80px] text-60 xl:leading-[99px] lg:leading-[77px] md:leading-[88px] leading-[66px] uppercase lg:px-0 md:px-36 px-10">
              {aboutSec4Data.vision.title}
            </p>
            <p className="font-gt-reguler text-lg leading-[22px] lg:px-0 md:px-36 px-2">
              {aboutSec4Data.vision.description}
            </p>
          </div>
        </Col>
        <Col>
          <Slider
            {...sliderSettings}
            className="xl:!h-[350px] md:!h-[220px] !h-[245px] my-4"
          >
            {Array.from({ length: 16 })?.map((i, index) => (
              <div
                key={index + 1}
                className="relative w-[505px] xl:h-[292px] md:h-[190px] h-[239px]"
              >
                <Image
                  src={aboutSec4Data.sliderImages[0].src}
                  fill
                  className="object-cover p-2"
                  alt={aboutSec4Data.sliderImages[0].alt}
                  title={aboutSec4Data.sliderImages[0].alt}
                />
              </div>
            ))}
          </Slider>
        </Col>
        <Col>
          <p className="uppercase font-ivarRegular text-center xl:px-[22rem] lg:px-[14rem] md:text-[80px] text-[38px] md:leading-[88px] leading-[42px]">
            {aboutSec4Data.rangeTitle}
          </p>
          <div className="lg:h-[635px] md:h-[423px] h-[210px] relative my-10">
            <Image
              src={aboutSec4Data.rangeImage.src}
              fill
              className=""
              alt={aboutSec4Data.rangeImage.alt}
              title={aboutSec4Data.rangeImage.alt}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSec4;
