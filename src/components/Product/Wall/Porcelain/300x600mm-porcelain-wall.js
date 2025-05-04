"use client";
import { EyeIcon } from "@/utils/icon";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseURL } from "../../../../utils/config";
import "../../../../styles/product-card.css";

// Component for rendering a single product card
const ProductCard = ({ title, mockupImage, tilesImage, pdfLink }) => {
  return (
    <Col lg={6} className="mb-10 container">
      {/* Image container with mockup and tiles images */}
      <div className="h-[390px] relative rounded-xl mb-3 image-container">
        <div className="image-container-inner">
          <Image
            src={mockupImage}
            fill
            className="object-cover rounded-xl drop-shadow-lg image-1"
            alt={`${title} Mockup`}
            title={`${title} Mockup`}
          />
          <Image
            src={tilesImage}
            fill
            className="object-cover rounded-xl drop-shadow-lg image-2"
            alt={`${title} Tiles`}
            title={`${title} Tiles`}
          />
        </div>
      </div>
      <Row>
        <Col xs={4}>
          {/* Product title and view button */}
          <p className="md:text-[26px] md:leading-[31px] text-lg leading-[22px] font-ivarRegular uppercase">
            {title}
          </p>
          <a href={`${baseURL}${pdfLink}`} target="_blank" rel="noopener noreferrer">
            <div
              className="circle-animation w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer"
              role="button"
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div>
                  <span className="flex justify-center mb-2">
                    <EyeIcon />
                  </span>
                  <p className="font-gt-regular text-12 mb-0 text-black">View</p>
                </div>
              </div>
            </div>
          </a>
        </Col>
        <Col xs={8}>
          {/* Tiles image */}
          <div className="xl:h-[150px] md:h-[100px] h-[150px] relative">
            <Image
              src={tilesImage}
              fill
              className="object-cover rounded-xl drop-shadow-lg bob-animation"
              alt={`${title} Tiles`}
              title={`${title} Tiles`}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

const Catalogue2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            {/* Section title */}
            <h2 className="mt-2 text-50 leading-[66px] font-ivarRegular uppercase md:mb-6">
              300 X 600 MM
            </h2>
          </Col>
        </Row>

        <Row>
          {/* 1. Product cards - First Row */}
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-1-30x60CM-BLACKROCK-E1-1006.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-1-30x60CM-BLACKROCK-E1-1006TILES.jpg"
            pdfLink="elevation-1-30x60cm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-2-30X60CM-BLACKROCK-E24-1467.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-2-30X60CM-BLACKROCK-E24-1467TILES.jpg"
            pdfLink="elevation-2-30x60cm-blackrock.pdf"
          />
        </Row>

        <Row>
          {/* 2. Product cards - Second Row */}
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-2-30X60CM-BLACKROCK-E24-1470.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-2-30X60CM-BLACKROCK-QE24-1470TILES.jpg"
            pdfLink="elevation-2porcelain-300x600mm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-3-30X60CM-BLACKROCK-E34-1665.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-3-30X60CM-BLACKROCK-E34-1665TILES.jpg"
            pdfLink="elevation-3-30x60cm-blackrock.pdf"
          />
        </Row>

        <Row>
          {/* 3. Product cards - Second Row */}
          <ProductCard
            title="GLOSSY & MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-GLOSSY&MATT1-AC-AC6445.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-GLOSSY&MATT1-AC-AC6445HL.jpg"
            pdfLink="glossykitchen30x60cm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-GLOSSY&MATT1-AC-AC6746.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-GLOSSY&MATT1-AC-AC6746HL.jpg"
            pdfLink="blackrock-300x600mm-matt1-ac.pdf"
          />
        </Row>

        <Row>
          {/* 4. Product cards - Second Row*/}
          <ProductCard
            title="MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MASTER-AC-AC-6273.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MASTER-AC-AC-6273HL.jpg"
            pdfLink="blackrock-300x600mm-matt3-ac.pdf"
          />
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MASTER-Tiles.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MASTER-AC-AC-7214HL.jpg"
            pdfLink="elevation-1-30x60cm-blackrock.pdf"
          />
        </Row>

        <Row>
          {/* 5. Product cards - Second Row - Inprogress*/}
          <ProductCard
            title="MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MATT1-AC-AC-7345.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MATT1-AC-AC-7345HL.jpg"
            pdfLink="blackrock-300x600mm-matt1-ac.pdf"
          />
          <ProductCard
            title="MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MATT1-AC-AC7341.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-MATT1-AC-AC7341HL.jpg"
            pdfLink="blackrock-300x600mm-matt2-ac.pdf"
          />
        </Row>

        <Row>
          {/* 5. Product cards - Second Row - Inprogress*/}
          <ProductCard
            title="MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-PASTELCOLOR-AC-MOCHABROWN.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-PASTELCOLOR-AC-RMOCHABROWNHL.jpg"
            pdfLink="blackrock-300x600mm-matt3-ac.pdf"
          />
          <ProductCard
            title="MATT"
            mockupImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-PASTELCOLOR-AC-SKYBLUE.jpg"
            tilesImage="/wall-porcelain/300X600MM/BLACKROCK-300X600MM-PASTELCOLOR-AC-SKYBLUEHL.jpg"
            pdfLink="blackrock-300x600mm-pastelcolor-ac.pdf"
          />
        </Row>

        <Row>
          {/* 5. Product cards - Second Row - Inprogress*/}
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-2PORCELAIN-300X600MM-BLACKROCK-MYSORE-01.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-2PORCELAIN-300X600MM-BLACKROCK-MYSORE-01TILES.jpg"
            pdfLink="elevation-1porcelain-300x600mm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION"
            mockupImage="/wall-porcelain/300X600MM/ELEVATION-3-30X60CM-BLACKROCK-E36-1710.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATION-3-30X60CM-BLACKROCK-E36-1710TILES.jpg"
            pdfLink="elevation-3-30x60cm-blackrock.pdf"
          />
        </Row>

        <Row>
          {/* 6. Product cards - Second Row - Inprogress*/}
          <ProductCard
            title="ELEVATION PLATINUM & VARNISH"
            mockupImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-2-300X600MM-BLACKROCK-GUJARAT301.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-2-300X600MM-BLACKROCK-GUJARAT-301.jpg"
            pdfLink="elevationplatinumvarnish-2-300x600mm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION PLATINUM & VARNISH"
            mockupImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-2-300X600MM-BLACKROCK-HARIDWAR-301.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-2-300X600MM-BLACKROCK-HARIDWAR-301TILES.jpg"
            pdfLink="satinmattkitchen-30x60cm-blackrock.pdf"
          />
        </Row>

        <Row>
          {/* 6. Product cards - Second Row - Inprogress*/}
          <ProductCard
            title="ELEVATION PLATINUM & VARNISH"
            mockupImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-300X600MM-BLACKROCK-CHANFIGARH-302.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-300X600MM-BLACKROCK-CHANFIGARH-302TILES.jpg"
            pdfLink="elevationplatinumvarnish-2-300x600mm-blackrock.pdf"
          />
          <ProductCard
            title="ELEVATION PLATINUM & VARNISH"
            mockupImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-300X600MM-BLACKROCK-CHENNAI-302.jpg"
            tilesImage="/wall-porcelain/300X600MM/ELEVATIONPLATINUM&VARNISH-300X600MM-BLACKROCK-CHENNAI-302TILES.jpg"
            pdfLink="sugar-30x60cm-blackrock.pdf"
          />
        </Row>
      </Container>
    </>
  );
};

export default Catalogue2;
