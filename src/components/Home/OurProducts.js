"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home5 from "../../../image/Home/home5.png";
import { RightArrowSVG } from "@/utils/icon";
import { motion } from "framer-motion";
import Link from "next/link";
import Home2 from "../../../image/Home/home11.jpg";
const OurProducts = () => {
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
        threshold: 0.2, // Trigger when 20% of the section is visible
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
  const sizesData = [
    {
      title: "Wall",
      sizes: [
        "200x300",
        "200x600",
        "250x375",
        "250x400",
        "250x450",
        "250x600",
        "300x300",
        "300x450",
        "300x750",
        "300x600",
        "400x800",
      ],
    },
    {
      title: "GVT/PGVT",
      sizes: [
        "300x600",
        "600x600",
        "600x1200",
        "800x1200",
        "800x1600",
        "300x1830 (USA)",
        "800x2400",
        "800x3000",
        "800x3200",
        "900x1830",
      ],
    },
    {
      title: "Slab",
      sizes: ["200x1200", "200x900", "300x1200", "300x900"],
    },
    {
      title: "Square Size",
      sizes: ["800x800", "1000x1000", "1200x1200"],
    },
    {
      title: "Slabs",
      sizes: [
        "1200x1600",
        "1200x1800",
        "1200x2400",
        "1200x2600",
        "1200x2800",
        "1200x3200",
      ],
    },
    {
      title: "Big Sizes",
      sizes: ["1600x3200", "1800x3600"],
    },
  ];

  return (
    <Container ref={ref} className=" md:py-20 py-10">
      <Row className="gap-10">
        <Col lg={5}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="xl:h-[656px] lg:h-[500px] md:h-[756px] h-[434px] relative "
          >
            <Image
              src={Home2}
              fill
              className=" absolute inset-0 flex justify-center items-center object-cover"
              alt="Image"
              title="Image"
            />
          </motion.div>
        </Col>
        <Col lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2.3, ease: "easeOut" }}
            className="h-full flex flex-col justify-between"
          >
            <span className="block text-[48px] font-handestonie md:mb-0 mb-5 ">
              Perfection in every dimensions.
            </span>
            <Row className="md:mt-20 lg:!g-0 gy-2">
              {/* Stat 1 */}
              <Col xs={12} md className="flex flex-col items-center">
                <p className="mb-2 font-medium font-gt-bold uppercase">
                  GVT/PGVT
                </p>
                <Link
                  href={"/product"}
                  className="text-black-rock-Black no-underline "
                >
                  <ul className="p-0 font-ivarRegular text-center">
                    <li>300 X 600 MM</li>
                    <li>600 X 600 MM</li>
                    <li>600 X 1200 MM</li>
                    <li>800 X 1600 MM</li>
                    <li>800 X 2400 MM</li>
                    <li>800 X 3000 MM</li>
                    <li>800 X 3200 MM</li>
                    <li>900 X 1830 MM</li>
                 
                  </ul>
                </Link>
              </Col>

              {/* Divider */}
              <Col xs="12" md="auto" className="flex justify-center">
                <div className="md:border-l border-b border-[#464549] md:h-[220px] md:w-0 w-full"></div>
              </Col>

              {/* Stat 2 */}
              <Col xs={12} md className="flex flex-col items-center">
                <p className="mb-2 font-medium font-gt-bold uppercase">Wall</p>
                <Link
                  href={"/product"}
                  className="text-black-rock-Black no-underline "
                >
                  <ul className="p-0 font-ivarRegular text-center">
                    <li>200 X 300 MM</li>
                    <li>200 X 600 MM</li>
                    <li>250 X 375 MM</li>
                    <li>250 X 400 MM</li>
                    <li>250 X 450 MM</li>
                    <li>250 X 600 MM</li>
                    <li>300 X 300 MM</li>
                    <li>300 X 450 MM</li>
                  
                  </ul>
                </Link>
              </Col>

              {/* Divider */}
              <Col xs="12" md="auto" className="flex justify-center">
                <div className="md:border-l border-b border-[#464549] md:h-[220px] md:w-0 w-full"></div>
              </Col>

              {/* Stat 3 */}
              <Col xs={12} md className="flex flex-col items-center">
                <p className="mb-2 font-medium font-gt-bold uppercase">Slab</p>
                <Link
                  href={"/product"}
                  className="text-black-rock-Black no-underline "
                >
                  <ul className="p-0 font-ivarRegular text-center">
                    <li>1200 X 1600 MM</li>
                    <li>1200 X 1800 MM</li>
                    <li>1200 X 2600 MM</li>
                    <li>1200 X 2800 MM</li>
                    <li>1200 X 3200 MM</li>                 
                  </ul>
                </Link>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurProducts;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Home5 from "../../../image/Home/home5.png";
