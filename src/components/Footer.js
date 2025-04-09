"use client";
import { DesignerLogoIcon, FaceBookIcon, InstaGramIcon } from "@/utils/icon";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/LOGO.png";
const Footer = () => {
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const [isVisibleAddress, setIsVisibleAddress] = useState(false);
  const [isVisibleIcons, setIsVisibleIcons] = useState(false);
  const [isVisibleFooterText, setIsVisibleFooterText] = useState(false);

  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const iconsRef = useRef(null);
  const footerTextRef = useRef(null);
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true);
        }
      },
      { threshold: 0.2 }
    );

    const observerAddress = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleAddress(true);
        }
      },
      { threshold: 0.4 }
    );

    const observerIcons = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleIcons(true);
        }
      },
      { threshold: 0.5 }
    );

    const observerFooterText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleFooterText(true);
        }
      },
      { threshold: 0.7 }
    );

    if (titleRef.current) observerTitle.observe(titleRef.current);
    if (addressRef.current) observerAddress.observe(addressRef.current);
    if (iconsRef.current) observerIcons.observe(iconsRef.current);
    if (footerTextRef.current)
      observerFooterText.observe(footerTextRef.current);

    return () => {
      if (titleRef.current) observerTitle.unobserve(titleRef.current);
      if (addressRef.current) observerAddress.unobserve(addressRef.current);
      if (iconsRef.current) observerIcons.unobserve(iconsRef.current);
      if (footerTextRef.current)
        observerFooterText.unobserve(footerTextRef.current);
    };
  }, []);
  const Collection = ({ title, items, href }) => (
    <Col xs={6} md={4} lg={2}>
      <h5 className="font-bold text-sm mb-1 uppercase text-black-rock-Orange">
        {title}
      </h5>
      <div className="w-[15%] h-[2px] bg-black-rock-Grey2 mb-3 "></div>
      <Link href={href} className="text-black-rock-White no-underline">
        <ul className="space-y-2 text-black-rock-White p-0 text-12">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Link>
    </Col>
  );
  const sizesData = [
    {
      title: "Wall",
      sizes: [
        "200 X 300 MM",
        "200 X 600 MM",
        "250 X 375 MM",
        "250 X 400 MM",
        "250 X 450 MM",
        "250 X 600 MM",
        "300 X 300 MM",
        "300 X 450 MM",
        "300 X 750 MM",
        "300 X 600 MM",
        "400 X 800 MM",
      ],
    },
    {
      title: "GVT/PGVT",
      sizes: [
        "300 X 600 MM",
        "600 X 600 MM",
        "600 X 1200 MM",
        "800 X 1200 MM",
        "800 X 1600 MM",
        "300 X 1830 MM (USA)",
        "800 X 2400 MM",
        "800 X 3000 MM",
        "800 X 3200 MM",
        "900 X 1830 MM",
      ],
    },
    {
      title: "Strip",
      sizes: ["200 X 1200 MM", "200 X 900 MM", "300 X 1200 MM", "300 X 900 MM"],
    },
    {
      title: "Square Size",
      sizes: ["800 X 800 MM", "1000 X 1000 MM", "1200 X 1200 MM"],
    },
    {
      title: "Slab",
      sizes: [
        "1200 X 1600 MM",
        "1200 X 1800 MM",
        "1200 X 2400 MM",
        "1200 X 2600 MM",
        "1200 X 2800 MM",
        "1200 X 3200 MM",
      ],
    },
    { title: "Big Slab", sizes: ["1600 X 3200 MM", "1800 X 3600 MM"] },
  ];
  const extraSizeData = [
    {
      title: "Slab",
      sizes: [
        "1200 X 1600 MM",
        "1200 X 1800 MM",
        "1200 X 2400 MM",
        "1200 X 2600 MM",
        "1200 X 2800 MM",
        "1200 X 3200 MM",
      ],
    },
    { title: "Big Slab", sizes: ["1600 X 3200 MM", "1800 X 3600 MM"] },
  ];
  return (
    <motion.div
      ref={titleRef}
      initial={{ opacity: 0, x: 30 }}
      animate={isVisibleTitle ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="lg:mt-36 mt-10 bg-black-rock-Black py-5"
    >
      <Container className=" ">
       
        <Row className="lg:gy-0 gy-2 mb-5">
          {sizesData?.map((i, index) => {
            return (
              <Collection
                title={i?.title}
                href="/product"
                items={i?.sizes}
                key={index}
              />
            );
          })}
        </Row>
        <Row className="lg:gy-0 gy-2 mb-5">
          <Col md={6}  lg={3}>
            <p className="text-black-rock-White mb-0 font-handestonie text-50 leading-5 mt-9">{`" Blackrock Porcelano`}</p>
            <p className="text-black-rock-White mb-0 font-handestonie text-50">{`The Signature of Style........  "`}</p>
          </Col>
          <Col md={6} lg={3}>
          
            <div className="w-[15%] h-[2px] bg-black-rock-Grey2 mb-3 "></div>
            <ul className="space-y-2 text-BaseWhite text-sm text-black-rock-White p-0 font-gt-reguler ">
              <li>Best Tiles Company In India</li>
              <li>Best Floor Tiles In India</li>
              <li>
                <Link
                  href={"/catalogue"}
                  className="text-black-rock-White no-underline hover:underline"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="text-black-rock-White no-underline hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5 className="font-bold text-sm mb-1 uppercase text-BaseWhite text-black-rock-Orange">
              Address
            </h5>
            <div className="w-[15%] h-[2px] bg-black-rock-Grey2 mb-3 "></div>
            <p className="uppercase text-12 text-black-rock-White">
              BHAGWATI CHAMBERS 1 OFFICE NO 10, 1ST FLOOR NH 8A,
              <br />
              MORBI, MORBI, GUJARAT, 363642.
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h5 className="font-bold text-sm mb-1 uppercase text-BaseWhite text-black-rock-Orange">
              Export Inquiry
            </h5>
            <div className="w-[15%] h-[2px] bg-black-rock-Grey2 mb-3 "></div>
            <ul className="space-y-2 text-BaseWhite text-12 text-black-rock-White p-0">
              <li>
                <Link
                  href="tel:+919512900028"
                  className="text-black-rock-White no-underline"
                  title="Telephone"
                >
                  Call: +91 98245 88448
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919512900028"
                  className="text-black-rock-White no-underline"
                  title="Telephone"
                >
                  Call: +91 95129 00028
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@blackrockporcelano.com"
                  className="text-black-rock-White no-underline"
                  title="Email"
                >
                  Email: info@blackrockporcelano.com
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="lg:gy-0 gy-2 mt-5">
          <Col md={6}>
            <div
              // ref={iconsRef}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isVisibleIcons ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 1.6, ease: "easeOut" }}
              className="flex  gap-x-[10px] my-3"
            >
              <span className="text-black-rock-Grey2">- Follow Us</span>
              <Link
                href={"https://www.instagram.com/blackrock_Porcelano/"}
                title="Instagram Link"
                target="_blank"
              >
                <InstaGramIcon />
              </Link>
              <span>
                <FaceBookIcon />
              </span>
            </div>
          </Col>
          <Col md={6}>
            <div
              // ref={iconsRef}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isVisibleIcons ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 1.6, ease: "easeOut" }}
              className="flex flex-col md:items-end text-sm gap-y-2"
            >
              <span className="text-black-rock-Grey2 block">
                Copyright © {currentYear} Blackrock All Rights Reserved.
              </span>
              <Link
                href={"https://oceantechnolab.com/"}
                target="_blank"
                title="creatiefdesign"
                className="hover:underline no-underline text-black-rock-Grey2"
              >
                <span className="text-black-rock-Grey2 block">
                  Design By Ocean TechnoLab
                </span>
                {/* <DesignerLogoIcon className="md:w-[220px] md:h-[28px] w-[150px] h-[20px]" /> */}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Footer;

// "use client";
// import { DesignerLogoIcon, FaceBookIcon, InstaGramIcon } from "@/utils/icon";
// import React, { useEffect, useRef, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Footer = () => {
//   const [isVisibleTitle, setIsVisibleTitle] = useState(false);
//   const [isVisibleAddress, setIsVisibleAddress] = useState(false);
//   const [isVisibleIcons, setIsVisibleIcons] = useState(false);
//   const [isVisibleFooterText, setIsVisibleFooterText] = useState(false);

//   const titleRef = useRef(null);
//   const addressRef = useRef(null);
//   const iconsRef = useRef(null);
//   const footerTextRef = useRef(null);

//   useEffect(() => {
//     const observerTitle = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisibleTitle(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const observerAddress = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisibleAddress(true);
//         }
//       },
//       { threshold: 0.4 }
//     );

//     const observerIcons = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisibleIcons(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     const observerFooterText = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisibleFooterText(true);
//         }
//       },
//       { threshold: 0.7 }
//     );

//     if (titleRef.current) observerTitle.observe(titleRef.current);
//     if (addressRef.current) observerAddress.observe(addressRef.current);
//     if (iconsRef.current) observerIcons.observe(iconsRef.current);
//     if (footerTextRef.current) observerFooterText.observe(footerTextRef.current);

//     return () => {
//       if (titleRef.current) observerTitle.unobserve(titleRef.current);
//       if (addressRef.current) observerAddress.unobserve(addressRef.current);
//       if (iconsRef.current) observerIcons.unobserve(iconsRef.current);
//       if (footerTextRef.current) observerFooterText.unobserve(footerTextRef.current);
//     };
//   }, []);

//   return (
//     <Container className="lg:mt-36 mt-10 mb-10">
//       <Row>
//         <Col xs={12}>
//           <motion.p
//             ref={titleRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="uppercase md:text-[32px] text-12 md:leading-[35px] font-gt-reguler text-center md:mb-4 mb-2"
//           >
//             What we
//           </motion.p>
//           <motion.p
//             ref={titleRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisibleTitle ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="uppercase lg:text-[160px] md:text-[100px] text-[32px] lg:leading-[176px] md:leading-[110px] font-ivarRegular text-center md:mb-4 mb-2"
//           >
//             Blackrock
//           </motion.p>
//           <motion.p
//             ref={addressRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisibleAddress ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.4, ease: "easeOut" }}
//             className="uppercase md:text-lg md:leading-[22px] text-12 text-center font-gt-reguler"
//           >
//             BHAGWATI CHAMBERS 1 OFFICE NO 10, 1ST FLOOR NH 8A,
//             <br />
//             MORBI, MORBI, GUJARAT, 363642.
//           </motion.p>
//           <motion.div
//             ref={iconsRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisibleIcons ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.6, ease: "easeOut" }}
//             className="flex justify-center items-center gap-x-[10px] my-3"
//           >
//             <Link href={"https://www.instagram.com/blackrock_Porcelano/"} title="Instagram Link" target="_blank">
//               <InstaGramIcon />
//             </Link>
//             <span>
//               <FaceBookIcon />
//             </span>
//           </motion.div>
//           <motion.div
//             ref={footerTextRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisibleFooterText ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="flex md:flex-row flex-col justify-between items-center gap-y-4 md:mt-40 mt-14"
//           >
//             <div className="font-gt-reguler text-sm">
//               <span className="opacity-50">Blackrock</span>{" "}
//               <span className="font-semibold text-black/80">©</span>{" "}
//               <span className="opacity-50">2024 | All Rights Reserved</span>
//             </div>
//             <Link href={'http://creatiefdesign.in'} target="_blank" title="creatiefdesign">
//               <DesignerLogoIcon className="md:w-[220px] md:h-[28px] w-[150px] h-[20px]" />
//             </Link>
//           </motion.div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Footer;
