import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-[20vh] bg-theme-gray-700 ">
      <Image src="/images/Logo.png" alt="Logo" width={120} height={100} />
    </div>
  );
};

export default Hero;
