import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About2 from "../../../image/About/MIKULBHAI PHOTO.jpg";
const AboutSec2 = () => {
  const aboutSec2Data = {
    titlePart1: "Message From the",
    titlePart2: "Founder",
    description:
      "Since day one, our mission has been to craft tiles that transform spaces. Today, Blackrock tiles are featured in homes and businesses around the globe. We remain committed to innovation, sustainability, and delivering excellence in every tile we produce.",
    image: {
      src: About2,
      alt: "About 1"
    }
  };

  return (
    <Container>
      <Row className="md:gap-y-14 gap-y-5">
        <Col xs={12} md={12} lg={6}>
          <div className="lg:w-full w-[90%]">
            <span className="relative z-20 font-ivarRegular xl:text-90 lg:text-70 md:text-90 text-60 xl:leading-[99px] lg:leading-[80px] md:leading-[99px] leading-[66px] uppercase ">
              {aboutSec2Data.titlePart1}
            </span>
          </div>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={6}
          className="md:flex md:items-center xl:gap-x-7 md:gap-x-5"
        >
          <div className="xl:mt-[8.5rem] lg:mt-[6.5rem] xl:-ms-60 lg:-ms-[9.5rem]">
            <span className="relative z-20 ps-4 text-black-rock-Orange font-handestonie xl:text-[130px] lg:text-[100px] md:text-[130px] 360:text-60 text-[72px] md:leading-[60px] 360:leading-[45px] leading-[58px]">
              {aboutSec2Data.titlePart2}
            </span>
            <div className="xl:w-[400px] lg:w-[300px] md:w-[400px] xl:h-[594px] lg:h-[530px] md:h-[523px] h-[450px] relative xl:-mt-[2.6rem] lg:-mt-[2.4rem] -mt-[2rem]">
              <Image
                src={aboutSec2Data.image.src}
                fill
                className="object-cover"
                alt={aboutSec2Data.image.alt}
                title={aboutSec2Data.image.alt}
              />
            </div>
          </div>
          <div className="md:mt-0 mt-3">
            <p className="font-gt-reguler lg:text-xl md:text-base text-sm leading-[22px] xl:w-[90%] lg:text-start md:text-start xs:text-center">
              {aboutSec2Data.description}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSec2;
