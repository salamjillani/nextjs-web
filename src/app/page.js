"use client";

import Image from "next/image";
import Head from "next/head";
import { Inter } from "@next/font/google";
import CostEstimator from "../components/CostEstimator";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import ConstructionBanner from "@/components/ConstructionBanner";
import Footer from "@/components/Footer";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${inter.variable} font-sans`}>
      <Head>
        <title>Construction Heating Solutions</title>
        <meta
          name="description"
          content="Enhance your winter construction projects with our advanced heating solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: "url('/image1.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <header className="relative z-10">
          <nav className="container mx-auto">
            <div className="hidden md:flex md:justify-between md:items-center">
              <div className="flex items-center ml-12">
                <Image
                  src="/logoWHITE.png"
                  alt="Logo"
                  width={120}
                  height={50}
                />
              </div>

              <div className="w-px h-20 bg-gray-500 -ml-48"></div>

              <div className="flex items-center space-x-8 mr-12">
                <ul className="flex space-x-8 text-lg text-white">
                  <li>
                    <a href="#home" className="font-bold hover:text-orange-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="font-normal hover:text-orange-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="font-normal hover:text-orange-500"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#project"
                      className="font-normal hover:text-orange-500"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="font-normal hover:text-orange-500"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <button className="bg-[#FF4001] text-white font-bold px-4 py-2">
                  Schedule a Consultation
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex justify-between items-center px-4 py-4">
                <Image
                  src="/logoWHITE.png"
                  alt="Logo"
                  width={120}
                  height={50}
                />
                <button
                  className="text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              <div className={`${isMenuOpen ? "block" : "hidden"} px-4 pb-4`}>
                <ul className="flex flex-col space-y-4 text-lg text-white">
                  <li>
                    <a
                      href="#home"
                      className="font-bold hover:text-orange-500 block"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="font-normal hover:text-orange-500 block"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="font-normal hover:text-orange-500 block"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#project"
                      className="font-normal hover:text-orange-500 block"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="font-normal hover:text-orange-500 block"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <button className="bg-[#FF4001] text-white font-bold px-4 py-2 w-full mt-4">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </nav>

          <div className="w-full h-[1px] bg-gray-500"></div>
        </header>

        <section className="relative z-10 text-center flex max-w-6xl ml-4 md:ml-24 flex-col items-center justify-center min-h-screen text-white px-4 md:px-0">
          <h1 className="text-3xl font-normal md:text-5xl uppercase mb-4">
            ENHANCE YOUR WINTER CONSTRUCTION PROJECTS WITH OUR ADVANCED HEATING
            SOLUTIONS
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-normal">
            Reliable, Powerful, and Eco-friendly Heating Solutions
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#FF4001] text-white px-8 md:px-16 py-2 font-semibold w-full md:w-auto">
              Get a Quote
            </button>
            <button className="text-white px-8 md:px-16 py-2 font-semibold border border-white w-full md:w-auto">
              Learn More
            </button>
          </div>
        </section>
      </div>

      <CostEstimator />
      <About />
      <KeyFeatures />
      <ConstructionBanner />
      <Footer />
    </div>
  );
}
