import React from "react";

const HomePageJSON_LD = () => {
  return (
    <>
      <script
        type="application/ld+json"
        id="application/ld+jsonFAQMain"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Blackrock Porcelano known for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Blackrock Porcelano offers high-quality porcelain, ceramic, and natural stone tiles for residential and commercial spaces.",
                },
              },
              {
                "@type": "Question",
                name: " What types of tiles do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer porcelain, ceramic, natural stone, and mosaic tiles in various styles and finishes.",
                },
              },
              {
                "@type": "Question",
                name: "How durable are Blackrock Porcelano tiles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our tiles are highly durable, scratch-resistant, moisture-resistant, and ideal for high-traffic areas.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        id="application/ld+jsonOrg"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            "@id": "#Organization",
            url: "https://www.blackrockporcelano.com/",
            legalName: "Blackrock Porcelano",
            name: "Blackrock Porcelano",
            description:
              "Discover Blackrock Porcelano's exceptional collection of ceramic and Porcelano tiles. Ideal for floors, walls, kitchens, and bathrooms—where style meets durability.",
            logo: `/600x1200_Logo.png`,
            email: "info@blackrockporcelano.com",
            sameAs: ["https://www.instagram.com/blackrock_Porcelano/"],
          }),
        }}
      />
    </>
  );
};

export default HomePageJSON_LD;
