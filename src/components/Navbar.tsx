import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "#about" },
    { title: "Studio", href: "/studio" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full bg-black text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-20">
        {/* Logo */}
        <Logo title="Anam's Blog" className="text-white text-2xl font-bold" />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="uppercase text-sm font-semibold text-gray-300 hover:text-white transition duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={"https://youtube.com"} target="_blank">
            <BsYoutube className="text-2xl text-gray-400 hover:text-red-500 transition duration-200" />
          </Link>
          <Link href={"https://github.com"} target="_blank">
            <BsGithub className="text-2xl text-gray-400 hover:text-white transition duration-200" />
          </Link>
          <Link href={"https://facebook.com"} target="_blank">
            <BsFacebook className="text-2xl text-gray-400 hover:text-blue-500 transition duration-200" />
          </Link>
          <Link href={"https://instagram.com"} target="_blank">
            <BsInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition duration-200" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <FiMenu className="text-3xl text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
