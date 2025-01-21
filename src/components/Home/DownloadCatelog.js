"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Home10 from "../../../image/Home/home10.png";
import { motion } from "framer-motion";
import Link from "next/link";

const DownloadCatelog = () => {
  const [isVisibleImage, setIsVisibleImage] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerImage = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleImage(true);
        }
      },
      { threshold: 0.4 }
    );

    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleText(true);
        }
      },
      { threshold: 0.4 }
    );

    if (imageRef.current) observerImage.observe(imageRef.current);
    if (textRef.current) observerText.observe(textRef.current);

    return () => {
      if (imageRef.current) observerImage.unobserve(imageRef.current);
      if (textRef.current) observerText.unobserve(textRef.current);
    };
  }, []);

  return (
    <Container className="lg:my-20 my-10">
      <Row className="gap-y-5">
        <Col xs={12} md={12} lg={5} xl={4}>
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisibleImage ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:h-[534px] h-[280px] relative"
          >
            <Image
              src={Home10}
              fill
              className="object-cover"
              alt="Image"
              title="Image"
            />
          </motion.div>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={7}
          xl={8}
          className="flex flex-col justify-center"
        >
          <Link
            href={"/catalogue"}
            className="text-black-rock-Black no-underline"
            title="Catalogue"
          >
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisibleText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-ivarRegular uppercase xl:text-60 lg:text-[49px] md:text-60 text-[38px] xl:leading-[66px] lg:leading-[60px] md:leading-[66px] leading-[42px] lg:ms-14"
            >
              <p>Download our</p>
              <p className="md:ms-52 ms-28">Catalogues</p>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisibleText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-gt-reguler md:text-xl text-sm leading-[22px] flex justify-center items-center capitalize lg:my-3 md:my-8 my-4"
          >
            <p className="xl:w-[45%] lg:w-[65%] lg:!text-start !text-center">
              {`Discover our full range of premium tiles, carefully curated to inspire and elevate any space. From timeless classics to modern innovations, the Blackrock catalogue showcases designs crafted to meet the highest standards of luxury and quality`}
            </p>
          </motion.div>
          <Link
            href={"/catalogue"}
            className="text-black-rock-Black no-underline"
            title="Catalogue"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisibleText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="flex justify-center items-center lg:mb-3 mb-6"
            >
              <span className="border-b-2 border-black font-handestonie text-[38px] leading-none">
                Download our catalogues
              </span>
            </motion.div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadCatelog;
