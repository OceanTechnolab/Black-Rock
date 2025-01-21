"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";

const Exquisite = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up IntersectionObserver to detect when the section is in view
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
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Container ref={ref}>
      <Row>
        <Col xs={12} md={12} lg={12} xl={8} className="xl:pe-5">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="xl:flex xl:justify-between xl:items-center xl:mb-10 "
          >
            <span className="font-ivarRegular md:text-90 text-70 uppercase xl:inline-block block xl:text-start text-center">
              Exquisite
            </span>
            <span className="text-xl xl:inline-block block xl:text-start text-center xl:pt-0 pt-2 xl:me-[46px]">
              MORE THAN 1000+ DESIGNS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="md:text-90 text-[77px] font-ivarRegular uppercase leading-[99px] my-4 xl:hidden block text-center"
          >
            Tile Design Mastery
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="flex flex-col justify-end xl:items-end items-center gap-4"
          >
            <p className="font-gt-reguler text-xl xl:w-[50%] xl:!text-start text-center">
              {`From classic to contemporary, Blackrock’s curated tile designs
              offer endless possibilities for creating stunning spaces. Our
              diverse range is meticulously crafted to meet the highest
              standards of design, quality, and innovation.`}
            </p>
            <Link
              href={"/product"}
              className="text-black-rock-Black no-underline"
              title="Product"
            >
              <div className="text-[42px] font-handestonie w-fit xl:me-[14rem]">
                Explore Our Products
                <div className="w-full h-1 bg-black -mt-5"></div>
              </div>
            </Link>
          </motion.div>
        </Col>
        <Col xs={12} md={12} lg={12} xl={4} className="xl:block hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="text-90 font-ivarRegular uppercase leading-[99px] mt-3"
          >
            Tile Design Mastery
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Exquisite;
