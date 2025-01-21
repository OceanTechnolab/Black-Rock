import { NEXT_PUBLIC_CDN } from "@/utils/constant";
import React from "react";

const SingleBlogPageJSON_LD = ({ slug }) => {
  return (
    <>
  
      <script
        type="application/ld+json"
        id="application/ld+jsonBlogSBread"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Toolplate",
                item: "https://www.blackrockporcelano.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "blog",
                item: "https://www.blackrockporcelano.com//blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: `https://www.blackrockporcelano.com//blog/${slug}`,
              },
            ],
          }),
        }}
      />
    
    </>
  );
};

export default SingleBlogPageJSON_LD;
