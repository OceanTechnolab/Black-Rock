import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About3 from "../../../image/About/About3.png";
const AboutSec3 = () => {
  const aboutSec3Data = {
    title: "Advanced Technology at Blackrock’s Core",
    description:
      "At the forefront of innovation, Blackrock combines traditional craftsmanship with cutting-edge technology to create tiles that are both timeless and forward-thinking. Our state-of-the-art manufacturing facility is equipped with the latest advancements, ensuring precision, durability, and unmatched design possibilities.",
    image: {
      src: About3,
      alt: "About 3"
    },
    list: [
      {
        id: 1,
        title: "Precision Engineering",
        description:
          "Utilizing advanced machinery and technology to achieve exacting standards in tile design and production."
      },
      {
        id: 2,
        title: "Innovative Finishes",
        description:
          "Our innovative technology allows for unique textures, finishes, and effects, creating truly bespoke tile collections."
      },
      {
        id: 3,
        title: "Sustainability Through Innovation",
        description:
          "We implement eco-friendly practices that reduce waste and energy consumption, making our tiles as responsible as they are beautiful."
      },
      {
        id: 4,
        title: "Exceptional Craftsmanship",
        description:
          "Every Blackrock tile is meticulously crafted to meet the highest standards."
      },
      {
        id: 5,
        title: "Sustainable Practices",
        description:
          "We are committed to eco-friendly processes, ensuring our tiles are both beautiful and responsible."
      },
      {
        id: 6,
        title: "Global Reach",
        description:
          "From our state-of-the-art facility, we export our tiles to clients around the world, delivering unparalleled service and quality."
      }
    ]
  };

  return (
    <Container className="lg:py-20 md:py-8">
      <h2 className="hidden">{aboutSec3Data.title}</h2>
      <Row>
        <Col xs={12}>
          <div className="lg:h-[454px] md:h-[375px] h-[220px] relative my-10 rounded-xl">
            <Image
              src={aboutSec3Data.image.src}
              fill
              className="rounded-xl"
              alt={aboutSec3Data.image.alt}
              title={aboutSec3Data.image.alt}
            />
          </div>

          <p className="relative z-10 lg:text-90 md:text-[75px] text-[36px] font-ivarRegular lg:leading-[99px] md:leading-[90px] leading-[39px] uppercase xl:-mt-[4.5rem]">
            {aboutSec3Data.title}
          </p>
        </Col>
        <Col>
          <div className="flex xl:justify-end w-full">
            <p className="xl:w-1/3 md:w-[70%] font-gt-reguler md:text-xl md:leading-[22px] text-sm">
              {aboutSec3Data.description}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="gap-y-7 py-4">
        {aboutSec3Data.list.map((item) => (
          <Col xs={12} md={6} lg={4} key={item.id} className="flex justify-center">
            <div className="xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] w-[330px] h-[330px] rounded-full border border-black-rock-Grey2 flex justify-center items-center">
              <div className="xl:px-[4.5rem] lg:px-[2.5rem] md:px-[2rem] px-[4rem]">
                <p className="text-center xl:text-30 lg:text-24 md:text-30 text-24 font-gt-reguler font-semibold xl:leading-[37px] lg:leading-[30px] md:leading-[37px] leading-[30px]">
                  {item.title}
                </p>
                <p className="text-center md:text-lg md:leading-[22px] text-sm font-gt-reguler">
                  {item.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutSec3;
