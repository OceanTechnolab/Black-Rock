import Catalogue1 from '@/components/Catalogue/Catalogue1'
import Catalogue2 from '@/components/Catalogue/Catalogue2'
import PageJSON_LD from '@/components/Schema/PageJSON_LD'
import { NEXT_PUBLIC_WEB_URL } from '@/utils/constant'
import React from 'react'
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "Catalouge", active: true }
    ]}
  />
);

const page = () => {
  return (
    <>
    <Breadcrumb />
     <PageJSON_LD name={"Catalogue"} pathName={"catalogue"}/>
    <Catalogue1/>
    <Catalogue2/>
    </>
  )
}

export default page

export const metadata = {
  title: "Blackrock Porcelano Tile Catalog: Explore Our Full Range",
  description: `Explore the complete tile catalogue from Blackrock Porcelano. Discover a variety of styles and finishes, including Glossy, Matt, and High Glossy tiles for every space.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/catalogue`,
  },
};