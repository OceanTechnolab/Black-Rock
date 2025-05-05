import React from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import GvtPgvt from "@/components/Product/GVT-PGVT/GvtPgvt";
import WallCollection from "@/components/Product/WallCollection";

// Breadcrumb Component
const Breadcrumb = () => (
    <Breadcrumbs
        items={[
            { label: "Home", href: "/", active: false },
            { label: "Products", href: "/products", active: false },
            { label: "GVT & PGVT Collections", href: "/gvt-pgvt", active: true },
        ]}
    />
);

const page = () => {
    return (
        <>
            {/* Breadcrumb navigation */}
            <Breadcrumb />

            <WallCollection />
                       
            <GvtPgvt />
            
            <hr />
        </>
    );
};

export default page;

// Metadata for SEO and social sharing
export const metadata = {
    title: "Explore Glossy, Matte, and High-Glossy Tiles at Blackrock",
    description: `Browse Blackrock Porcelano’s wide selection of tiles, including Glossy, Matt, and High Glossy finishes. Perfect for floors, walls, kitchens, and bathrooms, combining style and durability.`,
    alternates: {
        canonical: `${NEXT_PUBLIC_WEB_URL}/product/wall`,
    },
};
