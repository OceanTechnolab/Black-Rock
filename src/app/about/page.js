import AboutSec1 from "@/components/About/AboutSec1";
import AboutSec2 from "@/components/About/AboutSec2";
import AboutSec3 from "@/components/About/AboutSec3";
import AboutSec4 from "@/components/About/AboutSec4";
import React from "react";
import AboutSec5 from "@/components/About/AboutSec5";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "About-Us", active: true }
    ]}
  />
);

const Page = () => {
  return (
    <>
    <Breadcrumb/>
    <PageJSON_LD name={"About"} pathName={"about"}/>
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
      <AboutSec4 />
      <AboutSec5 /> 
    </>
  );
};

export default Page;
export const metadata = {
  title: "About Blackrock Porcelano: Crafting Elegant Tiles",
  description: `Learn more about Blackrock Porcelano, a global leader in ceramic and Porcelano tile manufacturing. Our mission is to deliver high-quality, stylish, and durable tiles for homes and businesses worldwide.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/about`,
  },
};