// import { RightArrowSVG } from "@/utils/icon";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const OurProducts = () => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Set up IntersectionObserver to detect when the section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of the section is visible
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return (
//     <Container ref={ref} className=" md:py-20 py-10 xl:mb-36">
//       <Row className="uppercase ">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={isVisible ? { y: 0, opacity: 1 } : {}}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="flex justify-center items-center md:gap-x-10 gap-x-5"
//         >
//           <span className="font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-60 text-[32px]">
//             from
//           </span>
//           <div className="relative md:w-[110px] md:h-[110px] w-[48px] h-[48px] hover:scale-105 duration-700">
//             <Image src={Home5} fill className="rounded-xl"  alt="Image"
//                 title="Image" />
//           </div>
//           <span className="font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-60 text-[32px]">
//             small
//           </span>
//           <span className="lg:!hidden md:block hidden font-handestonie text-70 h-[72px]">
//             to
//           </span>
//         </motion.div>
//         <span className="md:!hidden block text-center font-handestonie text-40 h-10 my-3">
//           to
//         </span>
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={isVisible ? { y: 0, opacity: 1 } : {}}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="flex justify-center items-center md:gap-x-10 gap-x-3"
//         >
//           <span className="lg:!block hidden font-handestonie text-70 h-[72px] lowercase">
//             to
//           </span>
//           <div className="relative md:w-[110px] md:h-[110px] w-[48px] h-[48px] hover:scale-105 duration-700">
//             <Image src={Home5} fill className="rounded-xl"  alt="Image"
//                 title="Image" />
//           </div>
//           <span className="font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-60 text-[32px]">
//             Large Tiles Sizes
//           </span>
//         </motion.div>
//       </Row>

//       <Row className="mt-5 gap-y-5">
//         <Col xs={12} md={6} className="flex justify-center items-center">
//           <motion.ul
//             initial={{ opacity: 0, x: -30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 2.3, ease: "easeOut" }}
//             className="lg:text-[80px] text-60 font-ivarRegular"
//           >
//             <li className="hover:translate-x-7 duration-500">60x60 CM</li>
//             <li className="hover:translate-x-7 duration-500">60x120 CM</li>
//             <li className="hover:translate-x-7 duration-500">80x160 CM</li>
//             <li className="hover:translate-x-7 duration-500">120x180 CM</li>
//           </motion.ul>
//         </Col>
//         <Col xs={12} md={6} className="flex justify-center items-center">
//           <Link
//             href={"/product"}
//             className="text-black-rock-Black no-underline"
//             title="Product"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={isVisible ? { scale: 1, opacity: 1 } : {}}
//               transition={{ duration: 2.3, ease: "easeOut" }}
//               className="circle-animation xl:w-[525px] xl:h-[525px] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-full border-2 border-black-rock-Grey relative"
//             >
//               <div className=" absolute inset-0 flex justify-center items-center">
//                 <div className="font-gt-reguler">
//                   <p className="xl:text-[68px] lg:text-[55px] text-[38px] leading-[70px]">
//                     Our Products
//                   </p>
//                   <p className="text-xl text-center">See more our products</p>
//                   <span className="flex justify-center mt-3">
//                     <RightArrowSVG className={"lg:w-16 lg:h-16 w-10 h-10"} />
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OurProducts;
