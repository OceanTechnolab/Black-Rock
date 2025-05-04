import Contact from "@/components/Contact/Contact";
import PageJSON_LD from "@/components/Schema/PageJSON_LD";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import React from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const Breadcrumb = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/", active: false },
      { label: "Contact-Us", active: true }
    ]}
  />
);

const page = () => {
  return (
    <>
      <Breadcrumb />
      <PageJSON_LD name={"Contact"} pathName={"contact"} />
      <Contact />
    </>
  );
};

export default page;
export const metadata = {
  title: "Contact Us | Blackrock Porcelano - Inquiries & Support",
  description: `Have questions or need assistance? Contact Blackrock Porcelano today. Reach out to us for product inquiries, support, or collaboration opportunities.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/contact`,
  },
};
