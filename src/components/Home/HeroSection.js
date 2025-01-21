"use client";
import { DownArrowIcon } from "@/utils/icon";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Home1 from "../../../image/Home/s1.jpg";
import Home4 from "../../../image/Home/s2.jpg";
import Blog1 from "../../../image/Home/s3.jpg";

import { motion } from "framer-motion";
import Link from "next/link";
import { scrollToSection } from "@/utils/functions";
import Slider from "react-slick";
const HeroSection = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 200,
      opacity: 0, // Initially hidden
    },
    animate: {
      y: 0,
      opacity: 1, // Moves up and fades in
      transition: {
        ease: [0.42, 0, 0.58, 1], // Fix cubic-bezier values (valid range)
        duration: 1,
      },
    },
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const imageList = [
    { id: 1, name: "GVT", image: Home1},
    { id: 2, name: "Wall", image: Home4 },
    { id: 3, name: "Wood", image: Blog1 },
  ]
  return (
    <Container>
      <Row className="mt-10">
        {/* <Col xs={12}>
          <h1 className="hidden">we create your dream tiles</h1>
          <motion.div
            variants={banner}
            initial="initial"
            animate="animate"
            className="banner lg:text-[125px] md:text-90 text-60 font-ivarRegular uppercase"
          >
            <motion.p
              className="lg:leading-[155px] md:leading-[110px] leading-[70px]"
              variants={letterAnimation}
            >
              we create your
            </motion.p>
            <motion.p
              className="lg:leading-[155px] md:leading-[110px] leading-[70px]"
              variants={letterAnimation}
            >
              dream tiles
            </motion.p>
          </motion.div>
        </Col>
        <Col xs={8} md={8} lg={8} xl={8}>
          <motion.div
            className="md:text-lg text-sm font-gt-reguler py-4"
            variants={banner}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={letterAnimation}>
              Discover world-class tiles, designed to inspire.
              Precision-crafted, sustainably sourced, and exported globally from
              our state-of-the-art facility.
            </motion.p>
          </motion.div>
          <Link
            href={"/catalogue"}
            className="text-black-rock-Black no-underline"
            title="Catalogue"
          >
            <motion.div
              variants={banner}
              initial="initial"
              animate="animate"
              className="text-[42px] font-handestonie w-fit md:block hidden"
            >
              <motion.div variants={letterAnimation} className="flex">
                Explore Our Collection
              </motion.div>
              <motion.div
                variants={letterAnimation}
                className="w-full h-1 bg-black -mt-5"
              ></motion.div>
            </motion.div>
          </Link>
        </Col>
        <Col xs={4} md={4} lg={4} xl={4} className="flex justify-end">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="cursor-pointer circle-animation lg:w-[242px] lg:h-[242px] md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-full border-1 border-black-rock-Grey relative "
            onClick={() => {
              scrollToSection("defining-luxury");
            }}
          >
            <span className="absolute inset-0 flex justify-center items-center">
              <DownArrowIcon className={"md:w-10 md:h-10 w-5 h-5"} />
            </span>
          </motion.div>
        </Col>
        <Col xs={12} className="md:hidden block">
          <Link
            href={"/catalogue"}
            className="text-black-rock-Black no-underline"
            title="Catalogue"
          >
            <div className="text-[42px] font-handestonie w-fit">
              Explore Our Collection
              <div className="w-full h-1 bg-black -mt-5"></div>
            </div>
          </Link>
        </Col> */}
        <Col xs={12}>
          <motion.div
            initial={{ x:-200, opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:my-10 "
          >
            <Slider {...settings} className="outline-none">
              {imageList?.map((i, index) => (
                <div className="lg:!flex lg:!gap-x-5 lg:!gap-y-0 gap-y-5 px-2" key={i?.id}>
                  <h2 className="font-ivarRegular md:text-50 text-40 my-2">{i?.name}</h2>
                  <div className=" w-full  aspect-video relative rounded-xl">
                    <Image
                      src={i?.image}
                      fill
                      className="rounded-xl"
                      alt="Image"
                      title="Image"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            {/* <Image
              src={Home1}
              fill
              className="rounded-xl"
              alt="Image"
              title="Image"
            /> */}
          </motion.div>
          {/* <ContainerScroll/> */}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
