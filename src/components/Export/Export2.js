import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExportImg2 from "../../../image/Export/Export3.svg";
const Export2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <p className=" font-ivarRegular xl:text-90 xl:leading-[99px] lg:text-70 md:text-60 md:leading-[66px] text-30 leading-[33px] uppercase">
              Proudly Serving
            </p>
          </Col>
          <Col md={12} lg={4} className="">
            <div className="lg:block md:flex md:justify-end w-full md:items-end">
              <p className="capitalize lg:w-auto md:w-[60%] xl:mt-12 lg:mt-8 md:mt-3 xs:mt-2 md:text-xl md:leading-[22px] text-sm leading-[17px] font-gt-reguler">{`With a presence in over 15+ countries, Blackrock has established itself as a trusted name in the global tile industry. Our premium tiles are crafted to meet the unique demands of diverse markets, from Europe to Asia, the Middle East, and beyond.`}</p>
            </div>
          </Col>
          <Col md={12} xs={12} className="lg:hidden ">
            <p className="md:text-[160px] md:leading-[192px] text-90 leading-[99px]  font-ivarRegular text-black-rock-Orange text-center ">
              15+
            </p>
          </Col>
          <Col xl={4} lg={4} md={12} xs={12}>
            <div className="">
              <p className="capitalize lg:w-auto md:w-[60%] md:text-xl md:leading-[22px] text-sm leading-[17px] font-gt-reguler lg:mt-24 ">
                {`Each of our international clients benefits from our commitment to precision, quality, and design excellence. No matter the location, Blackrock ensures seamless delivery, adhering to the highest global standards while transforming spaces around the world.`}
              </p>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} xs={4} className="lg:block hidden">
            <p className="text-[200px] leading-[240px] font-ivarRegular text-black-rock-Orange xl:ms-24 lg:ms-[50px] -mt-10">
              15+
            </p>
          </Col>
          <Col xs={12} className="flex justify-end mt-4">
            <p className="xl:text-90 xl:leading-[99px] lg:text-70 md:text-[57px] md:leading-[65px] text-30 leading-[33px] font-ivarRegular uppercase">
              Countries Worldwide
            </p>
          </Col>
          <Col>
          {/* xl:h-[732px] lg:h-[600px] md:h-[460px] h-[197px] */}
            <div className="aspect-[16/7] relative rounded-xl ">
              <Image
                src={ExportImg2}
                fill
                className="rounded-xl"
                alt="Countries Worldwide Export Map Image"
                title="Countries Worldwide Export Map"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Export2;
