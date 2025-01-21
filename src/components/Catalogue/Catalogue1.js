import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const content = {
  title: `Explore Blackrock’s`,
  subtitle: `Premium`,
  subtitleHandwritten: `Catalogue`,
  finalLine: `Collections Now`,
  description: `Discover our full range of premium tiles, designed to bring elegance and durability to any space. Browse our collections and find the perfect tiles for your next project.`,
};

const Catalogue1 = () => {
  return (
    <>
      <Container className="lg:my-4 my-2">
        <Row>
          <h1 className="hidden">{content.title} {content.subtitle} {content.subtitleHandwritten}</h1>
          <Col className="md:my-4 my-2" xs={12}>
            <div className="lg:text-start md:text-center xs:text-center">
              <p className="mb-0 font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-[75px] text-[38px] xl:leading-[110px] lg:leading-[88px] leading-[45px] md:leading-[83px] uppercase">
                {content.title}
              </p>
              <p className="mb-0 font-ivarRegular xl:text-[100px] lg:text-[80px] md:text-[75px] text-[38px] xl:leading-[110px] lg:leading-[88px] leading-[45px] md:leading-[83px] uppercase">
                {content.subtitle}
                <span className="lg:inline hidden ms-4 font-handestonie xl:text-[120px] lg:text-[100px] text-[100px] text-black-rock-Orange capitalize">
                  {content.subtitleHandwritten}
                </span>
              </p>
              <p className="md:mb-6 text-center lg:hidden font-handestonie md:text-[120px] md:leading-[115px] text-70 leading-[70px] text-black-rock-Orange capitalize">
                {content.subtitleHandwritten}
              </p>
              <p className="mb-0 -mt-4 font-ivarRegular xl:text-[100px] md:text-[75px] text-[38px] xl:leading-[110px] md:leading-[83px] leading-[45px] uppercase">
                {content.finalLine}
              </p>
            </div>
          </Col>
          <Col lg={8} xl={5}>
            <p className="lg:text-start md:text-center xs:text-center font-gt-reguler md:text-lg text-sm leading-[22px] md:my-4 my-2">
              {content.description}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalogue1;
