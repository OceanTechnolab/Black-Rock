import Export1 from "@/components/Export/Export1";
import Export2 from "@/components/Export/Export2";
import React from "react";
import AboutSec5 from "@/components/About/AboutSec5";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import ExportPallet from "@/components/Export/ExportPallet";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "Export", active: true }
    ]}
  />
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      <PageJSON_LD name={"Export"} pathName={"export"} />
      <Export1 />
      <Export2 />
      <ExportPallet />
      <AboutSec5 />
    </>
  );
};

export default page;

export const metadata = {
  title: "Export Quality Tiles from Blackrock Porcelano",
  description: `Discover Blackrock Porcelano's premium export quality tiles. Our exquisite range of ceramic and Porcelano tiles is designed for international markets, ensuring superior craftsmanship and style for every project.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/export`,
  },
};