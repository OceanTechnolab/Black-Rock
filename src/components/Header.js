"use client";
import { MenuIcon } from "@/utils/icon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../../public/NEWLOGO.png";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflowY = "hidden";
    }
    //  else {
    //   // Enable scrolling
    //   document.body.style.overflow = "auto";
    // }

    // Cleanup when component unmounts or when condition changes
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Container className="md:py-5 py-3">
          <Row className="items-center">
            <Col xs={8} md={6} lg={4} xl={3} className="">
              <Link href={"/"} title="BlackRock">
                <div className="relative  w-[200px] h-[42px]">
                  <Image
                    src={logo}
                    alt="Logo Image"
                    title="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </Col>
            <Col xs={4} md={6} lg={8} xl={9}>
              <div
                className="flex items-center justify-end  cursor-pointer"
                onClick={() => {
                  setIsMenuOpen((prv) => !prv);
                }}
              >
                <span>
                  <MenuIcon className=' w-[40px] h-[40px]'/>
                </span>
                {/* <span className="font-gt-reguler text-xl">Menu</span> */}
              </div>
            </Col>
            {/* <Col lg={4} xl={4} className="text-end lg:block hidden">
              <Link
                href={"/contact"}
                title="Contact"
                className="text-black-rock-Black no-underline hover:underline"
              >
                <p className="font-gt-reguler text-xl">Contact Us</p>
              </Link>
            </Col> */}
          </Row>
        </Container>
      </motion.div>
      {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null}
    </>
  );
};

export default Header;
