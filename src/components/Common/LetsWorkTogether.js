"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { CallIcon, SMSIcon } from "@/utils/icon";
import Link from "next/link";
const LetsWorkTogether = () => {
  const [isVisibleContact, setIsVisibleContact] = useState(false);
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const titleRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerContact = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleContact(true);
        }
      },
      { threshold: 0.3 }
    );
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true);
        }
      },
      { threshold: 0.2 }
    );
    if (contactRef.current) observerContact.observe(contactRef.current);
    if (titleRef.current) observerTitle.observe(titleRef.current);
    return () => {
      if (contactRef.current) observerContact.unobserve(contactRef.current);
      if (titleRef.current) observerTitle.unobserve(titleRef.current);
    };
  }, []);

  return (
    <>
      {/* <Row>
        <Col xs={12}>
          <motion.div
            ref={contactRef}
            // initial={{ opacity: 0, y: 50 }}
            // animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 1.5, ease: "easeOut" }}
            className=""
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:text-xl text-sm font-gt-reguler lg:mb-14 mb-1"
            >
              GET IN TOUCH
            </motion.p>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="xl:text-[120px] lg:text-[120px] md:text-[100px] text-[53px] font-ivarRegular xl:leading-[140px] lg:leading-[130px] md:leading-[110px] leading-[60px]"
              >
                {"LET’S"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
                className="xl:text-[120px] lg:text-[120px] md:text-[100px] text-[53px] font-ivarRegular xl:leading-[140px] lg:leading-[130px] lg:ms-[100px] md:leading-[110px] leading-[60px] md:ms-[65px] ms-[32px]"
              >
                WORK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="xl:text-[120px] lg:text-[120px] md:text-[100px] text-[51px] font-ivarRegular xl:leading-[140px] lg:leading-[130px] lg:ms-[250px] md:leading-[110px] leading-[60px] md:ms-[160px] ms-[77px]"
              >
                TOGETHER
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2.8, ease: "easeOut" }}
                className="xl:text-[140px] lg:text-[170px] md:text-[140px] text-70 font-handestonie xl:leading-[130px] lg:leading-[130px] md:leading-[100px] text-black-rock-Orange xl:ms-[375px] lg:ms-[350px] md:ms-[250px] ms-[115px] lg:-mt-16 -mt-10"
              >
                Connect
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isVisibleContact ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2.8, ease: "easeOut" }}
              className="lg:ms-[270px] md:ms-[167px] md:text-xl text-sm leading-[22px] font-gt-reguler"
            >
              Inspired by our <br /> work? We would be delighted to help you
              <br /> create your dream Tiles.
            </motion.p>
          </motion.div>
        </Col>
      </Row> */}
      <Row>
        <Col xs={12}>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-ivarRegular lg:text-90 lg:leading-[99px] md:text-60 md:leading-[66px] text-[32px] leading-[35px] uppercase"
          >
            {`LET’S WORK TOGETHER`}
          </motion.div>
        </Col>
        <Col lg={7}>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" md:text-xl text-sm leading-[22px] font-gt-reguler my-4"
          >
            <p className="">
              Inspired by our <br /> work? We would be delighted to help you
              <br /> create your dream Tiles.{" "}
            </p>
          </motion.div>
        </Col>
        <Col lg={5}>
        <motion.div
            initial={{ scale: 0.8, opacity: 1 }}
            animate={isVisibleContact ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 2.3, ease: "easeOut" }}
            className="flex gap-4 items-center lg:justify-end justify-center"
          >
            <Link
              href="mailto:info@blackrockporcelano.com"
              className="text-black-rock-Black no-underline"
              title="Email"
            >
              <div className="circle-animation md:w-[242px] md:h-[242px] w-[160px] h-[160px] rounded-full border-2 border-black-rock-Grey relative">
                <div className=" absolute inset-0 flex justify-center items-center">
                  <div>
                    <span className="flex justify-center mb-2">
                      <SMSIcon />
                    </span>
                    <p className="font-gt-reguler md:text-xl text-sm">
                      Send A Message
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="tel:+919512900028"
              className="text-black-rock-Black no-underline"
              title="Telephone"
            >
              <div className="circle-animation md:w-[242px] md:h-[242px] w-[160px] h-[160px] rounded-full border-2 border-black-rock-Grey relative">
                <div className=" absolute inset-0 flex justify-center items-center">
                  <div>
                    <span className="flex justify-center mb-2">
                      <CallIcon />
                    </span>
                    <p className="font-gt-reguler md:text-xl text-sm">
                      +91 9512900028
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </Col>
      </Row>

      {/* <Row>
        <Col
          xl={12}
          className="flex lg:justify-end justify-center items-center xl:mt-0 md:mt-5 mt-2"
        >
         
        </Col>
      </Row> */}
    </>
  );
};

export default LetsWorkTogether;
