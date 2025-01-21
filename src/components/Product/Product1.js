import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductImg from "../../../image/Product/Product1.png";
const Product1 = () => {
  return (
    <Container>
      <Row className="my-3">
        <h1 className="hidden"> Our Luxury Tiles</h1>
        <Col lg={9} xl={9} className="">
          <p className="font-ivarRegular xl:text-[100px] md:text-[78px]  md:leading-[110px] text-[47px] leading-[57px] uppercase lg:text-start md:text-center xs:text-center">
            Our Luxury Tiles, Endless
            <span className=" lg:inline hidden ms-3 font-handestonie xl:text-[130px] text-[100px] xl:leading-[172px] leading-[138px] text-black-rock-Orange  capitalize">
              Possibilities
            </span>
          </p>
          <p className=" mb-0 text-center lg:hidden font-handestonie md:text-[120px] md:leading-[115px] text-70 leading-[70px] text-black-rock-Orange capitalize">
            Possibilities
          </p>
        </Col>
        <Col lg={3} xl={3} className="flex items-end">
          <p className="md:text-lg md:leading-[22px] text-sm lg:text-start md:text-center xs:text-center font-gt-reguler">
            {`Explore a world of luxury tiles crafted to perfection. From timeless classics to contemporary designs, our collections cater to every style and space`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="xl:h-[720px] lg:h-[600px] md:h-[450px] h-[280px] relative xl:!mt-60 md:!mt-20 mt-3 rounded-xl">
            <Image
              src={ProductImg}
              fill
              className="rounded-xl absolute inset-0 flex justify-center items-center object-cover"
              alt="Image"
              title="Image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product1;
