"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import { Col, Row } from "react-bootstrap";

const page = () => {
  return (
<>
  {/* Animation Section */}
  <motion.div
    className="relative w-full flex "
    initial="initial"
    animate="animate"
    style={{ zIndex: 50, height: "69vh", overflow: "hidden" }}
  >
    {/* Left Image Animation */}
    <motion.div
      className="w-1/2"
      style={{ height: "100%" }} // Reduce the height to 70% of the container
      variants={{
        initial: { x: 0 },
        animate: { x: "-100%" },
      }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/Left.png"
        alt="Left Image"
        className="w-full object-cover mt-10"
        width={500}
        height={300}
        style={{ height: "100%" }} // Ensure the image fills the reduced height
      />
    </motion.div>

    {/* Content Animation */}
    <motion.div
      className="absolute w-full flex justify-center items-center"
      style={{ height: "100%", top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }} // Match the height of the images
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.75 }}
      // style={{ zIndex: 100 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Row className="mt-10 xl:px-[20rem] lg:px-10 md:py-5 py-2 align-items-center"
        // style={{ height: "500px" }}
        >
          <Col xs={12} sm={6} md className="flex flex-col items-center">
            <Image
              src="/BlackRock-main.png"
              cover
               width={500}
               height={300}
              // className="w-full h-auto inset-0 flex justify-center items-center object-cover rounded-xl drop-shadow-lg"
              className="w-full max-h-[300px] h-auto object-cover rounded-xl drop-shadow-lg"
              alt="Image"
              title="Image"
            />
          </Col>
          <Col xs={12} md className="flex flex-col items-center">
            <ul className="p-0 font-ivarRegular text-center pt-2 space-y-2">
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/200X300MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full mb-1"
              >
                200 X 300 MM
              </button>
              </li>
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/200X600MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full"
              >
                200 X 600 MM
              </button>
              </li>
            </ul>
          </Col>

          {/* Divider */}
          <Col xs="12" md="auto" className="flex justify-center">
            <div className="md:border-l border-b border-[#464549] md:h-[270px] md:w-0 w-full"></div>
          </Col>

          <Col xs={12} md className="flex flex-col items-center pt-2">
            <ul className="p-0 font-ivarRegular text-center space-y-2">
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/250X375MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full mb-1"
              >
                250 X 375 MM
              </button>
              </li>
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/250X400MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full"
              >
                250 X 400 MM
              </button>
              </li>
            </ul>
          </Col>

          {/* Divider */}
          <Col xs="12" md="auto" className="flex justify-center">
            <div className="md:border-l border-b border-[#464549] md:h-[290px] md:w-0 w-full"></div>
          </Col>

          <Col xs={12} md className="flex flex-col items-center pt-2">
            <ul className="p-0 font-ivarRegular text-center space-y-2 ">
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/300X300MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full mb-1"
              >
                300 X 300 MM
              </button>
              </li>
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/300X450MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full mb-1"
              >
                300 X 450 MM
              </button>
              </li>
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/300X600MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full mb-1"
              >
                300 X 600 MM
              </button>
              </li>
              <li>
              <button
                onClick={() => window.location.href = "/products/wall/ceramic/300X750MM"}
                className="text-black-rock-Black text-lg no-underline hover:underline px-2 py-3 border-1 border-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition w-full "
              >
                300 X 750 MM
              </button>
              </li>
            </ul>
          </Col>
        </Row>
      </motion.div>
    </motion.div>

    {/* Right Image Animation */}
    <motion.div
      className="w-1/2"
      style={{ height: "100%" }} // Reduce the height to 70% of the container
      variants={{
        initial: { x: 0 },
        animate: { x: "100%" },
      }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/Right.png"
        alt="Right Image"
        className="w-full object-cover mt-10"
        width={500} // Replace with the actual width of the image
        height={300} // Replace with the actual height of the image
        style={{ height: "100%" }} // Ensure the image fills the reduced height
      />
    </motion.div>
  </motion.div>
</>
  );
};

export default page;

// export const metadata = {
//   title: "Explore Glossy, Matte, and High-Glossy Tiles at Blackrock",
//   description: `Browse Blackrock Porcelano’s wide selection of tiles, including Glossy, Matt, and High Glossy finishes. Perfect for floors, walls, kitchens, and bathrooms, combining style and durability.`,
//   alternates: {
//     canonical: `${NEXT_PUBLIC_WEB_URL}/product`,
//   },
// };
