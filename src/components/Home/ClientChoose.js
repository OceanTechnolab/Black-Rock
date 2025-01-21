"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Home9 from "../../../image/Home/home9.png";
import P1 from "../../../image/Home/p1.jpg";
import p2 from "../../../image/Home/p2.jpg";
import p3 from "../../../image/Home/p3.jpg";
import p4 from "../../../image/Home/p4.jpg";
import { motion } from "framer-motion";
import LetsWorkTogether from "../Common/LetsWorkTogether";

const ClientChoose = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const [isVisibleSlider, setIsVisibleSlider] = useState(false);
  // const [isVisibleContact, setIsVisibleContact] = useState(false);

  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  // const contactRef = useRef(null);

  useEffect(() => {
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true);
        }
      },
      { threshold: 0.2 }
    );

    const observerSlider = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleSlider(true);
        }
      },
      { threshold: 0.2 }
    );

    // const observerContact = new IntersectionObserver(
    //   ([entry]) => {
    //     if (entry.isIntersecting) {
    //       setIsVisibleContact(true);
    //     }
    //   },
    //   { threshold: 0.3 }
    // );

    if (titleRef.current) observerTitle.observe(titleRef.current);
    if (sliderRef.current) observerSlider.observe(sliderRef.current);
    // if (contactRef.current) observerContact.observe(contactRef.current);

    return () => {
      if (titleRef.current) observerTitle.unobserve(titleRef.current);
      if (sliderRef.current) observerSlider.unobserve(sliderRef.current);
      // if (contactRef.current) observerContact.unobserve(contactRef.current);
    };
  }, []);
  const review = [
    {
      id: 1,
      name: "Emily S.",
      review:
        "Blackrock Porcelano's tiles completely transformed my living room. The quality is unmatched, and their customer service was top-notch!",
      image: Home9,
    },
    {
      id: 2,
      name: "John D.",
      review:
        "I’m impressed by the durability and elegance of the tiles I purchased. They’ve added a modern touch to my bathroom.",
      image: P1,
    },
    {
      id: 3,
      name: "Sarah K.",
      review:
        "Wide variety, excellent quality, and fast delivery – Blackrock Porcelano exceeded all my expectations!",
      image: p2,
    },
    {
      id: 4,
      name: "Michael B.",
      review:
        "The tiles were perfect for our outdoor patio. Stunning design and long-lasting quality!",
      image: p3,
    },
    {
      id: 5,
      name: "Jessica L.",
      review:
        "Customer support was very helpful in choosing the right tiles for my project. Highly recommended!",
      image: p4,
    },
  ];

  return (
    <Container className="pt-10">
      <Row>
        <Col xs={12}>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-ivarRegular lg:text-90 lg:leading-[99px] md:text-60 md:leading-[66px] text-[32px] leading-[35px] uppercase"
          >
            {`95% of Clients Choose Blackrock Again`}
          </motion.div>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-end items-center md:text-xl text-sm leading-[22px] lg:mt-10 mt-3"
          >
            <p className="w-[420px] text-right">
              {`Our clients trust Blackrock for delivering unmatched quality and design. Here’s what they have to say about their experience with our luxurious tile collections`}
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <motion.div
            ref={sliderRef}
            initial={{ opacity: 0 }}
            animate={isVisibleSlider ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="slider-container lg:ms-[93px]"
          >
            <Slider {...settings} className="!h-[350px]">
              {review?.map((i, index) => (
                <div className="p-2" key={index + 1}>
                  <div className="rounded-md border border-black-rock-Grey md:px-[36px] p-4 md:py-[42px]">
                    <div className="flex gap-x-6 items-center">
                      <div className="relative w-[100px] h-[100px]">
                        <Image
                          src={i?.image}
                          fill
                          className="rounded-full object-cover"
                          alt="Client Image"
                          title="Client"
                        />
                      </div>
                      <p className="text-30 font-ivarRegular">{i?.name}</p>
                    </div>
                    <p className="font-gt-reguler text-xl mt-3 line-clamp-3">{i?.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </Col>
      </Row>
      {/* <div className="xl:ms-[100px] lg:ms-[50px]"> */}
      <LetsWorkTogether />
      {/* </div> */}
    </Container>
  );
};

export default ClientChoose;
