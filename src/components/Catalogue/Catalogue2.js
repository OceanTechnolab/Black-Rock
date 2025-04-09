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
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () =>
              window?.open(
                "https://drive.google.com/file/d/1heIILDpFLfAFj0Rm8prGXLHgcZzuMRbD",
                "_blank"
              ), 
          },
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
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1HyDyk6q-oJ-DmfUVS972Ntduf-t3Pl_j/view?ts=670baa9c", "_blank"), // Define action for view
          },
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
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1j7wq_Oi2U_4nHQGdf1PxweUEZfPqujDN/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1j7wq_Oi2U_4nHQGdf1PxweUEZfPqujDN"),
          },
        ],
      },
      {
        imageSrc: Glossy, // Replace with actual image source
        altText: "Catalogue Image 3",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1Koxj_7-wHgCK4IyZU7_M2gd9H08NBNQm/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1Koxj_7-wHgCK4IyZU7_M2gd9H08NBNQm"),
          },
        ],
      },
      {
        imageSrc: Wood, // Replace with actual image source
        altText: "Catalogue Image 4",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1g5VAMSFz7DBDWtTrr7FDV4gpL3BUpx7r/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1g5VAMSFz7DBDWtTrr7FDV4gpL3BUpx7r"),
          },
        ],
      },
      {
        imageSrc: Rocker, // Replace with actual image source
        altText: "Catalogue Image 5",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1JHhaZ90SKKP7tBjWClIQ47Met2Z9K5jG/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1JHhaZ90SKKP7tBjWClIQ47Met2Z9K5jG"),
          },
        ],
      },
      {
        imageSrc:Terazzo, // Replace with actual image source
        altText: "Catalogue Image 6",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1I8lKOrMTmBU39u-MVTk82E8W2cx1FU76/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1I8lKOrMTmBU39u-MVTk82E8W2cx1FU76"),
          },
        ],
      },
      {
        imageSrc: BookMatch, // Replace with actual image source
        altText: "Catalogue Image 7",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1Exlr30jJhGqQkVQ6GkkUysWnEDPYaTqx/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1Exlr30jJhGqQkVQ6GkkUysWnEDPYaTqx"),
          },
        ],
      },
      {
        imageSrc: Colorato, // Replace with actual image source
        altText: "Catalogue Image 8",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1VSpgg5O0qJ4hasVmpJuqzMqnn9mu_lUw/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1VSpgg5O0qJ4hasVmpJuqzMqnn9mu_lUw"),
          },
        ],
      },
      {
        imageSrc: RemainFlawless, // Replace with actual image source
        altText: "Catalogue Image 9",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/10eiPgxsKwjgdytz0IcDYu-QhgJDTRi8b/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=10eiPgxsKwjgdytz0IcDYu-QhgJDTRi8b"),
          },
        ],
      },
      {
        imageSrc: RemainFlawless, // Replace with actual image source
        altText: "Catalogue Image 10",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1JnpS1hMKWlRL3pWGtm5J48T4uG3t7qLS/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1JnpS1hMKWlRL3pWGtm5J48T4uG3t7qLS"),
          },
        ],
      },
      {
        imageSrc: RemainFlawless, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1CtG5nvfvrAqM0cVyp_BtK03sHuiYEpiZ/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1CtG5nvfvrAqM0cVyp_BtK03sHuiYEpiZ"),
          },
        ],
      },
      {
        imageSrc: DSeries, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1QsCS70DBFWuQ37XLqfISJNJiBaKdyqcv/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1QsCS70DBFWuQ37XLqfISJNJiBaKdyqcv"),
          },
        ],
      },
      {
        imageSrc: Bookmatch2, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1aw4umpeohCH2pY3-LT0a2nobGJpeJNGl/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1aw4umpeohCH2pY3-LT0a2nobGJpeJNGl"),
          },
        ],
      },
      {
        imageSrc: Carving, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1uFCZh0ks_n0baAtQCDPjQyB3uBlyYKxE/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1uFCZh0ks_n0baAtQCDPjQyB3uBlyYKxE"),
          },
        ],
      },
      {
        imageSrc: Carving, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1Wrm3Y9SE7CJjmkecjia2KckZ47GTxahj/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1Wrm3Y9SE7CJjmkecjia2KckZ47GTxahj"),
          },
        ],
      },
      {
        imageSrc: Carving, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1i_4tg83lbpx7_gU0OgSMrjHwnONfSEIh/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1i_4tg83lbpx7_gU0OgSMrjHwnONfSEIh"),
          },
        ],
      },
      {
        imageSrc: Colorato2, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1GAsiq7xmmpjYNPACbgP_pjN1CJWujrF_/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1GAsiq7xmmpjYNPACbgP_pjN1CJWujrF_"),
          },
        ],
      },
      {
        imageSrc: Colorato2, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1wabNL9eXZmnkvX3AkD8eZcwCpZrzhmdp/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1wabNL9eXZmnkvX3AkD8eZcwCpZrzhmdp"),
          },
        ],
      },
      {
        imageSrc: Decor, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1qEQex-IBlAUJZJIOk8OqJNP4K2ucPj1T/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1qEQex-IBlAUJZJIOk8OqJNP4K2ucPj1T"),
          },
        ],
      },
    ],
  },
  {
    title: "800x1600mm",
    images: [
      {
        imageSrc: Vibrant, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1_J4NSzJNLtUoinaxAT8B3TkwfhfyQPou/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1_J4NSzJNLtUoinaxAT8B3TkwfhfyQPou"),
          },
        ],
      },
      {
        imageSrc: Premium, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1lmcrMm5jDt6AXeuziR6GMBr3MQW7wWRa/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1lmcrMm5jDt6AXeuziR6GMBr3MQW7wWRa"),
          },
        ],
      },
      {
        imageSrc: GlossyGrace, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1xW9cGl4Pi3xtfj2fLo6dmgugIvINVzO5/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1xW9cGl4Pi3xtfj2fLo6dmgugIvINVzO5"),
          },
        ],
      },
      {
        imageSrc: Gream, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1YaIuxNBC5yDWzLgN0aqmtAjZbOwXrXUt/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1YaIuxNBC5yDWzLgN0aqmtAjZbOwXrXUt"),
          },
        ],
      },
      {
        imageSrc: Lucia, // Replace with actual image source
        altText: "Catalogue Image 11",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1UBSmTBHqYBBSet5RUWXIBG31DKCwHEY/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1UBSmTBHqYBBSet5RUWXIBG31DKCwHEY"),
          },
        ],
      },
    ],
  },
  {
    title: "1200X1800MM",
    images: [
      {
        imageSrc: Carving2, // Replace with actual image source
        altText: "Catalogue Image 12",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/19G18ffgGQCvGmJD8q-GkZ20dzl6Fnm3A/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=19G18ffgGQCvGmJD8q-GkZ20dzl6Fnm3A"),
          },
        ],
      },
      {
        imageSrc: Matt, // Replace with actual image source
        altText: "Catalogue Image 13",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1dBg-peL5UhgyVC5c0l46yT4qReaEw3KF/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1dBg-peL5UhgyVC5c0l46yT4qReaEw3KF"),
          },
        ],
      },
      {
        imageSrc: Fab, // Replace with actual image source
        altText: "Catalogue Image 14",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1tAeHIX56o9ZPH2cBs1MEb0OLUhf6QOut/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1tAeHIX56o9ZPH2cBs1MEb0OLUhf6QOut"),
          },
        ],
      },
      {
        imageSrc: Rosata, // Replace with actual image source
        altText: "Catalogue Image 14",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1V5h-ZsTK_cxRZAcHjZVn-pvhGwdBOTGV/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1V5h-ZsTK_cxRZAcHjZVn-pvhGwdBOTGV"),
          },
        ],
      }
    ],
  },
  {
    title: "Premium Collection",
    images: [
      {
        imageSrc: Bathware, // Replace with actual image source
        altText: "Catalogue Image 12",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1xTMD4TpUxEUQK2-UahtVXgvigeJgf3j-/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1xTMD4TpUxEUQK2-UahtVXgvigeJgf3j-"),
          },
        ],
      },
      {
        imageSrc: Bathware, // Replace with actual image source
        altText: "Catalogue Image 13",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1J7_fqcb2vJfr2qYl4q1CIxW6Gj_NDAUU/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1J7_fqcb2vJfr2qYl4q1CIxW6Gj_NDAUU"),
          },
        ],
      },
      {
        imageSrc: BasinArt, // Replace with actual image source
        altText: "Catalogue Image 14",
        links: [
          {
            icon: EyeIcon,
            label: "View ",
            onClick: () => window.open("https://drive.google.com/file/d/1DhI73YPnffzam_CfQhCiNFAkbFrHvlC8/view?ts=670baa9c", "_blank"), // Define action for view
          },
          {
            icon: DownloadIcon,
            label: "Download ",
            onClick: () => downloadPDF("https://drive.google.com/uc?export=download&id=1DhI73YPnffzam_CfQhCiNFAkbFrHvlC8"),
          },
        ],
      }
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
            <h2 className="mt-2 text-50 leading-[66px] font-ivarRegular uppercase md:mb-6">
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
                <div className="flex md:gap-4 items-center gap-3 ">
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
