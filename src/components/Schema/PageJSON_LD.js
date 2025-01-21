import React from "react";

const PageJSON_LD = ({pathName,name}) => {

  return (
    <>
      <script
        type="application/ld+json"
        id="application/ld+jsonBlog"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Blackrock Porcelano",
                item: "https://www.blackrockporcelano.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: {name},
                item: `https://www.blackrockporcelano.com/${pathName}`,
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default PageJSON_LD;
