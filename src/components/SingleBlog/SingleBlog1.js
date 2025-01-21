import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SingleBlog1 = ({ data }) => {
  return (
    <Container className="">
      <Row className="xl:px-56 lg:px-20 py-3">
        <Col xs={12}>
          <h1 className="font-ivarRegular lg:text-60 lg:leading-[66px] md:text-[48px] md:leading-[52px] text-28 leading-[30px] text-center uppercase">
            {data?.title}
          </h1>
          <p className="font-gt-reguler my-4 text-center md:text-base text-sm">
            {data?.description}
          </p>
          <div className="h-[376px] bg-[#D9D9D9] rounded-xl overflow-hidden relative">
            <Image
              src={data?.image}
              fill
              alt={`${data?.title} Image`}
              title={data?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:my-10 mt-4">
            {data?.list?.map((i, index) => {
              return (
                <div className="md:my-4 my-2" key={i?.id+2}>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="font-ivarRegular md:text-30 md:leading-[36px] text-24 leading-[28px] capitalize">
                    {i?.id && `${i?.id}.`} {i?.name}
                    </h2>
                    <p className="md:text-lg font-gt-reguler md:leading-[22px] text-sm">
                      {i?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href={"/"}
            className="text-xl leading-[22px] font-gt-reguler text-black-rock-Orange no-underline hover:underline"
            title="GO TO HOME"
          >
            GO TO HOME
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBlog1;
