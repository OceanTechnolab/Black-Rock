import ClientChoose from "@/components/Home/ClientChoose";
import DefiningLuxury from "@/components/Home/DefiningLuxury";
import DownloadCatelog from "@/components/Home/DownloadCatelog";
import Exquisite from "@/components/Home/Exquisite";
import HeroSection from "@/components/Home/HeroSection";
import OurProducts from "@/components/Home/OurProducts";
import ThreeImages from "@/components/Home/ThreeImages";
import HomePageJSON_LD from "@/components/Schema/HomePageJSON_LD";
import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";

export default function Home() {
  return (
    <>
      <HomePageJSON_LD />
      <HeroSection />
      <DefiningLuxury />
      <Exquisite />
      <OurProducts />
      <ThreeImages />
      <ClientChoose />
      <DownloadCatelog />
    </>
  );
}

export const metadata = {
  title: "Blackrock Porcelano: Luxury Ceramic & Porcelano Tile Collections",
  description:
    "Discover Blackrock Porcelano's exceptional collection of ceramic and Porcelano tiles. Ideal for floors, walls, kitchens, and bathrooms—where style meets durability.",
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}`,
  },
};
