import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black text-gray-100 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Logo title="Anam&apos;s Blog" className="text-white text-2xl font-bold" />
            <p className="text-gray-400 mt-2 text-sm">
              Sharing knowledge, inspiration, and ideas for growth.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg">Follow Me</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FiFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FiTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Anam&apos;s Blog. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
