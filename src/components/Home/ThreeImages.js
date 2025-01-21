"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Home6 from "../../../image/Home/home6.png";
import Home7 from "../../../image/Home/home7.png";
import Home8 from "../../../image/Home/home8.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ThreeImages = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 20% of the section is visible
      }
    );

    if (ref1.current) {
      observer.observe(ref1.current);
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 20% of the section is visible
      }
    );

    if (ref2.current) {
      observer.observe(ref2.current);
    }

    return () => {
      if (ref2.current) {
        observer.unobserve(ref2.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
        }
      },
      {
        threshold: 0.7, // Trigger when 20% of the section is visible
      }
    );

    if (ref3.current) {
      observer.observe(ref3.current);
    }

    return () => {
      if (ref3.current) {
        observer.unobserve(ref3.current);
      }
    };
  }, []);
  return (
    <Container className="bg-black md:!py-14 xs:py-4" fluid>
      {/* <Row ref={ref1}>
        <Col xs={12}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Marquee
              speed={60}
              className="lg:text-[100px] md:text-60 text-[32px] overflow-hidden text-white font-ivarRegular lg:leading-[110px] md:leading-[66px] leading-[35px]"
            >
              YOU ARE READING THIS, YOU NEED BLACKROCK TILES.
            </Marquee>
            <Marquee
              speed={60}
              direction="right"
              className="lg:text-[100px] md:text-60 text-[32px] overflow-hidden text-white font-ivarRegular lg:leading-[110px] md:leading-[66px] leading-[35px]"
            >
              YOU ARE READING THIS, YOU NEED BLACKROCK TILES.
            </Marquee>
          </motion.div>
        </Col>
      </Row> */}
      <Row>
        <div className="relative flex justify-center" ref={ref2}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible2 ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative xl:w-[610px] xl:h-[798px] lg:w-[410px] lg:h-[598px] md:w-[305px] md:h-[398px] w-[150px] h-[210px] "
          >
            <Image src={Home6} fill className="" alt="Image" title="Image" />
          </motion.div>
        </div>
        <div
          className="relative flex justify-center md:gap-x-40 gap-x-20"
          ref={ref3}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible3 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative xl:w-[476px] xl:h-[623px] lg:w-[376px] lg:h-[523px] md:w-[238px] md:h-[311px] w-[115px] h-[165px] lg:-mt-24 -mt-16"
          >
            <Image src={Home7} fill className="" alt="Image" title="Image" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible3 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative xl:w-[476px] xl:h-[623px] lg:w-[376px] lg:h-[523px] md:w-[238px] md:h-[311px] w-[115px] h-[165px] lg:-mt-40 -mt-24"
          >
            <Image src={Home8} fill className="" alt="Image" title="Image" />
          </motion.div>
        </div>
      </Row>
    </Container>
  );
};

export default ThreeImages;
