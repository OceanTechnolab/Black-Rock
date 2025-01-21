import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LetsWorkTogether from "../Common/LetsWorkTogether";
import LetsWork from "./LetWork";

const Contact = () => {
  return (
    <>
      <Container>
        <Row className="md:mb-20 mb-10">
          <h1 className="hidden">Contact us</h1>
          <h2 className="hidden">{`Let's Work Together`}</h2>
          <Col>
            <p className="relative xl:top-[140px] lg:top-[110px] md:top-[80px] top-[40px] text-center font-handestonie lg:text-[200px] md:text-[140px] text-60 xl:leading-[215px] lg:leading-[170px] md:leading-[90px] leading-[45px] text-black-rock-Orange">
              Contact us
            </p>
            <p className="text-center font-ivarRegular xl:text-[132px] lg:text-[120px] md:text-[100px] text-50 lg:leading-[200px] md:leading-[154px] leading-[56px] relative z-10">
              +91 95129 00028
            </p>
            <p className="font-gt-reguler lg:text-xl md:text-lg text-sm xl:leading-[22px] text-center">
              +91 98245 88448
            </p>
            <p className="font-gt-reguler lg:text-xl md:text-lg text-sm xl:leading-[22px] text-center">
              info@blackrockporcelano.com
            </p>
          </Col>
        </Row>
        <LetsWork />
        {/* <Row className="lg:py-20 py-10">
          <Col>
            <div className="lg:h-[475px] md:h-[380px] h-[230px] rounded-xl overflow-hidden relative">
              <iframe
                className="w-full h-full"
                loading="lazy"
                src={`https://maps.google.com/?q=22.81412,70.86765&ie=UTF8&iwloc=&zoom=14&output=embed&t=k`}
              ></iframe>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Contact;
