"use client";
import Image from "next/image";

const ConstructionBanner = () => {
  return (
    <div className="relative w-full h-[100px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <Image
        src="/CB.png"
        alt="Construction site workers"
        fill
        className="grayscale object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
    </div>
  );
};

export default ConstructionBanner;
