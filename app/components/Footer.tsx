import { FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <section className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
      <div className="p-5">
        <ul>
            <Image className="" src='/levelX.png' width={200} height={200} alt="logo"/>
          <div className="flex gap-4 pb-6">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600"/>
            <FaX className="text-2xl cursor-pointer hover:text-black"/>
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600"/>
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600"/>
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"/>
          </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-2xl pb-4">Product</p>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Defi</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">AI Projects</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">News</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Exchanges</li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-2xl pb-4">Company</p>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">About</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Exchanges</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">News</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">AI Prompt</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Home</li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-white font-bold text-2xl pb-4">Support</p>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Support Portals</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">List of Charts</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">AI Tips</li>
          <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Videos</li>
        </ul>
      </div>
    </section>

    <div className="flex flex-col justify-center items-center text-center p-5">
      <h1 className="text-white font-semibold">
        @2024-2025 All rights reserved
      </h1>
    </div>
    </>
  );
}