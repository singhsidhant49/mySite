'use client';

import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TfiEmail, TfiFacebook, TfiInstagram, TfiLinkedin, TfiLocationPin, TfiTwitter } from 'react-icons/tfi';
import sherologo from "../../public/logos.webp"
import { BiPhoneCall } from 'react-icons/bi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavTabs from './NavTabs';
import Image from 'next/image';


const Navbar = ({ navLinks }) => {
  const pathname = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <nav className="shadow-md w-full flex flex-wrap justify-between items-center bg-blue-600 font-bold  text-white gap-5 p-6">
        <Link href="/" className=" flex gap-2">
        <div className="w-28 h-auto">
            <Image
              src={sherologo}
              alt="Shero incorp"
              layout="responsive"
              width={120}
              height={80}
              className="mr-3"
            />
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">INCROP PVT LTD</span>
        </Link>

        <div className="flex items-center">
          <div className="bg-cyan-500 h-8 w-8 flex justify-center items-center rounded mx-1">
            <Link target='_blank' href='https://www.facebook.com/SheroIncorp' aria-label="Facebook"><TfiFacebook className="cursor-pointer" /></Link>
          </div>
          <div className="bg-red-500  h-8 w-8 flex justify-center items-center rounded mx-1">
            <Link target='_blank' href='https://www.instagram.com/sheroincorp/' aria-label="Instagram"><TfiInstagram fontSize={20} className="cursor-pointer" /></Link>
          </div>
          <div className="bg-purple-500 h-8 w-8 flex justify-center items-center rounded mx-1">
            <Link target='_blank' href='https://twitter.com/singhsidhant338' aria-label="Twitter"><TfiTwitter fontSize={20} className="cursor-pointer" /></Link>
          </div>
          <div className="bg-orange-600 h-8 w-8 flex justify-center items-center rounded mx-1">
            <Link target='_blank' href='https://www.linkedin.com/company/shero-incorp-pvt-ltd/' aria-label="LinkedIn"><TfiLinkedin fontSize={20} className="cursor-pointer" /></Link>
          </div>
          <div className="bg-green-400 h-8 w-8 flex justify-center items-center rounded mx-1">
            <Link target="_blank" href="https://wa.me/919456533619" aria-label="Whatsapp"><FaWhatsapp fontSize={20} className="cursor-pointer" /></Link>
          </div>

        </div>

        <div className="flex gap-4  md:gap-8  flex-wrap">

          <div className="flex items-center gap-5  md:gap-8">
            <TfiLocationPin fontSize={25} className="cursor-pointer" />
            <p> <span className="text-xs">Our Address</span> <br /> Dehradun </p>
            <div className="border-l-2 border-gray-400 h-10" />
          </div>
          <div className="flex items-center gap-5 md:gap-8">
            <BiPhoneCall fontSize={25} className="cursor-pointer" />
            <p> <span className="text-xs">Reach Us</span> <br /><Link href="https://wa.me/919456533619">+91 9456533619</Link></p>
            <div className="border-l-2 border-gray-400 h-10" />
          </div>
          <div className="flex items-center gap-5 md:gap-8">
            <TfiEmail fontSize={25} className="cursor-pointer" />


            <p> <span className="text-xs">Email Us At</span><br /><Link href="mailto:info@sheroincorp.com">info@sheroincorp.com</Link></p>
          </div>
        </div>
      </nav>

      <nav className="sticky top-0 w-full bg-slate-50 z-20">
        <div className="w-full flex flex-row justify-between items-center shadow-md p-6">
          <HiMenu fontSize={40} className="cursor-pointer flex md:hidden" onClick={() => setToggleSidebar(true)} />

          <ul className="hidden md:flex flex-row font-medium mt-0 ml-5 space-x-5 text-sm w-full item-center">
            {navLinks.map((link, index) => {

              const isActive = pathname === link.href;
              return (
                <li key={index}>
                  <NavTabs isActive={isActive} name={link.name} url={link.href} />
                </li>
              );
            })}

          </ul>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in top-0">
            <div className="absolute w-full flex justify-end items-center p-2 ">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar />
          </div>
        )}
      </nav>
    </>
  );
};

export const Sidebar = () => (
  <div className="flex flex-col justify-between bg-white  overflow-y-scroll min-w-210 hide-scrollbar">
    <Link href="/" className="flex px-5 gap-2 my-6 pt-1 items-center">
    <Image width={120} height={80} src={sherologo} alt="Shero incorp" className=" mr-3" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">INCORP</span>
    </Link>
    <ul className="space-y-2 font-medium">
      <li>
        <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
          <span className="ml-3">HOME</span>
        </Link>
      </li>
      <li>
        <Link href="/aboutus" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">ABOUT US</span>

        </Link>
      </li>
      <li>
        <Link href="/services" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">SERVICES</span>
        </Link>
      </li>
      <li>
        <Link href="/portfolio" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" /></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">PORTFOLIO</span>
        </Link>
      </li>
      <li>
        <Link href="/contact" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">CONTACT US</span>
        </Link>
      </li>
      <li>
        <Link href="https://wa.me/+919456533619" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
          <span className="flex-1 ml-3 whitespace-nowrap">GET FREE QUOTE</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
