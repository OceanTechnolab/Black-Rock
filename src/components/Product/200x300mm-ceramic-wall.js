"use client";
import { DownloadIcon, EyeIcon } from "@/utils/icon"; 
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SuperHighGlossy from "../../../image/Catalogue/SuperHighGlossy.png"
import Glossy from "../../../image/Catalogue/Glossy.png"
import BookMatch from "../../../image/Catalogue/BookMatch.png"
import Rocker from "../../../image/Catalogue/Rocker.png"
import Terazzo from "../../../image/Catalogue/Terazzo.png"
import Wood from "../../../image/Catalogue/Wood.png"
import Colorato from "../../../image/Catalogue/Colorato.png"
import BasinArt from "../../../image/Catalogue/BasinArt.png"
import Bathware from "../../../image/Catalogue/Bathware.png"
import RemainFlawless from "../../../image/Catalogue/RemainFlawless.png"
import DSeries from "../../../image/Catalogue/3DSeries.png"
import Bookmatch2 from "../../../image/Catalogue/Bookmatch2.png"
import Carving from "../../../image/Catalogue/Carving.png"
import Carving2 from "../../../image/Catalogue/Carving2.png"
import Colorato2 from "../../../image/Catalogue/Colorato2.png"
import Decor from "../../../image/Catalogue/Decor.png"
import Vibrant from "../../../image/Catalogue/Vibrant.png"
import Premium from "../../../image/Catalogue/Premium.png"
import GlossyGrace from "../../../image/Catalogue/GlossyGrace.png"
import Gream from "../../../image/Catalogue/Gream.png"
import Lucia from "../../../image/Catalogue/Lucia.png"
import Matt from "../../../image/Catalogue/Matt.png"
import Rosata from "../../../image/Catalogue/Rosata.png"
import Fab from "../../../image/Catalogue/Fab.png"
import { baseURL } from "../../utils/config";

// Reusable Circular Button Component
const CircularButton = ({ Icon, label, onClick }) => (
  <div
    onClick={onClick} // Use 'onClick' for all actions
    className="circle-animation  w-[90px] h-[90px] rounded-full border-2 border-black-rock-Grey relative cursor-pointer"
    role="button" // For accessibility
    aria-label={label} // Label the button for accessibility
  >
    <div className="absolute inset-0 flex justify-center items-center">
      <div>
        <span className="flex justify-center mb-2">
          <Icon />
        </span>
        <p className="font-gt-regular text-12 mb-0">{label}</p>
      </div>
    </div>
  </div>
);

// Reusable Image Container Component
const ImageContainer = ({ imageSrc, altText }) => (
  <div className="aspect-[300/400] bg-[#D9D9D9] mb-4 relative border border-black ">
    <Image
      src={imageSrc}
      fill
      alt={altText}
      title={altText}
      className="w-full h-full object-cover"
      loading="lazy" // Optimize for lazy loading
    />
  </div>
);

// Download PDF function
const downloadPDF = (pdfUrl) => {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "catalogue.pdf"; // Use a descriptive filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Data array to hold titles, images, and links
const catalogueData = [
  {
    title: "600x1200mm",
    images: [
      {
        imageSrc: `${baseURL}superhighglossy-scaled.webp`,
        altText: "Catalogue Image 1",
        links: [
        //   {
        //     icon: EyeIcon,
        //     label: "View ",
        //     onClick: () =>
        //       window?.open(
        //         "https://drive.google.com/file/d/1heIILDpFLfAFj0Rm8prGXLHgcZzuMRbD",
        //         "_blank"
        //       ), 
        //   },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () =>
              downloadPDF(
                `https://drive.google.com/uc?export=download&id=1sz3-dBdf8UX4Au9LP-YvPiV3YpGVobp7`
              ),
          },
        ],
      },
      {
        imageSrc: `${baseURL}superhighglossy-scaled.webp`, 
        altText: "Catalogue Image 2",
        links: [
        //   {
        //     icon: EyeIcon,
        //     label: "View ",
        //     onClick: () => window.open("https://drive.google.com/file/d/1HyDyk6q-oJ-DmfUVS972Ntduf-t3Pl_j/view?ts=670baa9c", "_blank"), // Define action for view
        //   },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1HyDyk6q-oJ-DmfUVS972Ntduf-t3Pl_j"),
          },
        ],
      },
      {
        imageSrc: SuperHighGlossy, 
        altText: "Catalogue Image 2",
        links: [
        //   {
        //     icon: EyeIcon,
        //     label: "View ",
        //     onClick: () => window.open("https://drive.google.com/file/d/1j7wq_Oi2U_4nHQGdf1PxweUEZfPqujDN/view?ts=670baa9c", "_blank"), // Define action for view
        //   },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1j7wq_Oi2U_4nHQGdf1PxweUEZfPqujDN"),
          },
        ],
      },
    ],
  },
];

// Main Component
const Catalogue2 = () => {
  return (
    <Container className="mb-16">
      {catalogueData.map((item, index) => (
        <>
        <Row className="" key={index}>
          <Col xs={12}>
            <h2 className="mt-16 text-60 leading-[66px] font-ivarRegular uppercase md:mb-6">
              {item.title}
            </h2>
          </Col>

         
        </Row>
        <Row className="g-5">
           {item.images.map((image, imgIndex) => (
            <Col
              md={6}
              lg={4}
              xl={3}
              key={imgIndex}
              className="px-5"
              // className={`${
              //   (imgIndex % 2 !== 0) ? "md:flex md:justify-end" : ""
              // } xs:mb-7 `} // Add justify-end for the second column
            >
              <div className="">
                <ImageContainer
                  imageSrc={image.imageSrc}
                  altText={image.altText}
                />
                <div className="flex md:gap-4 items-center gap-3 justify-content-center">
                  {image.links.map((link, linkIndex) => (
                    <CircularButton
                      key={linkIndex}
                      Icon={link.icon}
                      label={link.label}
                      onClick={link.onClick} // Ensure correct onClick for each action
                    />
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </>
      ))}
    </Container>
  );
};

export default Catalogue2;
