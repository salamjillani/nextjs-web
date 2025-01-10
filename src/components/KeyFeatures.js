"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const KeyFeatures = () => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute inset-0">
        <div className="h-full w-full flex">
          <div className="w-[120%] bg-[#363636]"></div>
          <div className="w-1/2 bg-[#424242]"></div>
        </div>
      </div>

      <div className="md:hidden absolute inset-0 bg-[#363636]"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white max-w-lg">
            <h2 className="text-[#FF4001] text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Key Features
            </h2>
            <ul className="space-y-4 md:space-y-0">
              <li className="flex items-start text-lg md:text-xl">
                <div className="h-2 w-2 bg-[#FF4001] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>
                  Thaws up to 6,000 sq ft. or cures up to
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  18,000 sq ft.
                </span>
              </li>
              <li className="flex items-start text-lg md:text-xl">
                <div className="h-2 w-2 bg-[#FF4001] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>
                  Environmentally friendly with low emissions and
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  reduced fuel consumption
                </span>
              </li>
              <li className="flex items-start text-lg md:text-xl">
                <div className="h-2 w-2 bg-[#FF4001] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>
                  Easy to operate with user-friendly controls and
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  automatic temperature regulation
                </span>
              </li>
              <li className="flex items-start text-lg md:text-xl">
                <div className="h-2 w-2 bg-[#FF4001] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>
                  Capable of operating with external
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  temperatures down to -30°C.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/Background.png"
              alt="E3000 Hydronic Heater"
              className="shadow-xl w-full md:w-[640px] h-auto"
              width={640}
              height={480}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
