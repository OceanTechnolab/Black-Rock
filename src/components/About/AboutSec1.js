import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About1 from "../../../image/About/About1.png";  // still keeping this for image import
import { LinesImageSVG } from "@/utils/icon";

const aboutData = {
  mainTitles: {
    title1: "Morbi’s Most",
    title2: "Sought-After",
    title3: "Luxury Tile Brand"
  },
  descriptions: {
    intro: `At Blackrock, we believe that every space deserves to be a masterpiece. With decades of expertise in tile manufacturing and exporting, we are committed to delivering superior craftsmanship, innovative designs, and timeless elegance. Our tiles have adorned luxury homes, commercial spaces, and iconic architectural projects worldwide.`,
    story: `Founded with a vision to blend artistry with cutting-edge technology, Blackrock has grown into a leader in the global tile industry. From humble beginnings, we’ve expanded our reach while staying true to our core values of quality, innovation, and sustainability. Each tile is a testament to our dedication to precision and perfection.`,
  },
  images: {
    aboutImage: {
      src: About1,
      alt: "About 1"
    }
  },
  storySection: {
    title: "Our Story"
  }
};

const AboutSec1 = () => {
  return (
    <Container>
      <Row className="lg:my-5 my-3">
        <h1 className="hidden"> {aboutData.mainTitles.title1} {aboutData.mainTitles.title3}</h1>
        <Col
          xs={12}
          className="flex lg:justify-start justify-center items-start "
        >
          <span className="uppercase font-ivarRegular xl:text-[100px] lg:text-90 md:text-[73px] 360:text-[35px] text-[37px] xl:leading-[110px] lg:leading-[100px] leading-[42px]">
            {aboutData.mainTitles.title1}
          </span>
        </Col>
        <Col
          xs={12}
          className="flex justify-center items-start text-black-rock-Orange "
        >
          <span className="font-handestonie xl:text-[130px] lg:text-[120px] md:text-[130px] 360:text-60 text-[72px] md:leading-[60px] 360:leading-[45px] leading-[58px]">
            {aboutData.mainTitles.title2}
          </span>
        </Col>
        <Col xs={12} className="flex lg:justify-end justify-center items-start">
          <span className="uppercase font-ivarRegular xl:text-[100px] lg:text-90 md:text-[73px] 360:text-[35px] text-[37px] xl:leading-[110px] lg:leading-[100px] md:leading-[88px] leading-[42px]">
            {aboutData.mainTitles.title3}
          </span>
        </Col>
        <Col xs={12} className="w-full flex lg:justify-end">
          <div className="xl:w-[72.5%] lg:w-[90%] md:text-lg text-sm md:leading-[22px] lg:text-start md:text-center xs:text-center font-gt-reguler mt-3 ">
            {aboutData.descriptions.intro}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="xl:h-[720px] lg:h-[600px] md:h-[500px] h-[280px] relative xl:!mt-60 md:!mt-20 mt-3 rounded-xl">
            <Image
              src={aboutData.images.aboutImage.src}
              fill
              className="rounded-xl absolute inset-0 flex justify-center items-center object-cover"
              alt={aboutData.images.aboutImage.alt}
              title={aboutData.images.aboutImage.alt}
            />
          </div>
        </Col>
      </Row>
      <Row className="py-5 justify-center items-center md:gap-y-6 gap-y-3">
        <Col xs={12} md={12} lg={5} xl={4}>
          <div className="md:text-[130px] md:leading-[172px] text-60 leading-[60px] font-handestonie">
            {aboutData.storySection.title}
            <span className="">
              <LinesImageSVG className={"md:w-[317px] w-[166px]"} />
            </span>
          </div>
        </Col>
        <Col xs={12} md={12} lg={7} xl={8}>
          <p className="md:text-lg text-sm font-gt-reguler">
            {aboutData.descriptions.story}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSec1;
