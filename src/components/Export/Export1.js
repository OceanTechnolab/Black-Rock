import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExportImg from "../../../image/Export/Export1.png";
const Export1 = () => {
  const content = {
    title: `Blackrock’s `,
    subtitle: `Globally `,
    subtitleHandwritten: `Export`,
    description: `Blackrock’s premium tiles, crafted with precision and elegance, are exported to over 15 countries, bringing exceptional quality and design to projects across the globe.`,
  };
  return (
    <Container>
      <Row className="xl:py-24 lg:pt-24 md:!pt-20 md:!pb-12 xs:pt-4 xs:pb-7">
        <Col xs={12}>
          <h1 className="!mb-0 font-ivarRegular lg:text-[140px] lg:leading-[25px] md:text-[100px] leading-[0px] text-[48px] lg:ms-10 ms-3 uppercase relative z-10">
            Export
          </h1>
          {/* lg:h-[582px] md:h-[450px] h-[280px] */}
          <div className=" aspect-video relative rounded-xl">
            <Image src={ExportImg} fill className="rounded-xl" alt="Export Image" title="Export"/>
          </div>
        </Col>
        <h2 className="hidden"> {content.title} {content.subtitle} {content.subtitleHandwritten}</h2>
        <Col className="md:!my-6 xs:my-2" xs={12}>
          <div className="lg:text-start md:text-center xs:text-center xs:my-3">
            <p className="mb-0 font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-[75px] text-[38px] xl:leading-[110px] lg:leading-[88px] leading-[45px] md:leading-[83px] uppercase">
              {content.title}
            </p>
            <p className="mb-0 font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-[75px] text-[38px] xl:leading-[110px] lg:leading-[88px] leading-[45px] md:leading-[83px] uppercase">
              {content.subtitle}
              <span className="-ms-3 lg:inline hidden font-handestonie xl:text-[130px] lg:text-[100px] text-[100px] text-black-rock-Orange capitalize">
                {content.subtitleHandwritten}
              </span>
            </p>
            <p className="md:mb-6 text-center lg:hidden font-handestonie md:text-[120px] md:leading-[115px] text-70 leading-[70px] text-black-rock-Orange capitalize">
              {content.subtitleHandwritten}
            </p>
          </div>
        </Col>
        <Col lg={8} xl={6}>
          <p className="lg:text-start md:text-center xs:text-center font-gt-reguler md:!text-xl md:!leading-[25px] xs:text-sm !leading-[22px] -mt-3">
            {content.description}
          </p>
        </Col>
        <Col lg={4} xl={6} className="lg:block hidden"></Col>
        <Col lg={4} xl={6} className="lg:block hidden"></Col>
        <Col lg={8} xl={6}>
          <Row className="md:mt-4">
            <Col md={6} >
              <p className="lg:text-start md:text-center xs:text-center font-gt-reguler md:text-xl md:leading-[22px] text-sm leading-[17px]">{`At Blackrock, we are dedicated to providing luxury tiles to clients worldwide. With a strong global presence, we ensure that our tiles reach every corner of the world, meeting the highest international standards of quality, design, and durability.`}</p>
            </Col>
            <Col md={6}>
              <p className="lg:text-start md:text-center xs:text-center font-gt-reguler md:text-xl md:leading-[22px] text-sm leading-[17px]">{`From Europe to the Americas, the Middle East, and beyond, we cater to the diverse needs of architects, designers, and builders. Our streamlined export process ensures timely and secure delivery, no matter where your project is located.`}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Export1;
