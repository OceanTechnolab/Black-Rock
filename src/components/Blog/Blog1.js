import { blog } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog1 = () => {
  return (
    <>
      <Container>
        <Row className="md:py-10 py-5">
          <Col xs={12}>
          <h1 className="hidden">Insights & Inspirations The Blackrock Blogs</h1>
            <p className="font-ivarRegular lg:text-[100px] lg:leading-[110px] md:text-[80px] md:leading-[88px] text-40 leading-[48px] uppercase lg:text-start md:text-center xs:text-center">
              Insights & Inspirations The Blackrock
              <span className="lg:inline hidden font-handestonie text-black-rock-Orange text-[130px] leading-[130px] capitalize ms-3">
                Blogs
              </span>
            </p>
            <span className="lg:hidden block text-center font-handestonie text-black-rock-Orange md:text-[130px] md:leading-[130px] text-[72px] leading-[72px] capitalize ms-3">
              Blogs
            </span>
          </Col>
          <Col lg={6}>
            <p className="font-gt-reguler md:text-xl text-sm leading-[22px] lg:text-start md:text-center xs:text-center lg:!mt-0 md:mt-4 xs:mt-4">{`Blackrock’s premium tiles, crafted with precision and elegance, are exported to over 15 countries, bringing exceptional quality and design to projects across the globe`}</p>
          </Col>
        </Row>
        <Row className="md:gap-y-14 gap-y-10">
          {blog?.map((i, index) => {
            return (
              <Col lg={6} key={index + 1}>
                <div className="flex flex-col gap-y-6">
                  <div className="h-[280px] bg-[#D9D9D9] rounded-xl overflow-hidden relative">
                    <Image
                      src={i?.image}
                      fill
                      alt={`${i?.title} Blog Image`}
                      title={i?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Link
                      href={`/blog/${i?.slug}`}
                      className="text-black no-underline"
                      title={i?.title}
                    >
                      <h2 className="text-30 leading-[36px] font-ivarRegular line-clamp-1 hover:underline ">
                        {i?.title}
                      </h2>
                    </Link>

                    <p className="line-clamp-3 text-base leading-[20px] font-gt-reguler">
                      {i?.description}
                    </p>
                    <Link
                      href={`/blog/${i?.slug}`}
                      className="text-black-rock-Orange no-underline text-xl leading-[22px] font-gt-reguler mt-2 cursor-pointer"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Blog1;
