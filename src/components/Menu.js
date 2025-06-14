"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/LOGO.png";
import {
  CloseIcon,
  DownArrowIcon,
  FaceBookIcon,
  InstaGramIcon,
} from "@/utils/icon";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GVT from "../../image/Home/m1.jpg";
import WALL from "../../image/Home/m2.jpg";
import WOOD from "../../image/Home/m3.jpg";
const Menu = ({ setIsMenuOpen }) => {
  const menuList = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About Us", link: "/about" },
    // {
    //   id: 3,
    //   label: "Design",
    //   link: "/product",
    //   subList: [
    //     { id: 1, label: "Wall", link: "/product" },
    //     { id: 2, label: "Porcelain (gvt & pgvt)", link: "/product" },
    //     { id: 3, label: "Slab( Marble & kitchen Top)", link: "/product" },
    //     { id: 4, label: "Quartz", link: "/product" },
    //     { id: 5, label: "Wood", link: "/product" },
    //     { id: 6, label: "Full Body ( Colour Body )", link: "/product" },
    //     { id: 7, label: "Bathware", link: "/product" },
    //   ],
    // },
    {
      id: 3,
      label: "All Products",
      link: "/products",
      subList: [
        { id: 1, label: "Wall", link: "/products/wall",  },
        { id: 2, label: "Porcelain Tiles (GVT & PGVT)", link: "/products/GVT-PGVT" },
        { id: 3, label: "Full Body (Colour Body)", link: "/products" },
        { id: 4, label: "Slab (Marble & Kitchen Top)", link: "/products" },
        { id: 5, label: "Quartz", link: "/products" },
        { id: 6, label: "Strip (Plancs)", link: "/products" },
        { id: 7, label: "Bathware", link: "/products" },
        { id: 8, label: "SPC Flooring", link: "/products" },
        { id: 9, label: "Square Size", link: "/products" },
      ],
    },
    // { id: 5, label: "Catalogue", link: "/catalogue" },
    { id: 4, label: "Export", link: "/export" },
    { id: 5, label: "Blogs", link: "/blog" },
    { id: 6, label: "Contact", link: "/contact" },
  ];
  const router = useRouter();
  const images = [
    { src: GVT, alt: "GVT", label: "GVT" },
    { src: WALL, alt: "Wall", label: "WALL" },
    { src: WOOD, alt: "Wood", label: "WOOD" },
  ];
  return (
    <Container
      fluid
      className="absolute top-0 left-0 z-50 h-screen bg-black-rock-bg-color overflow-auto"
    >
      <Row className="lg:p-5 p-3">
        <Col xs={12}>
          <div
            onClick={() => {
              setIsMenuOpen((prv) => !prv);
            }}
            className="cursor-pointer circle-animation w-[70px] h-[70px] rounded-full border border-black-rock-Grey relative"
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <CloseIcon />
              {/* <span className="text-lg lg:text-2xl font-gt-reguler">Close</span> */}
            </div>
          </div>
        </Col>
        {/* <Col xs={6} className="flex justify-end">
          <div className="relative lg:w-[231px] lg:h-[50px] w-[230px] h-[48px] lg:mt-14 md:mt-[2.5rem] mt-[2rem]">
            <Image src={logo} alt="Logo Image" fill className="" />
          </div>
        </Col> */}
        <Col xs={12} lg={4} className="">
          <div className="my-10">
            <ul className="p-0">
              {menuList?.map((item) => (
                <li key={item.id} className="mb-2">
                  <Link
                    href={item.link}
                    className="text-black-rock-Black no-underline cursor-pointer hover:underline font-gt-reguler md:text-xl uppercase"
                    onClick={() => {
                      setIsMenuOpen((prev) => !prev);
                    }}
                  >
                    {item.label}
                  </Link>

                  {/* Render sublist if it exists */}
                  {item.subList && (
                    <ul className="mt-2 list-disc">
                      {item.subList.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.link}
                            className="text-black-rock-Black no-underline cursor-pointer hover:underline font-gt-reguler md:text-lg"
                            onClick={() => {
                              setIsMenuOpen((prev) => !prev);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} lg={8} className="">
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:!gap-0 md:gap-3 xs:gap-3 h-[450px]">
            {images.map((img, index) => (
              <Link
                key={index}
                href={"/product"}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => {
                  setIsMenuOpen((prv) => !prv);
                }}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />

                {/* Label */}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-black text-lg font-gt-bold font-bold uppercase px-4 py-1 rounded">
                  {img.label}
                </span>
              </Link>
            ))}
          </div>
        </Col>
        {/* <Col xs={12} md={6} className="flex justify-end">
          <div className="flex flex-col justify-between h-[100%]">
            <p className="lg:w-[465px] text-end md:text-xl text-sm">
              {`From classic to contemporary, Blackrock’s curated tile designs offer endless possibilities for creating stunning spaces. Our diverse range is meticulously crafted to meet the highest standards of design, quality, and innovation.`}
            </p>
            <div className="flex justify-end">
              <div className="flex gap-2">
                <Link href={"https://www.instagram.com/blackrock_porcelain/"} title="Instagram Link" className=" lg:-mt-14" target="_blank">
                  <InstaGramIcon />
                </Link>
                <span className=" lg:-mt-14">
                  <FaceBookIcon />
                </span>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Menu;
