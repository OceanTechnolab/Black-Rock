"use client";
import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const RandomArcsGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    // if (typeof window === "undefined") return;
    // Generate random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ],
    }));

    const globe = Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .arcsData(arcsData)
      .arcColor("color")
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 4000 + 500)(globeRef.current);

    // Update the globe on window resize
    const updateGlobeSize = () => {
      const width = globeRef.current.offsetWidth;
      const height = globeRef.current.offsetHeight;
      globe.width(width).height(height);
    };

    // window.addEventListener("resize", updateGlobeSize);
    updateGlobeSize(); // Set initial size

    return () => {
      //   globe.dispose(); // Clean up globe instance
      // window.removeEventListener("resize", updateGlobeSize); // Clean up event listener
    };
  }, []);

  return <div ref={globeRef} className="w-full relative md:h-[500px]" />;
};

export default RandomArcsGlobe;
