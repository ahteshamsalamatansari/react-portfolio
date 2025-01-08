import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 px-8 relative border-to">
      <div className="absolute inset-0 md:flex justify-center items-center z-0 hidden">
        <h3 className="font-sans text-xs text-center">Copyright © 2025 AS</h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-sans text-xs">Made with ❤ and ☕ by Ahtesham Salamat Ansari </h3>
        <div className="flex items-center gap-2 z-10">
          <a  href="#"><FaFacebookF className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="#"><FaLinkedinIn className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="#"><FaGithub className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="#"><FaInstagram className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="#"><FaTwitter className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
