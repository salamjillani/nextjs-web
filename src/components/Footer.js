"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#424242] text-white py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 mt-4 sm:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#FF4001] p-3 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="font-normal">contact@emergen.io</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#FF4001] p-3 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="font-normal">+90 000000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#FF4001] p-3 rounded-full mb-7">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="font-normal">
                  ABC Residency Street#34, Country <br /> City
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 sm:mb-6">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-normal hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-normal hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-normal hover:text-orange-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-normal hover:text-orange-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-normal hover:text-orange-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 sm:mb-6">Socials</h3>
            <div className="flex gap-3 mb-6 sm:mb-8 justify-center md:justify-start">
              <Link href="#" className="text-[#FF4001]">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="text-[#FF4001]">
                <InstagramIcon />
              </Link>
              <Link href="#" className="text-[#FF4001]">
                <FaFacebook size={24} />
              </Link>
            </div>

            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Newsletter
            </h3>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-8 sm:px-12 py-2 bg-white text-gray-800 placeholder:translate-x-[-1rem] sm:placeholder:translate-x-[-2rem] placeholder:text-gray-500"
              />
              <button className="bg-[#FF4001] px-2 py-2 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="border-t border-gray-500 pt-2 text-center font-bold">
          <p>Copyright © Emergen Pvt Limited - 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
