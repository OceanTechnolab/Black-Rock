import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import HelpWidget from "@/components/Common/HelpWidget";
// import CustomCursor from "@/components/Cursor/CustomCursor";

const ivarRegular = localFont({
  src: "./fonts/IvarDisplayHydro-Regular.ttf",
  variable: "--font-ivarRegular",
  weight: "400",
});
const GT_Reguler = localFont({
  src: "./fonts/GT-America-Standard-Regular-Trial.otf",
  variable: "--font-gt-reguler",
  weight: "400",
});
const GT_Bold = localFont({
  src: "./fonts/GT-America-Standard-Bold-Trial.otf",
  variable: "--font-gt-bold",
  weight: "700",
});
const GT_Light = localFont({
  src: "./fonts/GT-America-Standard-Light-Trial.otf",
  variable: "--font-gt-light",
  weight: "300",
});
const GT_Medium = localFont({
  src: "./fonts/GT-America-Standard-Medium-Trial.otf",
  variable: "--font-gt-medium",
  weight: "500",
});
const handestonie = localFont({
  src: "./fonts/Handestonie.ttf",
  variable: "--font-handestonie",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title:
    "Blackrock Porcelano | Premium Ceramic & Porcelano Tiles for Every Space",
  description:
    "Discover Blackrock Porcelano's exceptional collection of ceramic and Porcelano tiles. Ideal for floors, walls, kitchens, and bathrooms—where style meets durability.",
  keywords:
    "ceramic tiles, porcelano tiles, flooring, wall tiles, high-quality tiles, wood tiles",
  openGraph: {
    title:
      "Blackrock Porcelano | Premium Ceramic & Porcelano Tiles for Every Space",
    description:
      "Discover Blackrock Porcelano's exceptional collection of ceramic and Porcelano tiles. Ideal for floors, walls, kitchens, and bathrooms—where style meets durability.",
    url: `${NEXT_PUBLIC_WEB_URL}`,
    siteName: "Blackrock Porcelano",
    images: ["/600x1200_Logo.png"],
    locale: "en",
    type: "website",
    width: 1200,
    height: 600,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title:
      "Blackrock Porcelano | Premium Ceramic & Porcelano Tiles for Every Space",
    card: "summary_large_image",
    images: ["/600x1200_Logo.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ivarRegular.variable} ${GT_Reguler.variable} ${GT_Bold.variable} ${GT_Light.variable} ${GT_Medium.variable} ${handestonie.variable} antialiased`}
      >
        <meta
          name="google-site-verification"
          content="uOUGQVvgXD9RRyktm6Xy0rWrRxZ03RhmUQyRHiRO43E"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BG8L9LW4V5"
        ></script>

        <script
          async
          id="googleanalytic"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-BG8L9LW4V5');
              `,
          }}
        />
        {/* <CustomCursor /> */}

        <Header />
        {children}
        <HelpWidget />
        <Footer />
      </body>
    </html>
  );
}
