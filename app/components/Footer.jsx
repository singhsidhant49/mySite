'use client';
'use client'
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from 'react-icons/fa';
import { TfiEmail, TfiFacebook, TfiInstagram, TfiLinkedin, TfiLocationPin, TfiTwitter } from "react-icons/tfi";
import sherologo from "../../public/logos.webp"
import Image from "next/image";


const Footer = () => (
  <footer name="footer">
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2 ">
            <div className="mb-4 lg:-mt-2">
              <Link href="/" className="flex items-center ">
          <Image width={120} height={80} src={sherologo} alt="Shero incorp" className=" mr-3" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">INCROP PVT LTD</span>
              </Link>
            </div>
            <p className="mb-6 text-gray-500 sm:pr-8">A Trusted Partner for Customized Development and Marketing Services to Maximize Your Business&apos;s Potential.</p>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white h-8 w-8 flex justify-center items-center rounded mx-1">
                <Link target="_blank" href='https://www.facebook.com/SheroIncorp' aria-label="Facebook"><TfiFacebook className="cursor-pointer" /></Link>
              </div>
              <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded mx-1">
                <Link target="_blank" href='https://www.instagram.com/sheroincorp/' aria-label="Instagram"><TfiInstagram fontSize={20} className="cursor-pointer" /></Link>
              </div>
              <div className="bg-purple-500 text-white h-8 w-8 flex justify-center items-center rounded mx-1">
                <Link target="_blank" href='https://twitter.com/singhsidhant338' aria-label="Twitter"><TfiTwitter fontSize={20} className="cursor-pointer" /></Link>
              </div>
              <div className="bg-orange-600 text-white  h-8 w-8 flex justify-center items-center rounded mx-1">
                <Link target="_blank" href='https://www.linkedin.com/company/shero-incorp-pvt-ltd/' aria-label="Linkedin"><TfiLinkedin fontSize={20} className="cursor-pointer" /></Link>
              </div>
              <div className="bg-green-500 text-white h-8 w-8 flex justify-center items-center rounded mx-1">
                <Link target="_blank" href="https://wa.me/919456533619" aria-label="Whatsapp"><FaWhatsapp fontSize={20} className="cursor-pointer" /></Link>
              </div>

            </div>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">SERVICES</div>
            <nav className="flex flex-col gap-4">
              <div>
                <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">CUSTOM SOFTWARE DEVELOPMENT</Link>
              </div>

              <div>
                <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">WEBSITE DEVELOPMENT</Link>
              </div>
              <div>
                <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">SERACH ENGINE OPTIMIZATION</Link>
              </div>
              <div>
                <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">DIGITAL MARKETING</Link>
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">NAVIGATIONS</div>
            <nav className="flex flex-col gap-4">
              <div>
                <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">HOME</Link>
              </div>
              <div>
                <Link href="/aboutus" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">ABOUT</Link>
              </div>
              <div>
                <Link href="/services" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">SERVICES</Link>
              </div>
              <div>
                <Link href="/portfolio" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">PORTFOLIO</Link>
              </div>

              <div>
                <Link href="/contact" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">CONTACT US</Link>
              </div>
            </nav>
          </div>
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">CONTACT US</div>
            <div className="flex gap-4   flex-wrap">
              <div className="flex items-center gap-5  md:gap-8">
                <TfiLocationPin fontSize={25} className="cursor-pointer" />
                <p className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"> <span className="text-xs">Our Address</span> <br />12 Shastri Nagar Dehradun, India </p>
              </div>
              <div className="flex items-center gap-5 md:gap-8">
                <BiPhoneCall fontSize={25} className="cursor-pointer" />
                <p className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"> <span className="text-xs">Reach Us Call/whatsaap</span> <br /> <a href="https://wa.me/919456533619">+91 9456533619</a></p>
              </div>
              <div className="flex items-center gap-5 md:gap-8">
                <TfiEmail fontSize={25} className="cursor-pointer" />
                <p className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"> <span className="text-xs">Email Us At</span><br /><a href="mailto:info@sheroincorp.com">info@sheroincorp.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-8 text-center text-sm  text-gray-800">© 2023 - SHERO INCORP PVT LTD. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  </footer>
);

export default Footer;
