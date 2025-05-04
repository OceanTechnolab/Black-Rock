import React from "react";
import WallCollection from "@/components/Product/WallCollection";
import AllProducts from "@/components/Product/AllProducts";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import Wall from "@/components/Product/Wall/Wall";

// Breadcrumb Component
const Breadcrumb = () => (
    <Breadcrumbs
        items={[
            { label: "Home", href: "/", active: false },
            { label: "Products", href: "/products", active: false },
        ]}
    />
);

const page = () => {
    return (
        <>
            {/* Breadcrumb navigation */}
            <Breadcrumb />
            
            {/* Wall collection section */}
            <WallCollection />
            
            {/* All products section */}
            <Wall />
            
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
        canonical: `${NEXT_PUBLIC_WEB_URL}/product`,
    },
};
