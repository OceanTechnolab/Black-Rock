"use client";
import { LinesImageSVG } from "@/utils/icon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home2 from "../../../image/Home/home2.png";
import Home3 from "../../../image/Home/home3.png";
import Home4 from "../../../image/Home/home4.png";
import { motion } from "framer-motion";

const DefiningLuxury = () => {
  const ref1 = useRef(null); // First section ref
  const ref2 = useRef(null); // Second section ref
  const ref3 = useRef(null); // Second row ref for Home3 and Home4 images
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
        threshold: 0.2, // Trigger when 20% of the section is in view
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
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is in view
      }
    );

    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    return () => {
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
    };
  }, []);

  // Observer for the second row (Home3 and Home4 images)
  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible3) {
          setIsVisible3(true); // Set visibility to true once
          observer3.unobserve(ref3.current); // Stop observing after first trigger
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );
  
    if (ref3.current) {
      observer3.observe(ref3.current);
    }
  
    return () => {
      if (ref3.current) {
        observer3.unobserve(ref3.current); // Cleanup observer on unmount
      }
    };
  }, [isVisible3]); 

  return (
    <>
      <Container id={'defining-luxury'}>
        <Row className="my-3 " ref={ref1}>
          <h2 className="hidden">Defining Luxury</h2>
          <Col xs={12}>
            {/* Animate when in view */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-ivarRegular md:text-[80px] text-60 text-end uppercase leading-none"
            >
              Defining Luxury
            </motion.p>
          </Col>
          <Col xs={12} lg={12} xl={7}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="xl:text-end md:text-90 text-[80px] font-handestonie"
            >
              One tile at a time
              <span className="flex xl:justify-end md:-mt-12 -mt-10">
                <LinesImageSVG className={"md:w-[350px] w-[300px]"} />
              </span>
            </motion.div>
            <Row className="md:pt-[3.75rem] md:pb-3 md:px-4 md:gap-0 gap-y-8 py-4">
              <Col
                xs={12}
                md={6}
                className="md:!block flex justify-center items-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="relative w-[270px] h-[270px] bg-black-rock-Orange rounded-full"
                >
                  <div className="absolute inset-0 flex justify-center items-center text-black-rock-White">
                    <span className="text-[80px]">12+</span>
                    <span className="ms-2 mt-3 text-xl">
                      Years <br /> Experience
                    </span>
                  </div>
                </motion.div>
              </Col>
              <Col xs={12} md={6}>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="flex justify-end xl:items-end items-center h-full font-gt-reguler"
                >
                  <p className="md:!text-start !text-center md:text-xl text-sm px-2">
                    At Blackrock, we specialize in crafting tiles that are
                    synonymous with luxury and sophistication. Each tile is a
                    blend of innovative technology and artisanal expertise,
                    designed to bring elegance and durability to any space.
                  </p>
                </motion.div>
              </Col>
            </Row>
            <Row className="md:gap-0 gap-y-9 py-3">
              <Col xs={12} md={6} className="md:!order-1 !order-2">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  className="flex justify-center items-center h-full"
                >
                  <p className="font-gt-reguler md:!text-start !text-center md:text-xl text-sm px-2">
                    With a commitment to quality and sustainability, Blackrock
                    offers a curated selection of tiles that reflect timeless
                    beauty. Whether for residential or commercial projects, our
                    tiles are crafted to transform your vision into reality.
                  </p>
                </motion.div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="md:!order-2 !order-1 md:block flex justify-center items-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 2.8, ease: "easeOut" }}
                  className="circle-animation lg:w-[380px] lg:h-[380px] md:w-[340px] md:h-[340px] w-[320px] h-[320px] rounded-full border-2 border-1 border-black-rock-Grey relative lg:ms-14"
                >
                  <div className="absolute inset-0 flex justify-center items-center">
                    <p className="inline-block text-center text-[78px] leading-none">
                      450+
                      <span className="text-center text-xl block">
                        Satisfied Clients
                      </span>
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={12} xl={5}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="xl:h-[656px] lg:h-[900px] md:h-[756px] h-[434px] relative xl:!mt-60 md:!mt-20 mt-3 rounded-xl"
            >
              <Image
                src={Home2}
                fill
                className="rounded-xl absolute inset-0 flex justify-center items-center object-cover"
                alt="Image"
                title="Image"
              />
            </motion.div>
          </Col>
        </Row>

        {/* Second Row */}
        <Row>
          <Col xs={12} ref={ref2}>
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={isVisible2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={isVisible3 ? { opacity: 1, scale: 1 } : {}}
              // transition={{ duration: 0.8, ease: "easeOut" }}
              className="xl:h-[400px] lg:h-[400px] md:h-[400px] h-[152px] relative md:my-20 my-10"
            >
              <Image
                src={Home3}
                fill
                className="rounded-xl absolute inset-0 flex justify-center items-center object-cover"
                alt="Image"
                title="Image"
              />
            </motion.div>
          </Col>
          <Col xs={12} ref={ref3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="xl:h-[560px] lg:h-[400px] md:h-[348px] h-[200px] relative"
            >
              <Image
                src={Home4}
                fill
                className="rounded-xl absolute inset-0 flex justify-center items-center object-cover"
                alt="Image"
                title="Image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DefiningLuxury;
